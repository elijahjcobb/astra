/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement} from "react";
import "./PUIGamepadJoystick.css";

export interface PUIGamepadJoystickProps {
	x: number;
	y: number;
}

export function PUIGamepadJoystick(props: PropsWithChildren<PUIGamepadJoystickProps>): ReactElement {

	return (<div className={"PUIGamepadJoystick"}>
		<div className={"circle"}/>
	</div>)

}