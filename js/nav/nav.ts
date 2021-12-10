domReady((): void => {
	$q('.js-navigation').forEach((nav: HTMLElement): void => new Navigation(nav).init());
});
