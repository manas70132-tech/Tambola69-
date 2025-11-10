// ====== DOM Content Loaded ======
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site loaded successfully!");

    // Example: Button click handler
    const button = document.querySelector('button');
    if(button) {
        button.addEventListener('click', () => {
            alert("Button clicked!");
        });
    }

    // Example: Form submission (if any)
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log("Form submitted:", data);
            alert("Form submitted successfully!");
            form.reset();
        });
    }

    // Admin table example
    const adminTable = document.querySelector('#admin-table');
    if(adminTable) {
        // Example: Populate table with dummy data
        const users = [
            { id: 1, name: "Ali", email: "ali@example.com" },
            { id: 2, name: "Sara", email: "sara@example.com" }
        ];

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;
            adminTable.appendChild(row);
        });
    }
});
