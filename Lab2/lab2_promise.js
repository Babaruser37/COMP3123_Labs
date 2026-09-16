// purpose act as an API endpoint and 

async function fetchGames(params) {
    let promiseGames = new Promise((resolve, reject) => {
        let isRegistered = true
        setTimeout(() => {
            if (isRegistered){
                // Static method
                const  gamesJSON = {
                    "monday" : "leafs",
                    "tuesday" : "raptors"
                }
                let result = JSON.stringify(gamesJSON)
                resolve(result)
            }
            else{
                reject("You must be a registered user first")
            }
        }, 2000);
        
    })
    let resultFromPromise = await promiseGames
    console.log(resultFromPromise);
    const parsed = JSON.parse(resultFromPromise)
    console.log(parsed);
    console.log(parsed.monday);
}

fetchGames()
let someStrToPrint = "bob"
console.log(someStrToPrint);
