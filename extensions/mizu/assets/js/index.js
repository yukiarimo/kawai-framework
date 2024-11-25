class UserAccount {
    constructor() {
        // Retrieve the users data from localStorage
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.session = JSON.parse(localStorage.getItem('session')) || null;
    }

    register(username, password) {
        // Check if username already exists
        const existingUser = this.users.find(user => user.username == username);
        if (existingUser) {
            console.log("Username already exists");
            return;
        }

        // Create a new user object
        const newUser = {
            username,
            password
        };

        // Add the new user to the list of users
        this.users.push(newUser);

        // Save the updated users data to localStorage
        localStorage.setItem('users', JSON.stringify(this.users));

        console.log("Registration successful");
    }

    login(username, password) {
        // Find the user with the given username
        const user = this.users.find(user => user.username == username);

        // Check if the user exists and the password is correct
        if (user && user.password == password) {
            console.log("Login successful");
            this.session = {
                username: user.username,
                password: user.password
            };
            localStorage.setItem('session', JSON.stringify(this.session));
            this.displayProfileInfo(user);
        } else {
            console.log("Invalid username or password");
        }
    }

    logout() {
        this.session = null;
        localStorage.removeItem('session');
        console.log("Logged out successfully");
        this.clearProfileInfo();

        // Reload the page
        location.reload();
    }

    editAccount() {
        const username = prompt("Enter your username:");

        // Find the user with the given username
        const user = this.users.find(user => user.username == username);

        // Check if the user exists
        if (user) {
            const newPassword = prompt("Enter your new password:");

            // Update the user's password
            user.password = newPassword;

            // Save the updated users data to localStorage
            localStorage.setItem('users', JSON.stringify(this.users));

            console.log("Account updated successfully");
            this.displayProfileInfo(user);

            let session = {
                username: username,
                password: newPassword
            };
            localStorage.setItem('session', JSON.stringify(session));
        } else {
            console.log("User not found");
        }
    }

    deleteAccount(username) {
        // Find the index of the user with the given username
        const userIndex = this.users.findIndex(user => user.username == username);

        // Check if the user exists
        if (userIndex !== -1) {
            // Remove the user from the list of users
            this.users.splice(userIndex, 1);

            // Save the updated users data to localStorage
            localStorage.setItem('users', JSON.stringify(this.users));

            console.log("Account deleted successfully");
            this.clearProfileInfo();
        } else {
            console.log("User not found");
        }
    }

    displayProfileInfo(user) {
        const infoElement = document.getElementById('info');
        infoElement.innerHTML = `
            <p>Username: ${user.username}</p>
            <p>Password: ${user.password}</p>
        `;
    }

    clearProfileInfo() {
        const infoElement = document.getElementById('info');
        infoElement.innerHTML = '';
    }
}

// Create an instance of UserAccount
const userAccount = new UserAccount();

if (localStorage.getItem('session')) {
    // Session found
    const session = JSON.parse(localStorage.getItem('session'));
    userAccount.login(session.username, session.password);
} else {
    // No session found
}

// Login form
const loginForm = document.querySelector('#login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('reg');
const logoutButton = document.getElementById('logout');
const profileBlock = document.querySelector('#profile-block');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    userAccount.login(username, password);
    clearSignin()
});

registerButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    userAccount.register(username, password);
    clearSignin()
});

logoutButton.addEventListener('click', () => {
    userAccount.logout();
});

// Profile block
const editButton = document.getElementById('edit');
const deleteButton = document.getElementById('delete');

editButton.addEventListener('click', () => {
    userAccount.editAccount();
});

deleteButton.addEventListener('click', () => {
    const username = usernameInput.value;
    userAccount.deleteAccount(username);
});

class Post {
    constructor(text, author) {
        this.text = text;
        this.author = author;
        this.votes = 0;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }

    upVote() {
        this.votes++;
    }

    downVote() {
        this.votes--;
    }

    deleteComment(commentIndex, sessionUsername) {
        // Check if the user is the author of the comment
        if (this.comments[commentIndex].author === sessionUsername) {
            this.comments.splice(commentIndex, 1);
        } else {
            console.log("You can only delete your own comments");
        }
    }
}

class PostManager {
    constructor() {
        this.posts = this.retrievePostsFromLocalStorage();
    }

    retrievePostsFromLocalStorage() {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        return storedPosts.map(postData => {
            const post = new Post(postData.text, postData.author);
            post.votes = postData.votes;
            post.comments = postData.comments;
            return post;
        });
    }

    savePostsToLocalStorage() {
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }

    addPost(text, author) {
        const newPost = new Post(text, author);
        this.posts.push(newPost);
        this.savePostsToLocalStorage();
        this.displayPosts();
    }

    deletePost(index) {
        const post = this.posts[index];
        const sessionUsername = userAccount.session ? userAccount.session.username : null;

        // Check if the user is the author of the post
        if (post.author === sessionUsername) {
            this.posts.splice(index, 1);
            this.savePostsToLocalStorage();
            this.displayPosts();
        } else {
            console.log("You can only delete your own posts");
        }
    }

