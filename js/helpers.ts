/*
 * ===========
 * DOM Helpers
 * ===========
 */
function domReady(callback: Function): void {
	document.addEventListener('readystatechange', (event): void => {
		//@ts-ignore
		if (event.target.readyState === 'complete') {
			callback();
		}
	});
}

/*
 * ============
 * TYPE HELPERS
 * ============
 */
function isScalar(data: any): boolean {
	return ['boolean', 'number', 'string'].includes(typeof data);
}

/*
 * ================
 * # STRING HELPERS
 * ================
 */
function trim(string: string): string {
	string.replace(/^\s+|\s+$/g, '');

	return string;
}

/**
 * Converts kebab-case to camelCase
 */
function toCamel(string: string): string {
	string.replace(/(-[a-z])/g, ($1) => {
		return $1.toUpperCase().replace('-', '');
	});

	return string;
}

/**
 * Converts camelCase to kebab-case
 */
function toDash(string: string): string {
	string.replace(/([A-Z])/g, ($1) => {
		return '-' + $1.toLowerCase();
	});

	return string;
}

/**
 * Converts CamelCase to snake_case
 */
function toUnderscore(string: string): string {
	string.replace(/([A-Z])/g, ($1) => {
		return '_' + $1.toLowerCase();
	});

	return string;
}

/*
 * ===========
 * URL HELPERS
 * ===========
 */
function isSSL(): boolean {
	return location.protocol === 'https:'
}

/*
 * ==============
 * NUMBER HELPERS
 * ==============
 */

let emBase = 16;
let remBase = emBase;

function pxToEm($length: number): string {
	return `${($length / emBase).toString()}em`;
}

function pxToRem($length: number): string {
	return `${($length / remBase).toString()}rem`;
}

function calcTimeout(timeout: number): number {
	return timeout * 0.001;
}

/*
 * ===============
 * # EVENT HELPERS
 * ===============
 */

/**
 * @callback callback
 */

function addListeners(
	element: HTMLElement | any,
	events: string | Array<string>,
	callback: any,
	options: boolean = false,
): HTMLElement | any {
	for (let event of typeof events === 'string' ? events.split(' ') : events) {
		element.addEventListener(event, callback, options);
	}

	return element;
}

/*
 * =================
 * # ELEMENT HELPERS
 * =================
 */

function getById(id: string, context?: HTMLElement): HTMLElement {
	// @ts-ignore
	return (context || document).getElementById(id);
}

function getByClass(classes: string, context?: HTMLElement): HTMLCollectionOf<Element> {
	return (context || document).getElementsByClassName(classes);
}

function $q(selectors: string, context?: HTMLElement): Array<HTMLElement> {
	let items = (context || document).querySelectorAll(selectors);
	// @ts-ignore
	return Array.from(items);
}

function first(selectors: string, context?: HTMLElement): HTMLElement | null {
	return (context || document).querySelector(selectors);
}

function attribute(element: HTMLElement, attribute: string, value?: string): HTMLElement | null | string {
	if (value === null) {
		return element.getAttribute(attribute);
	}

	element.setAttribute(attribute, value);

	return element;
}

function isOnScreen(element: HTMLElement, offset: number, mode: string): boolean {
	offset = offset || 0;
	mode = mode || 'visible';

	const rect = this[0].getBoundingClientRect(),
		viewHeight = Math.max(this.height(), window.innerHeight),
		above = rect.bottom - offset < 0,
		below = rect.top - viewHeight + offset >= 0;

	return mode === 'above'
		? above
		: mode === 'below'
			? below
			: !above && !below;
}

// # ARIA HELPERS
function ariaBool(toggle: string | boolean): string {
	if (toggle === undefined) {
		toggle = 'false';
	}
	else if (toggle === true) {
		toggle = 'true';
	}
	else if (toggle === false) {
		toggle = 'false';
	}
	else if (!(toggle === 'true' || toggle === 'false')) {
		toggle = 'false';
	}

	return toggle;
}

function ariaHidden(element: HTMLElement, toggle: string | boolean): HTMLElement {
	attribute(element, 'aria-hidden', ariaBool(toggle));

	return element;
}

function ariaHiddenToggle(element: HTMLElement): HTMLElement {
	if (attribute(element, 'aria-hidden') === 'true') {
		ariaHidden(element, false);
	}
	else {
		ariaHidden(element, true);
	}

	return element;
}

function ariaExpanded(element: HTMLElement, toggle: string | boolean): HTMLElement {
	attribute(element, 'aria-expanded', ariaBool(toggle));
	return element;
}

