function validate(){
	var name = StringUtil.method();
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
		console.log("DADDSADAADASD MUNGO!!!!!!!!!!!!!!!!!")
		document.getElementById("bgimg").style.backgroundImage = "url("+imgs[i]+")";
		$("#bgimg").fadeIn(200);
	});
	setTimeout(changeImage, 10000);
 }

 
//document.body.style.backgroundImage = "url("+img[i]+")";

 