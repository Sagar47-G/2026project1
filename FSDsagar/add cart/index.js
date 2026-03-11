const buttons = document.querySelectorAll(".btn")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        const productBox = e.target.parentElement

        const product = {
            name: productBox.querySelector(".name").innerText,
            price: productBox.querySelector(".price").innerText,
            image: productBox.querySelector("img").src
        }

        let cart = JSON.parse(localStorage.getItem("cartItems")) || []
            alert("Added successfull")
        cart.push(product)

        localStorage.setItem("cartItems", JSON.stringify(cart))

        
        window.location.href = "cart.html"
    })
})