class Privacy{
	public types: {[index: string]: string} = {
		analytics: 'analytics',
		targeting: 'targeting',
		functional: 'functional',
		necessary: 'necessary',
	};
	protected form: HTMLFormElement;
	protected notice: HTMLElement;

	constructor(notice: HTMLElement){
		this.notice = notice;
		this.form = notice.querySelector('form');
	}

	protected title(type: string): string{
		return `allowed_cookies_${this.types[type]}`;
	}

	protected setListeners(): this{
		// @ts-ignore
		this.form.addEventListener('submit', (event: SubmitEvent): void => {
			if(!event.submitter){
				return;
			}

			event.preventDefault();
			const types = Object.values(this.types);

			// @ts-ignore
			switch(event.submitter.value){
				case 'allow':
					this.sendEvent();
					types.forEach((key: string): void => Cookies.set(
						this.title(key),
						1,
						Cookies.yearInSeconds
					));

					break;

				case 'disable':
					types.forEach((key: string): void => Cookies.delete(this.title(key)));

					break;
			}

			fadeOut(this.notice, 800);
		});

		return this;
	}

	protected sendEvent(): this{
		// @ts-ignore
		if(typeof dataLayer !== 'undefined'){
			// @ts-ignore
			dataLayer.push({event: 'allowed_cookies'});
		}

		return this;
	}

	public init(): this{
		return this.setListeners();
	}
}
