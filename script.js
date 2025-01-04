// Initial list of 1989-90 batchmates
const members = [
    { id: "01", name: "SAYED MADEENA SHARIFF", phone: "9908277892" },
    { id: "02", name: "ANIL", phone: "8639637228" },
    { id: "03", name: "APPARAO", phone: "7989018158" },
    { id: "04", name: "KUCHIPUDI RAMARAD", phone: "9492878233" },
    { id: "05", name: "K. MURALI KRISHNA", phone: "7003493381" },
    { id: "06", name: "BOPPANA SUDHANJALI", phone: "9177299113" },
    { id: "07", name: "N.SRIDEVI", phone: "9989621666" },
    { id: "08", name: "VARDHINEEDI SRIM VASU", phone: "9441664719" },
    { id: "09", name: "ALAPATI RADHA", phone: "9652769278" },
    { id: "10", name: "ANAND", phone: "9550783784" },
    { id: "11", name: "GARUDA ANJANEYOLU", phone: "9047288639" },
    { id: "12", name: "JAGU", phone: "8600048305" },
    { id: "13", name: "K.Y. KISHNARAO", phone: "9948567990" },
    { id: "14", name: "N. PHANI KUMAR", phone: "9908881111" },
    { id: "15", name: "V.RAVIBABU", phone: "7729073327" },
    { id: "16", name: "SERADA", phone: "9885216796" },
    { id: "17", name: "SHARMA", phone: "7382609483" },
    { id: "18", name: "VEJAMURU SRINIVAS", phone: "9949938439" },
    { id: "19", name: "RAGHU RAMARAJU", phone: "8910220554" },
    { id: "20", name: "HEMALATA", phone: "9059875379" },
    { id: "21", name: "E.P.SARADHA", phone: "7075668940" },
    { id: "22", name: "PADMAVATHI", phone: "8919124403" },
    { id: "23", name: "A RAMU", phone: "9543335555" },
    { id: "24", name: "SUBHA ALLI", phone: "9949248389" },
    { id: "25", name: "BHARGAVI MESS", phone: "9440984990" },
    { id: "26", name: "BUTCHI RAJU", phone: "9493956399" },
    { id: "27", name: "DHANALAKSHMI BODDU", phone: "9618394682" },
    { id: "28", name: "RAGHU NAYAKUDU", phone: "9848354036" },
    { id: "29", name: "GOVINDA RAJU", phone: "9908947682" },
    { id: "30", name: "KV. SATYA NARAYANA", phone: "9704336987" },
    { id: "31", name: "SITA KUMARI", phone: "9920453782" },
    { id: "32", name: "J S P VARDHINERDI", phone: "8500684406" },
    { id: "33", name: "K.S. MANIKYARAO", phone: "9989076225" },
    { id: "34", name: "U. KUMARI", phone: "9949959062" },
    { id: "35", name: "LAKSHMI", phone: "9247275697" },
    { id: "36", name: "K. LAKSHMI", phone: "9966644489" },
    { id: "37", name: "GELANI", phone: "9912346482" },
    { id: "38", name: "P. MALIKA", phone: "9652133331" },
    { id: "39", name: "MEENA", phone: "9398027642" },
    { id: "40", name: "PALIVELA NAGEWARARAO", phone: "9494722477" },
    { id: "41", name: "PASUPULETI TATAJI", phone: "9398713745" },
    { id: "42", name: "R.R. RAJU", phone: "9963229680" },
    { id: "43", name: "RAMBABU RAPOLU", phone: "9494439987" },
    { id: "44", name: "JOTHI", phone: "8985886159" },
    { id: "45", name: "SITA PARIMI", phone: "9493185649" },
    { id: "46", name: "SITA", phone: "9494529975" },
    { id: "47", name: "SITARAMARAJU", phone: "8106999995" },
    { id: "48", name: "SIVA RAMA RAJU", phone: "9959795585" },
    { id: "49", name: "SUBBA RAJU", phone: "9959402258" },
    { id: "50", name: "SUDHARANI", phone: "9550680221" },
    { id: "51", name: "SURYA", phone: "9346563726" },
    { id: "52", name: "BHARATHI TANUKU", phone: "9490890947" },
    { id: "53", name: "TULASI", phone: "8985951739" },
    { id: "54", name: "VANI SUNKARA", phone: "8790288650" },
    { id: "55", name: "VENKATA LAKSHMI", phone: "6281322766" },
    { id: "56", name: "VENKATESH", phone: "9948739050" },
    { id: "57", name: "KRAGAMANI", phone: "6303812919" },
    { id: "58", name: "N.DEVI", phone: "8639520099" },
    { id: "59", name: "N VERA RAGAVOLU", phone: "9052850213" },
    { id: "60", name: "BEBY SATYAVATHI", phone: "9490655578" },
    { id: "61", name: "P. VENKATA RAO", phone: "9491991448" },
    { id: "62", name: "CHADRASESU", phone: "9573879966" },
    { id: "63", name: "K.LAVANYA", phone: "9642152495" },
    { id: "64", name: "ANCHADRAO", phone: "9676247456" },
    { id: "65", name: "K.SUJATA", phone: "9849064952" },
    { id: "66", name: "S.BRAMMAM", phone: "7842440893" },
    { id: "67", name: "INDUKURI MADHAVI SUBBALAKSHMI", phone: "9959893927" },
    { id: "68", name: "GANDROTU VENKATARAMANA ", phone: "9505710624" },
    { id: "69", name: "PALLI SRINIVASU MUDDAPURAM", phone: "7981951978" }
];

