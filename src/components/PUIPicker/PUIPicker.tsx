/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, ChangeEvent, useRef} from "react";
import "./PUIPicker.css"
import {PUICard} from "../PUICard/PUICard";

export interface PUIPickerProps {
	label: string;
	options: string[];
	value: number;
	setValue: (value: number) => void;
}

export function PUIPicker(props: PropsWithChildren<PUIPickerProps>): ReactElement {


	function handleOnChange(e: ChangeEvent<HTMLSelectElement>): void {
		let i = props.options.indexOf(e.target.value);
		if (i === -1) i = 0;
		props.setValue(i)
	}

	return (<PUICard className={"PUIPicker"}>
		<span className={"label"}>{props.label}:</span>
		<select onChange={handleOnChange} value={props.options[props.value]} className={"picker"}>
			{
				props.options.map((v, i) => {
					return <option value={v} key={i}>{v}</option>
				})
			}
		</select>
	</PUICard>);

}
