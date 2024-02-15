import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import Loading from "react-loading";
import Like from "../Like/Like";
import "./Car_api.css";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://masterphoneuz.pythonanywhere.com/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div id="api">
      {loading ? (
        <div>
          <div className="loadingio-spinner-spin-d6cvl6a6okb">
            <Loading />
          </div>
        </div>
      ) : (
        data.map((item) => (
          <div id="apiimgText" key={item.id}>
            <div id="apiImg">
              <img
                src={`https://masterphoneuz.pythonanywhere.com${item.photo[0].photo}`}
                alt={`Car model ${item.model.name}`}
              />
            </div>
            <div id="carUz">
              <div>
                <div id="carNameText">
                  <div id="model">
                    <h1>{item.rusum.name}</h1>
                    <Like />
                  </div>
                  <div id="cost">
                    <p>
                      <span>Narxi:</span>
                      <span>
                        {item.narhi} {item.valyuta}
                      </span>
                    </p>
                  </div>
                </div>
                <div id="apiText">
                  <p>yili: {item.yili},</p>
                  <p>{item.karobka},</p>
                  <p>dvigatel: {item.dvigatel},</p>
                  <p>{item.xolati},</p>
                  {/* <p>{item.yurgani} km</p>, */}
                  <p>{item.yeyishi},</p>
                  <p>{item.rang},</p>
                  <p>{item.savdolashuv},</p>
                  <p>{item.kraska_holati},</p>
                  <p>{item.rusum.name},</p>
                </div>
              </div>
              <div id="api_footure">
                <div id="city">
                  <p>{item.viloyat}</p>
                </div>
                <div id="carYili">
                  {/* <p>yili:</p> */}
                  <p>{item.data}</p>
                </div>
                <div id="eye">
                  <FaEye />
                  <p>
                    <span>{item.viewed_list} </span>
                    <span> ko`rganlar soni</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Api;
