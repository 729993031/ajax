/**
 * Created by Administrator on 2016/5/14.
 */
function getHTTPObject() {
    if (typeof XMLHttpRequest=="undefined")//检测XMLHttpRequest如果不存在继续返回false货创建新的HttpRequest
        XMLHttpRequest=function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }catch (e){}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }catch (e){}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            }catch (e){}
        }
    return new XMLHttpRequest();
}