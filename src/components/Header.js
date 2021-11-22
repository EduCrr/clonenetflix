import React from "react";
import "./Header.css";

export default function Header({ black }) {
  return (
    <header className={black ? "black" : ""}>
      <div className="headerLogo">
        <a href="/">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="headerUser">
        <a href="/">
          <img
            src="https://www.seekpng.com/png/full/356-3562377_personal-user.png"
            alt="usuario"
          />
        </a>
      </div>
    </header>
  );
}
