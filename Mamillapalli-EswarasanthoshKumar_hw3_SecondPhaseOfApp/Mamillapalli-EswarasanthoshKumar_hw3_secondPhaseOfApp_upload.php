<? php
header("Access-Control-Allow-Origin: *");
$filename=$_FILES['file']['name'];
$location="\Users\eswarsanthoshkumarmamillapalli\Desktop\IWS\upload/"+.$filename;
if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
    echo 'success'
}else{echo 'false'}
?>
