	// 获取原来图片
	var img = document.querySelector('.box');
	// 获取放大框
	var bigimg = document.querySelector('.changebox');
	// 获取要移动的框
	var move = document.querySelector('.move');

	var moveimg = document.querySelector('.sizemove');

	// 给图片添加移入事件
	img.onmouseover = function(){
		// 让内容显示
		bigimg.style.display = 'inline-block';
		move.style.display = 'block';
		// 获取当前鼠标位置
		document.onmousemove = function(ev){
			var x = ev.clientX;
			var y = ev.clientY;
			// 获取最大宽高
			var maxW = img.clientWidth;
			var maxH = img.clientHeight;
			// 获取移动的宽度
			var w = move.offsetWidth;
			// 获取移动的高度
			var h = move.offsetHeight;
			// 阴影跟着鼠标
			var t = y - h/2 - img.offsetTop;
			if (t<=0) t=0;
			if (y+w/2>=maxH) t = maxH - h;

			var l = x - w/2 - img.offsetLeft;
			if (l<=0) l=0;
			if (x+w/2>=maxW) l = maxW - w;
			// 设置位置
			move.style.top = t + 'px';
			move.style.left = l + 'px';
			moveimg.style.top = - t*6 + 'px';
			moveimg.style.left = - l*6 + 'px';
		}
	};
	img.onmouseout = function(){
		// 让内容不显示
		bigimg.style.display = 'none';
		move.style.display = 'none';
	}