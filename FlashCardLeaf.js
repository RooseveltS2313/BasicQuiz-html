//FlashCardLeaf.js
//Initializing arrays
	
	// all copy image address link here, All jpg for ease of application 20
	var leafPictures = [
		"https://bouldertreecare.com/images/apple-leaf-150x150.jpg",
		"https://bouldertreecare.com/images/Green-Ash-Fraxinus-pennsylvanica-Leaf-150x150.jpg",
		"https://bouldertreecare.com/images/quaking-aspen-leaf-150x150.jpg",
		"https://bouldertreecare.com/images/Ohio-Buckeye-Leaf-150x150.jpg",
		"https://bouldertreecare.com/images/Black-Walnut-Julans-nigra-Leaves--150x150.jpg",
				
		"https://bouldertreecare.com/images/Plains-Cottonwood-Populus-sargentii-Leaves--150x150.jpg",
		"https://bouldertreecare.com/images/Siberian-elm-Ulmus-pumila-Unequal-Leaf-Margin-Base-150x150.jpg",
		"https://bouldertreecare.com/images/European-Mountainash-Sorbus-aucuparia-Leaves-150x150.jpg",
		"https://bouldertreecare.com/images/weeping-willow-leaves--150x150.jpg",
		"https://bouldertreecare.com/images/Goldenraintree-pinnate-leaf-150x150.jpg",
				
		"https://bouldertreecare.com/images/common-lilac-leaf-150x150.jpg",
		"https://bouldertreecare.com/images/Littleleaf-Linden-Leaf-150x150.jpg",
		"https://bouldertreecare.com/images/Black-Locust-Robinia-pseudoacacia-Bark-and-Leaves--150x150.jpg",
		"https://bouldertreecare.com/images/silver-maple-leaf-150x150.jpg",
		"https://bouldertreecare.com/images/sugar-maple-leaf-red-150x150.jpg",
				
		"https://bouldertreecare.com/images/mulberry-leaves-150x150.jpg",
		"https://bouldertreecare.com/images/pin-oak-Quercus-palustris-Leaf-and-Bark-150x150.jpg",
		"https://bouldertreecare.com/images/pear-bartlett-leaf-id-150x150.jpg",
		"https://bouldertreecare.com/images/douglas-fir-needles-150x150.jpg",
		"https://bouldertreecare.com/images/Ponderosa-Pine-Pinus-ponderosa-Needles--150x150.jpg"
		];
				
	var answers = [
		"apple", "green-ash", "aspen", "buckeye", "black-walnut", 
		"cottonwood", "siberian elm", "mountain-ash", "weeping willow", "goldenraintree",
		"common lilac", "linden leaf", "black-locust", "silver-maple", "sugar-maple",
		"mulberry", "pin-oak", "pear-bartlett", "douglas-fir", "ponderosa-pine"
		];
			
// Duplicate Wrong answers are possible
			
	var questionIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19];
	// This create an array with only 1 slot to hold another value, the ElementId of the current Image
	var currentImage = new Array(1);
	var questionNumber = 0;
	var score = 0;
	var right = 3;
	var cheater = 0;
	

	var map = new Array(4);

	
	//This runs the document gets and then stops at the button
	function start()
	{							
	shuffle(questionIndex);
	//Print shuffled list at bottom of html page
	document.getElementById("qList2").innerHTML = questionIndex;
	
		var length = currentImage.length;		
		for ( var i = 0; i < length; ++i)
		{
			currentImage[i] = document.getElementById("currentQ");
		}	
		setPage();
		
		var length2 = map.length;
		for(var k = 0; k < length2; ++k)
		{
			map[k] = document.getElementById("choice" + k);
		}
		setButton();
			
	var button = document.getElementById( "nextQuestion" );
		button.addEventListener( "click", nextQuestion, false );
					
	var button = document.getElementById( "showAnswer" );
		button.addEventListener( "click", rightChoice, false );
					
	//	Only for question checking			
	var button = document.getElementById( "choice0" );
		button.addEventListener( "click", answer0, false );
	var button = document.getElementById( "choice1" );
		button.addEventListener( "click", answer1, false );
	var button = document.getElementById( "choice2" );
		button.addEventListener( "click", answer2, false );
	var button = document.getElementById( "choice3" );
		button.addEventListener( "click", answer3, false );
					
				} // end*/
	function nextQuestion()
	{
		questionNumber++;
		document.getElementById("cQuest").innerHTML = ("Current question: " + (questionNumber + 1));
		document.getElementById("rChoice").innerHTML = ("");
		document.getElementById("cScore").innerHTML = ("Score: " + score + "/20");
		document.getElementById("success").innerHTML = ("");
		document.getElementById("wrong").innerHTML = ("");
		setPage();
		setButton();
		cheater = 0;
			
		if( questionNumber >= 20)
		{
			document.getElementById("cQuest").innerHTML = ("Finished");
			document.getElementById("cScore").innerHTML = ("Final Score: " + score + "/20");
		}
	}
	
	function rightChoice()
	{
		var i = questionIndex[questionNumber];
		document.getElementById("rChoice").innerHTML = answers[i];
	}
	
	function setPage()
	{
		var i = questionIndex[questionNumber];
		currentImage[0].setAttribute( "src", leafPictures[i]);
		currentImage[0].setAttribute( "alt", answers[i] + "leaf");		
	}
	
	function setButton()
	{
	// takes 4 random values out of the 20, put them in the choices
		
		shuffleChoice();
		
		right = Math.floor( Math.random() * 4);
		var j = questionIndex[questionNumber];
		map[right].setAttribute("value", answers[j]);
	}	
	
	function shuffleChoice()
	{
		length = map.length;
		var j = questionIndex[questionNumber];
		for( var i = 0; i < length; ++i)
		{
		 // My inexperiecned way of checking for duplicates (only applies to right answer)
		   number = Math.floor( Math.random() * questionIndex.length );
		   
		   if (number == j)
		   {
			   number = number++;
			   if( number < 19 && j != 0)
			   {
				   number = 0;
			   }
			   else
				   number = 3;
		   }
		   map[i].setAttribute( "value", answers[number]);		   
		}
	}
	function answer0()
	{
		var i = 0;
		check(i);
	}
	function answer1()
	{
		var i = 1;
		check(i);
	}
	function answer2()
	{
		var i = 2;
		check(i);
	}
	function answer3()
	{
		var i = 3;
		check(i);
	}
	
	function check(num)
	{
		var j = questionIndex[questionNumber];
		var holder = document.getElementById( "choice"+num );
		var choice = holder.getAttribute("value");
		if (choice == answers[j])
		{
			score = score + 1;
			document.getElementById("cScore").innerHTML = ("Score: " + score + "/20");
			document.getElementById("success").innerHTML = ("You got it");
			document.getElementById("wrong").innerHTML = ("");
			cheater = cheater + 1;
		}
		if (choice != answers[j])
		{
			document.getElementById("wrong").innerHTML = ("You can keep trying.");
		}
		
		// You can lose multiple points if you click the right answers twice and then alternate with a right and wrong
		if( cheater > 1)
		{
			score = score - 1;
			document.getElementById("cScore").innerHTML = ("Don't you feel clever...");
		}
	}
	
	function shuffle(arr)
	{
		for(var i = 0; i < arr.length; i++)
		{
			var j = Math.floor(Math.random()*arr.length);
			var temp = arr[i]; // o   i   j
			arr[i] = arr[j]; 
			arr[j] = temp;	
		}
	}		
	
	//Begin JavaScript stuff
window.addEventListener( "load", start, false );