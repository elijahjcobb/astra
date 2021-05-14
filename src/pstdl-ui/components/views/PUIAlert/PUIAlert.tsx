/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import React, {PropsWithChildren, ReactElement} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {PUIColor} from "../../../PUIColor";

export interface PUIAlertConfig {
	title?: string;
	message?: string;
	actions?: {text: string, color?: PUIColor, onClick?: () => void}[]
}

export interface PUIAlertProps {
	config: PUIAlertConfig;
	open: boolean;
	onClose: () => void;
}

export function PUIAlert(props: PropsWithChildren<PUIAlertProps>): ReactElement {

	return (<Dialog open={props.open} onClose={props.onClose}>
		<DialogTitle>{props.config.title}</DialogTitle>
		<DialogContent>
			<DialogContentText>{props.config.message}</DialogContentText>
		</DialogContent>
		{props.config.actions && (<DialogActions>
			{
				props.config.actions.map((a, i) => {
					return <Button
						key={i}
						style={{color: a.color ?? PUIColor.blue}}
						onClick={a.onClick}
					>{a.text}</Button>
				})
			}
		</DialogActions>)}
	</Dialog>)

}