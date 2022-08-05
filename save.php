<?php
    
	
    $data = $_POST["data"];
	
	{
	  $fp = fopen("data.txt", "w" );
      fputs($fp, $data);
	  fclose($fp);
	}

?>