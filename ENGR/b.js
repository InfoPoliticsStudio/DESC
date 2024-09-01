function redirectToPage() {
    // Get all radio buttons with name 'generation'
    const radios = document.getElementsByName('generation');
    
    // Find the selected radio button
    for (const radio of radios) {
        if (radio.checked) {
            // Redirect based on the value of the selected radio button
            window.location.href = radio.value + '.html';
            return;
        }
    }
    
    // Optionally, you can show an alert if no option is selected
    alert('Please select a generation.');
}
