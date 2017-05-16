var messages = [
  "where",
  "how",
  "what"
  ];
var messages2 = [];

messages2 = messages.slice(0, messages.length);

function nextMsg() {
  if (messages2.length == 0) {
    messages2 = messages.slice(0, messages.length);
    nextMsg();
  } else{
    $('#message').html(messages2.pop()).fadeIn(700).delay(3000).fadeOut(700, nextMsg);
    console.log(messages2);
  };

};

$(document).ready(function() {
    $('#message').hide();
  nextMsg();
});