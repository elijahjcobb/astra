/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, createContext, useContext, useState, useRef, useEffect} from "react";
import {PUIToast} from "../PUIToast/PUIToast";


export interface PUIAppProps {

}

export interface PUIToastConfig {
	msg: string,
	duration?: number
}

export interface PUIAppContextProps {
	toast: (config: PUIToastConfig) => void;
}

export const PUIAppContext = createContext<PUIAppContextProps>({
	toast: (config: PUIToastConfig) => {}
});

export function PUIApp(props: PropsWithChildren<PUIAppProps>): ReactElement {

	const [toast, setToast] = useState<PUIToastConfig | undefined>(undefined);

	return (<PUIAppContext.Provider value={{
		toast: setToast
	}}>
		<div className={"pstdl TestBed PUIApp"}>
			{props.children}
			{toast && <PUIToast onDone={() => setToast(undefined)} msg={toast.msg} duration={toast.duration}/>}
		</div>
	</PUIAppContext.Provider>);

}
