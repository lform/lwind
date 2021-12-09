class Cookies{
	public static minuteInSeconds = 60;
	public static hourInSeconds = 60 * Cookies.minuteInSeconds;
	public static dayInSeconds = 24 * Cookies.hourInSeconds;
	public static weekInSeconds = 7 * Cookies.dayInSeconds;
	public static monthInSeconds = 30 * Cookies.dayInSeconds;
	public static yearInSeconds = 365 * Cookies.dayInSeconds;

	public static set(
		name: string,
		data: any,
		time: number = null,
		path: string = '/'
	): void{
		data = isScalar(data) ? JSON.stringify(data) : data;
		const cookie = [`${name}=${data}`, `path=${path}`];

		if(time){
			cookie.push(`max-age=${time}`);
		}

		if(isSSL()){
			cookie.push('secure');
		}

		document.cookie = cookie.join(';');
	}


	public static delete(name: string): void{
		Cookies.set(name, '', 0 - Cookies.yearInSeconds);
	}

	public static get(key: string): any{
		let value = document.cookie
			.split('; ')
			.find((row: string): boolean => row.startsWith(`${key}=`));

		if(!value){
			return null;
		}

		value = value.split('=')[1];

		try{
			return JSON.parse(value);
		}
		finally{
			return value;
		}
	}

	public static all(): object{
		const cookieList = document.cookie.split('; ');
		let values: {[index: string]: string} = {};

		for(let cookie of cookieList){
			const data = cookie.split('=');

			try{
				values[data[0]] = JSON.parse(data[1]);
			}

			finally{
				values[data[0]] = data[1];
			}
		}

		return values;
	}
}