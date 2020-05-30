/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";

$("#logout").click(function () {
  let token = localStorage.getItem("token");
  console.log(token);
  var myHeaders = new Headers();
    //myHeaders.append("Content-Type", "text/plain", bearer);

    var requestOptions = {
      method: "GET",
      credentials: 'omit',
      headers: {
        'Authorization': 'Bearer '+token,
        'Content-Type': 'text/plain'
    },
      redirect: "follow",
    };

    fetch("http://52.15.50.37:9090/user/logout", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.message == "Logout successfully"){
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          alert("Đăng xuất thành công!")
        }else if(result.message == "User not logged in"){
          alert("Người dùng chưa đăng nhập")
          window.location.href = "/app/frontend/pages/dang-nhap.html"
        }
      })
      .catch((error) => console.log("Không kết nối được tới máy chủ", error));
  }
);

$("#xemthem").fireModal({
  size: "modal-xl",
  animation: true,
  center: true,
  title: "Thông báo tu sửa một số khu vực của Ký túc xá",
  body: $("#modal-content-part"),
});


