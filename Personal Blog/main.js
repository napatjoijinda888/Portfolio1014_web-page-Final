// ========================================================
// Assignment 5: JavaScript Post and Reply
// ให้นักศึกษาเขียนโค้ด JavaScript เพื่อจัดการการ Post และ Clear ข้อความ
// ========================================================

window.onload = setupFunction;

var name = "Welcome to the Forum";
alert(name);

function setupFunction() {
    // ให้นักศึกษากำหนดชื่อหัวข้อของหน้าเว็บที่ id="top"
    var title = document.getElementById("top");
    title.innerHTML = "Welcome to the Forum";
    var buttons = document.getElementsByTagName("button");
    var postButton = buttons[0];
    var clearButton = buttons[1];

    postButton.onclick = postFunction;
    clearButton.onclick = clearFunction;
}

// สร้างตัวแปรนับลำดับการโพสต์ชื่อว่า postCount และกำหนดค่าเริ่มต้นเป็น 0
var postCount = 0;


function postFunction() {
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    // 1. อ่านค่าข้อความจาก textarea (id="message")
    // 2. นำข้อความไปใส่ในแต่ละกล่องตามลำดับ:
    //    - ครั้งที่ 1 ใส่ใน id="topic"
    //    - ครั้งที่ 2 ใส่ใน id="reply1"
    //    - ครั้งที่ 3 ใส่ใน id="reply2"
    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    // 4. เพิ่มค่า postCount
    var messageBox = document.getElementById("message");
    var message = messageBox.value;

    if (postCount === 0) {
        var topic = document.getElementById("topic");
        topic.innerHTML = message;
    } else if (postCount === 1) {
        var reply1 = document.getElementById("reply1");
        reply1.innerHTML = message;
    } else if (postCount === 2) {
        var reply2 = document.getElementById("reply2");
        reply2.innerHTML = message;
    }

    messageBox.value = "";

    if (postCount < 3) {
        postCount = postCount + 1;
    }
}

    function clearFunction() {
        // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
        // 1. ล้างข้อความใน id="topic", id="reply1", id="reply2"
        // 2. ล้างข้อความใน textarea (id="message")
        // 3. รีเซ็ตตัวแปร postCount กลับเป็นค่าเริ่มต้น
        document.getElementById("topic").innerHTML = "";
        document.getElementById("reply1").innerHTML = "";
        document.getElementById("reply2").innerHTML = "";

        document.getElementById("message").value = "";
        postCount = 0;
    }










