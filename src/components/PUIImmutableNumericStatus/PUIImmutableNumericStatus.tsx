/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {PropsWithChildren, ReactElement, useContext} from "react";
import "./PUIImmutableNumericStatus.css";
import {PUICard} from "../PUICard/PUICard";
import {PUIApp, PUIContext} from "../../helpers/PUIApp";

export interface PUIImmutableNumericStatusProps {
	className?: string;
	label: string;
	value: number;
	precision?: number;
	range?: [number, number];
}

export function PUIImmutableNumericStatus(props: PropsWithChildren<PUIImmutableNumericStatusProps>): ReactElement {

	function isOutOfRange(): boolean {
		if (!props.range) return false;
		return props.value < props.range[0] || props.value > props.range[1];
	}

	function fixValue(): string {
		return props.value.toFixed(props.precision ?? 0);
	}

	function handleOnClick(): void {
		navigator.clipboard.writeText(fixValue()).catch(console.error);
		PUIApp.toast({msg: "Copied to Clipboard"})
	}

	return (<PUICard onClick={handleOnClick} className={"PUIImmutableNumericStatus" + (props.className ? (" " + props.className) : "")}>
		<span className={"label"}>{props.label + ":"}</span>
		<span className={"value" + (isOutOfRange() ? " err" : "")}>{fixValue()}</span>
	</PUICard>);

}
