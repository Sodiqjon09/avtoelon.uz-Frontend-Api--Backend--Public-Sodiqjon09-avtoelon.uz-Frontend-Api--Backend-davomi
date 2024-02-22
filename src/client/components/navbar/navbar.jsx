import "./navbar.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavbarData } from "../../data/navbar/navbar";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const NavbarComponent = () => {
  const [text, setText] = useState(true);
  const [icon, setIcon] = useState(false);
  const [Bars, setBars] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 771px)").matches) {
        setText(false);
        setIcon(true);
      } else {
        setText(true);
        setIcon(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  const BarsButton = () => {
    setBars(true);
    setIcon(false);
  };

  const IoCloseSharpClick = () => {
    setBars(false);
    setIcon(true);
  };

  return (
    <header id="header">
      <div id="headerName">
        <div id="av">
          <h1>avtoelon.uz</h1>
        </div>
        {text && (
          <ul>
            {NavbarData?.map((car) => (
              <li key={car.id}>
                <Link to={car.Link}>{car.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {text && (
        <div id="headerTwo">
          <Link to="post">
            <animated.button className="btn" style={styles}>
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span>Sotish</span>
            </animated.button>
          </Link>
        </div>
      )}
      {icon && (
        <div id="navbarIcon">
          <FaBars onClick={BarsButton} size={30} id="FaBars" />
        </div>
      )}
      {Bars && (
        <div id="BarsClick">
          <div id="click">
            <div id="barsText">
              <div>
                <ul>
                  {NavbarData?.map((car) => (
                    <li key={car.id}>
                      <Link to={car.Link}>{car.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <IoCloseSharp
              onClick={IoCloseSharpClick}
              size={35}
              id="IoCloseSharp"
            />
          </div>
          <div className="headerTwo" id="headerTwo">
            <Link to="post">
              <animated.button className="btn" style={styles}>
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span>Sotish</span>
              </animated.button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarComponent;
