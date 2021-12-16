function myexplorer() {
    var explorer = window.navigator.userAgent;
    if (explorer.indexOf("QQBrowser") >= 0 || explorer.indexOf("QQ") >= 0) {
        return "qq";
    } else if (explorer.indexOf("Safari") >= 0 && explorer.indexOf("MetaSr") >= 0) {
        return "sg";
    } else if (!!window.ActiveXObject || "ActiveXObject" in window) {//IE
        return "msie"
    } else {//非IE
        if (explorer.indexOf("LBBROWSER") >= 0) {
            return "LBBROWSER";
        } else if (explorer.indexOf("360ee") >= 0) {
            return  "360极速浏览器";
        } else if (explorer.indexOf("360se") >= 0) {
            return  "360安全浏览器";
        } else if (explorer.indexOf("se") >= 0) {
            return  "搜狗浏览器";
        } else if (explorer.indexOf("aoyou") >= 0) {
            return  "aoyou";
        } else if (explorer.indexOf("qqbrowser") >= 0) {
            return  "qqbrowser";
        } else if (explorer.indexOf("baidu") >= 0) {
            return  "baidu";
        } else if (explorer.indexOf("Firefox") >= 0) {
            return  "Firefox";
        } else if (explorer.indexOf("Maxthon") >= 0) {
            return  "Maxthon";
        } else if (explorer.indexOf("Chrome") >= 0) {
            return  "Chrome";
        } else if (explorer.indexOf("Opera") >= 0) {
            return  "Opera";
        } else if (explorer.indexOf("TheWorld") >= 0) {
            return  "TheWorld";
        } else if (explorer.indexOf("Safari") >= 0) {
            return  "Safari";

        } else {
            return  "Other";
        }
    }
}
