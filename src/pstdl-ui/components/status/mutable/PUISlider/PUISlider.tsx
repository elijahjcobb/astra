/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./PUISlider.css";
import {PUICard} from "../../../views";
import {Input, Slider} from "@material-ui/core";

export interface PUISliderProps {

}

export function PUISlider(props: PropsWithChildren<PUISliderProps>): ReactElement {

	const [value, setValue] = React.useState<number | string | Array<number | string>>(30);

	const handleSliderChange = (event: any, newValue: number | number[]) => {
		setValue(newValue);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value === '' ? '' : Number(event.target.value));
	};

	const handleBlur = () => {
		if (value < 0) {
			setValue(0);
		} else if (value > 100) {
			setValue(100);
		}
	};

	return (<PUICard className={"PUISlider"}>
		<span className={"label"}>Hello, PUISlider!</span>
		<div className={"bottom"}>
			<Slider
				value={typeof value === 'number' ? value : 0}
				onChange={handleSliderChange}
				className={"slider"}
			/>
			<Input
				value={value}
				className={"input"}
				margin="dense"
				onChange={handleInputChange}
				onBlur={handleBlur}
				inputProps={{
					step: 10,
					min: 0,
					max: 100,
					type: 'number',
					'aria-labelledby': 'input-slider',
				}}
			/>
		</div>
	</PUICard>);

}
