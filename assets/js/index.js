// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

window.onload = () => {

  //Create globals.
  let GOOGLE_FONTS_API_CSS = 'https://fonts.googleapis.com/css?family=';
  let get_font_name;

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

  //Make reference to DOM
  let show_font_link = document.getElementById('show-font-link');
  let show_font_family_code = document.getElementById('show-font-family-code');

  /*Use Jquery to get the font name when 
  the user selects from the dropdown list created above */
  $('#fonts').change(function(){
    get_font_name = $(this).val();

    show_font_link.innerText = `<link href="${GOOGLE_FONTS_API_CSS}${get_font_name}" rel="stylesheet">`;
    show_font_family_code.innerText = `font-family: '${get_font_name}', sans-serif`;
    show_font_link.className = 'well';
    show_font_family_code.className = 'well';

  });

  function changeTopBarColor () {
    console.log("We are in changeTopBarColor function");
    var top_bar = document.getElementById('bar');
    setInterval(() => {
      
    }, 1000);
  }

  changeTopBarColor();
}