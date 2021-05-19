/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement, useEffect, useState} from "react";
import "./PUIGamepadJoystick.css";
import {PUICard} from "../PUICard/PUICard";
import {PUIGamepadButton, PUIGamepadController} from "../../../controllers";

export interface PUIGamepadJoystickProps {
	stick: "left" | "right";
	label?: string;
}

export function PUIGamepadJoystick(props: PropsWithChildren<PUIGamepadJoystickProps>): ReactElement {

	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [isClicked, setIsClicked] = useState(false);

	function onMove(x: number, y: number): void {
		setX(x);
		setY(y);
	}

	function onButtonDown(button: PUIGamepadButton): void {
		if (button === (props.stick === "left" ? PUIGamepadButton.LS : PUIGamepadButton.RS)) setIsClicked(true);
	}

	function onButtonUp(button: PUIGamepadButton): void {
		if (button === (props.stick === "left" ? PUIGamepadButton.LS : PUIGamepadButton.RS)) setIsClicked(false);
	}

	useEffect(() => {
		const controller = new PUIGamepadController();
		controller.on(props.stick === "left" ? "leftJoystickMove" : "rightJoystickMove", onMove);
		controller.on("buttonDown", onButtonDown);
		controller.on("buttonUp", onButtonUp);
		return controller.kill;
	}, [])

	return (<PUICard className={"PUIGamepadJoystick"}>
		<div className={"joystick"}>
			<div style={{
				transform: `translate(${x * 50}%,${y * 50}%)`
			}} className={"circle" + (isClicked ? " clicked" : "") + ((x === 0 && y === 0) ? "" : " active")}/>
		</div>
		{<span>{props.label ?? (props.stick === "left" ? "L Joystick" : "R Joystick")}</span>}
	</PUICard>)

}