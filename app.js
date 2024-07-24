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

// const emailRef = document.querySelector(".email")
// const statusRef = document.querySelector('.status')

// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    
//     return response.json()  // 1st of two promises - grabs the data from the API on the back end
// }).then(data => {
//     console.log(data);  // 2nd of two promises - unlocks the data into something the front end can use
//     emailRef.innerHTML = data.email  // references the information requested
// });

// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1") 
// // must have an async function in order for await to work
// // 1st promise - grabbing the data from the back end
//     const data = await response.json()  // 2nd promise - unlocking the data for front end use
//     console.log(data);
//     emailRef.innerHTML = data.email  // extracting the data requested
// }

// main() 

//  function getSubscriptionStatus() {
//      return new Promise((resolve, reject) => {
//          resolve("VIP")
//      })
// }

// // 1. Then
// getSubscriptionStatus().then(response => console.log(response))

 // 2. async/await
//  async function main() {
//      const status = (await getSubscriptionStatus())
//      statusRef.innerHTML = status
//  }

//  main()

const statusRef = document.querySelector(".status")
const videoRef = document.querySelector(".video")

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("undefined")
        }, 2000);
        
    })
}

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status;
    try {
        console.log(await getVideo(status))
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
    }
}

main()