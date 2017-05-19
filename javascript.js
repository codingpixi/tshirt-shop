let $allSubMenuItems = $(".submenuSize");
$allSubMenuItems.on("click", changeSizes);
// console.log($allSubMenuItems);
function logEvent() {
  console.log('event'); //event was in parenthasis without signle quotes
}

let $allColors = $("div.colors div");
$allColors.on("click", changeColors);
function logEvent() {
  console.log('event'); //event was in parenthasis without signle quotes
}

let shirtArr = []

let totalPrice = 0;

let totalPrices =[]

//Adding tshirts and price to shopping cart
$('.shopCart').on('click', addToCart);

//(this) means the the thing that was clicked - which is the shopping cart

function addToCart() {
  let item = {
    name: $(this).parent().next().find('p').text(),
    price: $(this).parent().next().find('span').text()
  }
  let maxShirt = shirtArr.filter(obj => obj === item.name)
  console.log(maxShirt.length);
  console.log(maxShirt);
  console.log(shirtArr);
  if (maxShirt.length <=7) {
    console.log($(this).parent().next().text());
    console.log(this);
    let $ul = $('ul');
    let $li = $(`<li>${$(this).parent().next().text()}</li>`);
    $ul.append($li);

    shirtArr.push(item.name)
    console.log(item.name);
    console.log(shirtArr);

    totalPrices.push(item.price)
    console.log(totalPrices);
    console.log(item.price);

    let $shirtPrices = $('#totalPrice');
    let $priceIsPickles = (`${$(this).parent().next().find('.price').text()}`);
    console.log($shirtPrices);
    console.log($priceIsPickles);
    totalPrice = totalPrice + parseInt($priceIsPickles);
    $shirtPrices.text(totalPrice);


    if (totalPrices.length >= 5) {
      let totalPrice = $('#totalPrice').text()
      let discount = totalPrice * .05
      $('#discount').text('Discount ' + discount)
      console.log(totalPrices);
      let newPrice = totalPrices - discount
      $('#newPrice').text('NewPrice ' + newPrice)
    }





  }

};



// SHIRTS 5% DISCOUNT
// function discount() {

//   let $disc = totalPrice - $discAmount;
//   if (shirtArr.length >= 5) {
//     (.'price') * .05 - totalPrice
//   } else () {
//
//   }
// }




// MAX PURCHASE 8 PER SHIRT

// each shirt var set = 0
// ++ when = 7 disable

//Change Size
function changeSizes(event) {
  let size = event.target.textContent;
  let sizeBox = event.target.closest('.size-button').firstChild;
  sizeBox.textContent = size;
}

//changeColorForShirtAndBox
function changeColors() {

    ($(this).parent().parent().parent().prev().find('.frontShirt').children().attr('src', `assets/${$(this).attr('class')}-front.png`))

    if ($(this).css('background-color') == 'rgb(129, 188, 230)') {
      $(this).closest('.colors').siblings().attr('class', 'blue');
      // CHANGE SHIRT SOURCE FILE
      //  $('.changeSrc').attr('src','assets/blue-front.png');
        // $(this)
    } else if ($(this).css('background-color') == 'rgb(226, 117, 167)') {
      $(this).closest('.colors').siblings().attr('class', 'pink');
    } else if ($(this).css('background-color') == 'rgb(229, 177, 120)') {
      $(this).closest('.colors').siblings().attr('class','yellow');
    } else {
      $(this).closest('.colors').siblings().attr('class', 'green');
    }
};
//THIS TAKES THE PLACE OF THE changeColors function above
//$(this).closest.('.colors').siblings().attr('class'),$(this).attr('class')).
