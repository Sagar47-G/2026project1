const container = document.getElementById("cartContainer")
const itemCount = document.getElementById("itemCount")
const totalPrice = document.getElementById("totalPrice")
const buyBtn = document.getElementById("buyBtn")
const clearBtn = document.getElementById("clearBtn")

let cart = JSON.parse(localStorage.getItem("cartItems")) || []

let total = 0

if (cart.length > 0) {

    cart.forEach((item, index) => {

        total += Number(item.price)

        container.innerHTML += `
            <div class="cart-box">
                <img src="${item.image}" width="150">
                <div>
                    <h2>${item.name}</h2>
                    <p>Price: ₹${item.price}</p>
                </div>
            </div>
        `
    })

    itemCount.innerText = "Total Items: " + cart.length
    totalPrice.innerText = "Total Price: ₹" + total

} else {
    container.innerHTML = "<h2>Cart is Empty</h2>"
    buyBtn.style.display = "none"
    clearBtn.style.display = "none"
}

// BUY BUTTON
buyBtn.addEventListener("click", () => {
    alert("Order Placed Successfully!")
    localStorage.removeItem("cartItems")
    location.reload()
})

// CLEAR CART BUTTON
clearBtn.addEventListener("click", () => {
    localStorage.removeItem("cartItems")
    location.reload()
})