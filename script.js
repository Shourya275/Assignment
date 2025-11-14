async function login() {
    let userInput = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    const correctPassword = "ZHELP123456";

    try {
        // Load users from users.json
        let response = await fetch("users.json");
        let users = await response.json();

        // Check if username OR email exists in JSON
        let foundUser = users.find(user =>
            user.username.toLowerCase() === userInput.toLowerCase() ||
            user.email.toLowerCase() === userInput.toLowerCase()
        );

        // Validate login
        if (foundUser && pass === correctPassword) {
            msg.style.color = "green";
            msg.textContent = "WELCOME " + foundUser.name;
        } else {
            msg.style.color = "red";
            msg.textContent = "Invalid Login!";
        }
    } catch (error) {
        console.error("Error loading users.json:", error);
        msg.style.color = "red";
        msg.textContent = "Error loading user data!";
    }
}
