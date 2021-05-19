/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { EventEmitter } from "events";

export interface PUIGamepadControllerEvent {
	leftJoystickMove: (x: number, y: number) => void;
	rightJoystickMove: (x: number, y: number) => void;
	buttonDown: (button: PUIGamepadButton) => void;
	buttonUp: (button: PUIGamepadButton) => void;
	buttonChange: (button: PUIGamepadButton, pressed: boolean) => void;
	leftTrigger: (value: number) => void;
	rightTrigger: (value: number) => void;
}

export enum PUIGamepadButton {
	A,
	B,
	X,
	Y,
	LB,
	RB,
	LT,
	RT,
	SELECT,
	START,
	LS,
	RS,
	UP,
	DOWN,
	LEFT,
	RIGHT,
	XBOX,
	UNKNOWN
}

export declare interface PUIGamepadController {
	on<U extends keyof PUIGamepadControllerEvent>(
		event: U, listener: PUIGamepadControllerEvent[U]
	): this;

	emit<U extends keyof PUIGamepadControllerEvent>(
		event: U, ...args: Parameters<PUIGamepadControllerEvent[U]>
	): boolean;
}

export class PUIGamepadController extends EventEmitter {

	private _state: Gamepad | undefined;

	public constructor() {

		super();

		this.controlLoop = this.controlLoop.bind(this);
		this.kill = this.kill.bind(this);
		this.onActionCommitted = this.onActionCommitted.bind(this);
		window.addEventListener("gamepadconnected", this.controlLoop);

	}

	private controlLoop() {

		let gp = navigator.getGamepads()[0];
		if (!gp) return requestAnimationFrame(this.controlLoop);
		if (!gp.connected) {
			console.error("Gamepad is not connected.");
			return;
		}
		if (this._state?.timestamp === gp.timestamp) return requestAnimationFrame(this.controlLoop);
		this.onActionCommitted(gp);

		requestAnimationFrame(this.controlLoop);

	}

	private indexForButton(button: PUIGamepadButton): number {
		return button;
	}

	private buttonFromIndex(index: number): PUIGamepadButton {
		return index;
	}

	public static buttonNameFromIndex(index: number): string {
		return PUIGamepadButton[index];
	}

	private noButtonChange(b1: GamepadButton, b2: GamepadButton): boolean {
		return b1.value === b2.value && b1.pressed === b2.pressed && b1.touched === b2.touched;
	}

	private onActionCommitted(gamepad: Gamepad): void {

		if (this._state === undefined) {
			this._state = gamepad;
			return;
		}

		for (let i = 0; i < gamepad.buttons.length; i++) {
			const button = gamepad.buttons[i];
			if (this.noButtonChange(button, this._state?.buttons[i])) continue;

			const buttonId = this.buttonFromIndex(i);
			if (button.value === 0 || button.value === 1) this.emit("buttonChange", buttonId, button.pressed);
			if (button.value === 1) this.emit("buttonDown", buttonId);
			else if (button.value === 0) this.emit("buttonUp", buttonId);

			if (buttonId === PUIGamepadButton.LT) this.emit("leftTrigger", button.value);
			if (buttonId === PUIGamepadButton.RT) this.emit("rightTrigger", button.value);

		}

		if (gamepad.axes[0] !== this._state.axes[0] || gamepad.axes[1] !== this._state.axes[1]) {
			this.emit("leftJoystickMove", gamepad.axes[0], gamepad.axes[1]);
		}

		if (gamepad.axes[2] !== this._state.axes[2] || gamepad.axes[3] !== this._state.axes[3]) {
			this.emit("rightJoystickMove", gamepad.axes[2], gamepad.axes[3]);
		}

		this._state = gamepad;

	}

	public kill(): void {
		window.removeEventListener("gamepadconnected", this.controlLoop);
	}

}

