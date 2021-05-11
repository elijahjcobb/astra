/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {ReactElement, useState} from "react";
import "./TestBed.css";
import {PUIImmutableNumericStatus} from "./components/PUIImmutableNumericStatus/PUIImmutableNumericStatus";
import {PUIApp} from "./components/PUIApp";
import {PUIMutableNumericStatus} from "./components/PUIMutableNumericStatus/PUIMutableNumericStatus";
import {PUIImmutableBinaryStatus} from "./components/PUIImmutableBinaryStatus/PUIImmutableBinaryStatus";
import {PUISegmentedPicker} from "./components/PUISegmentedPicker/PUISegmentedPicker";
import {PUIPicker} from "./components/PUIPicker/PUIPicker";



export function TestBed(): ReactElement {

	const [value, setValue] = useState(0);
	const [mode, setMode] = useState(0);
	const p = 3;

	return <PUIApp className={"TestBed"}>
		<PUIMutableNumericStatus label={"Current 1"} precision={p} value={value} setValue={(v) => {
			console.log(v)
			setValue(v)
		}}/>
		<PUIImmutableNumericStatus label={"Current 1"} precision={p} value={value}/>
		<PUIImmutableBinaryStatus label={"x > 0"} value={value > 0}/>
		<PUISegmentedPicker
			label={"Mode"}
			options={["A", "B", "C", "D", "E", "F", "G", "H"]}
			value={mode}
			setValue={v => setMode(v)}
		/>
		<PUIPicker
			label={"Mode"}
			options={["A", "B", "C", "D", "E", "F", "G", "H"]}
			value={mode}
			setValue={v => setMode(v)}
		/>
	</PUIApp>

}
