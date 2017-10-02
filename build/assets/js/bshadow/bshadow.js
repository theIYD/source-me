console.log(123);

let sample = document.querySelector('#sample');
let offset_x = document.querySelector('#offset-x');
let offset_y = document.querySelector('#offset-y');
let blur = document.querySelector('#blur');
let spread = document.querySelector('#spread');
let generatedOutput = document.querySelector('.generated');

/* 
    Might be a lengthy workaround.
    TODO: 
*/
let x = 0;
let y = 0;
let w = 0;
let z = 0;

offset_x.addEventListener('input', function(){
    x = this.value;
    shadow(x, y, w, z);
});
offset_y.addEventListener('input', function(){
    y = this.value;
    shadow(x, y, w, z);
});
blur.addEventListener('input', function(){
    w = this.value;
    shadow(x, y, w, z);
});
spread.addEventListener('input', function(){
    z = this.value;
    shadow(x, y, w, z);
});

function shadow(xOffset, yOffset, blur, spread) {
    sample.setAttribute("style", `box-shadow: ${xOffset}px ${yOffset}px ${blur}px ${spread}px rgba(0,0,0,0.75)`);
    generatedOutput.innerHTML = sample.getAttribute('style');
}

