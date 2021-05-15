/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import "./TestBed.css";
import {ReactElement} from "react";
import {PUIStatus, usePUIToast, PUIKeyboardController, PUITopBar} from "./pstdl-ui";


export function TestBed(): ReactElement {

	const toast = usePUIToast();

	PUIKeyboardController.onKeyDown(e => {
		console.log(e);
	})

	PUIKeyboardController.onKeyUp(e => {
		console.log(e);
	})

	return <div className={"TestBed"}>
		<PUITopBar
			icon={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"}
			title={"PSTDL Field Rover"}
		/>
		<button onClick={() => {
			toast({msg: "Hello, pstdl-ui!", type: PUIStatus.SUCCESS})
		}}>Show Toast!</button>
	</div>

}
