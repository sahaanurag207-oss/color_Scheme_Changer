const body = document.body;
const headings = document.querySelectorAll('h2, h3, h3 span');

function setBackground(gradient, textColor) {
    body.style.backgroundImage = gradient;
    body.style.backgroundSize = "cover";
    body.classList.add('blurred-bg');
    
    headings.forEach(heading => {
        heading.style.color = textColor;
    });
}

document.getElementById('red').addEventListener('click', () => {
    setBackground('linear-gradient(135deg, #e4c2c2 0%, #e5866c 100%)', '#000000');
});

document.getElementById('green').addEventListener('click', () => {
    setBackground('linear-gradient(135deg, #9ad4a9 0%, #70d85b 100%)', '#000000');
});

document.getElementById('blue').addEventListener('click', () => {
    setBackground('linear-gradient(135deg, #c7d4e9 0%, #61b0d4 100%)', '#000000');
});

document.getElementById('yellow').addEventListener('click', () => {
    setBackground('linear-gradient(135deg, #fdfcfb 0%, #ebdb54 100%)', '#000000');
}); 

document.getElementById('white').addEventListener('click', () => {
    setBackground('linear-gradient(#ffffff, #ffffff)', '#000000');
});

document.getElementById('Black').addEventListener('click', () => {
    setBackground('linear-gradient(#212121, #212121)', '#ffffff');
}); 
