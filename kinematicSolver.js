function solveKinematics() {
			
var x = document.getElementById("displace").value.toString().toLowerCase();
var v0 = document.getElementById("ivel").value.toString().toLowerCase();
var v = document.getElementById("fvel").value.toString().toLowerCase();
var a = document.getElementById("accel").value.toString().toLowerCase();
var t = document.getElementById("time").value.toString().toLowerCase();

console.log("Inside of solveKinematics()");

   if( x=="x" && v0!="x" && v!="x" && a!="x" && t!="x") {
	//Solve for only displacement
	console.log("Inside of solve only for displacement if statement");
	var dis = 0.0;
	var vel0 = parseFloat(v0);
	var vel = parseFloat(v);
	var accel = parseFloat(a);
	var time = parseFloat(t);
	dis = vel0 * time + 0.5 * accel * (time * time);
	return "dis: " + dis + "";
    }
    else if( x!="x" && v0=="x" && v!="x" && a!="x" && t!="x") {
	//Solve for only initial velocity
	var dis = parseFloat(x);
	var vel0 = 0.0;
	var vel = parseFloat(v);
	var accel = parseFloat(a);
	var time = parseFloat(t);
	vel0 = vel - accel * time;
	return "vel0: " + vel0 + "";
   } 
    else if( x!="x" && v0!="x" && v=="x" && a!="x" && t!="x") {
	//Solve for only final velocity
	var dis = parseFloat(x);
	var vel0 = parseFloat(v0);
	var vel = 0.0;
	var accel = parseFloat(a);
	var time = parseFloat(t);
	vel = vel0 + accel * time;
	return "velf: " + vel + "";
    }
    else if( x!="x" && v0!="x" && v!="x" && a=="x" && t!="x") {
	//Solve for only acceleration
	var dis = parseFloat(x);
	var vel0 = parseFloat(v0);
	var vel = parseFloat(v);
	var accel = 0.0;
	var time = parseFloat(t);
	accel = (vel - vel0)/time;
	return "accel: " + accel + "";
    }
    else if( x!="x" && v0!="x" && v!="x" && a!="x" && t=="x") {
	//Solve for only time
	var dis = parseFloat(x);
	var vel0 = parseFloat(v0);
	var vel = parseFloat(v);
	var accel = parseFloat(a);
	var time = 0.0;
	time = (vel - vel0)/accel;
	return "time: " + time + "";
    }
    else if( x=="x" && v0=="x" && v!="x" && a!="x" && t!="x") {
	//Solve for displacement and initial velocity
	var dis = 0.0;
	var vel0 = 0.0;
	var vel = parseFloat(v);
	var accel = parseFloat(a);
	var time = parseFloat(t);
	vel0 = vel - accel * time;
	dis = vel0 * time + 0.5 * accel * (time * time);
	return "dis: " + dis + " vel0: " + vel0 + "";
    }
    else if( x=="x" && v0!="x" && v=="x" && a!="x" && t!="x") {
	//Solve for displacement and final velocity
	var dis = 0.0;
	var vel0 = parseFloat(v0);
	var vel = 0.0;
	var accel = parseFloat(a);
	var time = parseFloat(t);
	dis = vel0 * time + 0.5 * accel * (time * time);
	vel = vel0 + accel * time;
	return "dis: " + dis + " velf: " + vel + "";
    }
    else if( x=="x" && v0!="x" && v!="x" && a=="x" && t!="x") {
	//Solve for displacement and acceleration
	var dis = 0.0;
	var vel0 = parseFloat(v0);
	var vel = parseFloat(v);
	var accel = 0.0;
	var time = parseFloat(t);
	accel = (vel - vel0) / time;
	dis = vel0 * time + 0.5 * accel * (time * time);
	return "dis: " + dis + " accel: " + accel + "";
    }
    else if( x=="x" && v0!="x" && v!="x" && a!="x" && t=="x") {
	//Solve for displacement and time
	var dis = 0.0;
	var vel0 = parseFloat(v0);
	var vel = parseFloat(v);
	var accel = parseFloat(a);
	var time = 0.0;
	time = (vel - vel0) / accel;
	dis = vel0 * time + 0.5 * accel * (time * time);
	return "dis: " + dis + " time: " + time + "";
    }
    else if( x!="x" && v0=="x" && v=="x" && a!="x" && t!="x") {
	//Solve for initial velocity and final velocity
	var dis = parseFloat(x);
	var vel0 = 0.0;
	var vel = 0.0;
	var accel = parseFloat(a);
	var time = parseFloat(t);
	vel0 = (dis - 0.5 * accel * (time * time))/time;
	vel = vel0 + accel * time;
	return "vel0: " + vel0 + " velf: " + vel + "";
    }
    else if( x!="x" && v0=="x" && v!="x" && a=="x" && t!="x") {
	//Solve for initial velocity and acceleration
	var dis = parseFloat(x);
	var vel0 = 0.0;
	var vel = parseFloat(v);
	var accel = 0.0;
	var time = parseFloat(t);
	accel = (dis - vel * time) / (0.5 * (time * time) - (time * time));
	vel0 = vel - accel * time;
	return "vel0: " + vel0 + " accel: " + accel + "";
    }
    else if( x!="x" && v0=="x" && v!="x" && a!="x" && t=="x") {
	//Solve for initial velocity and time
	var dis = parseFloat(x);
	var vel0 = 0.0;
	var vel = parseFloat(v);
	var accel = parseFloat(a);
	var time = 0.0;
	vel0 = Math.sqrt((vel * vel) - 2 * accel * dis);
	time = (vel - vel0)/accel;
	return "vel0: " + vel0 + " time: " + time + "";
    }
    else if( x!="x" && v0!="x" && v=="x" && a=="x" && t!="x") {
	//Solve for final velocity and acceleration
	var dis = parseFloat(x);
	var vel0 = parseFloat(v0);
	var vel = 0.0;
	var accel = 0.0;
	var time = parseFloat(t);
	accel = (dis - vel0 * time) / (2 * (time * time));
	vel = vel0 + accel * time;
	return "velf: " + vel + " accel: " + accel + "";
    }
    else if( x!="x" && v0!="x" && v=="x" && a!="x" && t=="x") {
	//Solve for final velocity and time
	var dis = parseFloat(x);
	var vel0 = parseFloat(v0);
	var vel = 0.0;
	var accel = parseFloat(a);
	var time = 0.0;
	vel = Math.sqrt((vel0 * vel0) + 2 * accel * dis);
	time = (vel - vel0) / accel;
	return "velf: " + vel + " time: " + time + "";
    }
    else if( x!="x" && v0!="x" && v!="x" && a=="x" && t=="x") {
	//Solve for acceleration and time
	var dis = parseFloat(x);
	var vel0 = parseFloat(v0);
	var vel = parseFloat(v);
	var accel = 0.0;
	var time = 0.0;
	accel = ((vel * vel) - (vel0 * vel0)) / (2 * dis);
	time = (vel - vel0) / accel;
	return "accel: " + accel + " time: " + time + "";
    }
}

