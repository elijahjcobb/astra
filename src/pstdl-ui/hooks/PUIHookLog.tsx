/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {usePUISetState} from "./PUIHookState";
import {PUILogItem, PUILogType} from "../components";

export function usePUIClearLog(): () => void {
	const setState = usePUISetState();
	return () => {
		setState(s => ({...s, log: []}))
	}
}

export function usePUILog(type: PUILogType): (data: any) => void {
	const setState = usePUISetState();
	return (data: any) => {
		setState(s => ({...s, log: [...s.log, new PUILogItem(type, data)]}))
	}
}

export function usePUILogInfo(): (data: any) => void {
	return usePUILog(PUILogType.INFO);
}

export function usePUILogWarning(): (data: any) => void {
	return usePUILog(PUILogType.WARNING);
}

export function usePUILogError(): (data: any) => void {
	return usePUILog(PUILogType.ERROR);
}

export function usePUILogDebug(): (data: any) => void {
	return usePUILog(PUILogType.DEBUG);
}