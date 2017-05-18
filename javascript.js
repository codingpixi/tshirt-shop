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

// each shirt var set = 0
// ++ when = 7 disable
//tshirt size changes in box
// $('.submenuSize').on('click', changeSize);
// function changeSize() {
//   let $div = $('div');
//   console.log($(this).text());
// }

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
