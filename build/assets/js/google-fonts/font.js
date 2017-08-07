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
    let _font_name;

    /* Logic:
       According to observation, 
       font names containing white spaces are replaced by '+' in links.
       The below code does the same, replaces white spaces by '+'.
    */
    if(get_font_name.indexOf(' ') >= 0) {
        _font_name = get_font_name.split(' ').join('+');
      //console.log(new_name);
    } else {
      _font_name = get_font_name;
    }

    $('#show-font-link').text(`<link href="${GOOGLE_FONTS_API_CSS}${_font_name}" rel="stylesheet">`);
    $('#show-font-family-code').text(`font-family: '${get_font_name}'`);
    $('#show-font-link').addClass('well');
    $('#show-font-family-code').addClass('well');

    /* Check if the <head> contains a stylesheet link already.
    If yes, remove the link. */
    while (document.getElementById('myCss')) {
        $('#myCss').remove();      
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
        link.href = GOOGLE_FONTS_API_CSS +''+_font_name;
        head.appendChild(link);
  }

  //Style the example paragraph
  $('#example').css({'font-family': `${get_font_name}`, 'font-size': '22px'});
  });
}