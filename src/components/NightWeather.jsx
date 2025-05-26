const NightWeather = ({ city, temp, date, cloud }) => {
  console.log(city);

  return (
    <div className="rounded-[48px] w-[414px] h-[828px] relative z-40 shadow-xl/20 backdrop-blur-lg bg-transparent shadow-2xl shadow-white">
      <div className="absolute top-12 left-10 not-italic">
        <p className="text-lg font-bold text-indigo-400">{date}</p>
        <img
          src="/weather-img/location.svg"
          className="absolute left-[290px] top-5"
        />
        <p className="text-5xl font-extrabold text-white">{city}</p>
      </div>
      <img
        src="/weather-img/moon.png"
        className="absolute top-[170px] left-[80px]"
      />
      <div className="flex">
        <p className="text-[144px] font-extrabold absolute top-[450px] left-[75px] bg-gradient-to-t from-gray-500 via-gray-200 to-gray-100 text-transparent bg-clip-text">
          {temp}
        </p>
        <p className="absolute top-[500px] left-[350px] text-5xl font-extrabold bg-gradient-to-b from-white to-black text-transparent bg-clip-text">
          °
        </p>
      </div>

      <p className="text-2xl font-extrabold absolute top-[650px] left-[75px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
        {cloud}
      </p>
      <div className="flex absolute top-[730px] left-[75px] gap-[50px]">
        <img src="/weather-img/Home.svg" />
        <img src="/weather-img/Pin.svg" />
        <img src="/weather-img/Heart.svg" />
        <img src="/weather-img/User.svg" className="z-10" />
      </div>
      <img
        src="/weather-img/purple.svg"
        className="w-[128px] h-[128px] absolute top-[830px] left-[350px]"
      />
    </div>
  );
};

export default NightWeather;
