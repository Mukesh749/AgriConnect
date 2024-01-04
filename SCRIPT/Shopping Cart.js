<script>
  // Function to update the total price based on product quantity
  function updateTotalPrice() {
    let products = document.querySelectorAll('.product');
    let totalPrice = 0;
    let itemCount = 0;

    products.forEach(product => {
      let priceElement = product.querySelector('.product-price');
      let quantityElement = product.querySelector('.product-quantity input');

      let price = parseFloat(priceElement.textContent.replace('Rs. ', '').replace('/-', ''));
      let quantity = parseInt(quantityElement.value);

      if (!isNaN(price) && !isNaN(quantity)) {
        totalPrice += price * quantity;
        itemCount += quantity;
      }
    });

    // Update the total price, item count, and save elements in the cart
    let totalElement = document.querySelector('.cart-total span:nth-child(2)');
    let itemCountElement = document.querySelector('.cart-total p:nth-child(4) span:nth-child(2)');
    let saveElement = document.querySelector('.cart-total p:nth-child(6) span:nth-child(2)');

    totalElement.textContent = 'Rs. ' + totalPrice.toFixed(2);
    itemCountElement.textContent = itemCount;
    saveElement.textContent = 'Rs. ' + (itemCount * 10).toFixed(2); // Example calculation for "You Save"

    // Redirect to checkout page
    let checkoutLink = document.querySelector('a[href="Details For Checkout HTML.html"]');
    checkoutLink.addEventListener('click', function(event) {
      event.preventDefault();
      // You can add your logic here to redirect to the checkout page
      // Example: window.location.href = 'Details For Checkout HTML.html';
      console.log('Redirecting to checkout...');
    });
  }

  // Attach an event listener to each quantity input for change events
  let quantityInputs = document.querySelectorAll('.product-quantity input');
  quantityInputs.forEach(input => {
    input.addEventListener('change', updateTotalPrice);
  });

  // Initial calculation on page load
  updateTotalPrice();
</script>

