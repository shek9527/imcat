<?php
/*
公共模板扩展函数
*/ 
class tex_base{
    
    //protected $xxx = array();
    
    static function base1($show,$a=''){ 
        echo "<br>base1::";
    }
    
    static function init($obj){
        $user = user('Admin');
        if(!in_array($obj->mod,array('login','help'))){
            if($user->userFlag=='Guest') header('Location:'."?login");
            $user->setSess();
        }
        return $user;    
    }
    
    static function pend(){

    }

}
