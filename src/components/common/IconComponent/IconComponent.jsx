import AirConditioner from '@/assets/icons/AirConditioner.svg';
import Bed from '@/assets/icons/Bed.svg';
import CD from '@/assets/icons/CD.svg';
import Freezer from '@/assets/icons/Freezer.svg';
import Gas from '@/assets/icons/Gas.svg';
import Hob from '@/assets/icons/Hob.svg';
import Kitchen from '@/assets/icons/Kitchen.svg';
import Microwave from '@/assets/icons/Microwave.svg';
import Petrol from '@/assets/icons/Petrol.svg';
import Radio from '@/assets/icons/Radio.svg';
import Shower from '@/assets/icons/ShowerSmall.svg';
import ToiletPaper from '@/assets/icons/ToiletPaper.svg';
import Transmission from '@/assets/icons/Transmission.svg';
import TV from '@/assets/icons/TVsmall.svg';
import Users from '@/assets/icons/Users.svg';
import Water from '@/assets/icons/Water.svg';

import styles from './IconComponent.module.scss';

import { firstToUpperCase, makePluralOrSingular } from '@/utils/helpers/utils.js';

const IconComponent = ({ attribute, text }) => {
  if (!text) return null;

  let iconValue;

  switch (attribute) {
    case 'airConditioner':
      iconValue = AirConditioner;
      text += ' Air Conditioner';
      break;
    case 'bathroom':
      iconValue = Shower;
      text = firstToUpperCase(attribute);
      break;
    case 'beds':
      iconValue = Bed;
      text += makePluralOrSingular(text, attribute);
      break;
    case 'CD':
      iconValue = CD;
      text = attribute;
      break;
    case 'freezer':
      iconValue = Freezer;
      text = firstToUpperCase(attribute);
      break;
    case 'gas':
      iconValue = Gas;
      text = firstToUpperCase(attribute) + ' ' + text;
      break;
    case 'hob':
      iconValue = Hob;
      text += makePluralOrSingular(text, attribute);
      break;
    case 'kitchen':
      iconValue = Kitchen;
      text = firstToUpperCase(attribute);
      break;
    case 'microwave':
      iconValue = Microwave;
      text = firstToUpperCase(attribute);
      break;
    case 'engine':
      iconValue = Petrol;
      text = firstToUpperCase(text);
      break;
    case 'radio':
      iconValue = Radio;
      text = firstToUpperCase(attribute);
      break;
    case 'shower':
      iconValue = Shower;
      text += makePluralOrSingular(text, attribute);
      break;
    case 'toilet':
      iconValue = ToiletPaper;
      text += makePluralOrSingular(text, attribute);
      break;
    case 'transmission':
      iconValue = Transmission;
      text = firstToUpperCase(text);
      break;
    case 'TV':
      iconValue = TV;
      text = attribute;
      break;
    case 'adults':
      iconValue = Users;
      text += makePluralOrSingular(text, attribute);
      break;
    case 'water':
      iconValue = Water;
      text = firstToUpperCase(attribute) + ' ' + text;
      break;
    default:
      iconValue = null;
      text = '';
  }

  return (
    <div className={styles.Attribute}>
      {IconComponent && <IconComponent height="20px" />}
      <span>{text}</span>
    </div>
  );
};

export default IconComponent;
