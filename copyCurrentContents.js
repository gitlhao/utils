/**
 * 复制当前选中元素中的内容
 * @param element 当前选中元素
 * 字符串类型：[#xxx=>id,.xxx=>class,xxx=>tag]
 * return 返回数据类型[ flag(boolean) => 复制是否成功标识, msg(string) => 错误信息]
 */
function clickToCopy(element){
    let copyRange;
    if(element.indexOf("#") >=0){
        element = element.substring(element.indexOf("#")+1,element.length);
        copyRange = document.getElementById(element);
    }else if(element.indexOf(".") >=0){
        element = element.substring(element.indexOf(".")+1,element.length);
        copyRange = document.getElementsByClassName(element);
    }else{
        copyRange = document.getElementsByTagName(element);
    }

    let res = {};
    try{
        let range = document.createRange();
        let selection = window.getSelection();
        range.selectNode(copyRange);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        res["flag"] = true;
    }catch (e) {
        res["flag"] = false;
        res["msg"] = "copyCurrentContent.js ==>> " + e;
    }
    return res;
}