// Initialize variables
let presentMembers = [];

// Additional DOM Elements
const addBatchmateForm = document.getElementById('addBatchmateForm');
const newNameInput = document.getElementById('newName');
const newPhoneInput = document.getElementById('newPhone');
const managementMessage = document.getElementById('managementMessage');

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

// Show message function
function showMessage(element, message, isError = false) {
    element.style.color = isError ? '#ff4757' : '#2ecc71';
    element.textContent = message;
    setTimeout(() => {
        element.textContent = '';
    }, 3000);
}

// Add new batchmate
addBatchmateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = newNameInput.value.trim();
    const phone = newPhoneInput.value.trim();

    // Validate phone number
    if (!isValidPhoneNumber(phone)) {
        showMessage(managementMessage, 'Please enter a valid 10-digit phone number', true);
        return;
    }

    // Check if phone number already exists
    if (members.some(m => m.phone === phone)) {
        showMessage(managementMessage, 'This phone number is already registered', true);
        return;
    }

    // Add new batchmate
    members.push({ name, phone });
    showMessage(managementMessage, `${name} added successfully!`);
    newNameInput.value = '';
    newPhoneInput.value = '';
    updateLists();
});

// Update attendance lists
function updateLists() {
    // Clear current lists
    presentList.innerHTML = '';
    absentList.innerHTML = '';

    // Update present members list
    presentMembers.forEach(phone => {
        const member = members.find(m => m.phone === phone);
        if (member) {
            const li = createListItem(member, true);
            presentList.appendChild(li);
        }
    });

    // Update absent members list
    members.forEach(member => {
        if (!presentMembers.includes(member.phone)) {
            const li = createListItem(member, false);
            absentList.appendChild(li);
        }
    });
}

// Create list item with remove button
function createListItem(member, isPresent) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>
            <i class="fas ${isPresent ? 'fa-check-circle' : 'fa-times-circle'}"></i> 
            ${member.id}. ${member.name} (${member.phone})
        </span>
        <button class="remove-btn" data-phone="${member.phone}">
            <i class="fas fa-user-minus"></i>
        </button>
    `;

    // Add remove functionality
    const removeBtn = li.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => removeBatchmate(member.phone));

    return li;
}

// Remove batchmate function
function removeBatchmate(phone) {
    if (confirm('Are you sure you want to remove this batchmate?')) {
        const index = members.findIndex(m => m.phone === phone);
        if (index !== -1) {
            const removedMember = members[index];
            members.splice(index, 1);
            presentMembers = presentMembers.filter(p => p !== phone);
            updateLists();
            showMessage(managementMessage, `${removedMember.name} removed successfully!`);
        }
    }
}

// Handle form submission
attendanceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = phoneInput.value.trim();

    // Validate phone number
    if (!isValidPhoneNumber(phone)) {
        showMessage(errorMessage, 'Please enter a valid 10-digit phone number', true);
        return;
    }

    // Check if member exists
    const member = members.find(m => m.phone === phone);
    if (!member) {
        showMessage(errorMessage, 'Member not found', true);
        return;
    }

    // Check if already marked present
    if (presentMembers.includes(phone)) {
        showMessage(errorMessage, 'Attendance already marked', true);
        return;
    }

    // Mark attendance
    presentMembers.push(phone);
    showMessage(errorMessage, `Attendance marked successfully for ${member.name}`, false);
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