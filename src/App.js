import "bootstrap/dist/css/bootstrap.css";
import SearchEngine from "./Searchengine";
import City from "./City";
import WeatherSpecyfic from "./WeatherSpecyfic";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <SearchEngine />
        <City />
        <WeatherSpecyfic />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
