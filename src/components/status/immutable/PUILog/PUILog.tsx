/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {PropsWithChildren, ReactElement, useEffect, useRef, useState} from "react";
import "./PUILog.css";
import {PUICard} from "../../../views/PUICard/PUICard";
import {PUIMutableBinaryStatus} from "../../mutable/PUIMutableBinaryStatus/PUIMutableBinaryStatus";
import {PUIColor} from "../../../../PUIColor";
import {
	ArrowDownward,
	ArrowUpward,
	Delete,
	FileCopy,
	LocalShipping,
	LocalShippingOutlined,
} from "@material-ui/icons"
import {usePUIGetState} from "../../../../hooks/PUIHookState";
import {usePUIClearLog} from "../../../../hooks/PUIHookLog";
import {usePUIToast} from "../../../../hooks/PUIHookToast";

export enum PUILogType {
	INFO,
	DEBUG,
	WARNING,
	ERROR
}

export class PUILogItem {

	public readonly data: any;
	public readonly date: Date;
	public readonly type: PUILogType;

	public constructor(type: PUILogType, data: any) {

		this.type = type;
		this.data = data;
		this.date = new Date();

	}

	public getMessage(): string {
		return "[" + this.date.toLocaleTimeString() + "] " + this.data;
	}

	public getColor(): string {
		switch (this.type) {
			case PUILogType.DEBUG:
				return PUIColor.blue;
			case PUILogType.WARNING:
				return PUIColor.yellow;
			case PUILogType.ERROR:
				return PUIColor.red;
			default:
				return PUIColor.white;
		}
	}

}


export interface PUILogProps {
	rows?: number;
}

export function PUILog(props: PropsWithChildren<PUILogProps>): ReactElement {

	const [showInfo, setShowInfo] = useState(true);
	const [showWarning, setShowWarning] = useState(true);
	const [showError, setShowError] = useState(true);
	const [showDebug, setShowDebug] = useState(true);
	const logTable = useRef<HTMLDivElement | null>(null);
	const [autoScroll, setAutoScroll] = useState(true);
	const state = usePUIGetState();
	const clearLog = usePUIClearLog();
	const toast = usePUIToast();

	function getLog(): PUILogItem[]  {
		return state.log.filter(v => {
			return (v.type === PUILogType.INFO && showInfo) ||
				(v.type === PUILogType.WARNING && showWarning) ||
					(v.type === PUILogType.DEBUG && showDebug) ||
						(v.type === PUILogType.ERROR && showError);
		})
	}

	function scroll(bottom: boolean = true): void {
		const table = logTable.current;
		if (table === null) return;
		if (bottom) table.scrollTop = table.scrollHeight;
		else table.scrollTop = 0;
	}

	useEffect(() => {
		if (autoScroll) scroll();
	});

	return (<PUICard className={"PUILog"}>
		<div className={"options"}>
			<PUIMutableBinaryStatus label={"Info"} value={showInfo} setValue={setShowInfo}/>
			<PUIMutableBinaryStatus color={PUIColor.yellow} label={"Warning"} value={showWarning} setValue={setShowWarning}/>
			<PUIMutableBinaryStatus color={PUIColor.red} label={"Error"} value={showError} setValue={setShowError}/>
			<PUIMutableBinaryStatus color={PUIColor.blue} label={"Debug"} value={showDebug} setValue={setShowDebug}/>
		</div>
		<div ref={logTable} className={"log"} style={{height: (props.rows ? (props.rows * 20) : 180) + 10}}>
			{getLog().map((l, i) => {
				return <span
					key={i}
					className={"item"}
					style={{color: l.getColor()}}
				>{l.getMessage()}</span>
			})}
		</div>
		<div className={"btns"}>
			<ArrowUpward titleAccess={"scroll to top"} onClick={() => scroll(false)}/>
			<ArrowDownward titleAccess={"scroll to bottom"} onClick={() => scroll()}/>
			{autoScroll ? <LocalShipping titleAccess={"disable autoscroll"} onClick={() => setAutoScroll(false)}/> : <LocalShippingOutlined titleAccess={"enable autoscroll"} onClick={() => setAutoScroll(true)}/>}
			<FileCopy titleAccess={"copy to clipboard"} onClick={() => toast({msg: "Copied log to clipboard."})} />
			<Delete titleAccess={"clear"} onClick={clearLog} />
		</div>
	</PUICard>);

}
