const Node = require('./Node.js');

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	print(cb = console.log) {
		let current = this.head;
		while (current){
			cb(current.value);
			current = current.getNextNode();
		}
	}

	append(value) {
		//this appends to end of the list
		const newNode = new Node(value);
		if (!this.head){
			this.head = newNode;
		}
		else{
			let current = this.head;
			while (current.getNextNode()){
				current = current.getNextNode();
			}
			current.setTheNextNodeList(newNode);

		}
		this.length ++;
	}

	prepend(value) {
		//create a new node
		const newNode = new Node(value);

		// this points to the current head of the list
		newNode.setTheNextNodeList(this.head);

		//this makes the new node the head of the list
		this.head = newNode;
		//we increase the length of the list
		this.length++;
	}
}

module.exports = LinkedList;