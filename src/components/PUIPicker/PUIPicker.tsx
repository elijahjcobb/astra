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

	return (<PUICard className={"PUIPicker"}>
		<span className={"label"}>{props.label}:</span>
		<select onChange={e => props.setValue(e.target.selectedIndex)} value={props.options[props.value]} className={"picker"}>
			{
				props.options.map((v, i) => {
					return <option value={v} key={i}>{v}</option>
				})
			}
		</select>
	</PUICard>);

}
