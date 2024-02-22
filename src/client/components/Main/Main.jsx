import "./Main.css";
import {
  MainDataMenu,
  itemMenuRegionsData,
  itemMenuCampaignsData,
  MainCheckboxData,
} from "../../data/MainData/MainData";
import { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = () => {
  const [checkboxStates, setCheckboxStates] = useState(
    MainCheckboxData.reduce((acc, data) => {
      acc[data.id] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (id) => {
    setCheckboxStates((prev) => {
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };

  const sectionIcon = 15;

  return (
    <main id="main">
      <div id="mainFlex">
        <div id="mianFlex2">
          <div>
            <div id="header_menu">
              {MainDataMenu?.map((data) => {
                return (
                  <div key={data.id}>
                    <h3>{data.name}</h3>
                    <div id="border"></div>
                  </div>
                );
              })}
            </div>
            <div id="menu_item">
              <div id="itemMenuRegionsData">
                {itemMenuRegionsData?.map((data) => {
                  return (
                    <Link key={data.id} to="#apiimgText">
                      <div>
                        <p>{data.name}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div id="itemMenuCampaignsData">
                {itemMenuCampaignsData?.map((data) => {
                  return (
                    <Link key={data.id} to="#apiimgText">
                      <div>
                        <p>{data.name}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div id="modelMenu">
                <p>Model</p>
                <p>Pozitsiya</p>
              </div>
              <div id="checkbox">
                {MainCheckboxData?.map((data) => (
                  <div key={data.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkboxStates[data.id]}
                        onChange={() => handleCheckboxChange(data.id)}
                      />
                      <p>{data?.name}</p>
                    </label>
                  </div>
                ))}
              </div>
              <div id="advancedSection">
                <VscSettings size={sectionIcon} />
                <a href="#car">
                  <p>Kengaytirilgan qidiruv</p>
                </a>
                <FaArrowDown size={sectionIcon} />
              </div>
            </div>
          </div>
        </div>
        <div id="mianFlex2">
          <div className="secondary">
            <div id="MainInputText">
              <div id="MainPrice">
                <p>Narxi</p>
                <p>so`m</p>
                <p>у.е.</p>
              </div>
              <div>
                <div id="MainInput">
                  <div id="InputPrice">
                    <input type="number" placeholder="dan" />
                  </div>
                  <div id="InputPrice2">
                    <input type="number" placeholder="gacha" />
                  </div>
                </div>
                <div id="MainMoney">
                  <p>2 500 gacha</p>
                  <p>2 500 — 6 500</p>
                  <p>6 500 dan</p>
                </div>
              </div>
            </div>
            <div id="MainInputText">
              <div id="MainPrice">
                <p>Yili</p>
              </div>
              <div>
                <div id="MainInput">
                  <div id="InputPrice">
                    <input type="number" placeholder="dan" />
                  </div>
                  <div id="InputPrice2">
                    <input type="number" placeholder="gacha" />
                  </div>
                </div>
                <div id="MainMoney">
                  <p>3 yoshgacha</p>
                  <p>7 gacha</p>
                  <p>7 dan katta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mainButton">
        <a href="#car">
          <button>E`lonni ko`rsatish</button>
        </a>
      </div>
    </main>
  );
};

export default Main;
