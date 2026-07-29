function generateName() {
    let first = document.getElementById("fname").value.trim();
    let middle = document.getElementById("mname").value.trim();
    let last = document.getElementById("lname").value.trim();

    let fullName = first + " " + middle + " " + last;

    document.getElementById("fullname").textContent = fullName;
}

function clearEntries() {
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("fullname").textContent = "";

    document.getElementById("fname").focus();
}