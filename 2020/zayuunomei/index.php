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
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="style.css" rel="stylesheet">
<title>座右の銘を交換したい | 大 chotto crazy 2020</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="http://creative-community.space/coding/js/marquee/marquee.css" />
<script src="http://creative-community.space/coding/js/marquee/endless_scroll_min.js" type="text/javascript"></script>
<script src="bgm.js" type="text/javascript"></script>
<script type="text/javascript">
$(function(){
})
</script>
</head>
<body>
<div id="howto" class="popup" style="display:none;" onclick="sound()">
<p><iframe src="about.html"></iframe></p>
<span class="close" onclick="obj=document.getElementById('howto').style; obj.display=(obj.display=='none')?'block':'none';">✕</span>
</div>

<div id="marquee" onclick="sound()">
<div id="right" class="about" onclick="obj=document.getElementById('howto').style; obj.display=(obj.display=='none')?'block':'none';">

<ul id="s3" class="es">
<span>ABOUT</span>
<?php if (!empty($rows)): ?>
<?php foreach ($rows as $row): ?>
<li><?=h($row[0])?></li>
<?php endforeach; ?>
<?php else: ?>
<?php endif; ?>
</ul>
</div>
</div>

<script type="text/javascript">
$(window).load(function () {
    $("#s3").endlessScroll({ width: '100%', height: '2rem', steps: -1, speed: 10, mousestop: true });
});
</script>

<h2><span class="left">座右の銘を交換したい</span></h2>
<section id="submit" onclick="sound()">
    <form action="submit.php" method="post">
    <p>あなたの座右の銘は？<br/>
    <input type="text" name="text" required></p>
    <p>あなたの名前は？<br/>
    <input type="name" name="name" required></p>
    <button type="submit">交換する</button>
    </form>
</section>
<div id="art">
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...(&amp;yVYB9Q.,</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ..JT""!&nbsp; &nbsp;-7"Sa.. !</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.J"`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ?TW..</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `.D&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;7N,</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; &nbsp; .@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ?b&nbsp; &nbsp;`&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; &nbsp; `</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`d:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;d;</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; #&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;d:</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; #&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; N.&nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; `&nbsp; &nbsp;d'&nbsp; &nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp;`</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; J[&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;J%&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; `&nbsp; .N&nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(t</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ?L&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; ` J%&nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;W,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.d^&nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; `&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; `</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; .N.&nbsp; &nbsp;`&nbsp; &nbsp;`&nbsp; &nbsp; &nbsp;` .M{&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `` `&nbsp; `,h&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; .d5M&nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;` .JT"""777""""N.&nbsp; &nbsp; &nbsp; &nbsp; `.J"&nbsp; W,&nbsp; &nbsp; ` ........,`&nbsp; &nbsp;`</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; &nbsp; .F&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .W,&nbsp; &nbsp;` .-T^&nbsp; &nbsp; &nbsp;?T""""7!`&nbsp; &nbsp; &nbsp; (Ux&nbsp; &nbsp; &nbsp; &nbsp;`</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .#&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(T9T""!&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;,N.</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; `.J,`&nbsp; &nbsp;`&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`.F&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ,b</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; .F (N.&nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .d!&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;?L&nbsp; &nbsp; `</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp;.MWJb&nbsp; .H,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; `&nbsp; .#`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; `&nbsp; &nbsp; &nbsp;N.</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp;.F.N/N,&nbsp; U,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; `&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;,b&nbsp; &nbsp; &nbsp; `</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp;,] Ux.Te&nbsp; ?h. `&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.#`&nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; N.</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp;,b&nbsp; &nbsp;_7^&nbsp; &nbsp; TQ,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ` d'&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp;,b `</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; W,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;?N,&nbsp; &nbsp;`&nbsp; `&nbsp; `&nbsp; &nbsp; &nbsp;(%&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; .#7T#!&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;N</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp;W,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ?h.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ` .F&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; .N&nbsp; N.&nbsp; &nbsp; &nbsp;`&nbsp; &nbsp;d;</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; 7m...&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.U,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .F&nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; M. (b&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;,]&nbsp; &nbsp;`</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; M`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /N, `&nbsp; &nbsp; `.@&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; J]&nbsp; W,&nbsp; &nbsp; &nbsp; &nbsp; .N</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp;(]&nbsp; `&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp;7m,&nbsp; &nbsp; .D&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp;.N&nbsp; .N,&nbsp; `&nbsp; `&nbsp; N</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; ` Ta.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;?8a-#^&nbsp; &nbsp; &nbsp; `&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; d;&nbsp; &nbsp;T9VT""Tm d;</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp;`&nbsp; &nbsp; &nbsp;.Ta.&nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .(BN.&nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp;,b&nbsp; ...&amp;VT""` (]</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tm,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; .#! J) `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; "` .""9N,&nbsp; &nbsp; .@</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 7m,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; `&nbsp; ` .F&nbsp; &nbsp;,]&nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ..gT"T9WXQgg#&nbsp; &nbsp; &nbsp;M.</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ?N,`&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (t&nbsp; &nbsp; ,b&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; `&nbsp; &nbsp;TMNg.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(]</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;?H,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;J\&nbsp; &nbsp; &nbsp;.@&nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(V9"^`...&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;N.</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.TQ,&nbsp; &nbsp;`&nbsp; ..J$!&nbsp; &nbsp; &nbsp; .@&nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp;.T9T""^~7N.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(b</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.""9Y"""`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.F&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;,b&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H,</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp;J\&nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;H,&nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; ,b</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H`&nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ,b&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; M</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size: ;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;?m,&nbsp; &nbsp;` ...JdD</span></font></div>
<div style=""><font face="Arial, Verdana"><span style="font-size;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `&nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`&nbsp; &nbsp; &nbsp; &nbsp; ?""""7!</span></font></div>
</div>
<div id="bgm">
<audio id="audio" controls autoplay loop>
<source src="bgm/top_1.wav" type="audio/wav"/>
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
<audio id="sound-file" preload="auto">
<source src="bgm/click_top.wav" type="audio/wav">
</audio>
<iframe src="one.mp3" allow="autoplay" style="display:none"></iframe>
</body>
</html>
