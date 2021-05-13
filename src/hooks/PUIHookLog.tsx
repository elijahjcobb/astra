/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {usePUISetState} from "./PUIHookState";
import {PUILogItem, PUILogType} from "../components/status/immutable/PUILog/PUILog";

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