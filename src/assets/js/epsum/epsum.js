$(document).ready(() => {
    console.log('Epsum is running ......');

    $('#generate').click(() => {
        $.getJSON('https://baconipsum.com/api/?callback=?', 
			{ 
                'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'2' 
            },

            (epsum) => {
                if(epsum && epsum.length > 0) {
                    $('#epsum').html('');
                    $('#epsum').addClass('well');
                    for(var x in epsum) {
                        $('#epsum').append(`<p>${epsum[x]}</p>`);
                    }
                    $('#epsum').show();
                    $('#generate').text('Regenerate');
                }
            }
        );
    });
});