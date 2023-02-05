// hard coded data for purposes of illustration
const USER_NAME = "Leanne Graham";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const ALL_USERS_URL = BASE_URL + "users";
const USER_POSTS_URL = BASE_URL + "posts";
const POST_COMMENTS_URL = BASE_URL + "comments";

function myFetch(url, params) {
    if (params) {
        url += "?" + encodeParams(params);
    }
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        }
    );
}

function encodeParams(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

function findUserId(userData, userName)
{
    const user = userData.find(u => u.name === userName);
    return user ? user.id : null;
}

function printComments(commentList)
{
    if (commentList != null) {
        var postLI = document.createElement("li"); postLI.style.margin = "15px";
        document.getElementById("commentsList").append(postLI);
        
        postLI.appendChild(document.createElement("li").appendChild(document.createTextNode("Post ID: " + commentList[0].postId)));

        commentList.forEach(function(comment, commentIndex) {

            var commentUL = document.createElement("ul");
            postLI.appendChild(commentUL);

            var commentBodyLI = document.createElement("li");
            commentUL.appendChild(commentBodyLI);

            var commentBody = document.createTextNode(`Comment ${commentIndex+1}: ${comment.body}`);
            commentBodyLI.appendChild(commentBody);
        })
    }
}