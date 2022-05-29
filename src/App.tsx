import React, { useEffect, useState } from 'react';

import './App.css';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEDDING_DATE = new Date('2022-06-28T14:30:00.000-04:00');

function App() {
  const [timeLeft, setTimeLeft] = useState(WEDDING_DATE.getTime() - (new Date()).getTime());
  const [days, setDays] = useState(Math.floor(timeLeft / DAY));
  const [hours, setHours] = useState(Math.floor((timeLeft - (days * DAY)) / HOUR));
  const [minutes, setMinutes] = useState(Math.floor((timeLeft - (days * DAY + hours * HOUR)) / MINUTE));
  const [seconds, setSeconds] = useState(Math.floor((timeLeft - (days * DAY + hours * HOUR + minutes * MINUTE)) / SECOND));

  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);

      const timeLeftNow = WEDDING_DATE.getTime() - (new Date()).getTime();
      const newDays = Math.floor(timeLeftNow / DAY);
      const newHours = Math.floor((timeLeftNow - (newDays * DAY)) / HOUR);
      const newMinutes = Math.floor((timeLeftNow - (newDays * DAY + newHours * HOUR)) / MINUTE);
      const newSeconds = Math.floor((timeLeftNow - (newDays * DAY + newHours * HOUR + newMinutes * MINUTE)) / SECOND);
      setTimeLeft(timeLeftNow);
      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }, 1000);
  }, [timeLeft]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Michael &amp; Sonia's Wedding</h1>
      </header>
      <>
        {timeLeft > 0 ? (
          <div className="countdown">
            {days === 0 ? null : (
              <div>
                <div>{days}</div>
                <div>{days === 1 ? 'day' : 'days'}</div>
              </div>
            )}
            {hours === 0 ? null : (
              <div>
                <div>{hours}</div>
                <div>{hours === 1 ? 'hour' : 'hours'}</div>
              </div>
            )}
            {minutes === 0 ? null : (
              <div>
                <div>{minutes}</div>
                <div>{minutes === 1 ? 'minute' : 'minutes'}</div>
              </div>
            )}
            {seconds === 0 ? null : (
              <div>
                <div>{seconds}</div>
                <div>{seconds === 1 ? 'second' : 'seconds'}</div>
              </div>
            )}
          </div>
        ) : (
          <div className="twitch">
            <div className="twitch-video">
              <iframe
                allowFullScreen={true}
                frameBorder="0"
                height="100%"
                scrolling="no"
                src="https://player.twitch.tv/?channel=wjhurley&parent=michaelandsonia.com&muted=true"
                title="Twitch Video Stream"
                width="100%"
              ></iframe>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default App;

