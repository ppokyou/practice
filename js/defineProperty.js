//访问器属性
var book = {
    _year:2016,
    edition:1
}
Object.defineProperty(book,'year',{
    get:function () {
        return this._year;
    },
    set:function (newValue) {
        if(newValue>2016){
            this._year = newValue;
            this.edition = newValue - 2016;
        }
    }
})

book.year=2015;
console.log(book.edition);//1

var des = Object.getOwnPropertyDescriptor(book, "_year");
console.log(des);