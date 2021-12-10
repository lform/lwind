class SubNavigation {
	protected navigation: HTMLElement;
	protected class: { submenu: string; menu: string; active: string };
	readonly allMenus: Array<HTMLElement>;
	protected header: HTMLElement;
	readonly menus: Array<HTMLElement>;

	constructor(navigation: HTMLElement) {
		this.navigation = navigation;
		this.class = {
			menu: '.js-has-submenu',
			submenu: '.js-submenu',
			active: 'active'
		};
		this.allMenus = $q(this.class.menu, navigation);
		this.header = first('.js-site-header');
		this.menus = NavToggle.isMobile()
			? this.allMenus
			: $q(`${this.class.menu}[data-lvl="0"]`, navigation);
	}

	init(): this {
		for (let parent of this.allMenus) {
			const anchor: HTMLElement | null = first('.js-nav-link', parent);

			if (!anchor) {
				continue;
			}

			anchor.addEventListener('click', (event: MouseEvent): void => {
				event.preventDefault();
				this.toggle(event, parent);
			});
		}

		document.addEventListener('click', (event: MouseEvent) => {
			if (
				// @ts-ignore
				!this.navigation.contains(event.target) &&
				!NavToggle.isMobile()
			) {
				for (let menu of this.allMenus) {
					this.close(menu);
				}
			}
		});

		addListeners(window, 'load resize', (): this => this.offset());
		addListeners(window, 'load resize keypress', (): void => {
			const isMobile: boolean = NavToggle.isMobile();

			for (let menu of this.menus) {
				const submenu = first(this.class.submenu, menu);

				if (!submenu) {
					continue;
				}

				if (!isMobile && parseInt(submenu.dataset.lvl) <= 1) {
					this.hide(submenu);
				}
			}
		});

		return this;
	}

	offset(): this {
		if (!this.header) {
			return this;
		}

		$q(this.class.submenu, this.navigation).forEach((menu) => {
			if (menu.dataset.lvl !== '1') {
				return;
			}

			menu.style.top = NavToggle.isMobile()
				? ''
				: pxToRem(this.header.getBoundingClientRect().bottom);
		});

		return this;
	}

	hide(element: HTMLElement): this {
		element.parentElement.classList.remove(this.class.active)

		if (element.parentElement.hasAttribute('open')) {
			setTimeout(function (): void {
				element.parentElement.removeAttribute('open');
			}, NavToggle.isMobile() ? 0 : 400);
		}

		return this;
	}

	show(element: HTMLElement): this {
		element.parentElement.classList.add(this.class.active)

		if (!element.parentElement.hasAttribute('open')) {
			element.parentElement.setAttribute('open', '');
		}

		return this;
	}

	close(element: HTMLElement): HTMLElement {
		$q(
			(NavToggle.isMobile() ? '' : '[data-lvl="1"]') + this.class.submenu,
			element
		).forEach((submenu: HTMLElement): this => this.hide(submenu));

		return element;
	}

	toggle(event: MouseEvent, parent: HTMLElement): this {
		const submenu: HTMLElement | null = first(this.class.submenu, parent);

		if (!submenu) {
			return this;
		}

		if (submenu.parentElement.hasAttribute('open')) {
			return this.hide(submenu);
		}

		this.show(submenu);

		for (let menu of this.allMenus) {
			if (menu === parent || menu.dataset.lvl !== parent.dataset.lvl) {
				continue;
			}

			this.close(menu);
		}

		return this;
	}
}
