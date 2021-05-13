/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import  {Dispatch, SetStateAction, useContext} from "react";
import {PUIContext, PUIContextState} from "../PUIContext";

export function usePUIState(): [PUIContextState, Dispatch<SetStateAction<PUIContextState>>] {
	return useContext(PUIContext)
}

export function usePUIGetState(): PUIContextState {
	return usePUIState()[0];
}

export function usePUISetState(): Dispatch<SetStateAction<PUIContextState>> {
	return usePUIState()[1];
}