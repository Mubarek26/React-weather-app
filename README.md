# Weather App 🌦️

A simple weather app built with React that fetches real-time weather data from the WeatherAPI. Users can search for a city to view the current weather conditions, including temperature, humidity, wind speed, and a short weather description.

## Features

- **Real-Time Weather Data**: Fetches current weather conditions for the searched city.
- **Error Handling**: Notifies the user if a city is not found or if there’s an issue with fetching the data.
- **Loading Indicator**: Displays a loading indicator while the data is being fetched.
- **Responsive Search**: Trigger a search by pressing the "Search" button or pressing Enter in the input field.

## Tech Stack

- **React**: Frontend library for building the user interface.
- **WeatherAPI**: API used to fetch current weather data.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Get an API Key**
    - Sign up at [WeatherAPI](https://www.weatherapi.com/) to get a free API key.
    - Replace `YOUR_API_KEY` in the code with your actual API key.

4. **Run the App**
    ```bash
    npm start
    ```

The app should now be running at `http://localhost:3000`.

## Usage

1. **Search for a City**: Enter the name of the city you want to search for and press the "Search" button or press Enter.
2. **View Weather Data**: Once the data is fetched, you can view details like temperature, weather description, humidity, and wind speed.
3. **Error Handling**: If the city is not found, you’ll see an error message.

## Code Structure

### `App.jsx`

- The main React component containing:
  - **Input Field**: For city search.
  - **Search Button**: Triggers the search when clicked or when Enter is pressed.
  - **Weather Display**: Shows the weather data if available.
  - **Loading Indicator**: Displays a loading state while fetching data.
  - **Error Message**: Notifies the user if there's an error with the search.

### `Loading` Component

- A simple component that renders a styled loading message while the data is being fetched.

## Example Response

The app fetches data from the WeatherAPI, which returns data in the following structure:

```json
{
  "location": {
    "name": "City Name",
    "country": "Country"
  },
  "current": {
    "temp_c": 24,
    "condition": {
      "text": "Sunny"
    },
    "humidity": 70,
    "wind_kph": 15
  }
}
