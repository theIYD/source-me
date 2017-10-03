console.log(123);

//Variables
let sample = getSelectors('#sample');
let offset_x = getSelectors('#offset-x');
let offset_y = getSelectors('#offset-y');
let blur = getSelectors('#blur');
let spread = getSelectors('#spread');
let opacity = getSelectors('#opacity');
let generatedOutput = getSelectors('.generated');

opacity.step = "0.01";

function getSelectors(selector) {
    return document.querySelector(selector);
}
/* 
    Might be a lengthy workaround.
    TODO: Find an effective solution by not
    repeating the code.
*/
let x = 0;
let y = 0;
let w = 0;
let z = 0;
let m = 0;

offset_x.addEventListener('input', function(){
    x = this.value;
    shadow(x, y, w, z, m);
});
offset_y.addEventListener('input', function(){
    y = this.value;
    shadow(x, y, w, z, m);
});
blur.addEventListener('input', function(){
    w = this.value;
    shadow(x, y, w, z, m);
});
spread.addEventListener('input', function(){
    z = this.value;
    shadow(x, y, w, z, m);
});
opacity.addEventListener('input', function(){
    m = this.value;
    shadow(x, y, w, z, m);
});

function shadow(xOffset, yOffset, blur, spread, opacity) {
    sample.setAttribute("style", `box-shadow: ${xOffset}px ${yOffset}px ${blur}px ${spread}px rgba(0,0,0,${opacity})`);
    generatedOutput.innerHTML = `-webkit-${sample.getAttribute('style')}<br>-moz-${sample.getAttribute('style')}<br>-o-${sample.getAttribute('style')}<br>${sample.getAttribute('style')}`;
}

