import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(3332);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-[90%] h-[200px] flex flex-col items-center justify-center bg-black text-white p-4 rounded-lg mq450:w-[300px] mq450:h-[150px] mq1125:w-[400px] mq1125:h-[300px] mq1350:w-[90%] mq1350-h-[400px]">
      <div className="text-sm font-semibold mq450:text-[20px] mq1125:text-[40px]">LIMITED OFFER</div>
      <div className="text-xs mb-2 mq1125:text-[25px]">Ends soon</div>
      <div className="flex space-x-2 text-4xl font-bold mq1125:text-[20px]">
        {formatTime(timeLeft).split('').map((char, index) => (
          <span key={index} className="bg-white text-black px-2 rounded-md">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
