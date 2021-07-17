
// Author : https://github.com/func16/
// Website : https://func16.github.io/

var b3encode=function(text,n,w){
	if(!text){
		return "";
	}

	var escapeSequence=function(c){
	    var cc=c.charCodeAt(0);
	    if(cc<256){
	      return '\\'+cc.toString(8);
	    }else{
	      var cc16=cc.toString(16);
	      return '\\u'+('0000'+cc16).substring(cc16.length);  
	    }
	}

	var randomString=function(length) {
	  	var str = "饿俄娥蛾峨哦涐锇珴皒睋誐騀鋨餓";
	  	var result = "";
	  	for (var i = length; i > 0; --i){
			result += str[Math.floor(Math.random() * str.length)];
	  	}
	  	return result;
	}

	var randomInt=function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    var stringEscape=function(str){
		var result="";
		var escapes={b:"\b",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v",zz1:"\\",zz2:"\"",zz3:"\'"};
		for(var i in escapes){
			if(str.charAt(0)==escapes[i]){
				if(i=="zz1"){
					result+="\\\\"
				}else if(i=="zz2"){
					result+="\\\""
				}else if(i=="zz3"){
					result+="\\\'"
				}else{
					result+="\\"+i;
				}
				
			}

			
		}
		return result || str.charAt(0);
	}

	n=n || 5;// String length
	w=w || 20;// Variable name length
	var m="";// Code string
	var a=[];// Variable list
	var d="";// Last eval code

	for(var i=0;i<text.length;i++){
		var e=(i-(i%n))/n;// Increase by 1 when it reaches 5
		a[e]=a[e] || {}
		a[e].value=a[e].value || "";
		a[e].value+=stringEscape(text.charAt(i));
		a[e].name=a[e].name || "";
		a[e].name=randomString(randomInt(w,w+10));
	}

	for(var i in a){
		m+=a[i].name+"=\""+(a[i].value)+"\";";// Variable define
		d+=a[i].name+"+";
	}
	
	var obfus=[
		"eval(##);"
	];

	d=obfus[0].replace("##",d+"\"\"");
	m+=d;

	return m;
}
