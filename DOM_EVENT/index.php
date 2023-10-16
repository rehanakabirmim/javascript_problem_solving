<?php
for($i=0;$i<=10;$i++){?>

<button id=" ID- <?= $i ?>" value="<?= $i++ ?>" onclick="myfunction(this);">click me</button>


<?php }?>
<script>
function myfunction(x){
    console.log(x.log);
}

</script>