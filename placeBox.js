function placeBox() {
	
		document.getElementById('placeBox').style.display = 'flex';
	

setTimeout(function(){
	document.getElementById('closePlace').style.opacity = '0.9';
	
},100)
	
	setTimeout(function(){
		document.getElementById('xPlace').style.display = 'block';
	},300)
	
	setTimeout(function(){
		document.getElementById('placeIn').style.transform = 'scale(1)';
	},100)
	


	
	document.documentElement.style.overflow = 'hidden'; // firefox, chrome
	document.body.scroll = "no"; // ie only

}

function xPlace() {
	document.getElementById('xPlace').style.display = 'none';
	setTimeout(function () {
		document.getElementById('placeBox').style.display = 'none';
	}, 300);
	
	  document.getElementById('placeIn').style.transform = 'scale(0)';

		document.getElementById('closePlace').style.opacity = '0';
	document.documentElement.style.overflow = 'auto'; // firefox, chrome
	document.body.scroll = "yes"; // ie only
}

