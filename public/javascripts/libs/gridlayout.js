/*
 * Grid Layout 2.0.0
 *
 * Copyright (c) 2007 Stephen Hallgren (teevio.com)
 * 
 * Modification for fluid layouts by J.Bradford Dillon (jbradforddillon.com)
 * 
 */

$(document).ready(function()
{
	gridLayout = new GridLayout();
});

function GridLayout()
{
	gridLayoutObj = this;
	this.attachEvents();
}

GridLayout.prototype.attachEvents = function ()
{

	$(window).keypress(function(event)
	{			
		gridLayoutObj.checkKeyPress(event);
	});
	
	$('body').keypress(function(event)
	{		
		if (window.event && document.all)
		{
		    e = window.event;

			if(e.keyCode) // IE
        	{
                gridLayoutObj.checkKeyPress(e);
        	}
        }		
	});
};

GridLayout.prototype.checkKeyPress = function (e)
{
	var keynum;
	var keychar;
	var numcheck;
        
	if(e.keyCode) // IE
	{
		keynum = e.keyCode;
	}
	else if(e.which) // Netscape/Firefox/Opera
	{
		keynum = e.which;
	}
	
    // alert(keynum);
		
	keychar  = String.fromCharCode(keynum);
	
	if (keynum == 103 || keynum == 71 || keynum == 7)
		$('.page').toggleClass('grid');
}