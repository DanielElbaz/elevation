class Node {
    constructor(value) {
        this.value = value;
        this.leftChild = null
        this.rightChild = null
    }
    insertLeft(value) {
        if (!this.leftChild) {
            this.leftChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode;
        }
    }
    insertRight(value) {
        if (!this.rightChild) {
            this.rightChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode;
        }
    }

}

let H = new Node('H')
H.insertLeft('E')
H.insertRight('S')
let E=H.leftChild;
let S=H.rightChild;

E.insertRight('G')
S.insertLeft('L')
S.insertRight('Y')

let L = S.leftChild
L.insertLeft("I")

console.log(H)