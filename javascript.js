
let mouseClick = document.querySelector("body");
mouseClick.addEventListener("click", logEvent);
function logEvent() {
  console.log(event);
  }

  var totalPrice = 0;


  function shopCart1() {
   let ul = document.querySelector("ul");
   let li = document.createElement("li");
   li.textContent = "Save my trees $29";
   ul.appendChild(li);
   totalPrice = totalPrice + 29;
   let price = document.querySelector("#totalPrice");
   price.textContent = totalPrice;
  }

  function shopCart2() {
   let ul = document.querySelector("ul");
   let li = document.createElement("li");
   li.textContent = "Nature Lover $19";
   ul.appendChild(li);
   totalPrice = totalPrice + 19;
   let price = document.querySelector("#totalPrice");
   price.textContent = totalPrice;
  }

  function shopCart3() {
   let ul = document.querySelector("ul");
   let li = document.createElement("li");
   li.textContent = "Forrest Walk $39";
   ul.appendChild(li);
   totalPrice = totalPrice + 39;
   let price = document.querySelector("#totalPrice");
   price.textContent = totalPrice;
  }

  let purchaseShirt = document.querySelectorAll(".shopCart");
  purchaseShirt[0].addEventListener('click', shopCart1);
  purchaseShirt[1].addEventListener('click', shopCart2);
  purchaseShirt[2].addEventListener('click', shopCart3);



/*
function shoppingCart = (theArray) {
  let list = document.querySelector ('ul')
  let lis = list.createElement ('li')
  for (let i = 0; i < theArray.length; i++) {
        let li = lis[i];
        li.textContent = theArray[i];
  }
      }
      let myArray = ['Save my Trees', 'Scrooged', 'Ghostbusters'];
      shoppingCart(myArray);
*/
/*
const saveMyTrees = document.querySelector('#saveMyTrees')
const natureLover = list.querySelector('#naturel')
const forrestWalker = document.querySelector('#forrestWalker')
*/
