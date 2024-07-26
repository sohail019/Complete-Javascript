# API & AJAX

## API Kya Hota Hai?

- Api ka full hai Application programming interface.
- Ye ek tareeqe ka set hota hai rules ya protocols ka, jo do applications ko aapas mein communicate karne mein help karta hai.
- Imagine ke tum ek restaurant mein ho aur uska menu API hai, jab bhi tumhe kch request/order karna rehta hai to tum us menu ka use kar ke waiter ko batate ho ki tumhe kya chahiye
- USECASE: Agar tum ek website bana rahe ho jo weather ka data dikhae, to tum satellite to nahi bhej skte ek website ke data ke liye.. isiliye API ka use kr sakte hai jo current weather data already kisi satellite ke through aaya hai uska data apni website me show kr sakte hai


## XMLHTTPRequest
XMLHTTPRequest JS ka ek object hai jo client and server ke beech data ko exchange karne ke liye use hota hai. Ye bina page ko load kiye data ko fetch ya send kar sakta hai.

```javascript
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
```

## XML and AJAX
- AJAX ka full form hai Asynchronous Javascript and XML.
- Ye Web Dev Technology hai jo web pages ko bina reload kiye asynchronously data fetch ya send karne mein madad karta hai
- XMLHTTPRequest object ka use AJAX request banane ke liye hota hai. upar wala basic request tha ab ajax request dekhte hai

```javascript
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
```

## JSON kya hai?
- JSON ka full form hai JavaScript Object Notation.
- Ye ek lightweight data interchange format hai jo humans and machines dono ke liye readable hota hai.
- Ye mainly key:value pairs mein data ko store karta hai
-  XMLHTTPRequest ka use karke ham server se JSON data fetch kar sakte hai aur usse apne web par dikha sakte hai

```javascript
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
```

## Error Handling
API calls mein errors aana common hai, isiliye error handling karna imp hai
```javascript
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
```

## POST Request
- Jab hamein server par data bhejna hota hai, tab ham POST request ka use karte hai
- POST Request ko usually data create ya update karne ke liye use kiya jaata hai
```javascript
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
```

## FORM DATA WITH AJAX
```javascript
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
```