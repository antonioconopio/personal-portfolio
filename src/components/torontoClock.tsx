"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Toronto",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const TorontoClock = () => {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>YYZ {time}</span>;
};

export default TorontoClock;
