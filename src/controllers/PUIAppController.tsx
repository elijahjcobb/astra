/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import {PUIToast} from "../components/views/PUIToast/PUIToast";
import {PUIAlert} from "../components/views/PUIAlert/PUIAlert";
import {usePUIGetState} from "../hooks/PUIHookState";
import {usePUIClearToast} from "../hooks/PUIHookToast";
import {usePUIClearAlert} from "../hooks/PUIHookAlert";

export function PUIAppController(): ReactElement {

	const state = usePUIGetState();
	const clearToast = usePUIClearToast();
	const clearAlert = usePUIClearAlert();

	return (<div className={"PUIAppController"}>
		{state.toast && <PUIToast
			type={state.toast?.type}
			duration={state.toast?.duration}
			msg={state.toast?.msg}
		    onClose={clearToast}
		/>}
		{state.alert && <PUIAlert
			open={true}
			config={state.alert}
            onClose={clearAlert}
		/>}
	</div>);

}