function ariaExpandedToggle(element: HTMLElement): HTMLElement {
	if (attribute(element, 'aria-expanded') === 'true') {
		ariaExpanded(element, false);
	}
	else {
		ariaExpanded(element, true);
	}

	return element;
}

function ariaHasPopup(element: HTMLElement, toggle: string | boolean): HTMLElement {
	attribute(element, 'aria-haspopup', ariaBool(toggle));

	return element;
}

function ariaLabel(element: HTMLElement, label: string): HTMLElement {
	attribute(element, 'aria-label', label);

	return element;
}

function ariaControls(element: HTMLElement, label: string): HTMLElement {
	attribute(element, 'aria-label', label);
	return element;
}

// # CSS HELPERS
function css(
	element: HTMLElement,
	property: string | object,
	value?: string | number | boolean
): HTMLElement | string | null {
	if (typeof property === 'object') {
		Object.keys(property).forEach((key) => {
			// @ts-ignore
			css(element, toDash(key), property[key]);
		});
	}
	else if (value === null) {
		// @ts-ignore
		return getComputedStyle(element)[property];
	}
	else {
		// @ts-ignore
		element.style[property] = value;
	}

	return element;
}

function hide(element: HTMLElement, aria: boolean = true): HTMLElement {
	element.style.display = 'none';

	if (aria) {
		ariaHidden(element, true);
	}

	return element;
}

function show(element: HTMLElement, display: string = 'block', aria: boolean = true): HTMLElement {
	element.style.display = display;

	if (aria) {
		ariaHidden(element, false);
	}

	return element;
}

function fadeIn(element: HTMLElement, timeout: number = 400, display: string = 'block', aria: boolean = true): HTMLElement {
	let opacity = 0;
	css(element, { opacity: 0, display: display });

	if (aria) {
		ariaHidden(element, false);
	}

	let timer = setInterval(() => {
		opacity += 0.1;
		element.style.opacity = (opacity > 1 ? 1 : opacity).toString();

		if (opacity >= 1) {
			clearInterval(timer);
			element.style.opacity = '';
		}
	}, calcTimeout(timeout));

	return element;
}

function fadeOut(element: HTMLElement, timeout: number = 400, aria: boolean = true): HTMLElement {
	let opacity = 1;
	let timer = setInterval(() => {
		opacity -= 0.1;
		element.style.opacity = (opacity < 0 ? 0 : opacity).toString();

		if (opacity <= 0) {
			clearInterval(timer);
			css(element, { display: 'none', opacity: '' });

			if (aria) {
				ariaHidden(element, true);
			}
		}
	}, calcTimeout(timeout));

	return element;
}

function slideDown(element: HTMLElement, timeout: number = 400, display: string = 'block'): HTMLElement {
	css(element, {
		display: display,
		'max-height': 0,
		overflow: 'hidden',
		transition: `max-height ${timeout / 1000}s ease`,
	});

	setTimeout(() => {
		element.style.maxHeight = pxToRem(element.scrollHeight);
	}, 10);

	setTimeout(() => {
		css(element, {
			'max-height': '',
			overflow: '',
			transition: '',
		});
	}, timeout);

	return element;
}

function slideUp(element: HTMLElement, timeout: number = 400, display: string = 'block'): HTMLElement {
	css(element, {
		display: display,
		'max-height': pxToRem(element.scrollHeight),
		overflow: 'hidden',
		transition: `max-height ${timeout / 1000}s ease`,
	});

	setTimeout(() => {
		element.style.maxHeight = '0';
	}, 10);

	setTimeout(() => {
		css(element, {
			'max-height': '',
			display: 'none',
			overflow: '',
			transition: '',
		});
	}, timeout);

	return element;
}

function setScrollOffset(element: HTMLElement, offset: number): HTMLElement {
	// @ts-ignore
	element.style.scrollMarginTop = `${offset}px`;
	return element;
}

function responsiveScrollOffset(element: HTMLElement, offset: number): HTMLElement {
	addListeners(
		window,
		'load resize',
		(event: Event) => setScrollOffset(element, offset)
	);

	return element;
}

function calcScrollOffset(element: HTMLElement): number {
	if (['fixed', 'sticky'].indexOf(getComputedStyle(element).position) === -1) {
		return 0;
	}

	return element.offsetHeight;
}

function setLoadedPageOffset(offset: number): void {
	if (!window.location.hash) {
		return;
	}

	const scrolledTo = document.getElementById(
		window.location.hash.replace('#', '')
	);

	if (!scrolledTo) {
		return;
	}

	const scrollPosition: number = scrolledTo.getBoundingClientRect().top - offset;
	document.documentElement.scrollTop = scrollPosition;
	document.body.scrollTop = scrollPosition;
}
