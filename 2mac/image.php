<?php
$FImag=imagecreatefrompng('img/volyn.png');//ПОЛУЧАЕМ РЕСУРС КАРТИНКИ (ОТКРЫВАЕМ)
$temp=getimagesize('img/volyn.png');//ЗАНОСИМ В ВРЕМЕННУЮ ПЕРЕМЕННУЮ ВСЮ ИНФУ О КАРТИНКЕ
$width=$temp[0];//ШИРИНА
$height=$temp[1];//ВЫСОТА

echo $width.'<br>';
echo $height.'<br>';

$count_for=$width*$height;//КОЛИЧЕСТВО ИСПОЛНЕНИЕ ЦЫКЛА
$result=array();//МАССВИ РЕЗУЛЬТАТА
$string = "";
$NWidth=1;//ИНИЦИАЛИЗИРУЕМ ПЕРЕМЕННУЮ ДЛЯ ТЕКУЩЕЙ ШИРИНЫ
$NHeight=0;//ИНИЦИАЛИЗИРУЕМ ПЕРЕМЕННУЮ ДЛЯ ТЕКУЩЕЙ ВЫСОТЫ

for($i=1;$i<=$count_for;$i++){
$NHeight++;//ПОДНИМИМ ТЕКУЩИЙ ПИКСЕЛЬ ПО ШИРИНЕ
//echo $NWidth;
$resourse_color=imagecolorat($FImag,$NWidth,$NHeight);//УЗНАЕМ РЕСУРС ЦВЕТА
if($resourse_color != 2147483647 && $resourse_color != 39423 && $resourse_color != ""){
	$result[$i]['x'] = $NWidth;
	$result[$i]['y'] = $NHeight;
	$result[$i]['color'] = $resourse_color;
	$string .= $NWidth.','.$NHeight.',';

}

if($NHeight==$height){//ЕСЛИ ЭТО КРАЙНИЕ ПИКСЕЛЬ ПО ШИРИНЕ,
$NHeight=0;//ШИРИНУ ТЕКУЩЕГО ПИКСЕЛЯ УСТАНОВИМ ОПЯТЬ НА НОЛЬ
$NWidth++;//НУ И ЗАДНО ВЫСОТУ НУЖНО НА ОДИН ПИКСЕЛЬ СДВИНУТЬ
}

}


?>
<pre><? print_r($result); ?></pre>
<? echo $string;?>