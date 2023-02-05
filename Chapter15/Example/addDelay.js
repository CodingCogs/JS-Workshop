function addDelay(ms, promise) {
	
    if (promise === undefined) {
        return promise => addDelay(ms, promise);
    }

    return Promise.resolve(promise).then(returnVal =>
        new Promise(resolve =>
            setTimeout(() => resolve(returnVal), ms)
        )
    );
}

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const USER_POSTS_URL = BASE_URL + "posts?userId=1";

let p1 = addDelay(3000, fetch(USER_POSTS_URL))
  .then(response => response.json())
  .then(userPosts => console.log("Use 1: " + userPosts[0].body));

let p2 = fetch(USER_POSTS_URL)
  .then(addDelay(1000))
  .then(response => response.json())
  .then(userPosts => console.log("Use 2: " + userPosts[1].body));

let p3 = addDelay(2000, "This is a passed in value")
  .then(result => console.log("Use 3: " + result));

Promise.all([p1, p2, p3])
  .then(() => console.log("All done!"));