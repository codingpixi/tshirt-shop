let $allSubMenuItems = $(".submenuSize");
$allSubMenuItems.on("click", changeSizes);
// console.log($allSubMenuItems);
function logEvent() {
  console.log('event'); //event was in parenthasis without signle quotes
}

let $allColors = $(".selectColor");
$allColors.on("click", changeColors);
function logEvent() {
  console.log('event'); //event was in parenthasis without signle quotes
}


let totalPrice = 0;

//Adding tshirts and price to shopping cart
$('.shopCart').on('click', addToCart);

function addToCart() {
  console.log($(this).parent().next().text());
  let $ul = $('ul');
  let $li = $(`<li>${$(this).parent().next().text()}</li>`);
  $ul.append($li);
  let $shirtPrices = $('#totalPrice');
  let $pickles = (`${$(this).parent().next().find('.price').text()}`);
  totalPrice = totalPrice + parseInt($pickles);
  $shirtPrices.text(totalPrice);
};

//tshirt size changes in box
// $('.submenuSize').on('click', changeSize);
// function changeSize() {
//   let $div = $('div');
//   console.log($(this).text());
// }

//Change Size
function changeSizes(event) {
  let size = event.target.textContent;
  // let smallSz = sizes.parentElement.
  let sizeBox = event.target.closest('.size-button').firstChild;
  sizeBox.textContent = size;
}

//Change Colors
function changeColors(event) {
  let color = event.target;
  let colorBox = event.target.closest('.colors');
  colorBox.textContent = color;
}
