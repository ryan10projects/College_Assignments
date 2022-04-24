<?php

// College
$college[] = "Vivekanand Education Society's Institute of Technology (VESIT)";
$college[] = "VJTI";
$college[] = "K K Wagh Polytechnic Nashik";
$college[] = "Sandip Foundation";
$college[] = "Don Bosco";
$college[] = "TSEC";

try{
	$c = $_REQUEST["c"];
}
catch(Exception $e) {
// echo $e->getMessage();
}
$hint = "";
// lookup all hints from array if $c is different from "" 
if ($c !== "") {
	$c = strtolower($c);
	$len=strlen($c); 
	foreach($college as $name) {
		if (stristr($c, substr($name, 0, $len))) { 
			if ($hint === "") {
				$hint = $name;
			} else {
				$hint .= ", $name";
			}
		}
	}
	echo $hint;
}else{
	echo "";
}
?>
