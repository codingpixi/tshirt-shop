let mouseClick = document.querySelector("body");
mouseClick.addEventListener("click", logEvent);

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
}
