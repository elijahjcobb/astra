/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement} from "react";
import "./PUIGamepadFeedback.css";

export interface PUIGamepadFeedbackProps {

}

export function PUIGamepadFeedback(props: PropsWithChildren<PUIGamepadFeedbackProps>): ReactElement {

	return (<div className={"PUIGamepadFeedback"}>
		<span>Hello, PUIGamepadFeedback!</span>
	</div>)

}