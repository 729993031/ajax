/**
 * Created by Administrator on 2016/5/14.
 */
function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open("GET", "example.txt", true);//第三个参数指定是否以异步方式发送和处理
        request.onreadystatechange = function () //在服务器给对象送回响应时执行
        {
            if (request.readyState == 4) //如果交互完成
             {
                alert("Response Received")
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
    } else {
        alert('Sorry,your browser doesn\'t support XMLHttpRequest');
    }
    alert("Function Done")
}
addLoadEvent(getNewContent);