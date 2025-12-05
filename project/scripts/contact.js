// Function to load data from localStorage (More than one function)
function loadDraft() {
    // 15. JavaScript localStorage: Retrieve Data
    const savedData = localStorage.getItem('intakeFormDraft');
    const form = document.getElementById('intakeForm');
    
    if (savedData) {
        const data = JSON.parse(savedData);
        // Load data into form fields (DOM Interaction: Modify Element)
        form.clientName.value = data.clientName || '';
        form.clientEmail.value = data.clientEmail || '';
        form.concern.value = data.concern || '';
        
        // 14. JavaScript Template Literals
        document.getElementById('welcomeMessage').textContent = `Welcome back, ${data.clientName || 'user'}! Your last draft was loaded.`;
    }
}

// Function to save data to localStorage (More than one function)
function saveDraft() {
    const form = document.getElementById('intakeForm');
    const data = {
        clientName: form.clientName.value,
        clientEmail: form.clientEmail.value,
        concern: form.concern.value
    };
    // 15. JavaScript localStorage: Store Data
    localStorage.setItem('intakeFormDraft', JSON.stringify(data));
    alert('Draft saved locally!');
}

// Function to handle form submission (More than one function)
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Simulate data processing (in a real app, you'd send this to a server)
    console.log('Form Submitted:', {
        name: document.getElementById('clientName').value,
        email: document.getElementById('clientEmail').value
    });

    // 15. JavaScript localStorage: Remove Data after successful submission
    localStorage.removeItem('intakeFormDraft');

    // 10. DOM Interaction: Modify Element (Show feedback)
    document.getElementById('submissionFeedback').classList.remove('hidden');
    document.getElementById('intakeForm').reset();
    
    // Optional: Hide the form after submission
    document.getElementById('intakeForm').style.display = 'none';
}

// Initialization and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadDraft();

    // 10. DOM Interaction: Event Listener (for form submission)
    document.getElementById('intakeForm').addEventListener('submit', handleFormSubmit);
    
    // 10. DOM Interaction: Event Listener (for save button)
    document.getElementById('saveDraft').addEventListener('click', saveDraft);
});