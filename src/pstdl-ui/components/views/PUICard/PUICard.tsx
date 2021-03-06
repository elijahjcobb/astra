/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, LegacyRef} from "react";
import "./PUICard.css";

export interface PUICardProps {
	className?: string;
	onClick?: () => void;
	ref?: LegacyRef<HTMLDivElement>;
}

export function PUICard(props: PropsWithChildren<PUICardProps>): ReactElement {

	return (<div ref={props.ref} onClick={props.onClick} className={"PUICard" + (props.className ? (" " + props.className) : "")}>{props.children}</div>);

}
