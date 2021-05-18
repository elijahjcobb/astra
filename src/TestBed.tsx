/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import "./TestBed.css";
import {ReactElement} from "react";
import {PUIStatus, usePUIToast, PUIKeyboardController, PUITopBar} from "./pstdl-ui";
import {PUIGamepadButtons} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadButtons";
import {PUIGamepadDPad} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadDPad";
import {PUIGamepadFeedback} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadFeedback";
import {PUIGamepadJoystick} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadJoystick";
import {PUIGamepadTrigger} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadTrigger";


export function TestBed(): ReactElement {

	const toast = usePUIToast();

	PUIKeyboardController.onKeyDown(e => {
		console.log(e);
	})

	PUIKeyboardController.onKeyUp(e => {
		console.log(e);
	})

	return <div className={"TestBed"}>
		<PUIGamepadButtons/>
		<PUIGamepadDPad/>
		<PUIGamepadFeedback/>
		<PUIGamepadJoystick x={0.8} y={-0.2}/>
		<PUIGamepadTrigger/>
	</div>

}
