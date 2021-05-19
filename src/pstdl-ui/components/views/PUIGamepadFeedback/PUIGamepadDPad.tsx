/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement, useEffect, useState} from "react";
import {PUIGamepadButton, PUIGamepadController} from "../../../controllers";
import {PUICard} from "../PUICard/PUICard";
import {PUIGamepadButtonItem} from "./PUIGamepadButtonItem";
import {ArrowBack, ArrowDownward, ArrowForward, ArrowUpward} from "@material-ui/icons";
import "./PUIGamepadDPad.css";

export interface PUIGamepadDPadProps {
	label?: string;
}

export function PUIGamepadDPad(props: PropsWithChildren<PUIGamepadDPadProps>): ReactElement {

	const [up, setUp] = useState(false);
	const [left, setLeft] = useState(false);
	const [down, setDown] = useState(false);
	const [right, setRight] = useState(false);

	function onButtonDown(button: PUIGamepadButton): void {
		if (button === PUIGamepadButton.LEFT) setLeft(true);
		else if (button === PUIGamepadButton.RIGHT) setRight(true);
		else if (button === PUIGamepadButton.UP) setUp(true);
		else if (button === PUIGamepadButton.DOWN) setDown(true);
	}

	function onButtonUp(button: PUIGamepadButton): void {
		if (button === PUIGamepadButton.LEFT) setLeft(false);
		else if (button === PUIGamepadButton.RIGHT) setRight(false);
		else if (button === PUIGamepadButton.UP) setUp(false);
		else if (button === PUIGamepadButton.DOWN) setDown(false);
	}

	useEffect(() => {
		const controller = new PUIGamepadController();
		controller.on("buttonDown", onButtonDown);
		controller.on("buttonUp", onButtonUp);
		return controller.kill;
	}, [])

	return (<PUICard className={"PUIGamepadJoystick"}>
		<div className={"buttons"}>
			<div/>
			<PUIGamepadButtonItem clicked={up}><ArrowUpward/></PUIGamepadButtonItem>
			<div/>
			<PUIGamepadButtonItem clicked={left}><ArrowBack/></PUIGamepadButtonItem>
			<div/>
			<PUIGamepadButtonItem clicked={right}><ArrowForward/></PUIGamepadButtonItem>
			<div/>
			<PUIGamepadButtonItem clicked={down}><ArrowDownward/></PUIGamepadButtonItem>
			<div/>
		</div>
		{props.label && <span>{props.label}</span>}
	</PUICard>)

}