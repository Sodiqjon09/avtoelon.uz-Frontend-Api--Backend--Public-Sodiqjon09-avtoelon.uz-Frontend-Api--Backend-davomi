import { useState } from "react";
import AdvertiseText from "../../components/AdvertiseText/AdvertiseText";
import {
  carNames,
  carNamesMapping,
  carColorsName,
  coat,
  FuelType,
  UzatishQutisi,
  regions,
  cities,
} from "../../data/PostData/PostData";
import PostNavbar from "../../components/postNavbar/postNavbar";
import Footure from "../../components/Footure/Footure";
import { IoLogoModelS } from "react-icons/io";
import { FaBorderStyle } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { GiShakingHands } from "react-icons/gi";
import { SiGitextensions } from "react-icons/si";
import { IoColorPalette } from "react-icons/io5";
import { GiPaintBucket } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { MdLocalGasStation } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FcEngineering } from "react-icons/fc";
import { FaCarSide } from "react-icons/fa";
import { toast } from "react-toastify";

import "./Post.css";

const Post = () => {
  const [yearError, setYearError] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedModels, setSelectedModels] = useState([]);
  const [priceError, setPriceError] = useState(false);
  const [walkingError, setWalking] = useState(false);
  const [newCarData, setNewCarData] = useState({
    id: 14,
    yili: "",
    savdolashuv: "",
    yurgani: "",
    uzatma: "",
    xolati: "",
    yeyishi: "",
    karobka: "",
    rang: "",
    kraska_holati: "",
    narhi: "",
    valyuta: "",
    dvigatel: "",
    data: "",
    viewed_list: 0,
    yana: "",
    model: "",
    rusum: "",
    viloyat: "",
    manzil: "",
    user: 1,
    photo: [14, 15],
  });

  const handleInputChange = (e) => {
    const { name, type, value, files } = e.target;

    if (type === "file") {
      setNewCarData({
        ...newCarData,
        [name]: files[0],
      });
    } else if (name === "model") {
      const selectedCarName = value;
      setSelectedCar(selectedCarName);
      const models = carNamesMapping[selectedCarName] || [];
      setSelectedModels(models);
      setNewCarData({
        ...newCarData,
        rusum: "",
      });
    } else if (name === "narhi") {
      const numericValue = parseInt(value, 10);
      if (numericValue < 100 || numericValue > 1000000) {
        setPriceError(true);
      } else {
        setPriceError(false);
      }
      if (numericValue < 0 || numericValue > 9999999) {
        setWalking(true);
      } else {
        setWalking(false);
      }
      setNewCarData({
        ...newCarData,
        [name]: numericValue,
      });
    } else if (name === "yili") {
      const year = parseInt(value, 10);
      setNewCarData({
        ...newCarData,
        [name]: value,
      });
      if (year < 1900 || year > 2024) {
        setYearError(true);
      } else {
        setYearError(false);
      }
    } else {
      setNewCarData({
        ...newCarData,
        [name]: value,
      });
    }
  };

  const handleCarChange = (event) => {
    const selectedCarName = event.target.value;
    setSelectedCar(selectedCarName);
    setSelectedModels(carNamesMapping[selectedCarName] || []);
  };

  const postData = async () => {
    try {
      const formData = new FormData();

      for (const key in newCarData) {
        if (key === "photo") {
          const files = newCarData[key];
          if (files) {
            for (let i = 0; i < files.length; i++) {
              formData.append(`${key}_${i}`, files[i]);
            }
          }
        } else {
          formData.append(key, newCarData[key]);
        }
      }

      const response = await fetch(
        "https://masterphoneuz.pythonanywhere.com/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Data successfully posted!");
      } else {
        console.error("Error posting data:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
    toast.success("E'lon qabul qilindi!");
  };

  return (
    <>
      <PostNavbar />
      <div id="Post">
        <div>
          <div className="content">
            <div>
              <h2>Add Avto</h2>
              <h2>Add Avto</h2>
            </div>
          </div>
          <AdvertiseText />
          <form id="formData" encType="multipart/form-data">
            <label id="AddAvto" name="Model">
              <div className="modleTextIcon">
                <IoLogoModelS />
                <p>Model:</p>
              </div>
              <select
                name="model"
                value={selectedCar}
                onChange={handleCarChange}
                id=""
              >
                <option value="">Tanlash</option>
                {carNames.map((carName) => (
                  <option key={carName.id} value={carName.name}>
                    {carName.name}
                  </option>
                ))}
              </select>
            </label>
            <label id="AddAvto" name="Rusum">
              <div className="modleTextIcon">
                <FaBorderStyle />
                <p>Rusum:</p>
              </div>
              <select
                value={newCarData.rusum}
                name="rusum"
                id="rusumSelect"
                onChange={handleInputChange}
              >
                <option value="">Tanlash</option>
                {selectedModels.length > 0 &&
                  selectedModels.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
              </select>
            </label>
            <label id="AddAvto" name="Yili">
              <div className="modleTextIcon">
                <IoIosTime />
                <p>Yili:</p>
              </div>
              <div className="yili">
                <input
                  style={{ width: "150px" }}
                  value={newCarData.yili}
                  type="date"
                  name="yili"
                  onChange={handleInputChange}
                />
                {yearError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: ".8461538462em",
                      width: "100%",
                    }}
                  >
                    Yaroqsiz yil. 1900 va 2024 yillar oralig`idagi yilni
                    kiriting.
                  </p>
                )}
              </div>
            </label>
            <label id="AddAvto">
              <div className="modleTextIcon">
                <MdPriceChange />
                <p>Narhi:</p>
              </div>
              <div className="Componentinput">
                <div id="narxiFlex">
                  <div>
                    <input
                      value={newCarData.narhi}
                      type="number"
                      name="narhi"
                      onChange={handleInputChange}
                    />
                  </div>
                  <select
                    value={newCarData.valyuta}
                    onChange={handleInputChange}
                    name="valyuta"
                    id=""
                  >
                    <option value="UZS">UZS</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <br />
                {priceError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: ".8461538462em",
                      width: "100%",
                    }}
                  >
                    Yaroqsiz summa. 100 va 1000000 summa o`ralig`ida summa
                    kiriting
                  </p>
                )}
              </div>
            </label>
            <label id="AddAvto">
              <div className="modleTextIcon">
                <GiShakingHands />
                <p>savdolashuv:</p>
              </div>
              <div>
                <select
                  value={newCarData.savdolashuv}
                  type="text"
                  name="savdolashuv"
                  onChange={handleInputChange}
                >
                  <option value="">Tanlash</option>
                  <option value="Savdolashuv yoq">Savdolashuv yoq</option>
                  <option value="Savdolashuv bor">Savdolashuv bor</option>
                </select>
              </div>
            </label>
            <label id="AddAvto">
              <div className="modleTextIcon">
                <SiGitextensions />
                <p>Uzatma:</p>
              </div>
              <select
                value={newCarData.uzatma}
                type="text"
                name="uzatma"
                onChange={handleInputChange}
              >
                <option value="">Tanlash</option>
                <option value="Oldi">Oldi</option>
                <option value="Orqa">Orqa</option>
                <option value="To`liq">To`liq</option>
              </select>
            </label>
            <label id="AddAvto">
              <div className="modleTextIcon">
                <IoCarSport />
                <p>Xolati:</p>
              </div>
              <select
                value={newCarData.xolati}
                type="text"
                name="xolati"
                onChange={handleInputChange}
              >
                <option value="">Tanlash</option>
                <option value="Ishlagan">Ishlagan</option>
                <option value="Avtosalon">Avtosalon</option>
              </select>
            </label>
            <label id="AddAvto">
              <div className="modleTextIcon">
                <MdLocalGasStation />
                <p>Yoqilg`i turi*</p>
              </div>
              <select
                value={newCarData.yeyishi}
                name="yeyishi"
                onChange={handleInputChange}
              >
                <option value="">Tanlash</option>
                {FuelType.map((el) => (
                  <option key={el.id} value={el.name}>
                    {el.name}
                  </option>
                ))}
              </select>
            </label>
            <label id="AddAvto">
              <div className="modleTextIcon">
                <TbAutomaticGearbox />
                <p>Uzatish qutisi*</p>
              </div>
              <select
                value={newCarData.karobka}
                name="karobka"
                onChange={handleInputChange}
                id=""
              >
                <option value="">Tanlash</option>
                {UzatishQutisi.map((el) => (
                  <option key={el.id}>{el.name}</option>
                ))}
              </select>
            </label>
            <label id="AddAvto">
              <div className="modleTextIcon">
                <IoColorPalette />
                <p>Rang:</p>
              </div>
              <select
                value={newCarData.rang}
                name="rang"
                onChange={handleInputChange}
                id=""
              >
                <option>Tanlash</option>
                {carColorsName.map((el) => (
                  <option key={el.id}>{el.name}</option>
                ))}
              </select>
            </label>
            <label id="AddAvto">
              <div className="modleTextIcon">
                <GiPaintBucket />
                <p>Kraska Holati:</p>
              </div>
              <select
                value={newCarData.kraska_holati}
                name="kraska_holati"
                onChange={handleInputChange}
              >
                <option value="">Tanlash</option>
                {coat.map((el) => (
                  <option key={el.id}>{el.name}</option>
                ))}
              </select>
            </label>
            <label id="AddAvto">
              <div className="modleTextIcon">
                <FcEngineering />
                <p>Dvigatel hajmi:</p>
              </div>
              <div className="ViewedList">
                <input
                  value={newCarData.dvigatel}
                  type="number"
                  name="dvigatel"
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <label style={{ marginTop: "50px" }} id="AddAvto">
              <div className="modleTextIcon">
                <FaCarSide />
                <p>Yurgani:</p>
              </div>
              <div className="Componentinput">
                <div id="km">
                  <input
                    value={newCarData.yurgani}
                    type="text"
                    name="yurgani"
                    onChange={handleInputChange}
                  />
                  <p>km</p>
                </div>
                {walkingError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: ".8461538462em",
                      width: "100%",
                    }}
                  >
                    9999999 dan kam son kutilyapti
                  </p>
                )}
              </div>
            </label>

            <label style={{ marginTop: "90px" }} id="AddAvto">
              <div>
                <p>Yana:</p>
              </div>
              <div className="textarea">
                <textarea
                  placeholder="mashina haqida biror bir malumot kiriting"
                  maxLength={2000}
                  name="yana"
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </label>
            <div id="AddAvto">
              <div className="Componentinput">
                <p>Rasm:</p>
              </div>
              <div style={{ marginTop: "170px" }} id="foto">
                <div className="rasmQoshish">
                  <div id="putAPicture">
                    <label htmlFor="rasm_uchun">rasm qo`shish</label>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="rasm_uchun"
                      name="photo"
                      onChange={handleInputChange}
                      accept="image/*"
                    />
                  </div>
                  <div id="rasmQoshishPText">
                    <p>Faylni shu yerga ko`chirib qo`ying.</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div style={{ marginTop: "200px" }}></div>
        </div>

        <div>
          <label id="AddAvto" htmlFor="">
            <p>Viloyat:</p>
            <div>
              <select
                name="viloyat"
                id="viloyat"
                onChange={handleInputChange}
                value={newCarData.viloyat}
              >
                <option value="">Tanlash</option>
                {regions.map((el) => (
                  <option key={el.id} value={el.name}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <label id="AddAvto" htmlFor="">
            <p>Manzil:</p>
            <div>
              <select
                name="manzil"
                id="manzil"
                onChange={handleInputChange}
                value={newCarData.manzil}
              >
                <option value="">Tanlash</option>
                {cities[newCarData.viloyat]?.map((el) => (
                  <option key={el.id} value={el.name}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>
        <div id="postData">
          <button type="button" onClick={postData}>
            <div>E`lon berish</div>
          </button>
        </div>
      </div>
      <Footure />
    </>
  );
};

export default Post;
