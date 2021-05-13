/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {PUIToastConfig} from "../components/views/PUIToast/PUIToast";
import {usePUISetState} from "./PUIHookState";

export function usePUIToast(): (config: PUIToastConfig) => void {
	const setState = usePUISetState();
	return (config: PUIToastConfig) => {
		setState(s => ({...s, toast: config}))
	}
}

export function usePUIClearToast(): () => void {
	const setState = usePUISetState();
	return () => {
		setState(s => ({...s, toast: undefined}))
	}
}