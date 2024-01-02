const app = new Vue({
    el: '#app',
    data: {
        products: [
            { id: 1, name: 'Product 1', price: 20, image: 'product1.jpg' },
            { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
            // Add more products as needed
        ],
        cart: [],
    },
    methods: {
        addToCart(product) {
            const cartItem = this.cart.find(item => item.id === product.id);

            if (cartItem) {
                cartItem.quantity++;
            } else {
                this.cart.push({ id: product.id, name: product.name, quantity: 1 });
            }
        },
        removeFromCart(item) {
            const index = this.cart.indexOf(item);
            this.cart.splice(index, 1);
        },
    },
});
