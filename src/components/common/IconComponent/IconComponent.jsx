import AC from "@/assets/icons/AC.svg";
import CD from "@/assets/icons/CD.svg";
import TV from "@/assets/icons/TV.svg";
import AirConditioner from "@/assets/icons/AirConditioner.svg";
import Bed from "@/assets/icons/Bed.svg";
import Freezer from "@/assets/icons/Freezer.svg";
import Gas from "@/assets/icons/Gas.svg";
import Hob from "@/assets/icons/Hob.svg";
import Kitchen from "@/assets/icons/Kitchen.svg";
import Microwave from "@/assets/icons/Microwave.svg";
import Radio from "@/assets/icons/Radio.svg";
import Shower from "@/assets/icons/Shower.svg";
import Toilet from "@/assets/icons/Toilet.svg";
import Water from "@/assets/icons/Water.svg";
import Adults from "@/assets/icons/Adults.svg";
import Transmission from "@/assets/icons/Transmission.svg";
import Petrol from "@/assets/icons/Petrol.svg";
import Alcove from "@/assets/icons/Alcove.svg";
import FullyIntegrated from "@/assets/icons/FullyIntegrated.svg";
import PanelTruck from "@/assets/icons/Van.svg";

import s from './IconComponent.module.scss';

const IconComponent = ({ icon, text, quantity, width = '20', height = '20' }) => {
  let iconVar;

  switch (icon) {
    case "CD":
      iconVar = CD;
      text = "CD";
      break;
    case "AC":
      iconVar = AC;
      text = "AC";
      break;
    case "TV":
      iconVar = TV;
      text = "TV";
      break;
    case "airConditioner":
      iconVar = AirConditioner;
      text = "AirConditioner";
      break;
    case "bathroom":
      iconVar = Shower;
      text = "Bathroom";
      break;
    case "beds":
      iconVar = Bed;
      text = "beds";
      break;
    case "freezer":
      iconVar = Freezer;
      text = "Freezer";
      break;
    case "gas":
      iconVar = Gas;
      text = "Gas";
      break;
    case "hob":
      iconVar = Hob;
      text = "Hob";
      break;
    case "kitchen":
      iconVar = Kitchen;
      text = "Kitchen";
      break;
    case "microwave":
      iconVar = Microwave;
      text = "Microwave";
      break;
    case "radio":
      iconVar = Radio;
      text = "Radio";
      break;
    case "shower":
      iconVar = Shower;
      text = "Shower";
      break;
    case "toilet":
      iconVar = Toilet;
      text = "Toilet";
      break;
    case "water":
      iconVar = Water;
      text = "Water";
      break;
    case "adults":
      iconVar = Adults;
      text = "adults";
      break;
    case "transmission":
      iconVar = Transmission;
      text = "automatic";
      break;
    case "engine":
      iconVar = Petrol;
      text = "petrol";
      break;
			case "alcove":
      iconVar = Alcove;
			text = null;
      break;
			case "fullyIntegrated":
      iconVar = FullyIntegrated;
			text = null;
      break;
			case "panelTruck":
      iconVar = PanelTruck;
			text = null;
      break;
	  case "AC-Equip":
		  iconVar = AC;
		  text = null;
		  break;
	  case "TV-Equip":
		  iconVar = TV;
		  text = null;
		  break;
	  case "bathroom-Equip":
		  iconVar = Shower;
		  text = null;
		  break;
	  case "transmission-Equip":
		  iconVar = Transmission;
		  text = null;
		  break;
			case "kitchen-Equip":
		  iconVar = Kitchen;
		  text = null;
		  break;
    default:
      iconVar = null;
      text = null;
  }

  return (
    <div className={s.wrap}>
      {iconVar && <img src={iconVar} alt={text} width={width} height={height} />}
      {quantity === text ? null : <span>{quantity}</span>}
      {text !== null && <p>{text}</p>}
    </div>
  );
};

export default IconComponent;
