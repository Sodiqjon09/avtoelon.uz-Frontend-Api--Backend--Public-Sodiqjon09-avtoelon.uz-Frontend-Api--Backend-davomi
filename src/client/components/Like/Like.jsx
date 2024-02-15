import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CheckboxComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [likeSize, setLikeSize] = useState("medium");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 880px)").matches) {
        setLikeSize("small");
      } else {
        setLikeSize("medium");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div id="like">
      <Checkbox
        size={likeSize}
        icon={<FavoriteBorderIcon />}
        checkedIcon={<FavoriteIcon />}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default CheckboxComponent;
