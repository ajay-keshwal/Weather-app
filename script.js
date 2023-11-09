

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const url2 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bhopal';
const url3 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad';
const url_Lucknow = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow';
const url_Mumbai = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai';
const url_Bangalore = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore';
const url_Delhi = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';        
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b74930f466msh873eba5ef81547ep10c6eejsn5e63028b3236',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchh(city){
try {
	const response = await fetch(url+city,options);
	const result = await response.json();
	temp.innerHTML = result.max_temp;
	cloud_pct.innerHTML = result.cloud_pct;
	feels_like.innerHTML = result.feels_like;
	min_temp.innerHTML = result.min_temp;
	
	console.log(result);
	
} catch (error) {
	console.error(error);
}
}

setTimeout(() => {
	spin.innerHTML = "City's Weather";
},2000);

async function fetch2(){
	
		const response = await fetch(url2,options);
		const result = await response.json();
		bhopal.innerHTML = result.temp;
		
	cloud1_pct.innerHTML = result.cloud_pct;
	feels1_like.innerHTML = result.feels_like;
	min1_temp.innerHTML = result.min_temp;
	}
	fetch2();
	

function getWhwather(){
	// let search = document.getElementById("search");
	search.addEventListener("click",(e) => {
		e.preventDefault();
        let value = input.value;
		citySearch.innerHTML = value.toUpperCase();
       fetchh(value);
		
	})
}
getWhwather
async function fetch3(){

	const res = await fetch(url3,options);
	const result = await res.json();

	hyderabad.innerHTML = result.temp;
	cloud3_pct.innerHTML = result.cloud_pct;
	feels3_like.innerHTML = result.feels_like;
	min3_temp.innerHTML = result.min_temp;
	
} 
fetch3();

async function fetchLucknow(){

	const res  =await fetch(url_Lucknow,options);
	const result  = await res.json();

	cloud4_pct.innerHTML = result.cloud_pct;
	feels4_like.innerHTML = result.feels_like;
	min4_temp.innerHTML = result.min_temp;
	max4_temp.innerHTML = result.max_temp;
	temp4.innerHTML    = result.temp;


}
fetchLucknow();

async function fetchMumbai(){

	const res = await fetch(url_Mumbai,options);
	const result = await res.json();

	cloud5_pct.innerText = result.cloud_pct;
	feels5_like.innerHTML = result.feels_like;
	min5_temp.innerHTML = result.min_temp;
	max5_temp.innerHTML = result.max_temp;
	temp5.innerHTML    = result.temp;



} 
fetchMumbai();

async function fetchBangalore(){

	const res = await fetch(url_Bangalore,options);
	const result = await res.json();

	cloud6_pct.innerText = result.cloud_pct;
	feels6_like.innerHTML = result.feels_like;
	min6_temp.innerHTML = result.min_temp;
	max6_temp.innerHTML = result.max_temp;
	temp6.innerHTML    = result.temp;



} 
fetchBangalore();

async function fetchDelhi(){

	const res = await fetch(url_Delhi,options);
	const result = await res.json();

	cloud7_pct.innerText = result.cloud_pct;
	feels7_like.innerHTML = result.feels_like;
	min7_temp.innerHTML = result.min_temp;
	max7_temp.innerHTML = result.max_temp;
	temp7.innerHTML    = result.temp;



} 
fetchDelhi();





