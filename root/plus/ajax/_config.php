<?php
define('RUN_AJAX', 1);
$_cbase['ucfg']['lang'] = '(auto)'; 
if(!isset($_cbase['skip'])) $_cbase['skip']['_all_'] = true;
require dirname(dirname(dirname(__FILE__))).'/run/_init.php'; 
