import { Link, NavLink } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/Yash.jpg"
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo"/>
        {/* <P> Yash</P> */}
      </Link>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active about-link" : "about-link"
          }
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active contact-link" : "contact-link"
          }
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreffer"
            href="https://www.linkedin.com/in/yash-sindhwani-9a36b2212/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreffer"
            href="https://github.com/yashsindhwani7"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
