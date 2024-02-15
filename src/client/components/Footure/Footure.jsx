import "./footure.css";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FootureData1 } from "../../data/Footure/Footure";
import { FootureData2 } from "../../data/Footure/Footure";
import Play from "../../assets/imgs/4.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footure = () => {
  const [socialSize, setSocialSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 760px)").matches) {
        setSocialSize(36);
      } else if (window.matchMedia("(max-width: 680px)").matches) {
        setSocialSize(20);
      } else {
        setSocialSize(45);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer id="footer">
      <div id="footurData">
        <div id="footerAData">
          {FootureData1?.map((data, index) => {
            return (
              <Link to={data.URL} key={data.id}>
                <p className={index === 0 ? "first-element" : ""}>
                  {data.name}
                </p>
              </Link>
            );
          })}
        </div>
        <div id="footerTwoData">
          {FootureData2?.map((data) => {
            return (
              <Link to={data.URL} key={data.id}>
                <p>{data.name}</p>
              </Link>
            );
          })}
          <div id="FooturImg">
            <img
              src="https://avtoelon.uz/static/frontend/images/svg/app-store.svg"
              alt=""
            />
            <img src={Play} alt="" />
            <img
              src="https://avtoelon.uz/static/frontend/images/promo/appgallery.png"
              alt=""
            />
          </div>
        </div>
        <div id="footureFlex">
        <div id="footureThreeData">
          <div>
            <Link to="https://avtoelon-uz-frontend-api-backend-public-sodiqjon09-jw7rvme11.vercel.app/">
              <p>Yangiliklarimiz bilan tanishib boring</p>
            </Link>
          </div>
          <div id="FootureData">
            <div id="icon">
              <FaFacebookSquare
                size={socialSize}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div id="icon">
              <FaInstagramSquare
                size={socialSize}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div id="icon">
              <BsTelegram size={socialSize} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footure;