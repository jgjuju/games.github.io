// 落地页的js
var ip = null;

//标识 是X约还是X聊
var mark = $("#markWord").val();

//标识 是否需要跳转
var notJump = $("#notJump").val();

//标识 刷新间隔（单位毫秒，为0表示不刷新）
var time = $("#time").val();
if (time == null || time == '' || time == undefined) {
    time = 3000;
}

$("#download_click").show();

var source = 1;
if (isAndroid) {
    source = 2;
}
if (isIOS) {
    source = 3;
}

var url = "";
var channel = window.location.search.split("channelNo=")[1];

channel = channel.split("&")[0];

var data1;

$.ajax({
    type: "post",
    url: Feng.ctxPath + '/getOssUrl?channelNo=' + channel,
    async: false,
    success: function (res) {
        url = res.data;

        try {
            var longitude = null;
            var latitude = null;

            data1 = {"ip": ip, "longitude": longitude, "latitude": latitude, "channelNo": channel, "source": source};
            // 浏览计数
            $.ajax({
                type: "post",
                url: Feng.ctxPath + '/sync/visit',
                data: JSON.stringify(data1),
                contentType: "application/json",
                success: function () {
                },
                error: function () {
                    console.log("错误");
                }
            });
        } catch (e) {
        }
    }
});


function down() {

    // 下载计数
    $.ajax({
        type: "post",
        url: Feng.ctxPath + '/sync/download',
        contentType: "application/json",
        data: JSON.stringify(data1),
        success: function () {
        }
    });

    var down_url = '';
    if (isAndroid) {
        down_url = url;
    } else if (isIOS) {

        // 转地址指定到appStore
        if (mark == 'xchart') {

            down_url = "https://itunes.apple.com/cn/app/id1447195636";
        }else if(mark == 'love'){

            down_url = "https://itunes.apple.com/cn/app/id1442182057";
        }
    }

    //如果是微信or连信，跳出浏览器选择(因为微信内无法下载)
    if (isWechat || isPalmchat) {

        location.href = Feng.ctxPath + "/jump1?again=1&url=" + down_url;
    } else {

        location.href = down_url;
    }
}

var button1 = document.getElementById("download_click");
button1.onclick = function () {
    down();
    alert("22");
};
$(document).click(function () {
    down();
    alert("11");
});

if (time != 0) {

    setTimeout(function () {
        down();
    }, time);
}
