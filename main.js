function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("🚫 Oops! Both number fields are required.");
        return;
    }

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = (num2 !== 0) ? (num1 / num2).toFixed(2) : "Undefined";

    document.getElementById("sum").textContent = sum;
    document.getElementById("difference").textContent = difference;
    document.getElementById("product").textContent = product;
    document.getElementById("quotient").textContent = quotient;

    // Unique notification
    let message = "📊 Result Summary\n";
    message += "➕ Sum: " + sum + "\n";
    message += "➖ Difference: " + difference + "\n";
    message += "✖ Product: " + product + "\n";
    message += "➗ Quotient: " + quotient + "\n\n";

    if (sum % 2 === 0) {
        message += "🎉 Fun Fact: The sum is an even number!";
    } else {
        message += "✨ Fun Fact: The sum is an odd number!";
    }

    alert(message);
}

function clearFields() {
    if (confirm("🗑 Start over with a new calculation?")) {
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";

        document.getElementById("sum").textContent = "";
        document.getElementById("difference").textContent = "";
        document.getElementById("product").textContent = "";
        document.getElementById("quotient").textContent = "";

        alert("🌟 Workspace reset! Ready for another calculation.");
        document.getElementById("num1").focus();
    }
}