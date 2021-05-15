/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {PropsWithChildren, ReactElement} from "react";
import "./PUITopBar.css";
import {Close, Remove} from "@material-ui/icons";

export interface PUITopBarButtonProps {
	type: "minimize" | "close";
	onClick?: () => void;
}

function PUITopBarButton(props: PropsWithChildren<PUITopBarButtonProps>): ReactElement {
	return <div onClick={props.onClick} className={"PUITopBarButton " + props.type}>
		{props.children}
	</div>
}

export interface PUITopBarProps {
	title?: string;
	icon?: string;
	onMinimize?: () => void;
	onClose?: () => void;
}

export function PUITopBar(props: PropsWithChildren<PUITopBarProps>): ReactElement {

	return (<div className={"PUITopBar"}>
		<div className={"title"}>
			<img src={props.icon} alt={"icon"}/>
			<span>{props.title}</span>
		</div>
		<div className={"btns"}>
			<PUITopBarButton onClick={props.onMinimize} type={"minimize"}><Remove/></PUITopBarButton>
			<PUITopBarButton onClick={props.onClose} type={"close"}><Close/></PUITopBarButton>
		</div>
	</div>);

}
