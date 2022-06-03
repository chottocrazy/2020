<?php
function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
$sex = (string)filter_input(INPUT_POST, 'sex'); // $_POST['sex']
$no = (string)filter_input(INPUT_POST, 'no'); // $_POST['no']
$time = (string)filter_input(INPUT_POST, 'time'); // $_POST['time']

$fp = fopen('play.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    flock($fp, LOCK_EX);
    fputcsv($fp, [$sex, $no, $time,]);
    rewind($fp);
}

flock($fp, LOCK_SH);
while ($row = fgetcsv($fp)) {
    $rows[] = $row;
}
flock($fp, LOCK_UN);
fclose($fp);

?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="viewport" content="width=device-width">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="styles.css" rel="stylesheet">
<title>みんなで音が合うまで、「ラ(だと思う音)」を歌いましょう by 山村祥子</title>
<script type="text/javascript">
$(function(){
})
</script>
<style type="text/css">
</style>
</head>
<body>
<div id="play">
<h1 class="click"><a onclick="window.location.reload();">Random</a></h1>
<ul id="random">
<?php if (!empty($rows)): ?>
<?php foreach ($rows as $row): ?>
<li>
<h2>
  <b><?=h($row[0])?></b>
  <span class="time"><?=h($row[1])?></span>
  <span class="info"><?=h($row[2])?></span>
</h2>
<audio preload="metadata" controls>
<source src="collection/<?=h($row[0])?> <?=h($row[1])?>.mp3" autoplay>
</audio>
</li>
<?php endforeach; ?>
<?php else: ?>
<?php endif; ?>
</ul>
</div>

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
</body>