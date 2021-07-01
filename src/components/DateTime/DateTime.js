import "./DateTime.css";
import { useState, useEffect } from "react";

export default function DateTime() {
  // const [greeting, setGreeting] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hrs, setHrs] = useState("");
  const [mins, setMins] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      let date = new Date();

      const timeElapsed = Date.now();
      const day = new Date(timeElapsed);
      const today = day.toDateString();

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let time = hours + ":" + minutes + " " + ampm;

      setDate(today);
      setTime(time);

      setHrs(hours);
      setMins(minutes);
      setTimeout(updateDateTime, 1000);
    };
    updateDateTime();
  }, []);

  return (
    <div className="Component DateTime">
      <div className="clock-container">
        <div className="clock-wrapper">
          <div>{hrs}</div>
          <span>:</span>
          <div>{mins}</div>
        </div>
      </div>
      <div className="date-wrapper">
        <div>Welcome, Kristen.</div>
        <div>Today is {date}</div>
      </div>
      {/* <div>{time}</div> */}
    </div>
  );
}
