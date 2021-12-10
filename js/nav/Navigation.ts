class Navigation {
	protected mainNav: HTMLElement;
	protected activeClass: string;
	protected nav: HTMLElement;
	protected toggle: NavToggle;
	protected submenu: SubNavigation;

	constructor(navigation: HTMLElement) {
		this.mainNav = first('.js-main-navigation');
		this.activeClass = 'active';
		this.nav = navigation;
		this.toggle = new NavToggle(this.mainNav, this.activeClass).init();
		this.submenu = new SubNavigation(this.nav).init();
	}

	load(): void {
		const isMobile: boolean = NavToggle.isMobile();

		if (isMobile) {
			ariaHidden(this.toggle.button, false);
		} else {
			ariaHidden(this.toggle.button, true);
		}
	}

	init(): void {
		addListeners(window, 'load resize', (): void => this.load());
	}
}
