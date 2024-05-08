# React Weather API Dashboard

This project is a React-based weather dashboard that utilizes the OpenWeather API to fetch weather information. It serves as a practical exercise applying React concepts learned up to week 6 of the 0-100 cohort.

## Setup

1. Clone this repository:

   ```bash
   git clone <repository_url>
   cd react-weather-api-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create an account on OpenWeather to obtain an API key. You can sign up for a free subscription.

4. Create a `.env` file in the root directory:

   ```env
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```

## About

This dashboard fetches weather information from the OpenWeather API based on coordinates (latitude and longitude). It displays various weather parameters and forecast information on separate cards using wrapper components for a card effect.

## Project Structure

- `src/components`: Contains React components for rendering different parts of the dashboard.
- `src/utils`: Contains utility functions for making API requests and handling data.
- `src/App.js`: Main component that orchestrates rendering of the dashboard.
- `src/index.js`: Entry point of the application.

## Components
- `<WrapperComponent />`: To create card like effect.
- `<Coordinates />`: This is where users can change the Longitude and Latitude to get data of any city
- `<LocationComponent />`: Contains Information of the selected Location.
- `<Header />`: Not really needed ; A component for the heading of the app.
- `<ForecastComponent />`: Contains information of Forcasted weather, 40 timestamps each at an interval of 3hrs from current time are available. A state variable is defined to travers over these timestamps.
- `<CurrentComponent />`: Contains Current Weather data like tempreature, Humidity and others.
- `<Aircomponent />`: Contains Airquality index and concentration of different gasses in air's data.

## How to Use

1. Run the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter coordinates (latitude and longitude) to fetch weather information for that location.

## Frontend
![Frontend](C:\Users\Asus\Downloads\screenshot (2).png)

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or additional features you'd like to see, feel free to open an issue or submit a pull request.

