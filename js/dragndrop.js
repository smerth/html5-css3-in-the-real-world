$('document').ready(function() {
  // bind the dragstart event on the bombs  
  $('#bombContainer img').bind('dragstart', function(event) {
    event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
  });
  
  // bind the dragover event on the monster
$('#monster').bind('dragover', function(event) {
  event.preventDefault();
});
  
  // bind the drop event on the monster
$('#monster').bind('drop', function(event) {
  var bombHash = {};
	bombHash['bomb1'] = "Is that all you've got!";
	bombHash['bomb2'] = "I eat uranium for breakfast!";
	bombHash['bomb3'] = "BUUURRRPP!!!";

	var monsterHeading = document.getElementById('monsterHeading');

	// change text of the header based on which bomb was dropped
  var item = event.originalEvent.dataTransfer.getData("text/plain");
	monsterHeading.innerHTML = bombHash[item];	
 
	
	// get the img element for the bomb, and then remove it
	var oldbomb = document.getElementById(item);
  oldbomb.parentNode.removeChild(oldbomb);
	
	event.preventDefault();  
});
});