function clearAnswerFields() {
	document.getElementById("disp").innerHTML = "";
	document.getElementById("vel0p").innerHTML = "";
	document.getElementById("velfp").innerHTML = "";
	document.getElementById("accelp").innerHTML = "";
	document.getElementById("timep").innerHTML = "";
}

function kinematics() {
	clearAnswerFields();
	var ans = String(solveKinematics()); //solves kinematic
	var arr = ans.split(" "); //splits answer sentence by spaces
	
	var vel0sub = "0";
	
	var option = 0;
	
	
	if(arr.length == 2) {
		if( arr.includes("dis:") ) {
			document.getElementById("disp").innerHTML = "\u0394x = " + arr[1];
			option = 0;
		}
		
		if( arr.includes("vel0:") ) {
			document.getElementById("vel0p").innerHTML = "v" + vel0sub.sub() + " = " + arr[1];
			option = 1;
		}
		
		if( arr.includes("velf:") ) {
			 document.getElementById("velfp").innerHTML = "v = " + arr[1];
			 option = 2;
		}
		
		if( arr.includes("accel:") ) {
			document.getElementById("accelp").innerHTML = "a = " + arr[1];
			option = 3;
		}
		
		if( arr.includes("time:") ) {
			document.getElementById("timep").innerHTML = "t = " + arr[1];
			option = 4;
		}
	}
	else if(arr.length == 4) {
		if( arr[0] == "dis:" ) {
			if ( arr[2]== "vel0:" ) {
				document.getElementById("disp").innerHTML = "\u0394x = " + arr[1];
				document.getElementById("vel0p").innerHTML = "v" + vel0sub.sub() + " = " + arr[3];
				option = 5;
			}
			if ( arr[2]== "velf:" ) {
				console.log("Inside of printing time and velf");
				document.getElementById("disp").innerHTML = "\u0394x = " + arr[1];
				document.getElementById("velfp").innerHTML = "v = " + arr[3];
				option = 6;
			}
			if ( arr[2]== "accel:" ) {
				document.getElementById("disp").innerHTML = "\u0394x = " + arr[1];
				document.getElementById("accelp").innerHTML = "a = " + arr[3];
				option = 7;
			}
			if ( arr[2]== "time:" ) {
				document.getElementById("disp").innerHTML = "\u0394x = " + arr[1];
				document.getElementById("timep").innerHTML = "t = " + arr[3];
				option = 8;
			}
		}
		
		if( arr[0] == "vel0:" ) {
			if ( arr[2]== "velf:" ) {
				document.getElementById("vel0p").innerHTML = "v" + vel0sub.sub() + " = " + arr[1];
				document.getElementById("velfp").innerHTML = "v = " + arr[3];
				option = 9;
			}
			if ( arr[2]== "accel:" ) {
				document.getElementById("vel0p").innerHTML = "v" + vel0sub.sub() + " = " + arr[1];
				document.getElementById("accelp").innerHTML = "a = " + arr[3];
				option = 10;
			}
			if ( arr[2]== "time:" ) {
				document.getElementById("vel0p").innerHTML = "v" + vel0sub.sub() + " = " + arr[1];
				document.getElementById("timep").innerHTML = "t = " + arr[3];
				option = 11;
			}
		}
		
		if( arr[0] == "velf:" ) {
			if ( arr[2]== "accel:" ) {
				document.getElementById("velfp").innerHTML = "v = " + arr[1];
				document.getElementById("accelp").innerHTML = "a = " + arr[3];
				option = 12;
			}
			if ( arr[2]== "time:" ) {
				document.getElementById("velfp").innerHTML = "v = " + arr[1];
				document.getElementById("timep").innerHTML = "t = " + arr[3];
				option = 13;
			}
		}
		
		if( arr[0] == "accel:" ) {
			if ( arr[2]== "time:" ) {
				document.getElementById("accelp").innerHTML = "a = " + arr[1];
				document.getElementById("timep").innerHTML = "t = " + arr[3];
				option = 14;
			}
		}
	}
}

/*function answerExplainer(var o) {
	var explain = "";
	if(o == 0) {
		explain = "When we know everything but displacement the only kinematic that we need is the second kinematic. All there is to do is directly plug in initial velocity, time, and acceleration."
	}
}*/
