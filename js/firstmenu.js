//全局变量
		var num = 1;
		
		//轮播图
		var txtlis = document.getElementsByClassName("litxt");
		for(var i = 0; i < txtlis.length; i++) {
			txtlis[i].onclick = function() {
				//获取当前鼠标选中的值
				num = this.getAttribute("index");
				for(var k =0;k<txtlis.length;k++){
					txtlis[k].className = "litxt";
				}
				this.className="litxt current";
				var arr = document.getElementsByClassName("ulimg");
				var ulimg = arr[0];
				ulimg.style.left = (-810* num) + "px";
			};
		}