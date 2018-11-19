$(document).ready(function(){
		
		$("#oneButton").on({
			   mouseenter: function(){
			    $('#oneIcon').attr('src','images/one-tile-white.png');
			  },
			  mouseleave: function(){
			    $('#oneIcon').attr('src','images/one-tile-color.png');
			  }
			  });
		
		$("#fourButton").on({
			   mouseenter: function(){
			    $('#fourIcon').attr('src','images/four-tile-white.png');
			  },
			  mouseleave: function(){
			    $('#fourIcon').attr('src','images/four-tile-color.png');
			  }
			  });
		
		$("#nineButton").on({
			   mouseenter: function(){
			    $('#nineIcon').attr('src','images/nine-tile-white.png');
			  },
			  mouseleave: function(){
			    $('#nineIcon').attr('src','images/nine-tile-color.png');
			  }
			  });	  
	});
