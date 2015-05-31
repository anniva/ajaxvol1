//A syncronous XMLHttopRequest

/* var request= new XMLHttpRequest(); 

request.open('GET','text.txt', false); 

request.send(null);

//console.log(request.responseText);

document.getElementById('response').innerHTML = request.responseText;
*/

//A Asyncronous XMLHttopRequest

var request= new XMLHttpRequest(); 

request.open('GET','text.txt', true); // .open(method, url, async) 

request.send();

//console.log(request.responseText);

request.onreadystatechange = function() { //
    if(request.readyState == 4) {
        console.log(request);
        document.getElementById('response').innerHTML = request.responseText;
        // this last line grabs the element on the page with the id #response and changes its text to the text from the file that was opened.
    };
};


