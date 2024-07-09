import React, { useState } from 'react';


const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`hamburger ${isActive ? 'is-active' : ''}`}
      id="hamburger-5"
      onClick={handleClick}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

export default HamburgerMenu;