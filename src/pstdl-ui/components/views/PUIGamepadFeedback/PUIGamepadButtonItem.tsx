/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import "./PUIGamepadButtonItem.css";

export interface PUIGamepadButtonItemProps {
	clicked: boolean;
}

export function PUIGamepadButtonItem(props: PropsWithChildren<PUIGamepadButtonItemProps>): ReactElement {

	return <div className={"PUIGamepadButtonItem" + (props.clicked ? " PUIGamepadButtonItem-clicked" : "")}>
		{props.children}
	</div>;
}