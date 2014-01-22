'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("Something else...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(submitClick);
}

function submitClick(e) {
	e.preventDefault();
	var projectTitle = $('#project').val();
	var newWidth = $('#width').val();
	var newDescription = $('#description').val();
	
	$(projectTitle).animate({
		width: newWidth
	});
	$(projectTitle + " .project-description").text(newDescription);
	
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
	console.log("Matching items: " + jumbotronHeader.length);
    jumbotronHeader.text(projectTitle);
	
    var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
   	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
 	 } else {
		 description.remove();
		 //used remove intead of hide/fade out to allow for re-adding description on 3rd click
		 
 	 }
 }
	 
	
	