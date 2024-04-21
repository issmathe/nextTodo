import React from 'react';
import "./style.css"
import Image from 'next/image';
import logo from '../resim/logo.jpg';

const Header = () => {
  return (
    <header>
      <div className="logoContainer">
      <Image src={logo} alt="Logo" width={100} height={100} />

      </div>
      <nav>
        <ul>
          <li><a href="#">ANASAYFA</a></li>
          <li><a href="#">HİZMETLERİMİZ</a></li>
          <li><a href="#">HAKKIMIZDA</a></li>
          <li><a href="#">İLETİŞİM</a></li>
        </ul>
      </nav>
      <div className="headerButtonContainer">
        <button className="button buttonPrimary">Kayıt ol</button>
        <button className="button buttonSecondary">Giriş yap</button>
      </div>
    </header>
  );
};

export default Header;
