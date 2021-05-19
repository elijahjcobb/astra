/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import "./TestBed.css";
import React, {ReactElement, useEffect, useState} from "react";
import {PUIGamepadButtons} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadButtons";
import {PUIGamepadDPad} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadDPad";
import {PUIGamepadJoystick} from "./pstdl-ui/components/views/PUIGamepadFeedback/PUIGamepadJoystick";
import {PUIGamepadController} from "./pstdl-ui";

export function TestBed(): ReactElement {



	return <div className={"TestBed"}>
		<PUIGamepadButtons/>
		<PUIGamepadDPad/>
		<PUIGamepadJoystick stick={"left"}/>
		<PUIGamepadJoystick stick={"right"}/>
	</div>

}
