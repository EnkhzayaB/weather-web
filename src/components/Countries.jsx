export const Result = (city) => {
  return (
    <div className="p-1.5 bg-[#f3f4f6] h-[300px] w-[600px] flex py-4">
      <div className="flex text-2xl font-semibold gap-2 absolute left-[5%] top-[5%] w-[587px]">
        <img src="/weather-img/location.svg" />
        <div className="flex flex-col">
          <div className="w-full hover:bg-[#8d8d8dcc]">
            Ulaanbaatar, Mongolia
          </div>
        </div>
      </div>
    </div>
  );
};
