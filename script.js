
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('message').innerText = 'Text has changed successfully!';
  });
  

  window.addEventListener('load', function() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  });
  
    window.addEventListener('load', function() {
    var newParagraph = document.createElement('p');
    newParagraph.innerText = 'New paragraph has been added dynamically!';
    document.getElementById('container').appendChild(newParagraph);
  });