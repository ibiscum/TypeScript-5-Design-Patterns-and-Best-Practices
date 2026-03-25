"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPartialProduct(initialData) {
    const defaultProduct = {
        name: "Unnamed Product",
        price: 0.0,
        stock: 10,
    };
    return { ...defaultProduct, ...initialData };
}
const partialProduct = createPartialProduct({
    name: "Cool NFT Item",
    price: 29.99,
    imageUrl: "https://example.com/cool.png",
});
console.log(partialProduct);
const minimalProduct = createPartialProduct({ name: "Mystery Item", price: 9.99 });
console.log(minimalProduct); // { name: "Mystery Item", price: 9.99, stock: 10 }
//# sourceMappingURL=partial.js.map