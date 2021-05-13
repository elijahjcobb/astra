/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState, createContext, Dispatch, SetStateAction} from "react";
import {PUIToastConfig} from "./components/views/PUIToast/PUIToast";
import {PUIAlertConfig} from "./components/views/PUIAlert/PUIAlert";
import {PUILogItem} from "./components/status/immutable/PUILog/PUILog";

export type PUIContextType = [PUIContextState, Dispatch<SetStateAction<PUIContextState>>]

// @ts-ignore
export const PUIContext = createContext<PUIContextType>();

export interface PUIContextState {
	toast: PUIToastConfig | undefined;
	alert: PUIAlertConfig | undefined;
	log: PUILogItem[];
}

export function PUIContextProvider(props: PropsWithChildren<{}>): ReactElement {

	const [state, setState] = useState<PUIContextState>({
		toast: undefined,
		alert: undefined,
		log: []
	});


	return (<PUIContext.Provider value={[state, setState]}>
		{props.children}
	</PUIContext.Provider>);

}