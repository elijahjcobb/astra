/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement} from "react";
import "./PUIGamepadJoystick.css";

export interface PUIGamepadJoystickProps {

}

export function PUIGamepadJoystick(props: PropsWithChildren<PUIGamepadJoystickProps>): ReactElement {

	return (<div className={"PUIGamepadJoystick"}>
		<span>Hello, PUIGamepadJoystick!</span>
	</div>)

}