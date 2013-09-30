
chrome.extension.sendMessage({}, function(response) {
	// var readyStateCheckInterval = setInterval(function() {
	// if (document.readyState === "complete") {
	// 	clearInterval(readyStateCheckInterval);

	// 	// ----------------------------------------------------------
	// 	// This part of the script triggers when page is done loading
	// 	console.log("Hello. This message was sent from scripts/inject.js");
	// 	// ----------------------------------------------------------

	// }
	// }, 10);
	
	var $currentSelectorDiv = $('<div class="scrappy-current-selector"></div>');
	$('body').append($currentSelectorDiv);
	$('body *:visible').hover(function(e) {

		var selector = $(this).prop('tagName');

		$.each($(this).attr('class')?$(this).attr('class').split(/\s+/):[], function(index, item){
			if(item!='scrappy-matched' && item!='scrappy-hover'){
				selector+='.'+item;
			}
		});

		$(selector).addClass('scrappy-matched');
		$(this).removeClass('scrappy-matched');
	    $(this).addClass('scrappy-hover');
	    console.log("selector: ", selector, $(selector).length, $('.scrappy-matched').length);
	    elem = $(this);
	    $currentSelectorDiv.text("Selected: "+selector);
	    //going over the highlighted items
	    $('body *:visible').filter('.scrappy-hover').each(function(k,v) {
	        if (elem.get(0) != v) {
	            /* highlighted item is NOT the current item being hovered
	            This means - it's a parent element, let's mark it (for when we get out of the child element),
	            and unhighlight it */
	            $(v).attr('child_highlighted',1).removeClass('scrappy-hover');
	        }
	 
	    });
	}, function(e) {
	    $(this).removeClass('scrappy-hover');
	    //if the target element (the element now being hovered) is parent, highlight it and remove the marking
	    if ($(e.toElement).attr('child_highlighted')) {
	        $(e.toElement).addClass('scrappy-hover').removeAttr('child_highlighted');
	    }
	    $(this).removeClass('scrappy-hover');
	    $('.scrappy-matched').removeClass('scrappy-matched');
	});
	
});

