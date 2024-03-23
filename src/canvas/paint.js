export function paintCircle(){
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 5;
    context.arc(250, 250, 25, -Math.PI, Math.PI);
    context.stroke();
}