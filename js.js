// let a = 55656

// function findDigit(a) {
//     let s = 0
//     while (a > 0) {
//         s += a - Number.parseInt(a / 10) * 10
//         a = Number.parseInt(a / 10)
//     }
//     console.log(s);
// } findDigit(33561)


// function findSum(a) {
//     let i=0;
//     let s = String(a)
//     let sum=0
//     while(i < s.length){
//         sum +=Number(s[i]);
//     }
// }
// findSum(345678)


// let arrName = [1, 2, 6, null, undefined, true, "cake", false];

// let arrName2 = new Array(1, 2, 6, null, undefined, true, "cake", false)
// console.log(arrName, arrName2);


// let arrName = [1, 2, 6, null, undefined, true, "cake", false];
// console.log(arrName[arrName.length - 2]);


// let arrName = [1, 2, 6, null,  true, "cake", false];
// arrName.push("olma")
// console.log(arrName);


// let arrName = [1, 2, 6, null,  true, "cake", false];
// arrName.unshift("anor")
// console.log(arrName);


// let arrName = [1, 2, 6, null,  true, "cake", false];
// arrName.pop()
// console.log(arrName);


// let arrName = [1, 2, 6, null,  true, "cake", false];
// arrName.shift();
// console.log(arrName);


// let arrName = [1, 2, 6, null,  true, "cake", false];
// arrName[3] ="olma"
// console.log(arrName);


// let arr1=[1,2,3,4,5,6,7];
// let arr2=["bir", "ikki", "uch"];
// let last = arr1.concat(arr2);
// console.log(last);


// let arr = [1, 7, 3, 4, 5, 6, 7, 8];
// let result =arr.find((val)=> val % 2 == 0);
// console.log(result);


// let arr = [1, 7, 3, 4, 5, 6, 7, 8];
// let res = arr.filter((val, indx) => val % 2)
// console.log(res);


// let arr = [4, 10, 888, 90, 77, 100];
// let max = arr[0];
// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// if (min > arr[i]) {
//     min = arr[i];    
// }
// }
// console.log(max, min);
// let min = Math.min(...arr);
// console.log('array ichida eng kattasi ${max}');
// console.log('array ichida eng kattasi ${min}');

// let str = "WeB Brain Aca demya"
// function findA(a) {
//     let s = 0
//     for (let i = 0; i < str.length; i++) {
//         // if (a[i]=="a" || a[i] == "A") {
//         //     s++
//         // }
//         s++

//     }
//     console.log(s);
// }
// findA(str)


// let str = "WeB Brain Aca demya"
// function findA(a) {
//     let s = 0
//     for (let i = 0; i < str.length; i++) {
//         if (a[i]==" ") {
//             continue;
//         }
//         s++
//     }
//     console.log(s);
// }
// findA(str)


// let str ="this is just text";
// let arr = str.split("");
// console.log(arr);

// let str1 = arr.join("")
// console.log(str1);

// let str = "WeB Brain Aca demya"
// let last = arr.replace(/[^A-Z]/g, '')
// console.log(last);

// let arr=["I","Go","Js","NodeJS"]
// arr.splice(1,1)
// arr.splice(2,2,"Element1","Element2")
// console.log(arr);


// let arr = [4, true, 7, false, "test", 12, "something", 9, "JS", 2]
// let r = arr.reduce((sum, num) => (sum += num))
// console.log(r);


// let x = 4;
// let y = 6;
// // function changeVal(a, b) {}
// // changeVal(x, y)
// let r=(x,y).reduce((x + y))
// console.log(r);
// let x = 2;
// let y = 8;
// function changeVal(a, b) {
//     if (a == x && b == y) {
//         a = y
//         b = x
//     }

//     console.log(a,b);
// }
// changeVal(x, y);


// typeof num == typeof 3 ? num : 0
// let arrr = [23, 4, 5, 6, 7, 8];
// let r = arrr.reduce((num, sum) => (sum +=  num));
// console.log(r);


// let str = "ABBBACCRT"


// let arr = ["nok", "olma", "banan", "olma", "nok", "olma", "tarvuz",]
// function deleteMeva(name) {
//     for (i = 0; i < arr.length; i++) {
//         if (i == arr.indexOf(name)) {
//             arr.splice(arr.indexOf(name),  1);
//         }

//     }
//     console.log(arr);
// }
// deleteMeva("olma")


// Object
// let ObjName ={
//     key: "value",
// }


// let student={
//     id:1,
//     name:"Xamza",
//     surname:"Kamol",
//     address: "Tashkent",
// };
// let arr=[2345,345]
// let func=function () {
//     console.log(":asdadsa");

// }
// console.log(typeof student);
// console.log(typeof arr);
// console.log(typeof func);


// let student = {
//     id: 1,
//     name: "Xamza",
//     surname: "Kamol",
//     address: "Tashkent",
// }
// console.log(student.name);
// console.log(student["name"]);



