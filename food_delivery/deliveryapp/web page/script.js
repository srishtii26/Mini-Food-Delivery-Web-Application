let cart = JSON.parse(sessionStorage.getItem("cart")) || {};

/* LOGIN */
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  fetch(`http://localhost:9090/login?username=${username}&password=${password}`)
    .then(res => res.json())
    .then(data => {
      if (data.status === "success") {
        window.location.href = "items.html";
      } else {
        alert("Invalid credentials");
      }
    })
    .catch(() => alert("Backend not running"));
}

/* ITEM TOGGLE */
function toggleItem(element, name, price) {

  if (!cart[name]) {
    cart[name] = { price: price, qty: 1 };
    element.classList.add("selected");
  } else {
    delete cart[name];
    element.classList.remove("selected");
  }

  saveCart();
  updateItemsTotal();
  updateCartCount();  // 👈 Added
}


function saveCart() {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

function updateItemsTotal() {
  let total = 0;
  for (let item in cart) {
    total += cart[item].price * cart[item].qty;
  }
  const totalEl = document.getElementById("total");
  if (totalEl) totalEl.innerText = total.toFixed(2);
}

function goToAddress() {

  const cartData = JSON.parse(sessionStorage.getItem("cart")) || {};

  if (Object.keys(cartData).length === 0) {
    alert("Please select at least one item");
    return;
  }

  window.location.href = "address.html";
}

/* ADDRESS */
function saveAddress() {
  const address = document.getElementById("address").value;
  sessionStorage.setItem("address", address);
  window.location.href = "confirm.html";
}

/* CONFIRM */
function loadConfirmation() {
  const summary = document.getElementById("orderSummary");
  let total = 0;

  summary.innerHTML = "";

  for (let item in cart) {
    const itemTotal = cart[item].price * cart[item].qty;
    total += itemTotal;

    summary.innerHTML += `
      <div class="confirm-item">
        <span>${item}</span>
        <div>
          <button class="qty-btn" onclick="changeQty('${item}',-1)">-</button>
          ${cart[item].qty}
          <button class="qty-btn" onclick="changeQty('${item}',1)">+</button>
        </div>
        <span>₹${itemTotal.toFixed(2)}</span>
      </div>
    `;
  }

  summary.innerHTML += `<hr><h3>Total: ₹${total.toFixed(2)}</h3>`;
}

function changeQty(item, change) {
  cart[item].qty += change;
  if (cart[item].qty <= 0) delete cart[item];
  saveCart();
  loadConfirmation();
}

/* PLACE ORDER */
function placeOrder() {
  fetch("http://localhost:9090/order")
    .then(res => res.json())
    .then(() => {
      sessionStorage.clear();
      window.location.href = "success.html";
    })
    .catch(() => alert("Backend not running"));
}

/* LOGOUT */
function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}


function updateCartCount() {
  const cartData = JSON.parse(sessionStorage.getItem("cart")) || {};
  const count = Object.keys(cartData).length;

  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.innerText = count;
  }
}
function initItemsPage() {
  updateItemsTotal();
  updateCartCount();

  const user = sessionStorage.getItem("user");
  const welcome = document.getElementById("welcomeUser");
  if (user && welcome) {
    welcome.innerText = "Hi, " + user;
  }
}


