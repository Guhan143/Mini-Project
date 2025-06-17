function genPass(len, upper, nums, special) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    let allChars = lower;
    let required = [];

    if (upper) {
        allChars += upperChars;
        required.push(upperChars[Math.floor(Math.random() * upperChars.length)]);
    }
    if (nums) {
        allChars += numChars;
        required.push(numChars[Math.floor(Math.random() * numChars.length)]);
    }
    if (special) {
        allChars += specialChars;
        required.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
    }

    // Ensure length is at least equal to number of required characters
    while (required.length < len) {
        required.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    // Shuffle the result to mix required characters
    for (let i = required.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [required[i], required[j]] = [required[j], required[i]];
    }

    return required.join('');
}

function generate() {
    const len = parseInt(document.getElementById("len").value);
    const upper = document.getElementById("upper").checked;
    const nums = document.getElementById("nums").checked;
    const special = document.getElementById("special").checked;

    // Validate length
    if (isNaN(len) || len < 4 || len > 128) {
        alert("Please enter a password length between 4 and 128.");
        return;
    }

    // Optional warning if no extras selected
    if (!upper && !nums && !special) {
        const confirmLowerOnly = confirm("You've disabled all extra character types.\nGenerate using only lowercase?");
        if (!confirmLowerOnly) return;
    }

    const pass = genPass(len, upper, nums, special);
    document.getElementById("passOut").textContent = pass;
}

function reset() {
    document.getElementById("len").value = 12;
    document.getElementById("upper").checked = true;
    document.getElementById("nums").checked = true;
    document.getElementById("special").checked = true;
    document.getElementById("passOut").textContent = "Your password will appear here";
}
