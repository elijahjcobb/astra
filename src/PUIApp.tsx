/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {PropsWithChildren, ReactElement} from "react";
import {PUIContextProvider} from "./PUIContext";
import {PUIAppController} from "./controllers/PUIAppController";

export function PUIApp(props: PropsWithChildren<{}>): ReactElement {

	return (<PUIContextProvider>
		<div className={"PUIApp"}>
			<PUIAppController/>
			{props.children}
		</div>
	</PUIContextProvider>);

}