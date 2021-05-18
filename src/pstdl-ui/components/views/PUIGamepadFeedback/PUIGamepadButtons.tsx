/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement} from "react";
import "./PUIGamepadButtons.css";

export interface PUIGamepadButtonsProps {

}

export function PUIGamepadButtons(props: PropsWithChildren<PUIGamepadButtonsProps>): ReactElement {

	return (<div className={"PUIGamepadButtons"}>
		<span>Hello, PUIGamepadButtons!</span>
	</div>)

}