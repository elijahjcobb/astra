/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement} from "react";
import "./PUIGamepadDPad.css";

export interface PUIGamepadDPadProps {

}

export function PUIGamepadDPad(props: PropsWithChildren<PUIGamepadDPadProps>): ReactElement {

	return (<div className={"PUIGamepadDPad"}>
		<span>Hello, PUIGamepadDPad!</span>
	</div>)

}