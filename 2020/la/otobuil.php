<?php
function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
$date = (string)filter_input(INPUT_POST, 'date'); // $_POST['date']
$time = (string)filter_input(INPUT_POST, 'time'); // $_POST['time']
$info = (string)filter_input(INPUT_POST, 'info'); // $_POST['info']
$id = (string)filter_input(INPUT_POST, 'id'); // $_POST['id']
$link = (string)filter_input(INPUT_POST, 'link'); // $_POST['link']

$fp = fopen('otobuil.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    flock($fp, LOCK_EX);
    fputcsv($fp, [$date, $time, $info, $id, $link]);
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
<div id="list">
<h1><b>@音ビル</b><br/>音ビル周辺で開催する<br/>「ラ(だと思う音)」の音合わせ</h1>
<p>
<?php if (!empty($rows)): ?>
<?php foreach ($rows as $row): ?>
  <b><?=h($row[0])?></b>
  <span class="time"><?=h($row[1])?></span>
  <span class="info"><?=h($row[2])?></span>
<?php endforeach; ?>
<?php else: ?>
<?php endif; ?>
</p>
<ul>
<?php if (!empty($rows)): ?>
<?php foreach ($rows as $row): ?>
<li>
<h2>
  <b><?=h($row[0])?></b>
  <span class="time"><?=h($row[1])?></span>
  <span class="info"><?=h($row[2])?></span>
</h2>
<iframe class="<?=h($row[3])?>" src="https://www.youtube.com/embed/<?=h($row[3])?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</li>
<?php endforeach; ?>
<?php else: ?>
<?php endif; ?>
</ul>
</div>
</body>