// TODO: Add info windows
class Maps {
	protected element: HTMLElement;
	protected mapData: Object;
	protected points: Array<Object>;
	protected markers: any;
	protected map: any;

	constructor(element: HTMLElement, data: Object, points: Array<Object>) {
		this.element = element;
		this.mapData = data;
		this.points = points;
		this.map = this.createMap();
		this.markers = this.mapMarkers(points);
	}

	protected createMap() {
		// @ts-ignore
		if (!this.mapData.center) {
			// @ts-ignore
			this.mapData.center = {
				// @ts-ignore
				lat: parseFloat(this.points[0].position.lng),
				// @ts-ignore
				lng: parseFloat(this.points[0].position.lat)
			};
		}

		// @ts-ignore
		this.mapData.zoom = parseInt(this.mapData.zoom || 10);

		// @ts-ignore
		return new google.maps.Map(this.element, this.mapData);
	}

	protected mapMarkers(points: Array<Object>): void {
		const map = this.map;
		// @ts-ignore
		const bounds = new google.maps.LatLngBounds()

		// @ts-ignore
		const markers = points.forEach(function (point: Object): google.maps.Marker {
			// @ts-ignore
			bounds.extend(new google.maps.LatLng(point.position.lat, point.position.lng));

			// @ts-ignore
			point.map = map;
			// @ts-ignore
			return new google.maps.Marker(point);
		});

		if (typeof this.map.fitBounds === 'function') {
			this.map.fitBounds(bounds);
		}

		return markers;
	}
}