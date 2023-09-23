function loadJSON() {
    var jsonUrl = 'downloadwhere_pc.json?timestamp' + new Date().getTime();
    var request = new XMLHttpRequest();
    request.open("get",jsonUrl);
    request.send(null);
    request.onload = function (){
        if(request.status == 200){
            var json = JSON.parse(request.responseText);
            var ul_html = ""
            for (list_i in json['list']){
                ul_html += `<li><a href="#" class="header">${list_i}</a> </li>\n`;
                listobj = json['list'][list_i];
                for (let i = 0 ;i < listobj.length;i++){
                    data = listobj[i];
                    if (data['t'] != "")
                        li = `<li><a href="${data['l']}">${data['n']} - ${data['t']}</a> </li>\n`;
                    else
                        li = `<li><a href="${data['l']}">${data['n']}</a> </li>\n`;
                    ul_html += li;
                }
            }
            document.getElementById('list').innerHTML = ul_html;
        }
    }
}