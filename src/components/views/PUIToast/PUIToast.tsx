/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {Snackbar} from "@material-ui/core";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {PUIColor} from "../../../PUIColor";

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export interface PUIToastProps {
	duration?: number;
	onClose: () => void;
	msg?: string;
	type?: PUIToastType;
}

export enum PUIToastType {
	error = "error",
	warning = "warning",
	info = "info",
	success = "success"
}

export interface PUIToastConfig {
	duration?: number;
	msg?: string;
	type?: PUIToastType;
}

export function PUIToast(props: PropsWithChildren<PUIToastProps>): ReactElement {

	function getColor(): string {
		switch (props.type) {
			case PUIToastType.error:
				return PUIColor.red;
			case PUIToastType.success:
				return PUIColor.green;
			case PUIToastType.warning:
				return PUIColor.yellow;
			default:
				return PUIColor.blue;
		}
	}

	const d = (props.duration !== undefined) ? (props.duration * 1000) : 6000;
	return (<Snackbar open={true} autoHideDuration={d} onClose={props.onClose}>
		<Alert style={{background: getColor(), color: PUIColor.black}} onClose={props.onClose} severity={props.type ?? PUIToastType.info}>{props.msg}</Alert>
	</Snackbar>);

}
