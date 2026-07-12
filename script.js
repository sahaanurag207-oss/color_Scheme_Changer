const body = document.body;

// Function to change background to a gradient
function setBackground(gradient) {
    body.style.backgroundImage = gradient;
    body.style.backgroundSize = "cover";
    body.classList.add('blurred-bg'); // Applies the blur effect
}

// Add Event Listeners to your buttons
document.getElementById('red').addEventListener('click', () => {
    setBackground('linear-gradient(135deg, #e4c2c2 0%, #e5866c 100%)');
});

document.getElementById('green').addEventListener('click', () => {
    setBackground('linear-gradient(135deg, #9ad4a9 0%, #70d85b 100%)');
});

document.getElementById('blue').addEventListener('click', () => {
    setBackground('linear-gradient(135deg, #c7d4e9 0%, #61b0d4 100%)');
});

document.getElementById('yellow').addEventListener('click', () => {
    setBackground('linear-gradient(135deg, #fdfcfb 0%, #ebdb54 100%)');
}); 

document.getElementById('white').addEventListener('click', () => {
    setBackground('linear-gradient(#ffffff, #ffffff)');
});

document.getElementById('Black').addEventListener('click', () => {
    setBackground('linear-gradient(#212121, #212121)');
}); 
