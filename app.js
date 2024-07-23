function showRating(rating) {
    let ratings = "";
    for ( let i = 0; i < Math.floor(rating); ++i) {
        ratings += "*";
        if (i !== Math.floor(rating) - 1) {
            ratings += " ";
        }    
    }
    if (!Number.isInteger(rating)) {
        ratings += " ."
    }
    return ratings
}

console.log(showRating(3.5));

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b) 

    }

console.log(sortLowToHigh([15, 4, 84, 27, 312, 2]));

// low to high a - b
// high to low b - a

function sortHighToLow(prices) {
    return prices.sort((a, b) =>b.price - a.price);
} 

console.log(
    sortHighToLow([
    {id: 1, price: 500},
    {id: 2, price: 130},
    {id: 3, price: 60},
    {id: 4, price: 150}
])
);