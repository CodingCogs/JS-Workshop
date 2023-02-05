function addDelay(ms, promise) {
    return promise.then(returnVal =>
        new Promise(resolve =>
            setTimeout(() => resolve(returnVal), ms)
        )
    );
}

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const USER_POSTS_URL = BASE_URL + "posts?userId=1";


addDelay(3000, fetch(USER_POSTS_URL))
  .then(response => response.json())
  .then(userPosts => console.log(userPosts[0].body));