var moves = 0;
var wins = 0;
var games = 0;
var gridSize;
var gameTiles;
var gridArray;
var rowSize;
var cards = [
	"<img src='css/default/monsters-01.png'>",
	"<img src='css/default/monsters-02.png'>",
	"<img src='css/default/monsters-03.png'>",
	"<img src='css/default/monsters-04.png'>",
	"<img src='css/default/monsters-05.png'>",
	"<img src='css/default/monsters-06.png'>",
	"<img src='css/default/monsters-07.png'>",
	"<img src='css/default/monsters-08.png'>",
	"<img src='css/default/monsters-09.png'>",
	"<img src='css/default/monsters-11.png'>",
	"<img src='css/default/monsters-13.png'>",
	"<img src='css/default/monsters-14.png'>",
	"<img src='css/default/monsters-15.png'>",
	"<img src='css/default/monsters-16.png'>"
];


$(document).ready(function(){

	$('input').click(function(){
		var diff = $(this).val();
		if(diff == 'easy'){
			rowSize = 5;
			gridSize = rowSize*2;
		}else if(diff == 'med'){
			rowSize = 5;
			gridSize = rowSize*4;
		}else if(diff == 'hard'){
			rowSize = 7;
			gridSize = rowSize*4;
		}
		$('#button-bucket').toggle();
		gameTiles = cards.slice(0,(gridSize/2));
		
		gridArray = $.merge(gameTiles, gameTiles);
		console.dir(gridArray);



		//shuffle here

		//place here
		for(i = 0; i < gridArray.length; i++){
			var html = '<div class="mg-tile">';
					html += '<div class="mg-tile-inner unmatched flipped">';
						html +='<div class="mg-tile-outside"></div>';
						html += '<div class="mg-tile-inside">' + gridArray[i] + '</div>';
					html +=	'</div>'
				html += '</div>'
			$('#mg-contents').append(html);
		}
		setTimeout(function(){
			$('.mg-tile-inner').removeClass('flipped');
		}, 2000);

		$('.mg-tile').click(function(){
			$(this).find('.mg-tile-inner').addClass('flipped');
			if($('.flipped.unmatched').length == 2){
				moves++;

				var card = [];
				var visibleCards = $('.flipped.unmatched img');
				if(visibleCards[0].src == visibleCards[1].src){
					alert('Way to go');
					// leave them flipped
					// remove unmatched
					// add matched
					$('.flipped .unmatched').addClass('matched');
					$('.flipped .unmatched').removeClass('unmatched');
					
				}else{
					setTimeout(function(){
					$('.flipped.unmatched').removeClass('flipped');
				},500);

				}
				if($('.flipped .matched').length == gridArray.length){
					alert('You have matched them all.');
					wins++;	
				}
			}else{
				$('#move-counter').html(moves);
				$('#wins-counter').html(wins);
			}



		});

		// $('.mg-tile-inner').click(function(){
		// 	// var flippedTiles = $('.flipped').attr('src');
		// 	// var tile2 = $('.mg-tile-inner').attr('src');
		// 	if($('.mg-tile-inner.flipped').length>1){
		// 			var flippedTiles = $('.flipped').attr('src');
		// 			flippedTiles[0]
		// 			if(){


		// 			}
		// 			$('.mg-tile-inner').addClass('matched');
		// 		}else{
		// 			$('')
		// 		}
		// }
		// })


	});




})