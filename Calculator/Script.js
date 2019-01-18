var cart = 0;
var OppNum = 0;
var initialP = 0;
var Total = 0;
var Num1 =  0;
var OpWindow = document.getElementById('total');

function Place (value){
	
	if(initialP == 0){
		initialP = 1;
		cart = value;
		S = cart.toString();
		cart = S;
		OpWindow.innerHTML = S;
	}else{
		S = value;
		S = S.toString();
		OpWindow.innerHTML += S;
		cart += S;
	}
}
function Opperator (OpName){
	
	if(OpName === 'NnP'){
		cart = Number(cart);
		cart = 0 - cart;
		OpWindow.innerHTML = cart;
	}
	if(OpName === 'Divide' && OppNum == 0){
		OppNum = 1;
		cart = Number(cart);
		Num1 = cart;
		OpWindow.innerHTML += '/' ;
		cart = 0;
	}
	if(OpName === 'Plus' && OppNum == 0){
		OppNum = 2;
		cart = Number(cart);
	    Num1 =  cart;
		OpWindow.innerHTML += '+' ;
		cart = 0;
	}
	if(OpName === 'Minus' && OppNum == 0){
		OppNum = 3;
		cart = Number(cart);
		Num1 =  cart;
		OpWindow.innerHTML += '-' ;
		cart = 0;
	}
	if(OpName === 'Mult' && OppNum == 0){
		OppNum = 4;
		cart = Number(cart);
		Num1 =  cart;
		OpWindow.innerHTML += 'X' ;
		cart = 0;
	}
	if(OpName === 'Clear'){
		OppNum = 0;
		OpWindow.innerHTML = '0';
		cart = 0;
	}
	if(OpName === 'Dpoint'){
		OpWindow.innerHTML += '.';
		cart += '.';
		cart = 1;
	}
	if(OpName === 'Equal' && OppNum >= 1){
		cart = Number(cart);
		var Num2 = cart;
		if(OppNum == 1){
			Total = Num1/Num2;
			OpWindow.innerHTML = Total;
		}
		if(OppNum == 2){
			Total = Num1+Num2;
			OpWindow.innerHTML = Total;
		}
		if(OppNum == 3){
			Total = Num1-Num2;
			OpWindow.innerHTML = Total;
		}
		if(OppNum == 4){
			Total = Num1*Num2;
			OpWindow.innerHTML = Total;
		}
		cart = Total;
		OppNum = 0;
		initialP = 0;
	}
	
	
}

