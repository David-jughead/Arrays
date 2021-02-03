class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;

        return this;
    }
    pop() {
        const tempData = this.top.next;
        this.top = tempData;
        this.length--;
        return this;
    }
}

const myStack = new Stack();

stack.push(5);
stack.push(10);
stack.push(20);
stack.push(60);
stack.pop();