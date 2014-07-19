(function($){
	$.fn.placeholder=function(option){
	  
	  	var defaults={			
			isFoucsShow: 0
		};

		$.extend(defaults,option);

		var inpObjs = this;
		var attrName = "placeholder";
		var isFoucsShow = defaults.isFoucsShow;

		function init(){
			var isPlaceholder = 'placeholder' in document.createElement('input');
			
			if(isPlaceholder && isFoucsShow){
				return true;
			}
			//用javascript创建一个类名
			createClass();

			inpObjs.each(function(index, obj){
				var inpObj = $(obj);
				setPlaceHolder(inpObj);
			});

			inpObjs.focus(function(){
				var inpObj = $(this);				
				if(!isEmpty(inpObj)){
					return false;
				}
				if(!isFoucsShow){
					removePlaceHolder(inpObj);						
				}else{
					setPosToFirst(inpObj);
				}
			});

			inpObjs.blur(function(){
				var inpObj = $(this);
				if(isEmpty(inpObj)){
					setPlaceHolder(inpObj);
				}
			});

			inpObjs.keydown(function(){
				if(!isFoucsShow) return true;				
				var inpObj = $(this); 
				if(isEmpty(inpObj)){
					removePlaceHolder(inpObj);
				};
			});			
			inpObjs.keyup(function(){
				if(!isFoucsShow) return true;
				var inpObj = $(this); 
				if(isEmpty(inpObj)){
					setPlaceHolder(inpObj);
					setPosToFirst(inpObj);
				};
			});

		};	

		function setPlaceHolder(inpObj){
			var mess = inpObj.attr(attrName);			
			inpObj.val(mess);
			inpObj.addClass("placeholder");			
		}

		function removePlaceHolder(inpObj){
			inpObj.val("");
			inpObj.removeClass("placeholder");
		}

		function createClass(){
			var cssStr = ".placeholder{color:#AAA}";
			if(document.all){
				// alert("23"); 				
				var styleObj = document.createStyleSheet(cssStr);
				styleObj.addRule(".placeholder",'color:#AAA') 
			}else{ 
				// alert("33"); 				
				var style = document.createElement('style'); 
				style.type = 'text/css'; 
				style.innerHTML = cssStr;
				document.getElementsByTagName('HEAD').item(0).appendChild(style); 
			} 
		} 

		function isEmpty(inpObj){
			if(inpObj.val().length && inpObj.val() != inpObj.attr(attrName)){
				return false;
			}
			return true;
		}

		//设置光标的位置
		function setPosToFirst(inpObj){
			inpObj = inpObj[0];
			var rt = inpObj.createTextRange(); 
			rt.collapse(); 
			rt.select();//光标置最前 
		}

		init();
	}
})(jQuery);