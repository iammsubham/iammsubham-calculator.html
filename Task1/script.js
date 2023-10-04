// Get all the buttons
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

// Add event listeners to buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.value === "=") {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = "Error";
            }
        } else if (button.value === "C") {
            result.value = "";
        } else {
            result.value += button.value;
        }
    });
});
