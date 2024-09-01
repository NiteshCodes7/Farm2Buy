const FrameComponent2 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start mt-[50px] pt-0 px-0.5 pb-[100px] box-border max-w-full shrink-0 w-auto p-8 gap-0 text-left text-57xl text-black font-lexend ">
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 box-border gap-[26px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full shrink-0">
          <h1 className="m-0 text-inherit leading-[100px] font-bold mq450:text-27xl mq450:leading-[60px] mq800:text-42xl mq800:leading-[80px]">
            Category
          </h1>
        </div>
        <div className="self-stretch grid gap-14 max-w-full w-auto text-17xl text-background-default-default font-encode-sans-semi-expanded mq1950:grid-cols-[repeat(4,_minmax(300px,_1fr))] mq1600:grid-cols-[repeat(3,_minmax(300px,_1fr))] mq1350:grid-cols-[repeat(3,_minmax(300px,_1fr))] lg:grid-cols-[repeat(2,_minmax(300px,_1fr))] mq1125:grid-cols-[repeat(2,_minmax(300px,_1fr))] mq1050:grid-cols-[repeat(2,_minmax(300px,_1fr))] mq1000:grid-cols-[repeat(2,_minmax(300px,_1fr))] mq800:grid-cols-[repeat(2,_minmax(300px,_1fr))] mq750:grid-cols-[repeat(2,_minmax(300px,_1fr))] mq450:grid-cols-[minmax(300px,_1fr)]">
          {[
            { title: "Rice", img: "frame-5@3x.png" },
            { title: "Wheat", img: "frame-6@3x.png" },
            { title: "Nuts", img: "frame-7@3x.png" },
            { title: "Sugar", img: "frame-8@3x.png" },
            { title: "Spices", img: "frame-9@3x.png" },
            { title: "Pulses", img: "frame-11@3x.png" },
            { title: "Fruits", img: "frame-10@3x.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="h-72 rounded-3xs flex items-end justify-start pt-10 px-[21px] pb-10 box-border bg-cover bg-no-repeat shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer hover:brightness-50"
              style={{ backgroundImage: `url('/public/${item.img}')` }}
            >
              <h1 className="m-0 leading-[26px] font-semibold text-white mq450:text-3xl mq450:leading-[16px] mq800:text-10xl mq800:leading-[21px]">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
