document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    // Met à jour le prix total
    function updateTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseFloat(item.dataset.price);
            total += quantity * price;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    // Ajuster la quantité
    cartItems.forEach(item => {
        const minusBtn = item.querySelector('.minus');
        const plusBtn = item.querySelector('.plus');
        const quantityElement = item.querySelector('.quantity');
        const itemPriceElement = item.querySelector('.item-price');
        const removeBtn = item.querySelector('.remove');
        const favoriteBtn = item.querySelector('.favorite');
        const itemPrice = parseFloat(item.dataset.price);

        // Bouton +
        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            itemPriceElement.textContent = (quantity * itemPrice).toFixed(2) + ' €';
            updateTotal();
        });

        // Bouton -
        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                itemPriceElement.textContent = (quantity * itemPrice).toFixed(2) + ' €';
                updateTotal();
            }
        });

        // Bouton pour supprimer un article
        removeBtn.addEventListener('click', () => {
            item.remove();
            updateTotal();
        });

        // Bouton pour aimer un article
        favoriteBtn.addEventListener('click', () => {
            favoriteBtn.classList.toggle('liked');
        });
    });

    // Initialiser le prix total au chargement
    updateTotal();
});
