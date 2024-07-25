# Weather App

### Introduction
This Weather App provides current weather information for your location using the OpenWeatherMap API. Built with TypeScript, Next.js, and Tailwind CSS, it offers a modern and responsive user interface.

### Features
- Display current weather conditions
- Responsive design for mobile and desktop
- User-friendly interface

### Tech Stack
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **OpenWeatherMap API**: API for fetching weather data.

### Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js** (18.0.0 or later)
- **pnpm**
- **OpenWeatherMap** API key

### Installation
1. Clone the repository:
```sh
git clone https://github.com/666rayen999/weather-app.git
cd weather-app
```
2. Install dependencies:
```sh
pnpm i
```
3. Create a .env file in the root of the project and add your OpenWeatherMap API key:
```env
WEATHER_API_KEY=your_api_key_here
```

### Usage
```sh
pnpm dev
```
Open your browser and navigate to `http://localhost:3000`.

### API Integration
This app uses the OpenWeatherMap API to fetch weather data. To obtain an API key, sign up at [OpenWeatherMap](https://openweathermap.org).

Once you have your API key, add it to the .env file as described in the Installation section.

### License
This project is licensed under the CC0 License.
