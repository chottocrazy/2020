<?php
mb_language("ja");
mb_internal_encoding("UTF-8");
date_default_timezone_set("Asia/Tokyo");

$source_file = "index.csv";

define("LOGFILE", $source_file);
$data = json_decode(file_get_contents("php://input"), true);

$output = array(
    '"' . $data["policy"] . '"',
    '"' . $data["name"] . '"',
    '"' . $data["timestamp"] . '"'
);

$result = implode(', ', $output);
file_put_contents(LOGFILE, $result . "\n", FILE_APPEND | LOCK_EX);
echo json_encode($data);
