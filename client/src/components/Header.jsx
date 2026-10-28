import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className={`${open ? " toggle" : ""}`}>
        <h4>~/[ Portfolio ]</h4>
        <div
          className={`${open ? "hamburger-menu toggle" : "hamburger-menu"}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
        </div>
        <ul className="links">
          <li>
            <a href="#">./project</a>
          </li>
          <li>
            <a href="#">./about</a>
          </li>
          <li>
            <a href="#">./contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
