import {Guest} from './Guest';

export class Codelab {
    constructor(public guests: Guest[]) {
    }

    getGuestsComing() {
        return this.guests.filter(mg => mg.coming)
    }
}