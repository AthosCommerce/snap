import { computed, makeObservable, observable } from 'mobx';

export class ChatCompareStore {
	public items: any[] = [];
	public maxItems: number = 4;

	constructor() {
		makeObservable(this, {
			items: observable,
			maxItems: observable,
			compared: computed,
		});
	}

	// add, remove, reset methods
	add(item: any) {
		if (this.items.length >= this.maxItems) {
			// handle max items reached, e.g. remove the oldest item
			this.items.shift();
		}
		this.items.push(item);
	}

	remove(itemId: string) {
		this.items = this.items.filter((item) => item.id !== itemId);
	}

	reset() {
		this.items = [];
	}

	get compared() {
		return this.items;
	}
}
