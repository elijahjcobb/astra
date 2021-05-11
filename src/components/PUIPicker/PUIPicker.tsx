/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./PUIPicker.css"
import {PUICard} from "../PUICard/PUICard";
import {MenuItem, Select} from "@material-ui/core";

export interface PUIPickerProps {
	label: string;
	options: string[];
	value: number;
	setValue: (value: number) => void;
}

export function PUIPicker(props: PropsWithChildren<PUIPickerProps>): ReactElement {

	return (<PUICard className={"PUIPicker"}>
		<span className={"label"}>{props.label}:</span>
		<Select
			value={props.options[props.value]}
			onChange={v => props.setValue(props.options.indexOf(v.target.value as string))}
			displayEmpty
			className={"picker"}
		>
			{
				props.options.map((v, i) => {
					return <MenuItem key={i} value={v}>{v}</MenuItem>
				})
			}
		</Select>
	</PUICard>);

}
