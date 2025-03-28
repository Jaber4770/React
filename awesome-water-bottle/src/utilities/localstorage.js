/***
 * get data from localStorage
 * get data from website
 * get data from localstorage + set data to local storage
 * show data from localstorage

*/

const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);

}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    cart.push(id)
    saveCartToLocalStorage(cart);
}

const removeFromlLocalStorage = id => {
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedID => storedID !== id);
    saveCartToLocalStorage(remainingCart);
}

export  {
    getCartFromLocalStorage, addItemToCartLocalStorage, removeFromlLocalStorage
}