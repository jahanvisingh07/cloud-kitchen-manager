let menu = JSON.parse(localStorage.getItem("menu")) || [];
let order = [];
let total = 0;

// Add Item
function addItem() {
    let name = document.getElementById("itemName").value;
    let price = document.getElementById("itemPrice").value;

    if (name === "" || price === "") {
        alert("Enter valid details");
        return;
    }

    let item = { name, price: Number(price) };
    menu.push(item);

    localStorage.setItem("menu", JSON.stringify(menu));

    displayMenu();
}

// Display Menu
function displayMenu() {
    let menuList = document.getElementById("menuList");
    let orderSelect = document.getElementById("orderItem");

    menuList.innerHTML = "";
    orderSelect.innerHTML = "";

    menu.forEach((item, index) => {
        menuList.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
        orderSelect.innerHTML += `<option value="${index}">${item.name}</option>`;
    });
}

// Add to Order
function addToOrder() {
    let index = document.getElementById("orderItem").value;
    let qty = document.getElementById("quantity").value;

    if (qty === "" || qty <= 0) {
        alert("Enter valid quantity");
        return;
    }

    let item = menu[index];
    let cost = item.price * qty;

    order.push({ name: item.name, qty, cost });
    total += cost;

    displayOrder();
}

// Display Order
function displayOrder() {
    let orderList = document.getElementById("orderList");
    let totalDisplay = document.getElementById("total");

    orderList.innerHTML = "";

    order.forEach(item => {
        orderList.innerHTML += `<li>${item.name} x ${item.qty} = ₹${item.cost}</li>`;
    });

    totalDisplay.innerText = total;
}

// Load Menu on Start
displayMenu();