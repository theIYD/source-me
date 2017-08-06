    
  //Function to change top bar color
  function changeTopBarColor (arr) {
    //console.log("We are in changeTopBarColor function");
    //let top_bar = document.getElementById('bar');
    let counter = 0;
    setInterval(() => {
      //top_bar.style.backgroundColor = `#${arr[counter]}`;
      $('#bar').css({'backgroundColor': `#${arr[counter]}`});
      counter = (counter+1) % arr.length;
    }, 1000);
  }
  changeTopBarColor(['F44336', '2196F3', '4CAF50', 'FFEB3B']);
