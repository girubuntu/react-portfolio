import React from "react";
import "./footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Girubuntu
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://linkedin.com/in/girubuntu-sam-2787a41a1"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/girubuntu" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div className="footer_copyright">
<small>&copy; Girubuntu portfolio All rights reserve</small>;

      </div>
    </footer>
  );
};

export default Footer;
