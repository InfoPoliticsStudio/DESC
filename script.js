function calculateGrade(input) {
    const row = input.closest('tr');
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
