/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState, useEffect, useRef} from "react";
import "./PUIToast.css";
import {PUICard} from "../PUICard/PUICard";

export interface PUIToastProps {
	msg: string;
	duration?: number;
	onDone: () => void;
}

export function PUIToast(props: PropsWithChildren<PUIToastProps>): ReactElement {

	function handleOnClick(): void {
		setClasses(classes + " PUIToast-exit")
		setTimeout(props.onDone, 1000);
	}

	const [classes, setClasses] = useState("PUIToast");

	const componentIsMounted = useRef(true)
	useEffect(() => {
		return () => {
			componentIsMounted.current = false
		}
	}, [])

	if (props.duration) {
		setTimeout(() => {
			if (componentIsMounted) handleOnClick();
		}, props.duration * 1000)
	}

	return (<PUICard onClick={handleOnClick} className={classes}>
		<span>{props.msg}</span>
	</PUICard>);

}
