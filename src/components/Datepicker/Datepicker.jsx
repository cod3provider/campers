import React, {useRef} from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

import s from "./Datepicker.module.scss";

const Datepicker = ({ onChange }) => {
	const datePickerRef = useRef(null);

	const disabledDate = (current) => {
		return current && current < dayjs().endOf('day');
	};

	return (
	<Space direction="vertical" size={12}>
		<DatePicker
			disabledDate={disabledDate}
			ref={datePickerRef}
			className={s.datepicker}
			presets={[
				{
					label: "Tomorrow",
					value: dayjs().add(+1, "d"),
				},
				{
					label: "Next Week",
					value: dayjs().add(+7, "d"),
				},
				{
					label: "Next Month",
					value: dayjs().add(+1, "month"),
				},
			]}
			onChange={(date, dateString) => {
				if (dateString) {
					onChange(dateString);
				} else {
					onChange("");
				}
			}}
		/>
	</Space>)
};
export default Datepicker;
