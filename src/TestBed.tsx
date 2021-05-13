/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {ReactElement, useState} from "react";
import "./TestBed.css";
import {PUIImmutableNumericStatus} from "./components/status/immutable/PUIImmutableNumericStatus/PUIImmutableNumericStatus";
import {PUISegmentedPicker} from "./components/status/mutable/PUISegmentedPicker/PUISegmentedPicker";
import {PUIMutableBinaryStatus} from "./components/status/mutable/PUIMutableBinaryStatus/PUIMutableBinaryStatus";
import {PUILog, PUILogType} from "./components/status/immutable/PUILog/PUILog";
import {PUIImmutableBinaryStatus} from "./components/status/immutable/PUIImmutableBinaryStatus/PUIImmutableBinaryStatus";
import {PUIPicker} from "./components/status/mutable/PUIPicker/PUIPicker";
import {PUIGage} from "./components/status/immutable/PUIGage/PUIGage";
import {PUIMutableNumericStatus} from "./components/status/mutable/PUIMutableNumericStatus/PUIMutableNumericStatus";
import {usePUILog} from "./hooks/PUIHookLog";
import {usePUIAlert} from "./hooks/PUIHookAlert";

export function TestBed(): ReactElement {

	const [value, setValue] = useState(0);
	const [mode, setMode] = useState(0);
	const [boo, setBoo] = useState(false);

	const currentRange: [number, number] = [0, 1];
	const currentPrecision = 2;
	const alert = usePUIAlert();

	const logInfo = usePUILog(PUILogType.INFO);
	const logWarning = usePUILog(PUILogType.WARNING);
	const logDebug = usePUILog(PUILogType.DEBUG);
	const logError = usePUILog(PUILogType.ERROR);

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
