// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        const n = new Node();
        if (this.head){
            n.data = data
            n.next = this.head
            this.head = n
        }
        n.data = data;
        this.head = n;
    }
    size(i = 0, node = null){
        //base case
        if(this.head===null){
            return 0;
        }

        if(node===null){
            node = this.head;
        }

        if(node.next===null){
            i++;
            return i;
        }
        else{
            
            i++;
            return  this.size(i, node.next);
        }

    }



}

module.exports = { Node, LinkedList };
