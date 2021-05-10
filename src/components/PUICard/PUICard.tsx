/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./PUICard.css";

export interface PUICardProps {
	className?: string;
	onClick?: () => void;
}

export function PUICard(props: PropsWithChildren<PUICardProps>): ReactElement {

	return (<div onClick={props.onClick} className={"PUICard" + (props.className ? (" " + props.className) : "")}>{props.children}</div>);

}
