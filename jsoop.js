document.write("OOP Demo")

st1 = {
    rno:101,
    name:"James",
    per:"float",
    getDetails:function(){
        document.write(`<h2> st1:${st1.rno} name:${st1.name} percentage:${st1.per} <h2/>`)
    }
}

// st2 = {
//     rno:102,
//     name:"Lames",
//     per:"float",
//     getDetails:function(){
//         document.write(`<h2> st2:${this.rno} name:${this.name} percentage:${this.per} <h2/>`)
//     }
// }
// function setdata(rno, name, per) {
//     this.rno= rno;
//     this.name= name;
//     this.per= per;
// }

// function print(){
//     document.write(`<h2> st2:${this.rno} name:${this.name} percentage:${this.per} <h2/>`)
// }
// st2 = {
//     rno:102,
//     name:"Lames",
//     per:"float",
//     getDetails:print,
//     setDetails:setdata
// }
class Student{
    constructor(rollno, name, per){
        this.rollno = rollno
        this.name = name
        this.per = per

    }
}
Student = {
    rollno: '20EGICS081',
    name:"Nitin Jiwnani",
    per:"96%",
    getDetails:function(){
        document.write(`<h2>Student:${Student.rollno} <br> name:${Student.name} <br> percentage:${Student.per} <h2/>`)
    }
}
Student.getDetails()
// st1.getDetails()
// st2.getDetails()

st1 = new Student()

arr = new Array()

console.log(st1)