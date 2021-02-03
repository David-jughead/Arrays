class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  class MyDoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null,
      };
      this.tail = this.head;
  
      this.length = 1;
    }
    append(value) {
      const newNode = new Node(value);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
  
      this.length++;
  
      return this;
    }
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
    }
    insert(index, value) {
      if(index >= this.length) {
        return this.append(value);
      }
      const newNode = new Node(value);
      const firstPointer = this.getTheIndex(index - 1);
      const holdingPointer = this.firstPointer.next;
      firstPointer.next = newNode;
      newNode.next = holdingPointer;
      newNode.prev = firstPointer;
      this.length++;
      return this;
    }
    getTheIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      if(index > this.length) {
        console.error('Este valor ${index} excede la longitud de la LinkedList, por lo tanto no cambia');
        return this;
      }else if(index == (this.length -1)) {
        const beforeNode = this.getTheIndex(index - 1);
        const nextNode = null;
        beforeNode.next = nextNode;
        this.length--;
        return this;
      }else if(index == 0) {
        const nextNode1 = this.getTheIndex(index).next;
        nextNode1.prev = null;
        this.head = nextNode1;
        this.length--;
        return this;
      }else {
        const beforeNode2 = this.getTheIndex(index - 1);
        const nextNode2 = this.getTheIndex(index - 1);
        beforeNode2.next = nextNode2;
        nextNode2.prev = beforeNode2;
        this--;
        return this;
      }
    }
  }
  
  let myDoublyLinkedList = new MyDoublyLinkedList(1);