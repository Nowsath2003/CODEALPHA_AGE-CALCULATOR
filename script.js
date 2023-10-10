document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById("calculateage");
    var resultSpan = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        var birthdateInput = document.getElementById("dob");
        var birthdate = new Date(birthdateInput.value);
        var currentDate = new Date();
        var age = currentDate.getFullYear() - birthdate.getFullYear();

        // Check if the birthday hasn't occurred yet this year
        if (
            currentDate.getMonth() < birthdate.getMonth() ||
            (currentDate.getMonth() === birthdate.getMonth() &&
                currentDate.getDate() < birthdate.getDate())
        ) {
            age--;
        }

        resultSpan.textContent = age ;
    });
});
