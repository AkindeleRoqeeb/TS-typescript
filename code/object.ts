// const User = {
//     name: "Hard bro",
//     email: "lifecanbehard@gmail.com",
//     isActive: true
// }


// function createUser({ name: string, isPaid: boolean }) { }

// let newUser = { name: "life", isPaid: true, email: "m@lite.com" }

// createUser(newUser)

// function createCourse(): { name: string, price: number } {
//     return { name: "abdul", price: 656 }
// }





// type User = {
//     name: string,
//     email: string,
//     isactive: boolean
// }

// type mystring = string

// function createUsers(user: User): User{
//     return {name: "", email: "", isactive: true}
// }

// createUsers({name: "", email: "", isactive: true})


type User = {
    readonly _id : string
    name : string
    email : string
    isactive : boolean
    creditcardDetails?: number
}

let myUser: User = {
    _id : "63453",
    name : "abdul",
    email : "j@kite.com",
    isactive: true,
    // creditcardDetails : 
}

myUser.email = "ht@mail.com"
// myUser._id = "7873"

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    carddate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

export {}