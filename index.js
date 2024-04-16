function showMessage() {
    alert("Your details have been saved!");
}

function goToPage(page) {
    window.location.href = page;
}

document.getElementById("trigger").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    var popupMenu = document.getElementById("popup-menu");
    popupMenu.style.display = "block";
    popupMenu.style.left = event.pageX + "px";
    popupMenu.style.top = event.pageY + "px";
});

document.addEventListener("click", function(event) {
    var popupMenu = document.getElementById("popup-menu");
    if (event.target != popupMenu && event.target != document.getElementById("trigger")) {
        popupMenu.style.display = "none";
    }
});

// dynamic form
// Get reference to the form and buttons
const form = document.getElementById('dynamicForm');
const addFieldBtn = document.getElementById('addFieldBtn');
const submitBtn = document.getElementById('submitBtn');

// Add event listener to the "Add Field" button
addFieldBtn.addEventListener('click', function() {
    // Create a new input field
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'customField'; // You can customize the name attribute as needed
    newInput.placeholder = 'Custom Field';

    // Append the new input field to the form
    form.appendChild(newInput);
});

// Add event listener to the "Submit" button
submitBtn.addEventListener('click', function() {
    // Serialize form data (you can customize this as needed)
    const formData = new FormData(form);
    const serializedData = {};
    for (let [name, value] of formData) {
        serializedData[name] = value;
    }

    console.log(serializedData);

});
