const key = "1152954574234b7bb0a52510242102";
const base = "https://api.weatherapi.com/v1";



export async function fetchCurrentData(query: string){
        const res = await fetch(`${base}/forecast.json?key=${key}&q=${query}`)
        const data = await res.json()  
        if("error" in data) {
            let mess = data.error.code == 1003 ? "Please Enter a city" : data.error.message
            return  {payload: mess as string, success: false}
        }
        return {payload: data.current as CurrentWeather, success: true };
}

