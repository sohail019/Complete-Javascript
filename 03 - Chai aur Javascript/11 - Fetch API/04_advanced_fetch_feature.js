const controller = new AbortController() // AbortController object create karta hai aur signal ko fetch request mein pass karta hai

const signal = controller.signal

fetch('https://jsonplaceholder.typicode.com/posts', {signal})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === "AbortError") {
            console.log("Fetch Request was aborted");
        } else {
            console.log("Error", error);
        }
    })

// Abort the Request
controller.abort() // isko call karke request ko cancel kar sakte hai