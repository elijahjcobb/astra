/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useContext} from "react";
import "./PUIGage.css";
import {PUICard} from "../PUICard/PUICard";
import {PUIColor, PUIContext} from "../PUIApp";

export interface PUIGageProps {
	label: string;
	unit: string;
	value: number;
	precision?: number;
	color?: PUIColor;
	range: [number, number]
}

export function PUIGage(props: PropsWithChildren<PUIGageProps>): ReactElement {

	const r = 50;
	const p = (props.value - props.range[0]) / (props.range[1] - props.range[0]);
	const c = r + 8;
	const s = r / 12;
	const container = c * 2;
	const circumference = r * 2 * Math.PI;

	const context = useContext(PUIContext);

	function handleClick(): void {
		navigator.clipboard.writeText(props.value.toFixed(props.precision ?? 0)).catch(console.error);
		context.toast({msg: "Copied to Clipboard"})
	}

	return (<PUICard onClick={handleClick} className={"PUIGage"}>
		<div className={"GageView"} style={{
			width: container,
			height: container
		}}>
			<div className={"textContainer"}>
				<span className={"value"} style={{
					fontSize: r / 1.75,
					color: props.color ?? "white"
				}}>{props.value.toFixed(props.precision ?? 0)}</span>
				<span className={"unit"} style={{
					fontSize: r / 4
				}}>{props.unit}</span>
			</div>
			<svg
				width={container}
				height={container}
				className={"circle"}>
				<circle
					cx={c}
					cy={c}
					r={r}
					stroke={"grey"}
					fill={"transparent"}
					style={{
						strokeDashoffset: circumference - 0.75 * circumference,
						strokeDasharray: `${circumference} ${circumference}`,
						transform: 'rotate(135deg)',
						transformOrigin: "50% 50%"
					}}
					strokeWidth={s + (r/10)}/>
				<circle
					style={{
						strokeDashoffset: circumference - p * 0.75 * circumference,
						strokeDasharray: `${circumference} ${circumference}`,
						transform: 'rotate(135deg)',
						transformOrigin: "50% 50%"
					}}
					stroke={props.color ?? "white"}
					strokeWidth={s}
					fill="transparent"
					r={r}
					cx={c}
					cy={c}/>
			</svg>
		</div>
		<span className={"label"}>{props.label}</span>
	</PUICard>);

}
