import React, { useState, useEffect, useRef } from 'react';
import './Clock.scss';

export default function Clock() {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(
    new Date().toLocaleDateString('en-GB', options),
  );
  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString('en-GB', options));
    }, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <div className="Clock">
      <div className="Clock__time">{time}</div>
      <div>{date}</div>
    </div>
  );
}
