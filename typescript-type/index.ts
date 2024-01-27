//union|
const a:string|null|undefined = '1'

//type alias // 나만의 타입만들기

type Coffee = {
    name:string,
    price:number,
    hasShot:boolean, 

}

// hasShot?(없을 수도 있는 것):boolean, or hasShot:boolean|null


const latte:Coffee = {
    name: '라떼',
    price: 3000,
    hasShot: true,
}

type Day = {
    day:string, //'월' | '화'
    date:number,
}

const today:Day{
    day: '일요일',
    date: 21,
}