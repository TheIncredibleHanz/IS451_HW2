// scripts.js

function changeBackgroundColor() {
    const colors = ['#ff9999', '#99ccff', '#99ff99', '#ffff99', '#ffcc99'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
