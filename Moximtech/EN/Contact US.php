<?php
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
     $companyname = $_POST["companyname"];
     $username = $_POST["username"];
     $emailText = $_POST["emailText"];
     $message = $_POST["body"];

    // 以下是一個示例，將表單數據發送到電子郵件
    $to = "vito.lin2004@gmail.com";
    $subject = $_POST["subject"];
    $messageBody = "公司名稱: $companyname\n";
    $messageBody .= "姓名: $username\n";
    $messageBody .= "電子郵件: $emailText\n";
    $messageBody .= "留言: $message\n";
    mail($to, $subject, $messageBody);
}
?>


