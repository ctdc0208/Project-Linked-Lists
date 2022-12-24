class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Null by default. If list is empty there is no head
        this.size = 0; // Zero by default, to keep track of size
    }

    // Adds a new first node
    appendHead(data) {
        this.head = new Node(data, this.head); // New head's next is the current head
        this.size++;
    }

    // Adds a new last node
    appendTail(data) {
        let tail = new Node(data);
        let current; // Initialize 'current' in outer scope
        if (this.size === 0) this.appendHead(data);
        else {
            current = this.head; // Starts from head and loop to find last node
            while (current.next !== null) {
                current = current.next;
            }
            current.next = tail;
        }
        this.size++;
    }

    // inserts a new node with the provided value at the given index
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return;
        } else if (index === 0) {
            this.appendHead(data);
            return;
        }
        let node = new Node(data);
        let current = this.head;
        let previous;
        let currentPosition = 0;
        while (currentPosition < index) {
            previous = current; // Node before index
            current = current.next; // Node after index
            currentPosition++;
        }
        previous.next = node; // Adds new node after previous
        node.next = current; // Adds current after new inserted node
        this.size++;
    }

    // Returns total number of nodes
    printSize() {
        console.log(this.size);
    }

    // Returns head
    headNode() {
        console.log(this.head);
    }

    // Returns tail
    tailNode() {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        console.log(current);
    }

    // Returns node at given index
    at(index) {
        let current = this.head;
        let currentPosition = 0;
        while (current) {
            if (currentPosition === index) {
                console.log(current.data);
            }
            current = current.next;
            currentPosition++;
        }
        return null;
    }

    // Returns true and index of the node containing value, or null if not found
    contains(value, current = this.head, count = 0) {
        if (current === null) return console.log(null);
        if (value === current.data) {
            return console.log(`true, index: ${count}`);
        }
        this.contains(value, current.next, ++count);
    }

    // Prints your LinkedList objects as strings
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data.toString());
            current = current.next;
        }
    }

    // Removes last node
    pop() {
        let current = this.head;
        let previous;
        if (this.size === 0) return;
        else {
            while (current.next !== null) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
        this.size--;
    }

    // Removes the node at the given index
    removeAt(index) {
        if (index < 0 || index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let currentPosition = 0;
        if (index === 0) {
            this.head = current.next;
            this.size--;
            return;
        }
        while (currentPosition < index) {
            previous = current;
            current = current.next;
            currentPosition++;
        }
        previous.next = current.next;
        this.size--;
    }

    // Clears linked list
    clearList() {
        this.head = null;
        this.size = 0;
    }
}

const myLinkedList = new LinkedList();

myLinkedList.appendHead(300); // Adds a head
myLinkedList.appendHead(200); // Adds a head
myLinkedList.appendHead(100); // Adds a head
myLinkedList.appendTail(400); // Adds a tail
myLinkedList.appendTail(500); // Adds a tail
myLinkedList.insertAt(150, 1); // Inserts a node
myLinkedList.insertAt(450, 5); // Inserts a node

myLinkedList.printList(); // Returns 100 150 200 300 400 450 500
myLinkedList.printSize(); // Returns 7

myLinkedList.headNode(); // Returns Node {data: 100, next: Node}
myLinkedList.tailNode(); // Returns Node {data: 500, next: null}

myLinkedList.at(1); // Returns 150
myLinkedList.at(10); // Returns nothing

myLinkedList.contains(400); // Returns true, index: 4
myLinkedList.contains(1000); // Returns null