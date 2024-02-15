import Api from "../api/Api";

const car = () => {
  return (
    <div id="car">
      <div id="CarApi">
        <div id="CarTextUzb">
          <h1>O’zbekistonda mashinalar narxi</h1>
          <p>100 у.е. dan 388 947 у.е. gacha bo`lgan 59 128 ta elon topildi</p>
        </div>
        <div>
          <Api />
        </div>
      </div>
    </div>
  );
};

export default car;