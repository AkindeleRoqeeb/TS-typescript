const superHero : string[] = []
const numberHero : number[] = []

// array

superHero.push("man life is hard")
numberHero.push(676)

const heroPower: Array<number> = []

type User = {
    name : string
    isactive : boolean
}

const allUser: User[] = []

allUser.push({name: "", isactive: false})

// ////////////////////////

const MLModel: number[][] = [
    [23, 43, 66],
    [87, 43, 98],
    []
]

let score: number | string = 56

score = 9782
score = "money"

// //////////////////////

type UserDB = {
    name : string,
    id : number
}

type Admin = {
    username : string,
    id : number
}

let userDBinfo: UserDB | Admin = {
    name: "abdul", id: 873
}

userDBinfo = {username: "man", id: 654}


// function getDBid(id: number | string){
//     // id.toupperCase()
//     console.log("manner of life")
//     return `this your ${id}`
// }
getDBid(873)
getDBid("life you all")

function getDBid(id: number | string){
    // id.toLowerCase()
    if (typeof id === "string") {
        id.toLowerCase()
    }
}


// getDBID(356)

export {}