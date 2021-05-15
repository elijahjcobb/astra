/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import "./TestBed.css";
import {ReactElement} from "react";
import {PUIStatus, usePUIToast, PUIKeyboardController} from "./pstdl-ui";


export function TestBed(): ReactElement {

	const toast = usePUIToast();

	PUIKeyboardController.onKeyDown(e => {
		console.log(e);
	})

	PUIKeyboardController.onKeyUp(e => {
		console.log(e);
	})

	return <div className={"TestBed"}>
		<button onClick={() => {
			toast({msg: "Hello, pstdl-ui!", type: PUIStatus.SUCCESS})
		}}>Show Toast!</button>
	</div>

}
