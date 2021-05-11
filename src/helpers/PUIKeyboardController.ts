/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {EventEmitter} from "events";

type PUIKeyboardControllerHandler = (event: KeyboardEvent) => void;

export class PUIKeyboardController {

	private emitter: EventEmitter;
	private static singleton: PUIKeyboardController = new PUIKeyboardController();

	private static Class2 = class {

	}

	private constructor() {

		this.emitter = new EventEmitter();
		window.onkeypress = (ev: KeyboardEvent) => this.emitter.emit("keyPress", ev);
		window.onkeyup = (ev: KeyboardEvent) => this.emitter.emit("keyUp", ev);
		window.onkeydown = (ev: KeyboardEvent) => this.emitter.emit("keyDown", ev);

	}

	public static onKeyPress(handler: PUIKeyboardControllerHandler): void {
		this.singleton.emitter.on("keyPress", handler)
	}

	public static onKeyUp(handler: PUIKeyboardControllerHandler): void {
		this.singleton.emitter.on("keyUp", handler)
	}

	public static onKeyDown(handler: PUIKeyboardControllerHandler): void {
		this.singleton.emitter.on("keyDown", handler)
	}
}