    deleteCommentFromPost(postIndex, commentIndex) {
        const post = this.posts[postIndex];
        const sessionUsername = userAccount.session ? userAccount.session.username : null;

        console.log("author: " + post.author);
        console.log("sessionUsername: " + sessionUsername);
        console.log(post.author == sessionUsername)
        

        // Check if the user is the author of the post
        if (post.author == sessionUsername) {
            post.deleteComment(commentIndex, sessionUsername);
            this.savePostsToLocalStorage();
            this.displayPosts();
        } else {
            console.log("You can only delete comments on your own posts");
        }
    }

    upVotePost(index) {
        this.posts[index].upVote();
        this.savePostsToLocalStorage();
        this.displayPosts();
    }

    downVotePost(index) {
        this.posts[index].downVote();
        this.savePostsToLocalStorage();
        this.displayPosts();
    }

    addCommentToPost(index, comment, author) {
        this.posts[index].addComment({ text: comment, author: author });
        this.savePostsToLocalStorage();
        this.displayPosts();
    }

    addCommentToLatestPost(comment) {
        const sessionUsername = userAccount.session ? userAccount.session.username : null;

        // Find the latest post
        const latestPostIndex = this.posts.length - 1;

        if (latestPostIndex >= 0) {
            const latestPost = this.posts[latestPostIndex];

            // Check if the user is the author of the post
            if (latestPost.author === sessionUsername) {
                latestPost.addComment(comment);
                this.savePostsToLocalStorage();
                this.displayPosts();
                scrollMsg()
            } else {
                console.log("You can only add comments to your own posts");
            }
        } else {
            console.log("No posts available to add a comment");
        }
    }

    displayPosts() {
        const postContainer = document.getElementById('post-container');
        postContainer.innerHTML = '';

        this.posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'block-card el-9';
            postElement.innerHTML = `
                <p class="block-text lb"><strong>${post.author}</strong>: ${post.text}</p>
                <p class="block-text lc">Votes: ${post.votes}</p>
                <div class="action-container">
                    <button class="block-button" onclick="upVotePost(${index})">⬆️</button>
                    <button class="block-button" onclick="downVotePost(${index})">⬇️</button>
                    <button class="block-button" onclick="deletePost(${index})">Delete</button>
                </div>
                <input class="block-input" type="text" placeholder="Add a comment" id="comment-${index}">
                <button class="block-button" onclick="addComment(${index})">Comment</button>
                <div class="comments-section"></div>
            `;

            const commentsSection = postElement.querySelector('.comments-section');
            post.comments.forEach(comment => {
                const commentElement = document.createElement('p');
                commentElement.innerHTML = `<p class="block-text lc">Author: ${comment.author}</p><p class="block-text lc">Comment: ${comment.text}</p>` + `<button class="block-button" onclick="deleteComment(${index}, ${post.comments.indexOf(comment)})">Delete</button>`;
                commentsSection.appendChild(commentElement);
            });

            postContainer.appendChild(postElement);
        });
    }
}

const postManager = new PostManager();

// Function to handle post submission
function post() {
    const postText = document.getElementById('post-text').value;
    const username = userAccount.session ? userAccount.session.username : 'Guest';

    if (postText.trim() !== '') {
        postManager.addPost(postText, username);
        document.getElementById('post-text').value = '';
    }

    scrollMsg();
}

// Function to handle post deletion
function deletePost(index) {
    postManager.deletePost(index);
}

// Function to handle post voting
function upVotePost(index) {
    postManager.upVotePost(index);
}

function downVotePost(index) {
    postManager.downVotePost(index);
}

// Function to handle adding comments to a post
function addComment(index) {
    const commentText = document.getElementById(`comment-${index}`).value;
    if (commentText.trim() !== '') {
        const author = userAccount.session ? userAccount.session.username : 'Guest';
        postManager.addCommentToPost(index, commentText, author);
        document.getElementById(`comment-${index}`).value = '';
    }
}

var postForm = document.getElementById('post-form');

postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    post();
});

// Update the display of posts when the page loads
postManager.displayPosts();

// Function to handle deleting comments from a post
function deleteComment(postIndex, commentIndex) {
    postManager.deleteCommentFromPost(postIndex, commentIndex);
}

function askMizu(callback) {
    setTimeout(async () => {
        let postText = document.getElementById('post-text').value;
        let msgBack = await sendMessageBack(postText);
        postManager.addCommentToLatestPost(msgBack);
        callback();
    }, 1000);
}

var server_url = 'http://127.0.0.1:4848/';

async function sendMessageBack(postText) {
    // Send a POST request to /send_message
    try {
        const response = await fetch(`${server_url}send_message`, {
            method: 'POST',
            body: new URLSearchParams({
                'message': postText
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error; // rethrow the error to be caught by the outer catch block
    }
}

function scrollMsg() {
    objDiv = document.getElementById("post-container");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function clearSignin() {
    if (userAccount.session) {
        loginForm.style.display = 'none';
        profileBlock.style.display = 'flex';

        profileBlock.classList.remove('el-4');
        profileBlock.classList.add('el-9');
    } if (!userAccount.session) {
        loginForm.style.display = 'flex';
        profileBlock.style.display = 'none';

        loginForm.classList.remove('el-4');
        loginForm.classList.add('el-9');
    }
}

clearSignin()