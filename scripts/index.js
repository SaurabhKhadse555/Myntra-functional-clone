let bagItems;
onload();
function onload() {
  let bagItemsstr = localStorage.getItem("bagItems");
  bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];
  displayHome();
  displaybagCount();
}

function addtobag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displaybagCount();
}
function displaybagCount() {
  let bagItemElement = document.querySelector(".bag-items");
  if (bagItems.length > 0) {
    bagItemElement.style.visibility = "visible ";
    bagItemElement.innerText = bagItems.length;
  } else {
    bagItemElement.style.visibility = "hidden ";
  }
}
function displayHome() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="" srcset="">
     <div class="ratings">
        ${item.rating.stars}⭐| ${item.rating.count}
     </div>
     <div class="company-name">
        ${item.company}
     </div>
     <div class="item-name">
        ${item.item_name}
     </div>
     <div class="price">
        <span class="discount-price">RS${item.current_price}</span>
        <span class="original-price">Rs${item.original_price}</span>
        <span class="discount">${item.discount_percentage}off</span>
     </div>
     <button class="bag-btn" onclick="addtobag(${item.id});">Add to bag</button>
    </div>`;
  });
  itemsContainerElement.innerHTML = innerHTML;
}
