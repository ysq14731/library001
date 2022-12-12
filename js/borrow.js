// window.addEventListener('load', function() {
// 	$(document).ready(function() {
// 		$("a").click(function() {
// 			$("input").attr("value", "");
// 		});
// 	});

// 	$(function() {
// 		function getSongsList() {
// 			$.post('http://47.96.26.56:8000/red/book/getAll', function(res) {
// 				var rows = []
// 				$.each(res.data, function(i, item) {
// 					rows.push('<tr><td>' + item.id + '</td><td>' + item.name +
// 						'</td><td>' +item.author + '</td><td>' + item.isbn + '</td><td>' + item
// 						.publisher + '</td></tr>' + item.classifyID + '</td></tr>' +
// 						item
// 						.price + '</td></tr>' + item.stock + '</td></tr>')
// 				})
// 				console.log(res) 
// 				$('#tb').empty().append(rows.join(''))

// 			})
// 		}
// 		getSongsList()
// 	})
	
// })


window.onload = function () {  //页面初始化
   // var b = document.getElementsByTagName("input")[0];

      var url = "http://47.96.26.56:8000/red/book/getAll"; //设置查询字符串
       var xhr = new XMLHttpRequest();  //实例化XMLHttpRequest 对象
      xhr.open("POST", url, false);  //建立连接，要求同步响应
      xhr.setRequestHeader("token", "eyJUeXBlIjoiSnd0IiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJzdHVOdW1iZXIiOiIyMTU3MDExMTEiLCJhdWQiOiJBUFAiLCJwYXNzd29yZCI6IlpoaDExNTYzNyIsImlzcyI6IlNlcnZpY2UiLCJleHAiOjE2NzA3NzE5MjQsImlhdCI6MTY3MDY4NTUyNH0.pp12viJaLNecFtaU2-M7RyYOvdS40w4xpW_KjBx-mno")
      xhr.send(null);  //发送请求
      // console.log(xhr.response);  //接收数据
      var json=JSON.parse(xhr.response);
      console.log(json)
   // console.log()

      var rows = []
      $.each(json.data.allBook, function(i, item) {
         rows.push('<tr><td>' + item.id + '</td><td>' + item.name +'</td><td>' +item.author + '</td><td>' + item.isbn + '</td><td>' + item.publisher + '</td><td>' + item.classifyID + '</td><td>' +item.price + '</td><td>' + item.stock + '<tr><td>')
      })
      // console.log(xhr.response)
      $('#tb').empty().append(rows.join(''))

}