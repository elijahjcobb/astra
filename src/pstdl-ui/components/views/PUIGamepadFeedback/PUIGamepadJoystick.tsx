/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement, useEffect, useState} from "react";
import "./PUIGamepadJoystick.css";
import {PUICard} from "../PUICard/PUICard";
import {PUIGamepadButton, PUIGamepadController} from "../../../controllers";

export enum PUIGamepadJoystickType {
	LEFT,
	RIGHT
}

export interface PUIGamepadJoystickProps {
	stick: PUIGamepadJoystickType;
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
		if (button === (props.stick === PUIGamepadJoystickType.LEFT ? PUIGamepadButton.LS : PUIGamepadButton.RS)) setIsClicked(true);
	}

	function onButtonUp(button: PUIGamepadButton): void {
		if (button === (props.stick === PUIGamepadJoystickType.LEFT ? PUIGamepadButton.LS : PUIGamepadButton.RS)) setIsClicked(false);
	}

	useEffect(() => {
		const controller = new PUIGamepadController();
		controller.on(props.stick === PUIGamepadJoystickType.LEFT ? "leftJoystickMove" : "rightJoystickMove", onMove);
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
		{props.label && <span>{props.label}</span>}
	</PUICard>)

}