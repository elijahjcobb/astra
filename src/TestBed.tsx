/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import "./TestBed.css";
import React, {ReactElement} from "react";
import {PUIGamepadButtons} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadButtons";
import {PUIGamepadDPad} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadDPad";
import {
	PUIGamepadJoystick,
	PUIGamepadJoystickType
} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadJoystick";
import {PUIGamepadTriggers} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadTriggers";

export function TestBed(): ReactElement {



	return <div className={"TestBed"}>
		<PUIGamepadButtons/>
		<PUIGamepadDPad/>
		<PUIGamepadJoystick stick={PUIGamepadJoystickType.LEFT}/>
		<PUIGamepadJoystick stick={PUIGamepadJoystickType.RIGHT}/>
		<PUIGamepadTriggers/>
	</div>

}
