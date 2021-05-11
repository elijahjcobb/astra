/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {ReactElement, useState} from "react";
import "./TestBed.css";
import {PUIImmutableNumericStatus} from "./components/PUIImmutableNumericStatus/PUIImmutableNumericStatus";
import {PUIApp, PUIColor} from "./components/PUIApp";
import {PUIMutableNumericStatus} from "./components/PUIMutableNumericStatus/PUIMutableNumericStatus";
import {PUIImmutableBinaryStatus} from "./components/PUIImmutableBinaryStatus/PUIImmutableBinaryStatus";
import {PUISegmentedPicker} from "./components/PUISegmentedPicker/PUISegmentedPicker";
import {PUIPicker} from "./components/PUIPicker/PUIPicker";
import {PUIMutableBinaryStatus} from "./components/PUIMutableBinaryStatus/PUIMutableBinaryStatus";
import {PUIGage} from "./components/PUIGage/PUIGage";


export function TestBed(): ReactElement {

	const [value, setValue] = useState(0);
	const [mode, setMode] = useState(0);
	const [boo, setBoo] = useState(false);

	const currentRange: [number, number] = [0, 1];
	const currentPrecision = 2;

	return <PUIApp className={"TestBed"}>
		<PUIMutableNumericStatus label={"Current 1"} range={currentRange} precision={currentPrecision} value={value} setValue={(v) => {
			console.log(v)
			setValue(v)
		}}/>
		<PUIImmutableNumericStatus label={"Current 1"} precision={currentPrecision} range={currentRange} value={value}/>
		<PUISegmentedPicker
			label={"Mode"}
			options={["A", "B", "C", "D", "E", "F", "G", "H"]}
			value={mode}
			setValue={setMode}
		/>
		<PUIPicker
			label={"Mode"}
			options={["A", "B", "C", "D", "E", "F", "G", "H"]}
			value={mode}
			setValue={setMode}
		/>
		<PUIImmutableBinaryStatus label={"Boo"} value={boo}/>
		<PUIMutableBinaryStatus label={"Boo"} value={boo} setValue={setBoo}/>
		<PUIGage label={"Current 1"} unit={"amps"} value={value} range={currentRange} precision={currentPrecision}/>
	</PUIApp>

}
