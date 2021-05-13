/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./PUISegmentedPicker.css";
import {PUICard} from "../../../views/PUICard/PUICard";

export interface PUISegmentedPickerProps {
	label: string;
	options: string[];
	value: number;
	setValue: (value: number) => void;
}

export function PUISegmentedPicker(props: PropsWithChildren<PUISegmentedPickerProps>): ReactElement {

	return (<PUICard className={"PUISegmentedPicker"}>
		<span className={"label"}>{props.label}:</span>
		<div className={"picker"}>
			{
				props.options.map((v, i) => {
					return <span
						className={"option" + (i === props.value ? " selected" : "")}
						key={i}
						onClick={() => props.setValue(i)}
					>{v}</span>
				})
			}
		</div>
	</PUICard>);

}
