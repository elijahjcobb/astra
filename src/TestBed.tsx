/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement} from "react";

export interface TestBedProps {

}

export function TestBed(props: PropsWithChildren<TestBedProps>): ReactElement {

	return (<div className={"TestBed pstdl"}>
		<span>Hello, TestBed!</span>
	</div>)

}