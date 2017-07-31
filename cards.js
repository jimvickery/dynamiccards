console.log('in cards.js');



//get placeholders
let createBlogEl = document.getElementById("create-button");
let textEl = document.getElementById("text-input");
let blogEl = document.getElementById('new-content');
let fontEL = document.getElementById("font");
let deleteBlogsEl = document.getElementById("delete-blogs")


blogEl.addEventListener("click", function(){
 blogEl.innerHTML += `<div id = "new-content" >` + 
 `<label for = "back"> Select Blog Color</label>
 <input type = "color id = "back" name = "back" oninput = "changeColor(this);">` +
 `<label for = "back"> Select Font Color</label>
 <input type = "color" id = "font" name = "font" oninput = "changeFont(this);">` +
 `<div class = "blogtext">` + textEl.value + `</p>` + 
 `<input type = "button" id = " kill " nam e= "kill" value = "delete"  onclick = "kille(this.parentNode);"></div>  ` 



});


//add event listener click event for delet all button
deleteBlogsEl.addEventListener("click", function(){
    blogEl.innerHTML = "";

});

function deleteBlogs (a) {
    let parentBlog = a.parentNode;
}

function changeColor(a) {
    let parentBlog = a.parentNode;
    let childDiv = parent.getElementsByTagName('input') [0];
    let colors = childDiv.value;
    parent.getElementsByTagName("p")[0].style.backgroundColor = colors;


}


function changeFont(a) {
    let parent = a.parentNode;
    let childDiv = parent.getElementsByTagName('input')[1];
    let colors = childDiv.value;
    parent.style.color = colors;

}















