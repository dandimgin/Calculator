const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.num;

        if (value === "C") {
            screen.value = "";
        } else if (value === "=") {
            try {
                screen.value = eval(screen.value.replace(/x/g, "*"));
            } catch {
                screen.value = "Error";
            }
        } else {
            screen.value += value;
        }
    });
});