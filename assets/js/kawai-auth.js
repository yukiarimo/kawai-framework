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
const loginForm = document.querySelector('.block-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('reg');
const logoutButton = document.getElementById('logout');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    userAccount.login(username, password);
});

registerButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    userAccount.register(username, password);
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

class UserAccount {
    constructor() {
        // Initialize an empty array to store posts
        this.posts = [];
    }

    register(username, password) {
        // Register logic
    }

    login(username, password) {
        // Login logic
    }

    logout() {
        // Logout logic
    }

    editAccount() {
        // Edit account logic
    }

    deleteAccount(username) {
        // Delete account logic
    }

    createPost(content) {
        // Get the current session username
        const session = JSON.parse(localStorage.getItem('session'));
        const username = session.username;

        // Create a new post object
        const post = {
            username: username,
            content: content
        };

        // Add the post to the posts array
        this.posts.push(post);

        // Save the updated posts array in local storage
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }

    displayPosts() {
        // Get the post container element
        const postContainer = document.getElementById('post-container');

        // Clear the existing posts
        postContainer.innerHTML = '';

        // Retrieve the posts from local storage
        const storedPosts = JSON.parse(localStorage.getItem('posts'));

        // Iterate over the stored posts and create HTML elements to display them
        storedPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <div class="post-username">${post.username}</div>
                <div class="post-content">${post.content}</div>
            `;
            postContainer.appendChild(postElement);
        });
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
const loginForm = document.querySelector('.block-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('reg');
const logoutButton = document.getElementById('logout');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    userAccount.login(username, password);
});

registerButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    userAccount.register(username, password);
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

// Post form
const postForm = document.getElementById('post-form');
const postContentInput = document.getElementById('post-content');
const postButton = document.getElementById('post-button');

postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = postContentInput.value;
    userAccount.createPost(content);
    userAccount.displayPosts();
});

// Display initial posts
userAccount.displayPosts();