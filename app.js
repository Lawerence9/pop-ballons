// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = ['green', 'red', 'cyan', 'lime', 'magenta', 'black', 'yellow', 'brown', 'white', 'orange', 'purple', 'maroon', 'olive', 'navy', 'teal', 'blue', 'silver', 'grey', 'green', 'pink'];

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    ballonsMap[position] = null;
    render();
}

const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        if (color === null)
        {
            return `<div class="balloon popped"></div>`;    
        }
        else
        {
            return `<div class="balloon active" onclick="popBalloon(${position})" style="background-color: ${color}"></div>`; // <--- render each balloon
        }
    });

    const activeBalloons = ballonsMap.filter(b => b !== null).length;

    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- render the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();