/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {
	PUIGage,
	PUIImmutableBinaryStatus,
	PUIImmutableNumericStatus, PUILog,
	PUIMutableBinaryStatus, PUIMutableNumericStatus, PUIPicker,
	PUISegmentedPicker,
	usePUIAlert,
	usePUILogDebug, usePUILogError, usePUILogInfo, usePUILogWarning
} from "./pstdl-ui";

import {ReactElement, useState} from "react";
import "./TestBed.css";

export function TestBed(): ReactElement {

	const [value, setValue] = useState(0);
	const [mode, setMode] = useState(0);
	const [boo, setBoo] = useState(false);

	const currentRange: [number, number] = [0, 1];
	const currentPrecision = 2;
	const alert = usePUIAlert();

	const logInfo = usePUILogInfo();
	const logWarning = usePUILogWarning();
	const logDebug = usePUILogDebug();
	const logError = usePUILogError();

	return <div className={"TestBed"}>
		<span onClick={() => {
			alert({
				title: "This is the title.",
				message: "This is the message. It is smaller and longer."
			})
		}}>open</span>
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
		<span onClick={() => {
			logInfo("Well this is an info.");
		}}>Add Info</span>
		<span onClick={() => {
			logWarning("Well this is an info.");
		}}>Add Warning</span>
		<span onClick={() => {
			logError("Well this is an info.");
		}}>Add Error</span>
		<span onClick={() => {
			logDebug("Well this is an info.");
		}}>Add Debug</span>
		<PUIGage label={"Current 1"} unit={"amps"} value={value} range={currentRange} precision={currentPrecision}/>
		<PUILog />
		<PUILog />
	</div>

}
