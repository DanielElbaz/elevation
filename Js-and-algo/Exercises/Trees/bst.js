
class BSNode {

    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(value) {
        if (this.value === value) {
            return true;
        } else if (this.rightChild && value > this.value) {
            return this.rightChild.findNode(value)
        } else if (this.leftChild && value <= this.value) {
            return this.leftChild.findNode(value)
        } else return false
    }

    findCommonParent(value1, value2) {
        if (this.value > value1 && this.value <= value2) { return this.value }

        else if (this.value <= value1 && this.rightChild) {
            return (this.rightChild.findCommonParent(value1, value2))
        }

        else if (this.value > value2 && this.leftChild) {
            return (this.leftChild.findCommonParent(value1, value2))
        }
    }

    removeNode(parent, value) {
        if (value < this.value) {
            if (this.leftChild) {
                return this.leftChild.removeNode(this, value);
            } else {
                return false; 
            }
        } else if (value > this.value) {
            if (this.rightChild) {
                return this.rightChild.removeNode(this, value);
            } else {
                return false; 
            }
        } else {
            // case 1 : there is not any children
            if (!this.leftChild && !this.rightChild) {
                if (parent.rightChild === this) {
                    parent.rightChild = null;
                } else if (parent.leftChild === this) {
                    parent.leftChild = null;
                }
            }

            // case 2 :there is a right child
            else if (!this.leftChild && this.rightChild) {
                if (parent.leftChild === this) {
                    parent.leftChild = this.rightChild;
                } else if (parent.rightChild === this) {
                    parent.rightChild = this.rightChild;
                }
            }

            // case 3: there is a left child
            else if (this.leftChild && !this.rightChild) {
                if (parent.leftChild === this) {
                    parent.leftChild = this.leftChild;
                } else if (parent.rightChild === this) {
                    parent.rightChild = this.leftChild;
                }
            }

            // case 4: there are 2 children
            else {
                const maxNode = this.leftChild.findMaxNode();
                this.value = maxNode.value;
                // supprimer le noeud déplacé
                this.leftChild.removeNode(this, maxNode.value);
            }

            return true;
        }
    }

    // méthode utilitaire pour trouver le max à gauche
    findMaxNode() {
        if (this.rightChild) {
            return this.rightChild.findMaxNode();
        } else {
            return this;
        }
    }

}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 
