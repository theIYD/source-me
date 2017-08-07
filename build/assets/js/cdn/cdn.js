window.onload = () => {
    let cdn_link = [];
    let i = 0;

    let json = $.getJSON(
        "https://api.cdnjs.com/libraries",
    (data) => {
      $.each(data.results, (index, library) => {
        // Create a dropdown list and store all the cdns recieved.
        $(".combobox").append($('<option>', {
            value: library.name,
            text: library.name,
            id: i
        }));

        cdn_link.push(library.latest);
        i = i+1;
      });
    }
  );

  let options = document.getElementById('cdns');
  $('#cdns').change(function(){
    let option_id = $('option:selected', this).attr('id');

    $('#show_cdn').text(cdn_link[option_id]);
    $('#show_cdn').addClass('well');
  });

}