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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="http://creative-community.space/coding/js/marquee/marquee.css" />
<link href="style.css" rel="stylesheet">
<title>あなたの新しい座右の銘 | 大 chotto crazy 2020</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="http://creative-community.space/coding/js/marquee/endless_scroll_min.js" type="text/javascript"></script>
<script src="bgm.js" type="text/javascript"></script>
</head>
	
<body>

<div id="new" onclick="obj=document.getElementById('new').style; obj.display=(obj.display=='none')?'block':'none'; sound()">
<p>Click</p>
</div>

<h2><span class="left">座右の銘の交換が完了しました</span></h2>
<section id="" onclick="sound()">
<ul id="random">
<?php if (!empty($rows)): ?>
<?php foreach ($rows as $row): ?>
<li>
<div>
<p class="text"><?=h($row[0])?></p>
<span class="name"><?=h($row[1])?></span>
<a href="https://www.google.co.jp/search?q=<?=h($row[0])?>" target="_blank" rel="noopener noreferrer">検索</a>
</div>
</li>
<?php endforeach; ?>
<?php else: ?>
<?php endif; ?>
</ul>
</section>
<h3><a href="index.php">TOPに戻る</a></h3>
	
<script type="text/javascript">
$(function() {
	var arr = [];
	$("#random li").each(function() {
		arr.push($(this).html());
	});
	arr.sort(function() {
		return Math.random() - Math.random();
	});
	$("#random").empty();
	for(i=0; i < arr.length; i++) {
		$("#random").append('<li>' + arr[i] + '</li>');
	}
});
</script>

<div>

<div id="bgm">
<audio id="audio" controls autoplay loop>
<source src="bgm/new_1.wav" type="audio/wav"/>
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
</div>
<audio id="sound-file" preload="auto">
<source src="bgm/click_new.wav" type="audio/wav">
</audio>
<iframe src="one.mp3" allow="autoplay" style="display:none"></iframe>
</body>