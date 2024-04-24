import {useState} from "react";
import Button from "@/components/common/Button/Button.jsx";
import {createPortal} from "react-dom";
import Modal from "@/components/Modal/Modal.jsx";

import s from './PortalButton.module.scss';

const PortalButton = ({camper, className, btnText}) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Button className={s.btn} onClick={() => setShowModal(true)} text={btnText} />
			{showModal && createPortal(
				<Modal camperInfo={camper} onClose={() => setShowModal(false)} /> , document.body
			)}
		</>
	)
}

export default PortalButton;
