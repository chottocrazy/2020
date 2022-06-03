<?php
function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
$date = (string)filter_input(INPUT_POST, 'date'); // $_POST['date']
$time = (string)filter_input(INPUT_POST, 'time'); // $_POST['time']
$info = (string)filter_input(INPUT_POST, 'info'); // $_POST['info']
$id = (string)filter_input(INPUT_POST, 'id'); // $_POST['id']

$fp = fopen('web.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    flock($fp, LOCK_EX);
    fputcsv($fp, [$date, $time, $info, $id,]);
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
<h1><b>On The Web</b><br/>オンライン開催する<br/>「ラ(だと思う音)」の音合わせ</h1>
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
<div id="zoom">
<u>How to Join | 参加方法</u>
<b>オンライン開催する「ラ(だと思う音)」の音合わせを円滑に行うため、下記注意事項をご一読いただき、事前準備や参加方法へのご理解、ご協力をお願いいたします。</b>
<b>※ オンライン開催する「ラ(だと思う音)」の音合わせにはZoomを使用します。<br/>参加を希望される方は、事前に必ずアプリケーション「ZOOM Cloud Meetings」をダウンロード頂くようお願いいたします。</b>
<b>
<u>Download | ダウンロード</u><br/>
<a href="https://zoom.us/download#client_4meeting" target="_blank">PC版 ZOOM Cloud Meetings</a><br/>
<a href="https://apps.apple.com/jp/app/zoom-cloud-meetings/id546505307" target="_blank">App Store ZOOM Cloud Meetings</a><br/>
<a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=ja&gl=US" target="_blank">Google Play ZOOM Cloud Meetings</a></b>
<b>※ Zoomには、同時に複数人が会話した際、特定の音声を自動的にミュートするノイズキャンセリング機能が設定されています。<br/>円滑に音合わせを行うため、その機能をオフにするためには、上記のアプリケーションが必要です。<br/>下記のPDFにある案内に沿ってノイズキャンセリング機能の解除をお願いいたします。<br/>（音合わせを始める前に、設定が変更されているか確認作業を行います。解除の方法がわからない場合はその際に直接ご質問ください。）</b>
<b>
<a href="guide_pc.pdf" target="_blank">PCアプリでの設定解除方法</a><br/>
<a href="guide_sp1.pdf" target="_blank">スマートフォンアプリでの設定解除方法①</a><br/>
<a href="guide_sp2.pdf" target="_blank">スマートフォンアプリでの設定解除方法②</a></b><br/>
<b>※ イヤフォン・ヘッドフォンを使用せず、スピーカーで音合わせを行うと、相手に自分の声を聞き取ってもらいにくく、また相手の声も聞き取りにくくなります。<br/>円滑に音合わせを実施するため、イヤフォン・ヘッドフォンの着用をおすすめします。</b>
<b>※ 顔が見えない状態での音合わせは非常に困難です。<br/>
また、マスクをしていると発声しているかわかりずらく、また声もこもってしまい聞き取りにくいくなります。<br/>マスクを外し、カメラをオンにして音合わせに参加しましょう。</b>
<b>※ 音合わせの様子を見てから参加する、観覧のみのご参加も大歓迎です。<br/>音合わせには加わらず、観覧のみでの参加を希望する場合は、マイクをミュート頂くようご協力ください。（もちろんカメラもオフにしていただいて構いません。）</b>
<b>※ オンラインでの実施のため、各々のインターネット環境の影響をにより一部聞き取りにくく感じる場合があるかと思います。予めご了承ください。</b>
<p><u>次回の音合わせ</u><br/>
<i>2021年1月30日(土)<br/>
15:20 - 16:00</i></p>
<p><span  onclick="obj=document.getElementById('online_la').style; obj.display=(obj.display=='none')?'block':'none';">参加する</span></p>
<p><u>注意</u><br/>
音合わせの様子を YouTube Live にて生配信します。<br/>また、記録映像を映像作品として発表することを予定しています。</p>
</div>
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
<div id="online_la" style="display:none;">
<p><u>ZOOM</u>
<span class="close" onclick="obj=document.getElementById('online_la').style; obj.display=(obj.display=='none')?'block':'none';">✕</span><br/>
ID: 776 6954 8003<br/>
PASS: la_0130_1<br/>
<a href="https://us04web.zoom.us/j/77669548003?pwd=c0V5MC9OM0ZCU0ZybDEwbWV4QlMyUT09" target="_blank">Link</a></p>
</div>
</body>