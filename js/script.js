$(document).ready(function(){
		
		$("#oneButton").on({
			   mouseenter: function(){
			    $('#oneIcon').attr('src','https://www.dropbox.com/s/6b19pdb1gsc5pxs/one-tile-white.png?raw=1');
			  },
			  mouseleave: function(){
			    $('#oneIcon').attr('src','https://www.dropbox.com/s/asffdjj4og3jf5n/one-tile-color.png?raw=1');
			  }
			  });
		
		$("#fourButton").on({
			   mouseenter: function(){
			    $('#fourIcon').attr('src','https://www.dropbox.com/s/9kf914qkd3fmnrv/four-tile-white.png?raw=1');
			  },
			  mouseleave: function(){
			    $('#fourIcon').attr('src','https://www.dropbox.com/s/hfpkr0gj0wz8sxa/four-tile-color.png?raw=1');
			  }
			  });
		
		$("#nineButton").on({
			   mouseenter: function(){
			    $('#nineIcon').attr('src','https://www.dropbox.com/s/pqa879v39wipei7/nine-tile-white.png?raw=1');
			  },
			  mouseleave: function(){
			    $('#nineIcon').attr('src','https://www.dropbox.com/s/p7ybkm4mvxrkdj9/nine-tile-color.png?raw=1');
			  }
			  });	  
	});
