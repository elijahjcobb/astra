/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {EventEmitter} from "events";

type PUIKeyboardControllerHandler = (key: string, ctrl: boolean) => void;

export class PUIKeyboardController {

	private emitter: EventEmitter;
	private readonly cache: Set<String>;
	private static singleton: PUIKeyboardController | undefined;

	private constructor() {

		this.emitter = new EventEmitter();
		this.cache = new Set();

		window.onkeydown = (ev: KeyboardEvent) => {
			if (this.cache.has(ev.key)) return;
			this.cache.add(ev.key);
			this.emitter.emit("keyDown", {key: ev.key, ctrl: ev.ctrlKey})
		};

		window.onkeyup = (ev: KeyboardEvent) => {
			this.cache.delete(ev.key);
			this.emitter.emit("keyUp", {key: ev.key, ctrl: ev.ctrlKey});
		}

	}

	private static shared(): PUIKeyboardController {
		if (this.singleton === undefined) this.singleton = new PUIKeyboardController();
		return this.singleton;
	}

	public static onKeyUp(handler: PUIKeyboardControllerHandler): void {
		this.shared().emitter.on("keyUp", handler)
	}

	public static onKeyDown(handler: PUIKeyboardControllerHandler): void {
		this.shared().emitter.on("keyDown", handler)
	}
}

