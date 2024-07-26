// XMLHTTPRequest
// new XMLHTTPRequest object create
let xhr = new XMLHttpRequest();

// Request url
const requestURL = 'https://api.github.com/users/sohail019'

// Request open karte hai
xhr.open('GET', requestURL)

// Response milne par kya karna hai
xhr.onload = function(){
    if(xhr.status === 200){
        // Response text ko console mein print
        console.log(xhr.responseText)
    } else{
        console.log("Request failed. Status: " + xhr.status)
    }
}

xhr.send()

// --------------------------------------------------------

// XML and AJAX

// ek function define karte hai data fetch karne ke liye

function fetchData(){
    let xhr = new XMLHttpRequest();

    let demoAPIUrl = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10'

    // open() method meinn  get request and url server ka endpoint hai
    xhr.open('GET', demoAPIUrl)

    // openreadystatechange ek event listener hai jo server response ke state ko track karta hai
    xhr.onreadystatechange = function(){

        // readyState === 4 iska matlab hai request complete hui
        // status === 200 matlab hai server se successfull response mila
        if(xhr.readyState === 4 && xhr.status === 200){
            // Response ko process karte hai
            console.log(xhr.responseText)
        } else{
            console.log("Request failed. Status: " + xhr.status)
        }
    }

    xhr.send();
}

document.querySelector("#fetchBtn").addEventListener('click', fetchData)

// --------------------------------------------------------

// AJAX with JSON

function fetchJSONData(){

    let xhr = new XMLHttpRequest();

    let githubProfileAPIUrl = 'https://api.github.com/users/sohail019'

    xhr.open('GET', githubProfileAPIUrl)

    // onreadystatechange

    xhr.onreadystatechange = function(){

        if(xhr.readyState === 4 && xhr.status === 200){
            
            // JSON.parse() : ye method JSON String ko JS object mein convert karta hai taaki ham uska data access kar sake

            // xhr.responseText: ye property response ko string format mein return karti hai,isiliye hamein usey JSON.parse() karke parse karna padhta hai
            let data = JSON.parse(xhr.responseText)

            // Data ko console  mein dikhate hai
            console.log("Name: " + data.name)
            console.log("Login id: " + data.login)
            console.log("Location: " + data.location)
            console.log("Followers: " + data.followers)
            console.log("Avatar URL: " + data.avatar_url)
        }
    }

    xhr.send()
}

document.querySelector("#fetchJSONBtn").addEventListener('click', fetchJSONData)

// --------------------------------------------------------
// Handling Errors
// API calls mein errors aana common hai, isiliye error handling karna imp hai

function fetchDataWithErrorHandling(){

    const  xhr = new XMLHttpRequest()
    
    let responeURL = 'https://api.github.com/users/sohail019'

    xhr.open('GET', responeURL)

    xhr.onreadystatechange = function(){

        if(xhr.readyState === 4){
            if(xhr.status === 200) {

                // try-catch: JSON Parsing mein error aane par ye block code ko break hone se bachata hai aur error handle karta hai
                try{
                    let data = JSON.parse(xhr.responseText)
                    console.log("Data: ", data)
                } catch(err){
                    console.log("Error Parsing JSON", e)
                }
            } else{
                console.log("Response failed. Status: " + xhr.status)
            }
        }
    }

    xhr.send()
}

document.querySelector("#fetchBtnError").addEventListener('click', fetchDataWithErrorHandling)


// --------------------------------------------------------
// POST Request

function sendData(){

    let xhr = new XMLHttpRequest()

    let postUrl = 'https://jsonplaceholder.typicode.com/posts'

    // data server par bhejna hai isliye POST method
    xhr.open('POST', postUrl )

    // setRequestHeader request header ko set karta hai aur Content-Type: application/json header batata hai ki ham JSON format mein data bhejrahe hai
    xhr.setRequestHeader('Content-Type', 'application/json')

    // Data jo ham server pe bhejna chahte hai
    let data = JSON.stringify({ // ye method JS object ko JSON string mein convert karta hai taaki ham usey server pe bhej sake
        name: 'Sohail',
        email: 'shaikhhsohail0193@gmail.com'
    })

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                console.log("Response: ", xhr.responseText)
            } else{
                console.log("Request Failed", xhr.status)
            }
        }
    }

    xhr.send()

}

// Button click par sendData function ko call karte hain
document.getElementById('submitBtn').addEventListener('click', sendData);

// -------------------------------------------
// FORM DATA ko AJAX ke through submit karte hai

function sendFormData(){

    let xhr = new XMLHttpRequest();
    let postURL = 'https://reqbin.com/echo/post/json'
    xhr.open('POST', postURL)

    xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value

    // form data ko url encoded mein convert krte hai
    let data = 'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email)
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                console.log("Response: " + xhr.responseText)
            } else{
                console.log("Request Failed: " + xhr.status)
            }
        }
    }

    xhr.send()

}

document.querySelector("submitButton").addEventListener('click', sendFormData)
