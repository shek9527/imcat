<?php
/*
 * 首页模板和通用配置
/*/
$_va_home = array(

    //config配置
    'c' => array(
        'vmode' => 'dynamic', //dynamic,static,close(关闭)
        'stext' => '.html', //后缀: .html, .htm, .shtm, -a.htm, -m.htm, .shtml, .stm,
        'stexp' => '2h', //静态更新周期：600s,30,2h,24h,7d, 默认单位为分钟
        'tmfix' => '-mob', // 移动适配-模板后缀
        //'_defCtrl' => '_defCtrl', 
        'close' => array('indoc','about'),
        'imcfg' => array(
            //'gbook' => 'nrem', // gbook按nrem方式显示
            'crem' => 'nrem', 
            'trem' => 'nrem',
            'kerem' => 'nrem',
            'drem' => 'nrem',
        ),
        'extra' => array(
            'home','info', 'tools', 'extend', //'mymod', 
            'start','tpltag','dev2nd','advset','uplog' 
        ),
    ),
    
    //mod.home模块首页模板
    'm' => 'c_page/_home',

);
