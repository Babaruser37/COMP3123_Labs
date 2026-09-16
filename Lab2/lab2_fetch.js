/*
Purpose: Fetch data from a 3rd party api
 */

const domain = "https://isitdownstatus.com/api/v1/status/netflix"
fetch(domain)
    .then((response) => {
        return response.json()
    })
    .then((dataJSON) => {
        console.log(dataJSON);
        console.log(dataJSON.ok);
        console.log(dataJSON.data.status);
    })
    .catch(error => {
        console.log("Error:", error);
    });
