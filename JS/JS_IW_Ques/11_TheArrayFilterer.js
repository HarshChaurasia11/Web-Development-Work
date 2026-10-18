// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.




let products = [
    { category: "mobile", name: "Oppo" },
    { category: "mobile", name: "Apple" },
    { category: "mobile", name: "Samsung" },
    { category: "mobile", name: "vivo" },
    { category: "mobile", name: "OnePlus" },
    { category: "mobile", name: "Realme" },
    { category: "laptop", name: "Asus" },
    { category: "laptop", name: "HP" },
    { category: "laptop", name: "VivoBook" },
    { category: "laptop", name: "Lenovo" },
    { category: "laptop", name: "Acer" },
    { category: "laptop", name: "Macbook" },
    { category: "clothes", name: "T-Shirt" },
    { category: "clothes", name: "Jacket" }
];

function filterProducts(products, criterion) {
    return products.filter((product) => {
        return product.category === criterion;
    });
}

let result = filterProducts(products, "laptop");

console.log(result);