class myArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
}

const array = new myArray();

array.push('Andrea');
console.log(array);
array.push('Christian');
console.log(array);
console.log(array.get(0));
console.log(array.pop());