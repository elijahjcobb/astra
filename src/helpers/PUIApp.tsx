/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {createContext, ReactElement} from "react";
import {PUIToast, PUIToastConfig} from "../components/PUIToast/PUIToast";
import {PUILogItem, PUILogType} from "../components/PUILog/PUILog";
import {PUIKeyboardController} from "./PUIKeyboardController";
import {PUIAlert, PUIAlertConfig} from "../components/PUIAlert/PUIAlert";

export interface PUIAppProps {
	className?: string;
}


export interface PUIContextProps {
	log: PUILogItem[]
}

export const PUIContext = createContext<PUIContextProps>({
	log: []
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

interface PUIAppState {
	toast: PUIToastConfig | undefined;
	alert: PUIAlertConfig | undefined;
	log: PUILogItem[];
}

export class PUIApp extends React.Component<PUIAppProps, PUIAppState> {

	private static singleton: PUIApp | undefined;

	public constructor(props: PUIAppProps) {

		super(props);

		this.log = this.log.bind(this);
		this.clearLog = this.clearLog.bind(this);

		this.state = {
			toast: undefined,
			alert: undefined,
			log: []
		};

		PUIApp.singleton = this;

	}

	public componentDidMount() {
		PUIApp.singleton = this;
	}

	public log(type: PUILogType, data: any): void {
		this.setState({log: [...this.state.log, new PUILogItem(type, data)]});
	}

	public logInfo(data: any): void {
		this.log(PUILogType.INFO, data);
	}

	public logWarning(data: any): void {
		this.log(PUILogType.WARNING, data);
	}

	public logError(data: any): void {
		this.log(PUILogType.ERROR, data);
	}

	public logDebug(data: any): void {
		this.log(PUILogType.DEBUG, data);
	}

	public clearLog(): void {
		this.setState({log: []})
	}

	public render(): ReactElement {
		return (<PUIContext.Provider value={{log: this.state.log}}>
			<div className={"PUIApp" + (this.props.className ? (" " + this.props.className) : "")}>
				{this.props.children}
				{this.state.toast && <PUIToast type={this.state.toast?.type} duration={this.state.toast?.duration} msg={this.state.toast?.msg} onClose={() => this.setState({toast: undefined})}/>}
				{this.state.alert && <PUIAlert open={true} config={this.state.alert} onClose={() => this.setState({alert: undefined})}/>}
			</div>
		</PUIContext.Provider>);
	}

	public static toast(config: PUIToastConfig): void {
		const shared = PUIApp.shared();
		shared.setState({toast: undefined}, () => {
			shared.setState({toast: config})
		})
	}

	public static alert(config: PUIAlertConfig): void {
		const shared = PUIApp.shared();
		shared.setState({alert: undefined}, () => {
			shared.setState({alert: config})
		})
	}

	public static shared(): PUIApp {
		if (PUIApp.singleton === undefined) throw new Error("Tried to access PUIApp before it was made.");
		return PUIApp.singleton;
	}
}

// export function PUIApp(props: PropsWithChildren<PUIAppProps>): ReactElement {
//
// 	const [toast, setToast] = useState<PUIToastConfig | undefined>(undefined);
// 	const [context] = useState<PUIContextProps>({
// 		toast: handleToast
// 	});
//
// 	function handleToast(c: PUIToastConfig): void {
// 		setToast(undefined);
// 		setTimeout(() => setToast(c), 250);
// 	}
//
// 	return (<PUIContext.Provider value={context}>
// 		<div className={"PUIApp" + (props.className ? (" " + props.className) : "")}>
// 			{props.children}
// 			{toast && <PUIToast type={toast?.type} duration={toast?.duration} msg={toast?.msg} onClose={() => setToast(undefined)}/>}
// 		</div>
// 	</PUIContext.Provider>);
//
// }
