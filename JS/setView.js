function getRandomColor() { //Gets a random color 
    const hex = '0123456789ABCDEF';
    let color = '#';
    do { //Creates random color 
        color = '#' + Array.from({ length: 6 }, () => hex[Math.floor(Math.random() * 16)]).join('');
    } while (tooDark(color)); //While it's considered too dark
    return color;
}

function tooDark(color) {
    const [r, g, b] = [1, 3, 5].map(i => parseInt(color.slice(i, i + 2), 16)); //Grabs red green blue values
    return r + g + b < 90; //Returns if it's too dark
}

function setRandomColor() { //Sets random color 
    const background = getRandomColor();
    const button = getRandomColor();
    document.getElementById('center').style.backgroundColor = background;
    document.getElementById('button').style.backgroundColor = button;
    setCookie('background', background, 1);
    setCookie('button', button, 1);
}

function setRandomFontSize() { //Sets random font size
    const countSize = `${Math.random() * 50 + 20}px`;
    const numSize = `${Math.random() * 50 + 20}px`;
    document.getElementById('count').style.fontSize = countSize;
    document.getElementById('num').style.fontSize = numSize;
    setCookie('countFontSize', countSize, 1);
    setCookie('numFontSize', numSize, 1);
}

function setRandomPosition() { //Sets a random position within center
    const button = document.getElementById('button');
    const box = document.getElementById('center');
    const [randX, randY] = [
        Math.random() * (box.offsetWidth - button.offsetWidth),
        Math.random() * (box.offsetHeight - button.offsetHeight)
    ];
    button.style.left = `${randX}px`;
    button.style.top = `${randY}px`;
    button.style.transform = 'none';
    setCookie('buttonLeft', randX, 1);
    setCookie('buttonTop', randY, 1);
}