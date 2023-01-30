import React from 'react';
import coverImage from '../../assets/images/nightsky.jpg';

function Header(heaDer) {

  return (
    <header className="flex-row space-between px-3">
      <h1>Randy DeCent</h1>
      <img src={coverImage} alt="nightsky"></img>
      {heaDer.children}
    </header>
  );
}

export default Header;
