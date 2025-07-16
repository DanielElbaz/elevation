class UniqueArray {
    constructor() {
        this.unique = [];
    }

    add(item) {
        if (!this.exists(item)) {
            this.unique.push(item);
        }
    }

    showAll() {
        console.log(this.unique);
    }

    exists(item) {
        return this.unique.some(existing => this.isEqual(existing, item));
    }

    get(index) {
        return index >= 0 && index < this.unique.length ? this.unique[index] : -1;
    }

    isEqual(a, b) {
        if (a === b) return true;

        if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
            return false;
        }

        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);

        if (aKeys.length !== bKeys.length) return false;

        for (let key of aKeys) {
            if (!b.hasOwnProperty(key) || !this.isEqual(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }
}
const uniqueStuffWithObjects = new UniqueArray();
uniqueStuffWithObjects.add("toy")
uniqueStuffWithObjects.showAll() //prints ["toy"]
uniqueStuffWithObjects.add({name:'daniel'})
uniqueStuffWithObjects.showAll() //prints ["toy"]
uniqueStuffWithObjects.exists("toy") //returns true
uniqueStuffWithObjects.add("poster")
uniqueStuffWithObjects.add("hydrogen")
console.log(uniqueStuffWithObjects.get(2)) //prints "hydrogen"
uniqueStuffWithObjects.showAll();

