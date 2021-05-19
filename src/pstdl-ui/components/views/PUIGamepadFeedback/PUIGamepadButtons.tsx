/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement, useEffect, useState} from "react";
import {PUIGamepadButton, PUIGamepadController} from "../../../controllers";
import {PUICard} from "../PUICard/PUICard";
import {PUIGamepadButtonItem} from "./PUIGamepadButtonItem";
import {
	ChangeHistory, Close,
	CropSquare,
	RadioButtonUnchecked
} from "@material-ui/icons";
import "./PUIGamepadButtons.css";

export interface PUIGamepadButtonsProps {
	label?: string;
}

export function PUIGamepadButtons(props: PropsWithChildren<PUIGamepadButtonsProps>): ReactElement {

	const [up, setUp] = useState(false);
	const [left, setLeft] = useState(false);
	const [down, setDown] = useState(false);
	const [right, setRight] = useState(false);

	function onButtonDown(button: PUIGamepadButton): void {
		if (button === PUIGamepadButton.X) setLeft(true);
		else if (button === PUIGamepadButton.B) setRight(true);
		else if (button === PUIGamepadButton.Y) setUp(true);
		else if (button === PUIGamepadButton.A) setDown(true);
	}

	function onButtonUp(button: PUIGamepadButton): void {
		if (button === PUIGamepadButton.X) setLeft(false);
		else if (button === PUIGamepadButton.B) setRight(false);
		else if (button === PUIGamepadButton.Y) setUp(false);
		else if (button === PUIGamepadButton.A) setDown(false);
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
			<PUIGamepadButtonItem clicked={up}><ChangeHistory/></PUIGamepadButtonItem>
			<div/>
			<PUIGamepadButtonItem clicked={left}><CropSquare/></PUIGamepadButtonItem>
			<div/>
			<PUIGamepadButtonItem clicked={right}><RadioButtonUnchecked/></PUIGamepadButtonItem>
			<div/>
			<PUIGamepadButtonItem clicked={down}><Close/></PUIGamepadButtonItem>
			<div/>
		</div>
		{<span>{props.label ?? "D-Pad"}</span>}
	</PUICard>)

}