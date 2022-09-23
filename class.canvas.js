const byId = (id) => document.getElementById(id);
const log = console.log;

class Sheet {
    constructor(x, y, width, height) {
        this.canvasX = x;
        this.canvasY = y;
        this.canvasWidth = width;
        this.canvasHeight = height;
    }

    onload() {
        const draggable = byId('draggable');
        log(draggable)
        let x0 = null, y0 = null, isDragging = false;

        draggable.style.width = this.canvasX + 'px';
        draggable.style.height = this.canvasY + 'px';
        draggable.style.left = this.canvasWidth + 'px';
        draggable.style.top = this.canvasHeight + 'px';

        draggable.addEventListener('mousedown', (e) => {
            isDragging = true;
            x0 = e.clientX;
            y0 = e.clientY;
            log(`Draggable1 Started drag at ${x0}, ${y0}`);
        });

        draggable.addEventListener('mousemove', (e) => {
            if (isDragging) {
                log(`Dragging at ${e.clientX}, ${e.clientY}`);
                const xShift = e.clientX - x0;
                const yShift = e.clientY - y0;
                draggable.style.left = this.canvasX + xShift + 'px';
                draggable.style.top = this.canvasY + yShift + 'px';
            }
        });

        draggable.addEventListener('mouseup', (e) => {
            isDragging = false;
            log(`Finished drag at ${e.clientX}, ${e.clientY}`);
            const xShift = e.clientX - x0;
            const yShift = e.clientY - y0;
            log(`Shifted by ${xShift}, ${yShift}`);
            log(`Returning the canvas into original position.`);
            draggable.style.left = this.canvasX + 'px';
            draggable.style.top = this.canvasY + 'px';
        });
    }
};

let canvas1 = new Sheet(-100, -100, 1000, 300)
window.onload = canvas1.onload()