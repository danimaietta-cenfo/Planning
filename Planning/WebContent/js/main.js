var app = angular.module('app', []);

app.controller('ctrl1', function($scope){
	$scope.name = "perro";
	
	function validate(){
	StringUtil.method({
		callback:function(data){
		console.log(data);
		}
	});
}
 
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
 
});









 