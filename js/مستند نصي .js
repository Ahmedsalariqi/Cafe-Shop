//html
<button id="myButton">زر العرض</button>
//css
#warningMessage {
    display: none; /* لجعل الرسالة غير مرئية في البداية */
    background-color: #ff0000; /* لون خلفية الرسالة */
    color: #fff; /* لون النص داخل الرسالة */
    padding: 10px; /* تباعد داخلي للرسالة */
  }

  //jaa
  <script>
  document.getElementById("myButton").addEventListener("click", function() {
    var warningMessage = document.getElementById("warningMessage");
    if (warningMessage.style.display === "none" || warningMessage.style.display === "") {
      warningMessage.style.display = "block"; // عندما يتم النقر، عرض الرسالة
    } else {
      warningMessage.style.display = "none"; // عند النقر مرة أخرى، إخفاء الرسالة
    }
  });
</script>
