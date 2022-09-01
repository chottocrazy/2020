<?php

function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

$text = (string)filter_input(INPUT_POST, 'text'); // $_POST['text']
$name = (string)filter_input(INPUT_POST, 'name'); // $_POST['name']

$fp = fopen('list.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    flock($fp, LOCK_EX);
    fputcsv($fp, [$text, $name]);
    rewind($fp);
}

flock($fp, LOCK_SH);
while ($row = fgetcsv($fp)) {
    $rows[] = $row;
}
flock($fp, LOCK_UN);
fclose($fp);
?>
<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="viewport" content="width=device-width">
  <meta http-equiv="refresh" content="3;URL=new.php">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="style.css" rel="stylesheet">
<title>座右の銘を交換しています | 大 chotto crazy 2020</title>
<style type="text/css">
</style>
</head>
<body>
<section id="post">
<h2><span class="left">座右の銘を交換しています</span></h2>
</section>

<section id="submit">
<h1 id="">ご投稿ありがとうございました</h1>
</section>

<div id="bgm">
<audio id="audio" controls autoplay loop>
<source src="bgm/submit_1.wav" type="audio/wav"/>
</audio>
</audio>
</div>   
<script type="text/javascript">
$(function() {
    var arr = [];
    $("#bgm audio").each(function() {
        arr.push($(this).html());
    });
    arr.sort(function() {
        return Math.random() - Math.random();
    });
    $("#bgm").empty();
    for(i=0; i < arr.length; i++) {
        $("#bgm").append('<audio id="audio" controls autoplay loop>' + arr[i] + '</audio>');
    }
});
</script>

<iframe src="one.mp3" allow="autoplay" style="display:none"></iframe>
<script type="text/javascript">
	document.addEventListener('click', audioPlay);
	function audioPlay() {
  document.getElementById('audio').play();
  document.removeEventListener('click', audioPlay);
}
</script>
</body>