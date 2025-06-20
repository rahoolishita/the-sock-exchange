document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
            console.log(email);
            console.log("success");

            alert("Registration successful!");
    } else {
        alert("Please fill in all fields.");
    }
});