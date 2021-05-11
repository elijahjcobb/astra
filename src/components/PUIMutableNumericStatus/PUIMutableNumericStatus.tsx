/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {PropsWithChildren, ReactElement, useContext, useRef, useState,} from "react";
import {PUICard} from "../PUICard/PUICard";
import "./PUIMutableNumericStatus.css";
import {PUIContext} from "../PUIApp";
import {PUIToastType} from "../PUIToast/PUIToast";

export interface PUIMutableNumericStatusProps {
	label: string;
	value: number,
	setValue?: (value: number) => void
	range?: [number, number],
	precision?: number;
}

export function PUIMutableNumericStatus(props: PropsWithChildren<PUIMutableNumericStatusProps>): ReactElement {

	const context = useContext(PUIContext);
	const [fieldValue, setFieldValue] = useState(props.value + "");
	const input = useRef<HTMLInputElement | null>(null);

	function handleLeaveFocus(): void {
		let v = props.precision !== undefined ? parseFloat(fieldValue) : parseInt(fieldValue);
		let err = false;
		if (isNaN(v)) {
			v = 0;
			err = true;
		}
		if (props.range) {
			if (v > props.range[1]) {
				err = true;
				v = props.range[1];
			}
			if (v < props.range[0]) {
				err = true;
				v = props.range[0];
			}
		}
		if (err) context.toast({msg: "Invalid value.", type: PUIToastType.warning})
		if (props.setValue) props.setValue(v)
		setFieldValue(v.toFixed(props.precision ?? 0))
	}

	function handleOnKeyPress(e: React.KeyboardEvent): void {
		if (e.code !== "Enter") return;
		input.current?.blur();
	}

	return (<PUICard onClick={() => input.current?.focus()} className={"PUIMutableNumericStatus"}>
		<span className={"label"}>{props.label}:</span>
		<input
			onBlur={handleLeaveFocus}
			onChange={(e) => setFieldValue(e.target.value)}
			ref={input}
			value={fieldValue}
			onKeyPress={handleOnKeyPress}
			className={"field"}/>
	</PUICard>);

}
