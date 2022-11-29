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
        this.head = new Node(data, this.head);
    }

    size(){
        let i = 0;
        let node = this.head;
        while(node){
            i++;
            node = node.next
        }
        return i;

    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let node = this.head;
        while(node.next){
            node = node.next
        }
        return node;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head)
            return;
        this.head = this.head.next;
    }

    removeLast(){
        if (!this.head)
            return;
        if (this.head.next===null){
            this.head=null;
            return;
        }
        
        let node = this.head;
        let prev = new Node();
        while(node.next){
            prev = node;
            node = node.next
        }
       prev.next = null;
    }

    insertLast(data){
        if (!this.head){
            this.head = new Node(data);
            return;
        }
        let node = this.head;
        while(node.next){
            node = node.next
        }
        node.next = new Node(data);
    }

    getAt(n){
        if (!this.head){
            return null;
        }

        if (n===0)
            return this.head;

        if (n===1)
            return this.head.next;

        let i = 0;

        let node = this.head;
        while((node.next)&&(i!==n)){
            i++;
            node = node.next
        }
        if (i===n)
            return node;
        else
            return null;
    }







}

module.exports = { Node, LinkedList };
