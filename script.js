function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const currentDate = new Date();
    const dob = new Date(dobInput);

    if (!dobInput) {
        alert('Please enter your date of birth.');
        return;
    }

    const ageInMilliseconds = currentDate - dob;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const ageInMonths = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const ageInDays = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    const result = `You are ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days old.`;
    document.getElementById('result').textContent = result;
    document.getElementById('result-message').textContent = 'Your age is calculated based on your date of birth.';
}
