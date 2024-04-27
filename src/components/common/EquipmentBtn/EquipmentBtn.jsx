import AC from "@/assets/icons/AC.svg";
import Transmission from "@/assets/icons/Transmission.svg";
import Kitchen from "@/assets/icons/Kitchen.svg";
import TV from "@/assets/icons/TV.svg";
import Shower from "@/assets/icons/Shower.svg";
import FullyIntegrated from "@/assets/icons/FullyIntegrated.svg";
import Alcove from "@/assets/icons/Alcove.svg";
import PanelTruck from "@/assets/icons/PanelTruck.svg";

import style from "./EquipmentBtn.module.scss";

import IconComponent from "@/components/common/IconComponent/index.js";

const EquipmentBtn = ({ text, handleClick, isActive }) => {
  if (!text) return null;
  let iconValue;

  switch (text) {
    case "AC":
      iconValue = AC;
      break;
    case "Automatic":
      iconValue = Transmission;
      break;
    case "Kitchen":
      iconValue = Kitchen;
      break;
    case "TV":
      iconValue = TV;
      break;
    case "Shower/WC":
      iconValue = Shower;
      break;
    case "Fully Integrated":
      iconValue = FullyIntegrated;
      break;
    case "Alcove":
      iconValue = Alcove;
      break;
    case "Van":
      iconValue = PanelTruck;
      break;
    default:
      iconValue = null;
  }

  return (
    <button
      type="submit"
      className={
        isActive ? style.EquipmentBtn + " " + isActive : style.EquipmentBtn
      }
      onClick={handleClick}
    >
      {IconComponent && <IconComponent />}
      {text}
    </button>
  );
};

export default EquipmentBtn;
