API Details:
o https://openweathermap.org/api/geocoding-api (to get geo coordinates by city
name)
§ curl --location
'http://api.openweathermap.org/geo/1.0/direct?q=charlotte&limit=1&appid
={ask-for-appid}'
o https://openweathermap.org/current (to get weather data by geo coordinates)
§ curl --location
'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&
appid={ask-for-appid}'
o Optional: https://openweathermap.org/forecast5 (to get weather forecast data for 7
days by geo coordinates)
§ curl --location
'api.openweathermap.org/data/2.5/forecast/daily?lat=44.34
 
Optional: https://openweathermap.org/forecast5 (to get weather forecast data for 7
days by geo coordinates)
§ curl --location
'api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&c
nt=7&appid=b93636ba461c7294ecf793aae36a3107'
 
CCM Front End Interview:
Task: Create a Vue 3 component that fetches data from the OpenWeatherMap API
(https://openweathermap.org/current) and displays the current weather information for a given
city.


Technical Instructions:
1. Setup: Done
o Create a new Vue 3 project using Vue CLI or Vite.
o Design and implement a reusable, type-safe component.
o Use TypeScript for type safety.
o Use Composition API for state management and lifecycle hooks.
2. Error Handling: Implement more robust error handling, such as displaying specific
error messages based on the API response status code.
3. 4. Clean architecture and separation of concerns.
Performance considerations and optimization techniques.
5. Submission:
o Provide a link to a GitHub repository with your solution.
o Ensure the repository includes a README file with instructions on how to run
the project.
Requirements:
1. Data Fetching:
o fetch weather data from the OpenWeatherMap API.
o Handle potential errors during data fetching (e.g., network errors, API rate limits).
o Display a loading state while the data is being fetched.
o Display an error message if the API request fails.
2. Data Display:
o Display the following weather information:
§ City name
§ Temperature (in Celsius or Fahrenheit)
§ Weather description (e.g., "Clear", "Cloudy", "Rainy")
§ Display additional information like Visibility, humidity, wind speed, etc.
3. User Interaction:
o Allow the user to enter a city name in an input field.
o Fetch weather data for the entered city on input change or button click.
o Provide a way for the user to select/toggle temperature units (Celsius or
Fahrenheit).
4. Styling:
5. TypeScript:
o Basic styling is required to make the component visually appealing.
o Use CSS or a CSS framework like Bulma, Tailwind CSS for styling.o Write the component using TypeScript
o Define types for data, props, and methods.
6. Bonus:
o Weather Forecast: Showing weather forecast for 8 days.
§ Example: https://openweathermap.org/city/4460243
o Chart: Consider using any third-party to visualize the weather data
o Caching: Cache the fetched weather data to improve performance for subsequent
requests for the same city.
7. API Details:
o https://openweathermap.org/api/geocoding-api (to get geo coordinates by city
name)
§ curl --location
'http://api.openweathermap.org/geo/1.0/direct?q=charlotte&limit=1&appid
={ask-for-appid}'
o https://openweathermap.org/current (to get weather data by geo coordinates)
§ curl --location
'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&
appid={ask-for-appid}'
o Optional: https://openweathermap.org/forecast5 (to get weather forecast data for 7
days by geo coordinates)
§ curl --location
'api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&c
nt=7&appid=b93636ba461c7294ecf793aae36a3107'
8. Additional Notes:
o List of all API parameters with units openweathermap.org/weather-data
o Temperature is available in Fahrenheit, Celsius and Kelvin units.
§ For temperature in Fahrenheit use units=imperial
§ For temperature in Celsius use units=metric
o Temperature in Kelvin is used by default, no need to use units parameter in API
call
9. Additional references for UI/UX:
https://weather-app-alpha-gules-53.vercel.app/
 



 o https://openweathermap.org/api/geocoding-api (to get geo coordinates by city name)
 curl --location 'http://api.openweathermap.org/geo/1.0/direct?q=charlotte&limit=1&appid={ask-for-appid}'
o https://openweathermap.org/current (to get weather data by geo coordinates)
 curl --location ''
o Optional: https://openweathermap.org/forecast5 (to get weather forecast data for 7 days by geo coordinates)
 curl --location 'api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=b93636ba461c7294ecf793aae36a3107'
 