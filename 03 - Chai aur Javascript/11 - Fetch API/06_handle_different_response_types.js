// Handling Different Reponse Types


// Fetching JSON data

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log("JSON Data:", data))
    .catch(error => console.error("Error: ", error))


// Fetching Text Data

fetch('https://api.github.com/users/sohail019')
    .then(response => response.text())
    .then(data => console.log("Text Data: ", data))
    .catch(error => console.error("Error: ", error))


// Fetching binary data (blob)
const imageUrl = 'https://avatars.githubusercontent.com/u/69633245?v=4'

fetch(imageUrl)
    .then(response => response.blob()) // Parse blob response
    .then(data => {
        const fetchBtn = document.querySelector("#fetchImg")

        fetchBtn.addEventListener('click', function(){
                const image = document.createElement('img')
                image.src = URL.createObjectURL(data) // Display image
                image.style.width = "20%"
                document.body.appendChild(image)

        })
    })
    .catch(error => console.error("Error:", error))


// Fetching FormData
const formData = new FormData();
formData.append('key', 'value');

fetch('https://example.com/submit', {
    method: 'POST',
    body: formData
})
    .then(response => response.text())
    .then(data => console.log('FormData Response:', data))
    .catch(error => console.error('Error:', error));