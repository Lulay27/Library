let myLibrary = [];
formBlock.style.display = "none";

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = myLibrary.length;
}

// Book.prototype.status() {

//    return 
// }

// create prototype function that takes DOM element attribute to relate to array


function addBookBtn() {
    const formBlock = document.getElementById("formBlock");
    const displaySet = formBlock.style.display;

     if (formBlock.style.display == "none") {
        formBlock.style.display = "block";
     } else {
        formBlock.style.display = "none";
     }    
}

function addBook(e) {
   const titleB = document.querySelector("#titleB").value;  // these must be inside
   const author = document.querySelector('#author').value;
   const pages = document.querySelector('#pages').value;
   const radiobtn = document.querySelectorAll('input[name="radiobtn"]');   //gets node list

   e.preventDefault();  // prevents button from submitting and resetting input
   let btnResult;
   for (const radiobtn1 of radiobtn) {  // for loop iterates nodelist to get Read or unRead
      if (radiobtn1.checked) {
         btnResult = radiobtn1.value;
         break;
      }
   }
   // pushing new object into array
   const newBook = new Book(titleB,author,pages,btnResult);
   myLibrary.push(newBook);

   // displaying array
   let bookContainer;
   let titleDiv;
   let authorDiv;
   let pagesDiv;
   let radiobtnDiv;
   let removeBtn;

   for (let i = 0; i < myLibrary.length; i++) {
      bookContainer = document.createElement("li");
      bookContainer.classList.add("book-container");
      
      titleDiv = document.createElement("div");
      titleDiv.classList.add("title")
      titleDiv.innerHTML = myLibrary[i].title;
      
      authorDiv = document.createElement("div");
      authorDiv.classList.add("author");
      authorDiv.innerHTML = myLibrary[i].author;
      
      pagesDiv = document.createElement("div");
      pagesDiv.classList.add("pages");
      pagesDiv.innerHTML = (myLibrary[i].pages + ' pages');

      radiobtnDiv = document.createElement("button");
      radiobtnDiv.className = 'radiobtn'

      if (myLibrary[i].read == 'Read') {
         radiobtnDiv.innerHTML = 'Read';
      }
      if (myLibrary[i].read == 'Unread') {
         radiobtnDiv.innerHTML = 'Unread';
      }

      removeBtn = document.createElement('button');
      removeBtn.className = 'removeBtn';
      removeBtn.innerText = 'Remove';
      
   }
   
   bookContainer.appendChild(titleDiv);
   bookContainer.appendChild(authorDiv);
   bookContainer.appendChild(pagesDiv);
   bookContainer.appendChild(radiobtnDiv);
   bookContainer.appendChild(removeBtn);
   document.querySelector("footer").appendChild(bookContainer);

   
}

// this activates once DOM content on browser is fully loaded and waits for click
document.addEventListener('DOMContentLoaded', ()=>{
   document.querySelector('#Add').addEventListener('click', addBook);
})

const theParent = document.querySelector('footer');
theParent.addEventListener('click', toggleBtn, false);

function toggleBtn(e) {
   // if (e.target !== e.currentTarget) {
      // let clickedItem = e.target.innerHTML;
      // alert('hello' + clickedItem); 

      if (e.target.innerHTML == 'Read') {
         e.target.innerHTML = 'Unread';
      } else if (e.target.innerHTML == 'Unread') { // why the f does if not work here
         e.target.innerHTML = 'Read';
      }

   // }
   // e.stopPropagation();
}

const removeBtn1 = document.querySelector('.removeBtn');
theParent.addEventListener('click', removeFunc, false);

function removeFunc(e) {
   if (e.target.innerHTML == 'Remove') {
      e.target.parentElement.remove();
   }
}