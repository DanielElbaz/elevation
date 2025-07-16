
class UniqueArray {
    constructor() {
        this.unique = [];
        this.uniqueLength = 0;
        this.lookup = {};
    }

    add(item) {
        const key = this._key(item);
        if (!this.lookup[key]) {
            this.unique[this.uniqueLength] = item;
            this.lookup[key] = true;
            this.uniqueLength++;
        }
    }

    showAll() {
        console.log(this.unique)
    }

    exists(item) {
        const key = this._key(item);
        return this.lookup.hasOwnProperty(key);
    }

    get(index) {
        return (index >= 0 && index < this.uniqueLength) ? this.unique[index] : -1;
    }

    _key(item) {
        return typeof(item) + ":" + item;
    }

}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
uniqueStuff.showAll();

