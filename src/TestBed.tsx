/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import "./TestBed.css";
import {PUIStatus, usePUIToast} from "./pstdl-ui";
import {ReactElement} from "react";

export function TestBed(): ReactElement {

	const toast = usePUIToast();

	return <div className={"TestBed"}>
		<button onClick={() => {
			toast({msg: "Hello, pstdl-ui!", type: PUIStatus.SUCCESS})
		}}>Show Toast!</button>
	</div>

}
