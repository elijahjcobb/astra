/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState, createContext} from "react";
import {PUIToast, PUIToastConfig} from "../components/PUIToast/PUIToast";

export interface PUIAppProps {
	className?: string;
}

export interface PUIContextProps {
	toast: (config: PUIToastConfig) => void;
}

export const PUIContext = createContext<PUIContextProps>({
	toast: () => {}
});

export enum PUIColor {
	black ="#21252b",
	background ="#282C34",
	red ="#e06c75",
	green ="#98c379",
	yellow ="#e5c07b",
	blue ="#61afef",
	purple ="#c678dd",
	cyan ="#56b6c2",
	white ="#abb2bf",
	gold ="#ffcd00"
}

export function PUIApp(props: PropsWithChildren<PUIAppProps>): ReactElement {

	const [toast, setToast] = useState<PUIToastConfig | undefined>(undefined);
	const [context] = useState<PUIContextProps>({
		toast: handleToast
	});

	function handleToast(c: PUIToastConfig): void {
		setToast(undefined);
		setTimeout(() => setToast(c), 250);
	}

	return (<PUIContext.Provider value={context}>
		<div className={"PUIApp" + (props.className ? (" " + props.className) : "")}>
			{props.children}
			{toast && <PUIToast type={toast?.type} duration={toast?.duration} msg={toast?.msg} onClose={() => setToast(undefined)}/>}
		</div>
	</PUIContext.Provider>);

}
