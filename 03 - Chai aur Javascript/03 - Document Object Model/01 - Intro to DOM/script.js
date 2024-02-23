console.log(window) // ye sabse bada object hai browser ka.. ismein sab infor hai

console.log(window.document) // document property hai windows ki

console.dir(document)

console.log(document) // directly document ko bhi print kr skte h

console.log(document.location) // document ke aage dot laga kar bohot saari chiz mil jaegi jaise ek location

console.log(document.baseURI) // base url milega

console.log(document.children) // HTML collections

console.log(document.links)
// NOTE: HTML collection hai, array nahi hai.. difference hai.. html collection, node collection and array.. inko array mein convert krte h! aur jo array ki by default properties h jaise map, forEach iske pass available nahi h!


console.log(document.getElementById('first-heading')) // <h1 id="first-heading" class="heading">Sohail Shaikh</h1>


console.log(document.getElementById('first-heading').innerHTML) // Sohail Shaikh

console.log(document.getElementById('first-heading').attributes)


