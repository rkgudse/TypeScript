const num:number = 3   //num:number에서 number생략해도 됨. 타입 추론가능
const str:string = 'coffee'
const n:null = null
const void
// const result = num + string

console.log(num + str)

const make = (x:number):void =>{}
const something:any = '1' //최상위타입 any , 타입을 못찾을 때
const infi = ():never =>{while(true){}} //never 는 반복문에 사용함.

