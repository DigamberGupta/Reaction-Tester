

		function colorChange (){

			var letters = "0123456789ABCDEF".split('');

			var color="#";
			for (var i=0;i<6 ;i++){

			color +=letters[Math.floor(Math.random()*16)];
			}

			
			return color;
		}
		
		function makeShapeAppear () {
			var top = Math.random()*400 ; 
			var left = Math.random()*400 ;
			var width = (Math.random()*100)+50;
			if(Math.random()>0.5){

				document.getElementById('shape').style.borderRadius="50%";
			} else {
				document.getElementById('shape').style.borderRadius="0";
			}

			document.getElementById('shape').style.top =top +"px";

			document.getElementById('shape').style.left =left +"px";

			document.getElementById('shape').style.width =width +"px";

			document.getElementById('shape').style.height =width +"px";

			document.getElementById('shape').style.backgroundColor=colorChange();

			document.getElementById('shape').style.display="block";

			startTime = new Date().getTime();

	 	}	

	 	function appearAfterDelay() {
	 		setTimeout(makeShapeAppear,(Math.random()*2000));

	 	}

	 	appearAfterDelay();
		var startTime=new Date().getTime();

		document.getElementById('shape').onclick = function () {

		document.getElementById('shape').style.display="none";

		var endTime= new Date() .getTime();

		var timeTake=  (endTime - startTime ) /1000  ; 

		document.getElementById("your-time").innerHTML=timeTake + "s";
		
		appearAfterDelay();




	}
