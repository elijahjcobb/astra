/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement} from "react";
import "./PUIGamepadTrigger.css";

export interface PUIGamepadTriggerProps {

}

export function PUIGamepadTrigger(props: PropsWithChildren<PUIGamepadTriggerProps>): ReactElement {

	return (<div className={"PUIGamepadTrigger"}>
		<span>Hello, PUIGamepadTrigger!</span>
	</div>)

}