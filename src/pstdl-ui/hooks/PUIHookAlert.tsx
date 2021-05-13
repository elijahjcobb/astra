/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {PUIAlertConfig} from "../components";
import {usePUISetState} from "./PUIHookState";

export function usePUIAlert(): (config: PUIAlertConfig) => void {
	const setState = usePUISetState();
	return (config: PUIAlertConfig) => {
		setState(s => ({...s, alert: config}))
	}
}

export function usePUIClearAlert(): () => void {
	const setState = usePUISetState();
	return () => {
		setState(s => ({...s, alert: undefined}))
	}
}