domReady((): void => {
	const header: HTMLElement = first('.js-site-header');

	for(let element of $q('.js-hide')){
		hide(element);
	}

	for(let element of $q('.js-show')){
		show(element);
	}

	$q("a[href^='#']:not(.bound)").forEach((element: HTMLAnchorElement): void => {
		const href: string = trim(element.href);

		if(!href.startsWith('#')){
			return;
		}

		const url: string = location.href.split('#', 1)[0];

		if(href === '#'){
			element.href = url;
			return;
		}

		const anchor: HTMLElement = first(`a[name="${href.substring(1)}"], ${href}`);

		if(!anchor){
			return;
		}

		if(href !== element.href){
			element.href = url + href;
		}

		if(header){
			responsiveScrollOffset(anchor, calcScrollOffset(header));
		}
	});

	if(header){
		const headerOffset = calcScrollOffset(header);
		
		$q('.js-scroll-offset').forEach(
			(element: HTMLElement): HTMLElement => responsiveScrollOffset(element, headerOffset)
		);

		setLoadedPageOffset(headerOffset);
	}

	const alerts: Array<HTMLElement> = $q('.js-alert');

	if(alerts){
		alerts.forEach((alert: HTMLElement): void => {
			const close = first('.js-close', alert);

			if(alert.dataset.delay === '1'){
				setTimeout(() => fadeIn(alert, 800), 4500);
			}

			if(close){
				close.addEventListener('click', (event: MouseEvent): void => {
					event.preventDefault();
					fadeOut(alert, 800);
				});
			}
		});
	}

	const cookieNotice: HTMLElement = first('.js-cookie-notice');

	if(cookieNotice){
		new Privacy(cookieNotice).init();
	}
});
