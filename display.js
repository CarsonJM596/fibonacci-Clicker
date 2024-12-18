// Initialization/restoration of page
let mode = getCookie('mode') || 'fibonacci';
let clickCount = parseInt(getCookie('clickCount')) || 0;
let displayValue = mode === 'fibonacci' ? formatBigInt(fib(clickCount)) : formatBigInt(fact(clickCount));

document.getElementById('num').innerText = displayValue;
document.getElementById('count').innerText = clickCount;

// Restore styles from cookies
const [savedBackground, savedButton, savedCountFont, savedNumFont] = [
    getCookie('background'), getCookie('button'),
    getCookie('countFontSize'), getCookie('numFontSize')
];

//Restores all saved information if saved
if (savedBackground) document.getElementById('center').style.backgroundColor = savedBackground;
if (savedButton) document.getElementById('button').style.backgroundColor = savedButton;
if (savedCountFont) document.getElementById('count').style.fontSize = savedCountFont;
if (savedNumFont) document.getElementById('num').style.fontSize = savedNumFont;

//Restores random position if saved
const [savedLeft, savedTop] = [getCookie('buttonLeft'), getCookie('buttonTop')];
if (savedLeft && savedTop) {
    const button = document.getElementById('button');
    button.style.left = `${parseFloat(savedLeft)}px`;
    button.style.top = `${parseFloat(savedTop)}px`;
    button.style.transform = 'none';
}

//Factorial button
document.getElementById('factorialToggle').onclick = () => {
    mode = mode === 'fibonacci' ? 'factorial' : 'fibonacci'; // Toggle mode

    // Update the toggle button text
    document.getElementById('factorialToggle').innerText =
        mode === 'fibonacci' ? 'Switch to Factorial' : 'Switch to Fibonacci';

    // Update the header text
    document.getElementById('headerText').innerText =
        mode === 'fibonacci' ? 'Click for Fibonacci!' : 'Click for Factorial!';

    // Update the displayed value
    displayValue = mode === 'fibonacci' ? formatBigInt(fib(clickCount)) : formatBigInt(fact(clickCount));
    document.getElementById('num').innerText = displayValue;

    // Save the mode to a cookie
    setCookie('mode', mode, 1);
};


document.getElementById('button').onclick = () => {
    clickCount++; //Adds to click count
    if (mode === 'fibonacci') { //Grabs display value
        displayValue = formatBigInt(fib(clickCount)); 
    } else {
        displayValue = formatBigInt(fact(clickCount));
    } 
    document.getElementById('num').innerText = displayValue; //Displays display value 
    document.getElementById('count').innerText = clickCount; //Displays your count 
    //Saves count & displayvalue 
    setCookie('clickCount', clickCount, 1); 
    setCookie('FibValue', displayValue, 1);
    //Sets random
    setRandomColor();
    setRandomFontSize();
    setRandomPosition();
};

document.getElementById('resetProgress').onclick = () => {
    // Reset all variables
    clickCount = 0;
    mode = 'fibonacci';
    displayValue = 0;

    // Reset cookies
    document.cookie.split(";").forEach(cookie => {
        const name = cookie.split("=")[0].trim();
        setCookie(name, "", -1); // Set expiration to past time to delete cookie
    });

    // Reset the display
    document.getElementById('num').innerText = displayValue; // Reset number
    document.getElementById('count').innerText = clickCount; // Reset click count
    document.getElementById('factorialToggle').innerText = "Switch to Factorial"; // Reset mode button text

    // Reset styles
    document.getElementById('center').style.backgroundColor = "#ffffff"; // Default background
    document.getElementById('button').style.backgroundColor = "#007bff"; // Default button color
    document.getElementById('count').style.fontSize = "20px"; // Default font size
    document.getElementById('num').style.fontSize = "20px"; // Default font size
    document.getElementById('button').style.left = "50%"; // Default button position
    document.getElementById('button').style.top = "50%";
    document.getElementById('button').style.transform = "translate(-50%, -50%)";

    // Log reset for debugging
    console.log("Progress has been reset!");
};
