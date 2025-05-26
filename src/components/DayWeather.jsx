const DayWeather = ({ city, temp, date, cloud }) => {
  return (
    <div
      className={` ${
        temp > 15
          ? "bg-white"
          : "bg-gradient-to-t from-blue-300  via-blue-200 to-blue-50 text-transparent"
      } rounded-[48px] w-[414px] h-[828px] relative z-50 backdrop-blur-lg  shadow-xl opacity-[90]`}
    >
      <div className="absolute top-12 left-10 not-italic">
        <p
          className={` ${
            temp > 15
              ? "bg-gradient-to-t from-orange-600  via-yellow-500 to-yellow-300 text-transparent bg-clip-text"
              : "text-blue-300"
          } text-lg font-medium text-[#FF8E27]`}
        >
          {date}
        </p>

        <img
          src="/weather-img/location.svg"
          className="absolute left-[290px] top-5"
        />

        <p
          className={` ${
            temp > 15
              ? "bg-gradient-to-t from-orange-600  via-yellow-500 to-yellow-300 text-transparent bg-clip-text"
              : "text-blue-300"
          } text-5xl font-extrabold text-[#f9ae68]`}
        >
          {city}
        </p>
      </div>

      <img
        src="/weather-img/sun-icon.png"
        className="absolute top-[170px] left-[80px]"
      />

      <div className="flex">
        <p
          className={` ${
            temp > 15
              ? "bg-gradient-to-t from-orange-600  via-yellow-500 to-yellow-300 text-transparent bg-clip-text"
              : "bg-gradient-to-t from-blue-500 to-blue-200 text-transparent bg-clip-text"
          } text-[144px] font-extrabold absolute top-[450px] left-[75px] `}
        >
          {temp}
        </p>
        <p
          className={` ${
            temp > 15
              ? "bg-gradient-to-t from-orange-600  via-yellow-500 to-yellow-300 text-transparent bg-clip-text"
              : "bg-gradient-to-t from-blue-500 to-blue-200 text-transparent bg-clip-text"
          } absolute top-[500px] left-[350px] text-5xl font-extrabold text-orange-300 `}
        >
          °
        </p>
      </div>
      <p
        className={` ${
          temp > 15
            ? "bg-gradient-to-t from-orange-600  via-yellow-500 to-yellow-300 text-transparent bg-clip-text"
            : "text-blue-400"
        } text-2xl font-extrabold absolute top-[650px] left-[75px]`}
      >
        {cloud}
      </p>
      <div className="flex absolute top-[730px] left-[75px] gap-[50px]">
        <img src="/weather-img/Home.svg" />
        <img src="/weather-img/Pin.svg" />
        <img src="/weather-img/Heart.svg" />
        <img src="/weather-img/User.svg" />
      </div>
    </div>
  );
};

export default DayWeather;
