class Node {

    //first we need to construct the constructor
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
    
    //Set the next node in the list 
    setTheNextNodeList (node){
        if (node instanceof Node || node === null){
            this.next = node;
        }
    }

    //get next node in the list
    getNextNode(){
        return this.next;
        
    }
}

module.exports = Node;