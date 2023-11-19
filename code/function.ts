function addTwo(num : number){
    // num.toUppercase()
    // return num + 5
    return "hello life"
}

function addthree(num : number): number{
    // num.toUppercase()
    return num + 5
    // return "hello life"
}

function getUpper(vel: string){
    return vel.toUpperCase()
}

function signUpUser(name: string, emial: string, isPaid: boolean = true){}

signUpUser("man", "jah@ga.com")


let loginUser = (name: string, email: string, isSold: boolean) => {}

loginUser("life", "c@gmail.com", false)



getUpper("akindele")

// addTwo("4")
addTwo(5)


function checkOut(name: number): boolean{
    if(name > 5){
        return true
    }

    // return "200 OK"
    return false
}

const getHello = (s: string): string => {
    return ""
}

const heros = ["like", "hate", "love"]
// const heros = [2, 5, 6]

heros.map((hero): string => {
    return `hero is ${hero}`
    // return 2
})

function consileErro(mssg: string): void {
    console.log(mssg);
}

function handleErro(errmsg : string) : never {
    throw new Error(errmsg);
}

export {}