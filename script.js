// Function to calculate the total and grade for each row
function calculateRow(row) {
    const scores = row.querySelectorAll('input[type="text"]');
    let total = 0;

    scores.forEach(score => {
        total += parseFloat(score.value) || 0;
    });

    const totalScoreElement = row.querySelector('.total-score');
    totalScoreElement.textContent = total.toFixed(2);

    const gradeElement = row.querySelector('.grade');
    let grade = 0;

    if (total >= 80) grade = 4;
    else if (total >= 75) grade = 3.5;
    else if (total >= 70) grade = 3;
    else if (total >= 65) grade = 2.5;
    else if (total >= 60) grade = 2;
    else if (total >= 55) grade = 1.5;
    else if (total >= 50) grade = 1;
    else grade = 0;

    gradeElement.textContent = grade.toFixed(1);
}

// Function to calculate all rows when page is loaded
function calculateAllRows() {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => calculateRow(row));
}

// Run the calculations as soon as the document is loaded
document.addEventListener('DOMContentLoaded', calculateAllRows);

function toggleDisplay() {
    const subject = document.getElementById('subject').value;
    const eng1 = document.getElementById('Eng1');
    const eng2 = document.getElementById('Eng2');

    // Remove the active class from both
    eng1.classList.remove('active');
    eng2.classList.remove('active');

    // Add the active class based on selection
    if (subject === 'Eng1') {
        eng1.classList.add('active');
    } else if (subject === 'Eng2') {
        eng2.classList.add('active');
    }
}

