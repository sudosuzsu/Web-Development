// Sepet verisini localStorage'dan al
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Eğer sepet verisi yoksa, varsayılan ürünlerle bir sepet oluştur
if (cart.length === 0) {
    cart = [
        {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
        },
        {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
        },
    ];
    saveToStorage(); // Varsayılan sepeti kaydet
}

// Sepeti localStorage'a kaydet
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Sepete ürün ekle
export function addToCart(productId) {
    let matchingItem = cart.find(item => item.productId === productId);

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
        });
    }
    saveToStorage();
}

// Sepetten ürün çıkar
export function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveToStorage();
}
