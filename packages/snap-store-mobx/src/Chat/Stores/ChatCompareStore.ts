import { computed, makeObservable, observable } from 'mobx';

export class ChatCompareStore {
	public items: any[] = [];
	public committedItems: any[] = [];
	public maxItems: number = 4;

	constructor() {
		makeObservable(this, {
			items: observable,
			committedItems: observable,
			maxItems: observable,
			compared: computed,
			committed: computed,
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
		this.items = this.items.filter((item) => item.result?.id !== itemId);
	}

	reset() {
		this.items = [];
	}

	resetCommitted() {
		this.committedItems = [];
	}

	// move the current items to the committed list and clear items
	commit() {
		if (this.items.length > 0) {
			this.committedItems = this.items.slice();
			this.items = [];
		}
	}

	get compared() {
		return this.items;
	}

	get committed() {
		return this.committedItems;
	}
}
