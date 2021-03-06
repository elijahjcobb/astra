/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {PropsWithChildren, ReactElement} from "react";
import {PUIContextProvider} from "./PUIContext";
import {PUIAppController} from "./controllers";

export function PUIApp(props: PropsWithChildren<{}>): ReactElement {

	return (<PUIContextProvider>
		<div className={"PUIApp"}>
			<PUIAppController/>
			{props.children}
		</div>
	</PUIContextProvider>);

}