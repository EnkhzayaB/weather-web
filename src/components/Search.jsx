const Search = ({ city }) => {
  return (
    <div className="p-[20px] bg-[#f3f4f6] w-screen h-screen">
      <div className="w-[587px] h-[80px] bg-white flex items-center px-4 relative shadow-md">
        <img
          src="/weather-img/search.svg"
          alt="search"
          className="w-[48px] h-[48px]"
        />
        <input
          type="text"
          className="text-[32px] font-semibold outline-none"
          placeholder="Search"
          onChange={(event) => setSearchValue(event.target.value.toLowerCase())}
          value={searchValue}
        />
      </div>

      <div className="w-[587px] flex flex-col p-4 absolute top-[100px] left-0 bg-[#ffffffcc] rounded-2xl shadow-sm gap-2">
        {filteredCities.map((city) => {
          return (
            <div
              key={city.name + city.country}
              className="hover:bg[#9b9b9bcc] cursor-pointer"
              onClick={() => handleCityClick(city.name)}
            >
              {city.name}, {city.country}
            </div>
          );
        })}
      </div>
      <div>{selectedCity},</div>
      <div>{weather?.day?.avgtemp_c}C</div>
    </div>
  );
};

export default Search;
