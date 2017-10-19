function getSelectors(selector) {
    return document.querySelector(selector);
}

let page_title = getSelectors('#page-title');
let description = getSelectors('#description');
let author = getSelectors('#author');
let output = getSelectors('#output');

let m=0;
let n=0;
let o=0;

page_title.addEventListener('input', function(){
    m = this.value;
    generateMeta(m,n,o);
});

description.addEventListener('input', function(){
    n = this.value;
    generateMeta(m,n,o);
});

author.addEventListener('input', function(){
    o = this.value;
    generateMeta(m,n,o);
});


function generateMeta(title, desc, auth) {
    output.innerHTML = `
        <div class="panel-group">
            <div class="panel panel-primary">
                <div class="panel-heading">Code</div>
                    <div class="panel-body">
                        &lt;meta charset="utf-8"&gt;<br>
                        &lt;title&gt;${title}&lt;/title&gt;<br>
                        &lt;meta name="description" content="${desc}"&gt;<br>
                        &lt;meta name="author" content="${auth}"&gt;<br>
                    </div>
                </div>
            </div>
        `;
}