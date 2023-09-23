function search_keyup(){
    // 声明变量
    var input, filter, ul, li, a, i;
    input = document.getElementById('search_input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('li');

    // 循环所有列表，查找匹配项
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        // if ((a.innerHTML.toUpperCase().indexOf(filter) > -1) && (a.className != "header")) {
        if ((a.innerHTML.toUpperCase().indexOf(filter) > -1)) {
            if(a.className != "header") li[i].style.display = "inline";
        } else {
            li[i].style.display = "none";
        }

        if (filter.length == 0){
            li[i].style.display = "inline";
        }
    }
}

function search_btn_click(){
    var search_context = document.getElementById('search_input').value;
    const url = new URL('https://cn.bing.com/search');
    url.searchParams.append("q",search_context);

    window.location.href = url.toString();
}