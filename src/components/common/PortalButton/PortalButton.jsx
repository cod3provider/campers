import {useState} from "react";
import Button from "@/components/common/Button/Button.jsx";
import {createPortal} from "react-dom";
import Modal from "@/components/common/Modal/Modal.jsx";

const PortalButton = ({camper, className, btnText}) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Button className={className} onClick={() => setShowModal(true)} text={btnText} />
			{showModal && createPortal(
				<Modal camperInfo={camper} onClose={() => setShowModal(false)} /> , document.body
			)}
		</>
	)
}

export default PortalButton;
