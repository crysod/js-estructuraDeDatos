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
    delete(index){
        const item = this.data[index];
        this.shifIndex(index);
        return item;
    }
    shifIndex(index){
        for( let i = index; i < this.length - 1; i++ ){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const array = new myArray();

array.push('Andrea');
console.log(array);
array.push('Christian');
console.log(array);
array.push('Ruby');
console.log(array);
console.log(array.get(0));
//console.log(array.pop());
console.log(array.delete(1));
console.log(array);