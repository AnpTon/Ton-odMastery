document.getElementById("toggle").onclick = function () {
    document.body.classList.toggle("dark-mode");
    
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('dark-mode');
    });
    
    const button = document.getElementById("toggle");
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Toggle Light Mode";
        button.classList.remove("bg-blue-600", "hover:bg-blue-700");
        button.classList.add("bg-blue-700", "hover:bg-blue-800");
    } else {
        button.textContent = "Toggle Dark Mode";
        button.classList.remove("bg-blue-700", "hover:bg-blue-800");
        button.classList.add("bg-blue-600", "hover:bg-blue-700");
    }
};