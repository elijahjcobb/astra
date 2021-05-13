/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import {PUIAlert, PUIToast} from "../components";
import {usePUIAlertHide, usePUIClearToast, usePUIGetState} from "../hooks";

export function PUIAppController(): ReactElement {

	const state = usePUIGetState();
	const clearToast = usePUIClearToast();
	const clearAlert = usePUIAlertHide();

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
