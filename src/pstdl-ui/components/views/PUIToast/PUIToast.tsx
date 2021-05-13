/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {PropsWithChildren, ReactElement} from "react";
import {Snackbar} from "@material-ui/core";
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {PUIColor} from "../../../PUIColor";
import {PUIStatus} from "../../../PUIStatus";

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export interface PUIToastProps {
	duration?: number;
	onClose: () => void;
	msg?: string;
	type?: PUIStatus;
}

export interface PUIToastConfig {
	duration?: number;
	msg?: string;
	type?: PUIStatus;
}

export function PUIToast(props: PropsWithChildren<PUIToastProps>): ReactElement {

	function getColor(): string {
		switch (props.type) {
			case PUIStatus.ERROR:
				return PUIColor.red;
			case PUIStatus.SUCCESS:
				return PUIColor.green;
			case PUIStatus.WARNING:
				return PUIColor.yellow;
			default:
				return PUIColor.blue;
		}
	}

	const d = (props.duration !== undefined) ? (props.duration * 1000) : 6000;
	return (<Snackbar open={true} autoHideDuration={d} onClose={props.onClose}>
		<Alert style={{background: getColor(), color: PUIColor.black}} onClose={props.onClose} severity={props.type ?? PUIStatus.INFO}>{props.msg}</Alert>
	</Snackbar>);

}
