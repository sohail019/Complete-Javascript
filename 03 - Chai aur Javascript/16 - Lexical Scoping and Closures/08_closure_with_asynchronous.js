// Closure with Asynchronous Code

function fetchData(url){

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok`)
            }
            return response.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(
              "There has been a problem with your fetch operation:",
              error
            );
        })
}

fetchData("https://api.github.com/users/sohail019");