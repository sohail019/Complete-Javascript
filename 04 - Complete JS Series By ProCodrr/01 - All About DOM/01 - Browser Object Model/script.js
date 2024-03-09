/* BOM -> No Official Standard For BOM
       -> Since all modern browsers have implemented (almost) the same methods and properties for JS interactively, it is often reffered to, as methods and properties of the BOM.       
*/


/* Window Object :
    -> The 'window' object is supported by all the browsers. 
    -> It represents the browser window.
    -> All JS Objects, functions and variables are automatically become members of the window object!
    -> Global variables are properties of window object.
    -> Global functions are methods of the window object.
    -> Even the Document object (of the HTML DOM) is a property of window object
*/

console.log('********* 1 - Location *********')
/* 1 -> Location 
      --> The window.location object can be used to get the current page address (URL) and to direct the browser to a new page!! 
*/
console.log(window.location) // Object milega, usmein property hogi
console.log(location) // it can be written direct without window prefix

// Some properties under location object
console.log(`Page Location is: ${location.href}`) // it returns the href(URL) of the current page (IMP)
console.log(`Page Hostname is: ${location.hostname}`) // it returns the domain name of the web host
console.log(`Page Path is: ${location.pathname}`) // it returns the path and filename of the current page
console.log(`Web Page Protocol is: ${location.protocol}`) // it returns the web protocol used (http: or https:)
console.log(`Assign : ${location.assign}`)
// console.log(`Reload : ${location.reload }`) // it reloads the page


// -------------------------------------------------------------------
console.log('********* 2 - History *********')
console.log('history.back() - same as clicking back in the browser')
console.log('history.forward() - same as clicking forward in the browser')
/* 2 -> History
      --> The window.history object contains the browser's history.
      --> To Protect the privacy of the users, there are limitations to how JS can acces of this object

      --> Some Methods:
          -> history.back() - same as clicking back in the browser
          -> history.forward() - same as clicking forward in the browser
*/

// 2.1 -> History Back --> Comment krna padega warna page back and forward hote rahega!!
// console.log(`History Back ${history.back()}`) // this method loads the previous URL of the browser
// console.log(`History Forward ${history.forward()}`) // this method loads the forward URL of the browser
// console.log(history.go(2))


// -------------------------------------------------------------------
console.log('*** 3 - InnerWidth and InnerHeight ***')
/* 3 -> InnerWidth and InnerHeight
      --> window.innerWidth : the inner width of the browser (in pixels)
      --> window.innerHeight : the inner height of the browser (in pixels)
*/
console.log(`Inner Width : ${innerWidth} || Inner Height ${innerHeight}`)


// -------------------------------------------------------------------
console.log('******** 4 - Window Methods ********')

// console.log(window.open()) // open a new window
// console.log(window.close()) // close the current window 


// -----------------------------------------------------------
console.log('******** 5 - Pop Up Methods ********')

window.alert('Helooooooooooo') // it is used if you want to make sure info comes through to the user
 
window.confirm('Are You Okay?') // it is used if you want to verify or accept something. either OK or cancel

window.prompt('Enter Your Name') // if you want some input from user before entering the page


// -----------------------------------------------------------
console.log('******** 6 - Print Method ********')
window.print()


// -----------------------------------------------------------
console.log('******** 7 - Document Object Model ********')
console.log(window.document)