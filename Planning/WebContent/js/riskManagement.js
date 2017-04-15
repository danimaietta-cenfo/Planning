'use strict';

angular.module('myApp.riskManagement', [])

.controller('riskManagementViewCtrl', ['$scope','$state',function($scope,$state) {

	$scope.risks = [{description: "example", probability: 0, impact: 0}];

	//Background config

	var imgs = ['images/office1.jpg',
	    'images/office2.jpg',
	    'images/office3.jpg',
	    'images/office4.jpg',
	    'images/office5.jpg'
	    ];

	var i = 1;
	document.getElementById("bgimg").style.backgroundImage = "url("+imgs[i]+")";
	setTimeout(changeImage, 10000);

	function changeImage(){
		i++;
		if(i === 4){
			i = 0;
		}
		$("#bgimg").fadeOut(200, function(){
			document.getElementById("bgimg").style.backgroundImage = "url("+imgs[i]+")";
			$("#bgimg").fadeIn(200);
		});
		setTimeout(changeImage, 10000);
	}

	// Edit Description

	var dindex; // description index
	$scope.editDescription = function(index){
		dindex = index;
	}

	$(function(){
	$('.editDescription').dblclick( function(){
		console.log("1> "+$scope.risks[dindex].description);
	    var text = $scope.risks[dindex].description;
	    $(this).html('<input type="text" value="'+text+'">').find('input').focus();
	}).keypress( function(e){
	    if(e.keyCode == 13){
	    	$scope.risks[dindex].description = $('input', this).val();
	    	text = $scope.risks[dindex].description;
	        $(this).html( text );
	        console.log("2> "+$scope.risks[dindex].description);
	    }
	});
	});

	// Edit Probability

	var pindex; // probability index
	$scope.editProbability = function(index){
		pindex = index;
		console.log(pindex);
	}

	$(function(){
	    $('.editProbability').dblclick( function(){
	    	var value = $scope.risks[pindex].probability;
	    	console.log("1> "+$scope.risks[pindex].probability);
	        $(this).html('<input type="number" value="'+value+'">').find('input').focus();
	    }).keypress( function(e){
	        if(e.keyCode == 13){
	        	$scope.risks[pindex].probability = $('input', this).val();
	        	value = $scope.risks[pindex].probability;
	            $(this).html( value );
	            console.log("2> "+$scope.risks[pindex].probability);
	        }
	    });
	});


	$scope.findByProject = function(){
		var riskManagement;
		RiskManagementDB.findByProject("project 4", function(data){
			riskManagement = data;
			fillList(data);
			//var number = Number(a.replace(/[^0-9\.]+/g,""));
		});
	}

	function fillList(data){
		console.log(data.risks[1]);
		var a = (data.risks.length/3);
		console.log(a);
		var j=0;
		for(i=0; i<a; i++){
			$scope.risks.description.push({description: data.risks[i]}); // 0  3  6
			$scope.risks.probability.push({probability: data.risks[j]}); // 1  4  7
			$scope.risks.impact.push({impact: data.risks[j]});
		}
 	  // 2  5  8
		console.log($scope.risks);
	}

	$scope.addRiskManagement = function(){
		RiskManagementDB.addRiskManagement();
	}

}]);
