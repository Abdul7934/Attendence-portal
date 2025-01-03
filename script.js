// Predefined list of members with their phone numbers
const members = [
    { name: "John Doe", phone: "1234567890" },
    { name: "Jane Smith", phone: "2345678901" },
    { name: "Mike Johnson", phone: "3456789012" },
    { name: "Sarah Williams", phone: "4567890123" },
    { name: "David Brown", phone: "5678901234" }
];

// Initialize variables
let presentMembers = [];

// DOM Elements
const attendanceForm = document.getElementById('attendanceForm');
const phoneInput = document.getElementById('phoneNumber');
const errorMessage = document.getElementById('errorMessage');
const presentList = document.getElementById('presentList');
const absentList = document.getElementById('absentList');
const searchInput = document.getElementById('searchInput');
const resetButton = document.getElementById('resetButton');
const datetimeDisplay = document.getElementById('datetime');

// Update datetime
function updateDateTime() {
    const now = new Date();
    datetimeDisplay.textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Validate phone number
function isValidPhoneNumber(phone) {
    return phone.length === 10 && !isNaN(phone);
}

// Update attendance lists
function updateLists() {
    // Clear current lists
    presentList.innerHTML = '';
    absentList.innerHTML = '';

    // Update present members list
    presentMembers.forEach(phone => {
        const member = members.find(m => m.phone === phone);
        if (member) {
            const li = document.createElement('li');
            li.textContent = `${member.name} (${member.phone})`;
            presentList.appendChild(li);
        }
    });

    // Update absent members list
    members.forEach(member => {
        if (!presentMembers.includes(member.phone)) {
            const li = document.createElement('li');
            li.textContent = `${member.name} (${member.phone})`;
            absentList.appendChild(li);
        }
    });
}

// Handle form submission
attendanceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = phoneInput.value.trim();

    // Validate phone number
    if (!isValidPhoneNumber(phone)) {
        errorMessage.textContent = 'Please enter a valid 10-digit phone number';
        return;
    }

    // Check if member exists
    const member = members.find(m => m.phone === phone);
    if (!member) {
        errorMessage.textContent = 'Member not found';
        return;
    }

    // Check if already marked present
    if (presentMembers.includes(phone)) {
        errorMessage.textContent = 'Attendance already marked';
        return;
    }

    // Mark attendance
    presentMembers.push(phone);
    errorMessage.textContent = '';
    phoneInput.value = '';
    updateLists();
});

// Handle search
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const allListItems = document.querySelectorAll('li');

    allListItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Handle reset
resetButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset attendance?')) {
        presentMembers = [];
        errorMessage.textContent = '';
        phoneInput.value = '';
        updateLists();
    }
});

// Initial list update
updateLists(); 