/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./PUIImmutableBinaryStatus.css"
import {PUICard} from "../../../views/PUICard/PUICard";
import {PUIColor} from "../../../../PUIColor";

export interface PUIImmutableBinaryStatusProps {
	value: boolean;
	label: string;
}

export function PUIImmutableBinaryStatus(props: PropsWithChildren<PUIImmutableBinaryStatusProps>): ReactElement {

	return (<PUICard className={"PUIImmutableBinaryStatus"}>
		<span className={"label"}>{props.label}:</span>
		<div className={"status"} style={{background: props.value ? PUIColor.green : PUIColor.red}}/>
	</PUICard>);

}
