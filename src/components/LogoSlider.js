import React, { useEffect, useRef } from 'react';

const LogoSlider = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const logos = logosRef.current;
    const logosCopy = logos.innerHTML;
    logos.innerHTML += logosCopy;
  }, []);

  return (
    <div class="features">
    <div class="logos">
      <img className="twilio"src="img/twilio-ar21.svg" alt="" />
      <img src="img/SendGrid.svg" alt="" />
      <img src="img/git2.svg" alt="" />
      <img src="img/okta.svg" alt="" />
      <img src="img/slack.svg" alt="" />
      <img src="img/ms.svg" alt="" />
      <img className="zoom" src="img/zoomus-ar21.svg" alt="" />
    </div>
  </div>
  );
};

export default LogoSlider;
