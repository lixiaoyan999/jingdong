/* banner轮播图 */
	/*	1.初始化：css
		 * 第一张显示  opacity:0
		 * 其余：opacity:1
	2.获取元素：
		 * 图片 brtu1
		 * 大盒子 bright 1
		 * 轮播点 yuan1
		 * 左右按钮  1 1
	3.让图片自动播放
		 * 开启时间函数  * setInterval()
		 	* 控制当前显示图片的下标 now
			 * 遍历图片   显示完以后在拉回初始化状态
			 * 下标自增,now++	
	4.停止播放
		 鼠标移入    大盒子
		 clear
	 5.通过轮播点控制图片
	 	 得到每一个轮播点
	 	 	 * for  forEach
	 	 	 添加鼠标移入   on  只能添加一次
	 	 	 addEventListener('click',function)   添加多次   
	 6.左右切换
	 	 * 右箭头 now++
	 	 	 if(now == tu.length)   now = 0
	 	 * 左箭头  now--
	 	 	 if(now < 0) now = tu.length - 1		*/												 	 	 												
	let tu = document.querySelectorAll('.ban--tp');
	let yuan = document.querySelectorAll('.cyuan1');
	let ban_box = document.getElementsByClassName('c1')[0];
	let next = document.querySelector('.c2left');
	let pre = document.querySelector('.c2right');
	let now = 0;
	let t = setInterval(move,2000);
	function move(type){
		type = type || 'right';
		if(type == 'right'){
			now++;
			if(now == tu.length){
				now = 0;
			};
		}
		if(type == 'left'){
			now--;
			if (now < 0){
				now  = tu.length - 1;
			}
		}
		tu.forEach(function(ele,index){
			ele.style.opacity = 0;
			yuan[index].style.backgroundColor = '#838383';
		})
		tu[now].style.opacity = 1;
		yuan[now].style.backgroundColor = '#fff';
	}
	ban_box.onmouseover = function(){
		clearInterval(t);
	}
	ban_box.onmouseout = function(){
		t = setInterval(move,2000);
	}
	yuan.forEach(function(eled,index1){
		eled.addEventListener('click',function(){
			tu.forEach(function(ele,index){
			ele.style.opacity = 0;
			yuan[index].style.backgroundColor = '#838383';
			})
			tu[index1].style.opacity = 1;
			this.style.backgroundColor = '#fff';
			now = index1;
		})
	})
	next.onclick = function(){
		move('right');
	}
	pre.onclick = function(){
		move('left');
	}
/* bannerzi */
	// 1.初始化效果（css）
	// 	 * brzi display:none
	// 2.获取所有元素：
	// 	标题(aaa)：jd1
	// 	选项卡(brzi): brzi
	// 3.遍历jd1
	// 	jd1添加onmouseover事件
	// 		brzi: display none/block
	let aaa = document.getElementsByClassName('aaa');
	let brzi = document.getElementsByClassName('brzi');
	for(let i = 0;i < aaa.length;i++){
		aaa[i].onmouseover = function(){
			for(let j = 0;j < brzi.length;j++){
				brzi[j].classList.remove('brzi-active');
			}
			brzi[i].classList.add('brzi-active');		
		}
	}

/* 京东秒杀 */
	window.onload = function(){
		let bottom = document.querySelector('.jdmsb1');
		let btn = document.querySelectorAll('.ms');
		let lbtn = btn[0];
		let rbtn = btn[1];
		let widths = bottom.firstElementChild.offsetWidth;
		let rights = parseInt(getComputedStyle(bottom.firstElementChild,null).marginRight);
		let count = bottom.childElementCount;
		bottom.style.width = count * (widths + rights) + 'px';
		let num = 0;
		rbtn.onclick = function(){
			if(num == 3){
				// rbtn.className = 'btn-active';
				// lbtn.className = '';
				return;
			}
			num++;
			bottom.style.transform = `translateX(${-1000*num}px)`;
		}
		lbtn.onclick = function(){
			
			if(num == 0){
				// lbtn.className = 'btn-active';
				// rbtn.className = '';
				return;
			}
			num--;
			bottom.style.transform = `translateX(${-1000*num}px)`;
		}
	}