function addDelay(ms, promise) {

    if (promise === undefined) {
        // In this case, only one param was specified.  Since you don't have
        // the promise yet, return a function with the promise as a param and
        // call addDelay() recursively with two params
        return promise => addDelay(ms, promise);
    }

    // if you reached this far, there were two parameters

    return Promise.resolve(promise).then(returnVal =>
        new Promise(resolve =>
            setTimeout(() => resolve(returnVal), ms)
        )
    );
}

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const USER_POSTS_URL = BASE_URL + "posts?userId=1";

(async () => {
    let p1 = use1();
    let p2 = use2();
    let p3 = use3();

    await p1;
    await p2;
    await p3;

    console.log("All done!");
})();

async function use1() {
    let response = await addDelay(3000, fetch(USER_POSTS_URL));
    let userPosts = await response.json();
    console.log("Use case 1: " + userPosts[0].body);
}

async function use2() {
    let response = await fetch(USER_POSTS_URL);
    await addDelay(1000);
    let userPosts = await response.json();
    console.log("Use case 2: " + userPosts[0].body);
}

async function use3() {
    let result = await addDelay(2000, "This is a passed in value");
    console.log("Use case 3: " + result);
}
