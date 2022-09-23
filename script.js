function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
    console.log(event.clientX+' '+event.clientY)
  // event
  //   .currentTarget
  //   .style
  //   .backgroundColor = 'yellow';
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event
    .dataTransfer
    .clearData();
    draggableElement.style.left = 100+'px'
    draggableElement.style.right = 100+'px'
    console.log(event.clientX+' '+event.clientY)
}


