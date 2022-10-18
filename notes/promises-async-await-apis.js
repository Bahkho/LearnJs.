// Asynchronous Programming

// ASYNC / AWAIT

// You order 🍅 tomato soup
// Meanwhile you continue your convo with a friend
// RESOLVED -  🥣 Your server brings you soup
// REJECTED - ❌ No soup today

const orderSoup = () => console.log("soup is ready");

// console.log('You start the convo with your 👧')

// // start your request
// setTimeout(orderSoup, 2000) // 1000 ms is 1s

// console.log('Still speaking')


// -------------------------PROMISES without ASYNC
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("✅ soup is ready 🥣") : reject("❌ No soup today");
  }, 1000);
});

console.log(
  promise1
  .then(success => console.log({success}))
  .catch(error => console.log({error}))
)



// --------------------PART ONE of PROMISES with ASYNC and try & catch block
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)]
    isReady ? resolve('✅ soup is ready 🥣') : reject('❌ No soup today')
  }, 1000)
})


const method = async () => {
  try {
    const result = await promise2
    console.log({ result })
  } catch (error) {
    console.log({ error })
  }

}
method()





// --------------------PART TWO of PROMISES with ASYNC and try & catch block
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("✅ soup is ready 🥣") : reject("❌ No soup today");
  }, 1000);
});


const getSoup = async () => {
  const data = { rating: 0, tip: 0, pay: 0, review: 0 };
  try {
    const soup = await promise3;
    console.log(soup);
    data.rating = 5;
    data.tip = 0.2;
    data.pay = 10;
    data.review = 5;
    return data;
  } catch (error) {
    console.log(error);
    data.rating = 1;
    data.tip = 0;
    data.pay = 0;
    data.review = 1;
    return data;
  }
};

console.log(getSoup().then((value) => console.log(value)));

// const sum = async (a, b) => a + b;













// ---------------------------------APIs & ASYNC----------------------------

// APIs without AYNC
console.log('fetch:', fetch('https://dog.ceo/api/breeds/image/random') // promise
.then(response => response.json()) // promise
.then(data => console.log(data))
)


// ASYNC for APIs
const getDog = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
// getDog()

// ASYNC for APIs without try and catch block
async function getUserData() {
  const userData = await 
  fetch('https://jsonplaceholder.typicode.com/users/1')
  const user = await userData.json()
  console.log(user)
}
// getUserData()


// ASYNC for APIs with try and catch block
async function getUserData() {
  try {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await userData.json()
    return user
  }
  catch (error) {
    console.error(error)
  }
}
//  console.log(getUserData().then(value => console.log(value)))


// Rules for using async / await
// 1. You must create a function
// 2. You must use the keyword async
// 3. Use the word await