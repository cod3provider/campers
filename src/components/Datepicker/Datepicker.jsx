import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
// const { RangePicker } = DatePicker;

import s from './Datepicker.module.scss';

const onChange = (date) => {
	if (date) {
		console.log('Date: ', date);
	} else {
		console.log('Clear');
	}
};
// const onRangeChange = (dates, dateStrings) => {
// 	if (dates) {
// 		console.log('From: ', dates[0], ', to: ', dates[1]);
// 		console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
// 	} else {
// 		console.log('Clear');
// 	}
// };
// const rangePresets = [
// 	{
// 		label: 'Last 7 Days',
// 		value: [dayjs().add(-7, 'd'), dayjs()],
// 	},
// 	{
// 		label: 'Last 14 Days',
// 		value: [dayjs().add(-14, 'd'), dayjs()],
// 	},
// 	{
// 		label: 'Last 30 Days',
// 		value: [dayjs().add(-30, 'd'), dayjs()],
// 	},
// 	{
// 		label: 'Last 90 Days',
// 		value: [dayjs().add(-90, 'd'), dayjs()],
// 	},
// ];
const Datepicker = () => (
	<Space direction="vertical" size={12}>
		<DatePicker
			className={s.datepicker}
			presets={[
				{
					label: 'Tomorrow',
					value: dayjs().add(+1, 'd'),
				},
				{
					label: 'Next Week',
					value: dayjs().add(+7, 'd'),
				},
				{
					label: 'Next Month',
					value: dayjs().add(+1, 'month'),
				},
			]}
			onChange={onChange}
		/>
		{/*<RangePicker presets={rangePresets} onChange={onRangeChange} />*/}
		{/*<RangePicker*/}
		{/*	presets={[*/}
		{/*		{*/}
		{/*			label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,*/}
		{/*			value: () => [dayjs(), dayjs().endOf('day')], // 5.8.0+ support function*/}
		{/*		},*/}
		{/*		...rangePresets,*/}
		{/*	]}*/}
		{/*	showTime*/}
		{/*	format="YYYY/MM/DD HH:mm:ss"*/}
		{/*	onChange={onRangeChange}*/}
		{/*/>*/}
	</Space>
);
export default Datepicker;
