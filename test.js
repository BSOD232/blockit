function build_gui() {
	const gui = document.createElement('div')
    gui.id = "gui"
    gui.style.backgroundColor = 'green'
    gui.style.height = "100px"
    gui.style.width = "100px"
    gui.style.overflow = "auto"
    gui.style.zIndex = "100000000000000"
    gui.style.left = 0
    gui.style.top = 0
    gui.style.position = "fixed"
    
    document.body.appendChild(gui)
    
}

build_gui()

dragElement(document.getElementById("gui"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {

    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
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

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;
  }
}
