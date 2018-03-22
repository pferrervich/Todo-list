
//Click on the add button. If there is text inside, will add it to the todo list
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;

  if (value){
    console.log('there was a value, yay!');
  }

});
