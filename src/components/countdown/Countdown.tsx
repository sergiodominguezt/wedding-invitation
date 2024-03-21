import React, { useEffect, useState } from "react";
import "./countdown.css";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const targetDate = new Date("Jun 29, 2024").getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="countdown-timer shadowed">
      <div className="countdown-timer-title">
        <h1>Solo faltan</h1>
      </div>
      <div className="countdown-item">
        <p>{days}</p>
        <span>DIAS</span>
      </div>
      <div className="countdown-item">
        <p>{hours}</p>
        <span>HORAS</span>
      </div>
      <div className="countdown-item">
        <p>{minutes}</p>
        <span>MINUTOS</span>
      </div>
      <div className="countdown-item">
        <p>{seconds}</p>
        <span>SEGUNDOS</span>
      </div>
    </div>
  );
};

export default Countdown;
