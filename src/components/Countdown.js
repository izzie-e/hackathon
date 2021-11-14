import React, { useState, useEffect } from "react";

const Countdown = () => {
    // the number in useState represents the number of seconds - for 30mins it would be 1800

    let seconds = 6;
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    let timeout;
    if (countdown > 0) {
      timeout = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [countdown]);

  
  return <div>{countdown}</div>;
};

export default Countdown;