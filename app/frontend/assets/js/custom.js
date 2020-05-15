/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid' ]
  });

  calendar.render();
});

$('#xemthem').fireModal({
  size: "modal-xl",
  animation: true,
  center: true,
  title: 'Thông báo tu sửa một số khu vực của Ký túc xá',
  body: $("#modal-content-part"),
});
