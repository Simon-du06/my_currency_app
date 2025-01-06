const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=EUR&to=USD%2CGBP';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '88aab1cfcemsh33853bc054cfe5ap18e854jsne3811f8f8da9',
		'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

export async function get_exchange(setRate) {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
		setRate(result);
	} catch (error) {
		console.error(error);
	}
}