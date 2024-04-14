// Function to add item to cart
function addToCart(card) {
    // You can customize this function to add the item to the cart
    alert("Item added to cart!");
}

// Function to animate image
function animateImage(image) {
    // You can customize this function to add animation to the image
    // For example, you can use CSS animations or JavaScript animation libraries
    image.classList.add("animate");
    setTimeout(function() {
        image.classList.remove("animate");
    }, 1000); // Adjust the duration as needed
}
