function placeBox() {

	document.getElementById('placeBox').style.display = 'flex';


	setTimeout(function () {
		document.getElementById('closePlace').style.opacity = '0.9';

	}, 100)

	setTimeout(function () {
		document.getElementById('xPlace').style.display = 'block';
	}, 300)

	setTimeout(function () {
		document.getElementById('placeIn').style.transform = 'scale(1)';
	}, 100)




	document.documentElement.style.overflow = 'hidden'; // firefox, chrome
	document.body.scroll = "no"; // ie only

}

function xPlace() {
//	document.getElementById('xPlace').style.display = 'none';
	setTimeout(function () {
		document.getElementById('placeBox').style.display = 'none';
	}, 300);

	document.getElementById('placeIn').style.transform = 'scale(0)';

	document.getElementById('closePlace').style.opacity = '0';
	document.documentElement.style.overflow = 'auto'; // firefox, chrome
	document.body.scroll = "yes"; // ie only
}

function locaMB() {
	document.getElementById('locaMenuTop').style.color = 'white';
	document.getElementById('locaMenuTop').style.textShadow = '0px 0px 12px';

	document.getElementById('eventMenuTop').style.color = '#b5b5b5';
	document.getElementById('eventMenuTop').style.textShadow = 'none';

	document.getElementById('invitMenuTop').style.color = '#b5b5b5';
	document.getElementById('invitMenuTop').style.textShadow = 'none';

	document.getElementById('analyMenuTop').style.color = '#b5b5b5';
	document.getElementById('analyMenuTop').style.textShadow = 'none';


	document.getElementById('LocaSpace').style.display = 'flex';
	document.getElementById('EventSpace').style.display = 'none';
	document.getElementById('inviSpace').style.display = 'none';
	document.getElementById('analySpace').style.display = 'none';
}

function eventMB() {
	document.getElementById('locaMenuTop').style.color = '#b5b5b5';
	document.getElementById('locaMenuTop').style.textShadow = 'none';

	document.getElementById('eventMenuTop').style.color = 'white';
	document.getElementById('eventMenuTop').style.textShadow = '0px 0px 12px';

	document.getElementById('invitMenuTop').style.color = '#b5b5b5';
	document.getElementById('invitMenuTop').style.textShadow = 'none';

	document.getElementById('analyMenuTop').style.color = '#b5b5b5';
	document.getElementById('analyMenuTop').style.textShadow = 'none';


	document.getElementById('LocaSpace').style.display = 'none';
	document.getElementById('EventSpace').style.display = 'grid';
	document.getElementById('inviSpace').style.display = 'none';
	document.getElementById('analySpace').style.display = 'none';
}


function invitMB() {
	document.getElementById('locaMenuTop').style.color = '#b5b5b5';
	document.getElementById('locaMenuTop').style.textShadow = 'none';

	document.getElementById('eventMenuTop').style.color = '#b5b5b5';
	document.getElementById('eventMenuTop').style.textShadow = 'none';

	document.getElementById('invitMenuTop').style.color = 'white';
	document.getElementById('invitMenuTop').style.textShadow = '0px 0px 12px';

	document.getElementById('analyMenuTop').style.color = '#b5b5b5';
	document.getElementById('analyMenuTop').style.textShadow = 'none';


	document.getElementById('LocaSpace').style.display = 'none';
	document.getElementById('EventSpace').style.display = 'none';
	document.getElementById('inviSpace').style.display = 'grid';
	document.getElementById('analySpace').style.display = 'none';
}

function analyMB() {
	document.getElementById('locaMenuTop').style.color = '#b5b5b5';
	document.getElementById('locaMenuTop').style.textShadow = 'none';

	document.getElementById('eventMenuTop').style.color = '#b5b5b5';
	document.getElementById('eventMenuTop').style.textShadow = 'none';

	document.getElementById('invitMenuTop').style.color = '#b5b5b5';
	document.getElementById('invitMenuTop').style.textShadow = 'none';

	document.getElementById('analyMenuTop').style.color = 'white';
	document.getElementById('analyMenuTop').style.textShadow = '0px 0px 12px';


	document.getElementById('LocaSpace').style.display = 'none';
	document.getElementById('EventSpace').style.display = 'none';
	document.getElementById('inviSpace').style.display = 'none';
	document.getElementById('analySpace').style.display = 'flex';
}

var px = true;

function fullPlaceBox(){
//	if (px == true){
	document.getElementById('placeIn').style.height ='100%';
	document.getElementById('placeIn').style.width = '100%';
	document.getElementById('fullPlace').innerHTML ='-';
	document.getElementById('fullPlace').style.fontSize ='42px';
		document.getElementById('navMenuPlace').style.marginTop = '0';
//		px = false;
//	}
//	else if (px == false){
//		document.getElementById('placeIn').style.height ='90%';
//	document.getElementById('placeIn').style.width = '84%';
//	document.getElementById('fullPlace').innerHTML ='O';
//	document.getElementById('fullPlace').style.fontSize ='27px';
//		document.getElementById('navMenuPlace').style.marginTop = '6px';
//		px = true;
//	}
	
}

