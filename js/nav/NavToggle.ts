class NavToggle{
	readonly main: HTMLElement;
	public button: HTMLElement;
	readonly activeClass: string;

	constructor(main: HTMLElement, activeClass: string){
		this.main = main;
		this.button = NavToggle.getButton();
		this.activeClass = activeClass;
	}

	static getButton(): HTMLElement{
		return first('.js-nav-toggle');
	}

	static isMobile(): boolean{
		return getComputedStyle(NavToggle.getButton()).display !== 'none';
	}

	toggleClasses(): void{
		if(this.button.classList.contains(this.activeClass)){
			this.button.classList.remove(this.activeClass);
			this.main.classList.remove(this.activeClass);
			ariaExpanded(ariaHidden(this.main, true), false);
		}else{
			this.button.classList.add(this.activeClass);
			this.main.classList.add(this.activeClass);
			ariaExpanded(ariaHidden(this.main, false), true);
		}
	}

	init(): this{
		this.button.addEventListener(
			'click',
			(event: MouseEvent): void => this.toggleClasses()
		);

		return this;
	}
}
