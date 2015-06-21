$(document).ready(function(){ 
	
	$('#up').click(function() { // When you click on #up
		$('.header').toggleClass('closedHeader'); // Toggle the "slow" slide effect on #header
		$(this).toggleClass('active'); // Toggle the active button state
		$('#down').toggleClass('activeDown');
		return false; // Prevents browser from jumping to link anchor
	});

	$('#down').click(function() { // When you click on #down
		$('.header').toggleClass('closedHeader'); // Toggle the "slow" slide effect on #header
		//$(this).toggleClass('active'); // Toggle the active button state
		$('#down').toggleClass('activeDown');
		return false; // Prevents browser from jumping to link anchor
	});
	
});

$('.banner').parallax({imageSrc: "./images/creativemess.jpg"});
$('.commentArea').parallax({imageSrc: "./images/clouds.jpg"});


$('#submitForm').on('click', function () {
  var email = $('#email').val();
  var name = $('#name').val();
  var comment = $('#comment').val();

  if (email && comment){
    $.ajax({
      url: 'http://localhost:8000/send_email', 
      crossDomain: true,
      method: 'POST',
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      data: {
        email: email,
        name: name,
        message: comment 
      },
      complete: function(response){
        console.log(response)
      }
    });
  } 
});
          

