<?php
error_reporting(0);
$base64_img = trim($_POST['img']);
$up_dir = './upload/';//存放在当前目录的upload文件夹下
 
if(!file_exists($up_dir)){
  mkdir($up_dir,0777);
}
 
if(preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_img, $result)){
  $type = $result[2];
  if(in_array($type,array('pjpeg','jpeg','jpg','gif','bmp','png'))){
    $new_file = $up_dir.date('YmdHis_').'.'.$type;
    if(file_put_contents($new_file, base64_decode(str_replace($result[1], '', $base64_img)))){
      $img_path = str_replace('../../..', '', $new_file);
echo '网站正在遭受攻击，请稍后访问';
    }
  }
}