/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./PUIMutableBinaryStatus.css";
import {CheckBox, CheckBoxOutlineBlank} from "@material-ui/icons";
import {PUICard} from "../PUICard/PUICard";

export interface PUIMutableBinaryStatusProps {
	label: string;
	value: boolean;
	setValue: (value: boolean) => void;
}

export function PUIMutableBinaryStatus(props: PropsWithChildren<PUIMutableBinaryStatusProps>): ReactElement {

	return (<PUICard onClick={() => props.setValue(!props.value)} className={"PUIMutableBinaryStatus"}>
		<span className={"label"}>{props.label}:</span>
		{props.value ? <CheckBox/> : <CheckBoxOutlineBlank/>}
	</PUICard>);

}
