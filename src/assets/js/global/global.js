    
  //Function to change top bar color
  function changeTopBarColor (arr) {
    let counter = 0;
    setInterval(() => {
      $('#bar').css({'backgroundColor': `#${arr[counter]}`});
      counter = (counter+1) % arr.length;
    }, 1000);
  }
  changeTopBarColor(['F44336', '2196F3', '4CAF50', 'FFEB3B']);
