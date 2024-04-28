const squareLink = document.querySelector('.blank-square');
const myDiv = document.getElementById('mydiv');

squareLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('blank-square')) {
        myDiv.style.display = 'none';
    }
});

const aboutLink = document.querySelector('#appleDropdown a:first-child');

aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (myDiv.style.display === 'none') {
        myDiv.style.display = 'block';
    }
});

// Make the DIV element draggable:
dragElement(myDiv);

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = document.getElementById('mydivheader');

    if (header) {
        header.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
