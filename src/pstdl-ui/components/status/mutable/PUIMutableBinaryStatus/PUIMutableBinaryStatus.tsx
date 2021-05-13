/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {PropsWithChildren, ReactElement} from "react";
import "./PUIMutableBinaryStatus.css";
import {CheckBox, CheckBoxOutlineBlank} from "@material-ui/icons";
import {PUICard} from "../../../views/PUICard/PUICard";
import {PUIColor} from "../../../../PUIColor";

export interface PUIMutableBinaryStatusProps {
	label: string;
	value: boolean;
	color?: PUIColor;
	setValue: (value: boolean) => void;
}

export function PUIMutableBinaryStatus(props: PropsWithChildren<PUIMutableBinaryStatusProps>): ReactElement {

	return (<PUICard onClick={() => props.setValue(!props.value)} className={"PUIMutableBinaryStatus"}>
		<span className={"label"}>{props.label}:</span>
		{props.value ? <CheckBox style={{color: props.color ?? PUIColor.white}}/> : <CheckBoxOutlineBlank />}
	</PUICard>);

}
