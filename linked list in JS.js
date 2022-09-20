//Node Class
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
};
//LinkedList class
class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    isEmpty(){
        return (this.length === 0);
    }
    insertAtBegin(value){
        if(this.head == null)
        {
            this.head = value;
        }
        var temp = new Node(value);
        this.head = temp;
        this.length++;
    }
    insertAtLast(value)
    {
        if(this.isEmpty())
        {
            this.insertAtBegin(value);
        }
        else{
            var temp = this.head;
            while(temp.next != null)
            {
                temp = temp.next;
            }
            var t1 = new Node(value);
            temp.next = t1;
            this.length++;
        }
    }
    removeFromBegin()
    {
        if(this.isEmpty())
        {
            return;
        }
        else if(this.length == 1 )
        {
            this.head = null;
        }
        else{
            this.head = this.head.next;
        }
        this.length--;
    }
    removeFromLast(){
        if(this.isEmpty())
        {
            return;
        }
        else if(this.length === 1)
        {
            this.head = null;
        }
        else{
            var temp = this.head;
            while(temp.next != null)
            {
                temp = temp.next;
            }
            this.next = null;
            this.length--;
        }
    }
    Lenght(){
        return this.length;
    }
    getFirstvalue(){
        if(!this.isEmpty())
        {
            return this.head.data;
        }
        return -9999;
    }
    getLastValue(){
        if(!this.isEmpty())
        {
            var temp = this.head;
            while(temp.next != null)
            {
                temp = temp.next;
            }
            return temp.data;
        }
    }
    printAll(){
        var temp = this.head;
        var str = "";
        while(temp){
            str += (temp.data + "->");
            temp = temp.next;
        }
        console.log(str+"NULL\n");
    }
};



//Imaginary Main
l1 = new LinkedList();
console.log("Empty ? : " + l1.isEmpty());
l1.insertAtBegin(1);
l1.insertAtLast(5);
l1.insertAtLast(2);
l1.insertAtLast(3);
l1.insertAtLast(4);
l1.insertAtLast(9);
l1.printAll();
console.log("Length with all Elements : " + l1.Lenght());
console.log("head : " + l1.getFirstvalue());
console.log("Tail : " + l1.getLastValue());
console.log("Empty ? : " + l1.isEmpty());
l1.removeFromLast();
l1.printAll();
console.log("Length after Removal Element : " + l1.Lenght());