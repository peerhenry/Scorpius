$(document).ready(function(){
  console.log('ready');

  //var vid = $('#video');
  var vid = document.getElementById('video');

  function extensionIsValid(extension){
    var ex = extension;
    return ex === 'mp4' || ex === 'flv' || ex === 'webm'
  }

  $('#select-file').change(function(){
    var file = $('#select-file').val();
    var extension = file.split('.').pop();
    var isValid = extensionIsValid(extension);
    alert('extension is: ' + extension + '\nextension is valid: ' + isValid);

    if(isValid){
      var src = $('#source');
      src.attr('src', file);
      vid.load();
      vid.play();
    }
  });

});