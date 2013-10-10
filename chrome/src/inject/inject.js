
chrome.extension.sendMessage({}, function(response) {

	var $sidebar = $(Handlebars.templates['sidebar']());

	var $current = $sidebar.find('b.selector');

	$('body').append($sidebar);

	var matching = false;
	var $selector;

	$('body *:visible').not('.scrappy, .scrappy *').hover(function(e) {

		if(!matching) return;

		var selector = $(this).prop('tagName').toLowerCase();

		$.each($(this).attr('class')?$(this).attr('class').split(/\s+/):[], function(index, item){
			if(item!='scrappy-matched' && item!='scrappy-hover'){
				selector+='.'+item;
			}
		});

		//Display selector string
		$current.text(selector);

		$selector = $(selector);

		console.log("selector", $selector.length);

		//Reset old matches
		$('.scrappy-matched').removeClass('scrappy-matched');
		$('.scrappy-hover').removeClass('scrappy-hover');

		//Highlight matches
		$(this).addClass('scrappy-hover');
		$selector.not('.scrappy, .scrappy *').not(this).addClass('scrappy-matched');
	   	
	    var matchedItems = [];
	    
	    $selector.each(function(k,v){
	    	matchedItems.push($(v).text().trim());
	    });
	    console.log($('.scrappy .matches pre'));
	    $('.scrappy .matches pre').html(JSON.stringify(matchedItems, null, 2));

	}, function(e) {
		
		if(!matching) return;

	    $(this).removeClass('scrappy-hover');
	    $('.scrappy-matched').removeClass('scrappy-matched');
	});

	$('.scrappy .key button').click(function(e){
		e.preventDefault();
		matching = !matching;
		$('.scrappy .matches b').text($('.scrappy .key input[type=text]').val()+' = ');
		
	});

	$('.scrappy .matches button').click(function(e){
		e.preventDefault();
		$('.scrappy .results').append('<p>'+$('.scrappy .matches b').text()+': '+$selector.length+' matches'+'</p>');
		$('.scrappy .key input[type=text]').val('')
	});

	$(document).on({
		click: function(e){
			e.preventDefault();
			$('.scrappy-hover').addClass('scrappy-matched').removeClass('scrappy-hover');
			matching = false;

		}
	}, '.scrappy-hover');


	chrome.runtime.sendMessage({greeting: "hello"}, function(res) {
  		
	});
});

