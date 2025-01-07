const endpoint = "http://api.openweathermap.org";
const appId = "b93636ba461c7294ecf793aae36a3107";
export default {
    async getWeatherForCity(search: string) {
        const response = await fetch(`${endpoint}/geo/1.0/direct?appid=${appId}&limit=1&q=${search}`)
        const result = await response.json();
        const data = result?.length ? result[0] : null;
        // if (data) {
        //     return await this.getWeatherInfoFromLatLong(data.lat, data.lon)
        // } else {
        //     return null;
        // }
        return data 
    },
    // imperial - F & metric - C
    async getWeatherInfoFromLatLong(lat: string, lon: string, unit: string = "imperial") {
        const response = await fetch(`${endpoint}/data/2.5/weather?appid=${appId}&lat=${lat}&lon=${lon}&units=${unit}`)
        const result = await response.json();
        return result;
    }
}