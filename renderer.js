// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

window.onload = () => {

  //Create globals.
  let GOOGLE_FONTS_API_CSS = 'https://fonts.googleapis.com/css?family=';
  let newf;

  //Get the fonts from Google Fonts API
  let json = $.getJSON(
    "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBwIX97bVWr3-6AIUvGkcNnmFgirefZ6Sw",
    (data) => {
      $.each(data.items, (index, font) => {
        // Create a dropdown list and store all the fonts recieved.
        $(".combobox").append(
          $("<option></option>").attr("value",font.family).text(font.family)
        );
      });
    }
  );

  let show_font_link = document.getElementById('show-font-link');
  let show_font_family_code = document.getElementById('show-font-family-code');

  /*Use Jquery to get the font name when 
  the user selects from the dropdown list created above */
  $('#fonts').change(function(){
    newf = $(this).val();
    //console.log(newf);

    show_font_link.innerText = `<link href="${GOOGLE_FONTS_API_CSS}${newf}" rel="stylesheet">`;
    show_font_family_code.innerText = `font-family: '${newf}', sans-serif`;
    show_font_link.className = 'well';
    show_font_family_code.className = 'well';

    /* Check if the <head> contains a stylesheet link already.
    If yes, remove the link. 
    while (document.getElementsByTagName('head')[0].firstChild) {
        document.getElementsByTagName('head')[0].removeChild(document.getElementsByTagName('head')[0].firstChild);
    }

    //Generate a unique id for each link.
    var cssId = 'myCss'; 

    //Check if the same stylesheet is repeated or not.
    if (!document.getElementById(cssId))
    {
        //Create a link.
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = GOOGLE_FONTS_API_CSS +''+newf;
        head.appendChild(link);
  }*/

  //Style the existing document.
  //document.body.style.fontFamily = newf; 
  
  }); 
}