// let student = [
//     {
//     id: 1,
//     name: "Xamza",
//     surname: "Kamol",
//     address: {
//         contry: {
//             district: "Tashkent",
//             street: "naqqoshik",
//             arr: ["dom1", "dom2"],
//         },
//         zipcode: 1010102,
//     },
//     let arrr = 
//         {
//             id: 1,
//             name: "lolo"}
//             {
//                 id: 1,
//                 name: "lolo"
//             }
//         },

//      ]
//         studen
// console.log(student['address']['contry']['street']['arr']);

// let user = {
//     id: 1,
//     name: "gggggg",
//     sayHello: ( ) => {
//         console.log("hello");
//     },
//     SayBue: function () {
//         console.log("Bye", "bye");
//     }
// }
// user.SayBue();



// let user = {
//     id: 1,
//     name: "gggggg",
//     sayHello: ( ) => {
//         console.log(`Salom ${this.name}`);
//     },
//     address:{
//         contry:{
//             name:"reererec",
//             saySomth: function () {
//                 console.log(this.name);
//             }
//         }
//     },
//     SayBue: function () {
//         console.log("Bye", "bye");
//     }
// }
// user.SayBue();
// user.address.contry.saySomth();


// let a = this    ;
// console.log(a);


// let arrKeyVal= Object.entries(student);
// console.log(arrKeyVal.map((val) => val));   ;


// let arrrr = ["olma", ["anor", "test"], []]
// console.log(arrrr[1][0]);
// let obj = {
//     id: 1,
//     num: 23,
//     tel: 98,
//     name:"Toshmat",
// };
/////////////////////////////
// let arr = [
//     {id: 1, name: "Temur", title: "IT", number:"6" },
//     {id: 2, name: "Sohib", title: "Muhandis", number:"4" },
//     {id: 3, name: "Karim", title: "electric", number:"5"},
//     {id: 4, name: "Shoxrux", title: "dehqon", number:"1" },
//     {id: 5, name: "Jasur", title: "bugalter", number:"2" },
//     {id: 6, name: "Jamshid", title: "Tuzizm", number:"8" },
// ];
// function sortArr(a) {
//     let newarr = arr.filter((val) => val.name)
// }
// sortArr("o")



// let arr = [
//     {id: 1, name: "Temur", title: "IT", number:"6" },
//     {id: 2, name: "Sohib", title: "Muhandis", number:"4" },
//     {id: 3, name: "Karim", title: "electric", number:"5"},
//     {id: 4, name: "Shoxrux", title: "dehqon", number:"1" },
//     {id: 5, name: "Jasur", title: "bugalter", number:"2" },
//     {id: 6, name: "Jamshid", title: "Tuzizm", number:"8" },
//  ];


// let arr = ["tarvuz"];
// arr.push("olma");
// console.log(arr);

 
// let arr = ["tarvuz"];
// arr.unshift("anor");
// console.log(arr);

// let arr = ["tarvuz", "behi"];
// arr.unshift("anor");
// arr.pop()
// console.log(arr);


// let arr = ["tarvuz"];
// arr.unshift("anor", "banan");
// arr.shift()
// console.log(arr);


//////////////////
// function create(array, a) {}
// create(arr, {id: 7, name: "Temur", title: "it", number:56})
 

// let arr = [
//     {id: 1, name: "Temur", title: "IT", number:"6" },
//     {id: 2, name: "Sohib", title: "Muhandis", number:"4" },
//     {id: 3, name: "Karim", title: "electric", number:"5"},
//     {id: 4, name: "Shoxrux", title: "dehqon", number:"1" },
//     {id: 5, name: "Jasur", title: "bugalter", number:"2" },
//     {id: 6, name: "Jamshid", title: "Tuzizm", number:"8" },
//  ];
//  function DeleteItem(p) {
//     let newArr = arr.filter((value,index) => value.id !== p)
//     console.log(newArr);
//  }
//  DeleteItem(3)

// let searchItem = function (z) {
//     let filtered = arr.filter((val) => val.home.includes(z))
// }
// searchItem("a")


// let staries = {
//     John: 100,
//     Pete: 30,
//     Mary: 250,
// };
// let arrkey = Object.keys(staries);
// let arrval = Object.values(staries);
// let max = Math.max (...arrval);
// let inx = arrval.indexOf(max);
// let ism = arrkey[inx];
// let last = `${ism}ning qiymati katta va u ${max}`
// console.log(last);
// let arrkey = Object.keys(staries);
// let arrval = Object.values(staries);
// let max = Math.max (...arrval);
// let inx = arrval.indexOf(max);
// let ism = arrkey[inx];
// console.log(ism);
// console.log(max);

let {John, Pete, Mary} = staries;
let arr = []
let ism = "Pete"
let max = Pete
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
         max = arr[i];
    ism = `${arr[i]}`;
    }
   
}
console.log(max);
console.log(ism);


// let arr = [10, 30, 50];
// [arr[1], arr[2]] = [arr[2], arr[1]];
// console.log(arr); //[10,50,30]
//////////////////


///call apply
// let a = 7
// function somth() {
//     var b =9;
//     console.log(a);
//     function findSom() {
//         console.log(b);
//     }
//     findSom()
// }
// somth()

















































































