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
 
       var url = "http://47.96.26.56:8000/red/LUserVo/getInfoByToken"; //设置查询字符串
        var xhr = new XMLHttpRequest();  //实例化XMLHttpRequest 对象
       xhr.open("POST", url, false);  //建立连接，要求同步响应
       xhr.setRequestHeader("token", "eyJUeXBlIjoiSnd0IiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJzdHVOdW1iZXIiOiIyMTU3MDExMTEiLCJhdWQiOiJBUFAiLCJwYXNzd29yZCI6IlpoaDExNTYzNyIsImlzcyI6IlNlcnZpY2UiLCJleHAiOjE2NzA3NzE5MjQsImlhdCI6MTY3MDY4NTUyNH0.pp12viJaLNecFtaU2-M7RyYOvdS40w4xpW_KjBx-mno")
       xhr.send(null);  //发送请求
       // console.log(xhr.response);  //接收数据
       var json=JSON.parse(xhr.response);
       console.log(json);
    // console.log()
 
    //    var rows = []
    //    $.each(json.data.LUserVoInfo, function(i, item) {
    //       rows.push('<tr><td>' + item.username + '</td><td>' + item.stuNumber +'</td><td>' +item.gender + '</td><td>' + item.phoneNumber + '</td><td>' + item.cardID + '</td><td>' + item.borrowedNum + '</td><td>' +item.overdueNum + '</td><td>' + item.arrears + '<tr><td>')
    //    })
    //    // console.log(xhr.response)
    //    $('#tb').empty().append(rows.join(''))
       $('.info').append(('\xa0\xa0\xa0\xa0\xa0')+json.data.LUserVoInfo.username +('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0')+ json.data.LUserVoInfo.stuNumber+('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0')+ json.data.LUserVoInfo.gender+('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0')+ json.data.LUserVoInfo.phoneNumber+('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0')+ json.data.LUserVoInfo.cardID+('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0')+ json.data.LUserVoInfo.borrowedNum+('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0')+ json.data.LUserVoInfo.overdueNum+('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0')+ json.data.LUserVoInfo.arrears);
 }


　　

