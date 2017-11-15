class Stack{
    constructor(size){
        this.storage = new Uint8Array(size) // size is how many elements
        this.sp = 0
        this.size = size
    }
    push(item){
        this.storage[this.sp] = item // store the item at the stack pointer location
        this.sp += 1 // move up the stack pointer
        if(this.sp > this.size)
            throw Error("Out of bounds, you tried to push into an unaccessible location")
    }
    pop(){
        this.sp -= 1 // move down the stack pointer
        if(this.sp < 0)
            throw Error("Out of bounds, you tried to pop from an unaccessible location")
        return this.storage[this.sp] // return the last item
    }
    peek(){
        if(this.sp - 1 < 0)
            throw Error("Out of bounds, you tried to peek from an unaccessible location")
        return this.storage[this.sp - 1] // return the last item
    }
}
var myNums = new Stack(3)
myNums.push(2)
myNums.push(4)
myNums.push(6)
myNums.pop() // -> 6
myNums.pop() // -> 4
myNums.push(7)
myNums.pop() // -> 7

class Queue{
    constructor(size){
        this.storage = new Uint8Array(size)
        this.front = -1
        this.rear  = 0
        this.size = size
    }
    enqueue(item){
        this.storage[this.rear++] = item
    }
    dequeue(){
        return this.storage[++this.front]
    }
}
var nums = new Queue(4)
nums.enqueue(1)
nums.enqueue(2)
nums.enqueue(3)
console.log(nums.dequeue())
nums.enqueue(40)
console.log(nums.dequeue())
console.log(nums.dequeue())
console.log(nums.dequeue())
