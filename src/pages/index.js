import DayWeather from "@/components/DayWeather";
import NightWeather from "@/components/NightWeather";
import { useEffect, useState } from "react";
const weatherApiKey = "899d9c2c0f5845838dc70138240912";

const main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [filteredCities, setFilteredCities] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchCountriesData();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    fetchWeatherData();
  }, [selectedCity]);

  useEffect(() => {
    let searchResult = [];
    countries?.map((country) => {
      return country?.cities?.map((city) => {
        if (city.toLowerCase().includes(searchValue)) {
          searchResult.push({ name: city, country: country.country });
        }
      });
    });
    setFilteredCities(searchResult.slice(0, 5));
  }, [searchValue]);

  const fetchCountriesData = () => {
    setIsLoading(true);
    fetch(`https://countriesnow.space/api/v0.1/countries`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
        setIsLoading(false);
      });
  };

  const fetchWeatherData = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data?.forecast?.forecastday[0]);
        setIsLoading(false);
      });
    // .finally(() => setIsLoading(false));
  };

  const handleCityClick = (cityName) => {
    setSearchValue("");
    setSelectedCity(cityName);
  };

  return (
    <div>
      <div className="relative flex w-full">
        {/* Search */}
        <div className="p-[20px] w-screen h-screen bg-white relative">
          <div className="w-[587px] h-[80px] flex items-center px-4 shadow-md absolute top-[11%] rounded-[20px] left-[11%] bg-white z-50">
            <img
              src="/weather-img/search.svg"
              alt="search"
              className="w-[48px] h-[48px]"
            />
            <input
              type="text"
              className="text-[32px] font-semibold outline-none"
              placeholder="Search"
              onChange={(event) =>
                setSearchValue(event.target.value.toLowerCase())
              }
              value={searchValue}
            />
          </div>

          {searchValue !== "" && (
            <div className="w-[587px] flex flex-col p-4 shadow-sm gap-2 absolute top-[15%] rounded-[20px] left-[13%] bg-white z-60">
              {filteredCities.map((city) => {
                return (
                  <div
                    key={city.name + city.country}
                    className="hover:bg-[#9b9b9bcc] cursor-pointer rounded-2xl flex gap-2 z-50"
                    onClick={() => handleCityClick(city.name)}
                  >
                    <img src="/weather-img/location.svg" alt="" />
                    <p className="flex items-center text-2xl font-semibold">
                      {city.name}, {city.country}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <img
          src="/weather-img/sun.svg"
          className="absolute top-[13%] left-[13%] z-20"
        />
        {isLoading && <p className="text-8xl text-red-700">...Loading</p>}

        <div className="absolute top-[20%] left-[18%] z-50">
          <DayWeather
            city={selectedCity}
            temp={weather?.day?.avgtemp_c}
            date={weather?.date}
            cloud={weather?.day?.condition?.text}
          />
        </div>

        <img
          src="/weather-img/vector2.svg"
          className="absolute top-[45.7%] left-[48.5%] z-10"
        />
      </div>

      <div className="absolute z-5 border border-[#c1bfbf] rounded-full w-[140px] h-[140px] shrink-0 top-[44%] left-[47.5%] bg-[#f7f8f9]"></div>
      <div className="absolute z-10 left-[44%] top-[38%] border border-[#c1bfbf] rounded-full w-80 h-80 shrink-0"></div>
      <div className="absolute z-20 w-[540px] h-[540px] border border-[#c1bfbf] rounded-full top-[30%] left-[39.5%] shrink-0"></div>
      <div className="absolute z-30 border border-[#c1bfbf] rounded-full w-[960px] h-[960px] top-[15%] left-[31%]"></div>
      <div className="absolute z-40 w-[1390px] h-[1390px] border rounded-full top-0 left-[22%] border-[#b4b2b2dc]"></div>

      {isLoading && <p className="text-8xl text-red-700">...Loading</p>}

      <div className="border rounded bg-black w-[50%] border-white h-screen absolute top-0 right-0">
        <div className="absolute top-[20%] left-[25%]">
          <NightWeather
            city={selectedCity}
            temp={weather?.hour?.[20]?.temp_c}
            date={weather?.date}
            cloud={weather?.hour?.[20]?.condition?.text}
          />
        </div>
        <img
          src="/weather-img/Vector.svg"
          className="absolute top-[45.7%] z-10 left-[1%]"
        />
      </div>
    </div>
  );
};

export default main;
