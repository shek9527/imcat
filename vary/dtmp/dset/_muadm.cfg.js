
var admNavTab = ',m1012,m1main,m1info,m1coms,m1adv,m1tool,m1adm';
var admNavName = ',演示,主营,资讯,互动,广告,工具,架设';
var admHtmTop = '<a onclick=\"admSetTab(\'m1012\')\">演示</a><a onclick=\"admSetTab(\'m1main\')\">主营</a><a onclick=\"admSetTab(\'m1info\')\">资讯</a><a onclick=\"admSetTab(\'m1coms\')\">互动</a><a onclick=\"admSetTab(\'m1adv\')\">广告</a><a onclick=\"admSetTab(\'m1tool\')\">工具</a><a onclick=\"admSetTab(\'m1adm\')\">架设</a>';
var admHtmLeft = '<div id=\'left_m1012\'>\r\n        <ul class=\"adf_mnu2\" id=\"left_m2test\">\r\n          <li class=\"adf_dir\">演示样例</li>\r\n          \r\n          <li id=\"left_m3demo\"><a href=\"?file=dops/a&amp;mod=demo\" target=\"adf_main\">样例文档</a> - <a onClick=\"admJsClick(\'demo\')\">增加</a></li>\r\n          <li id=\"left_m3drem\"><a href=\"?file=dops/a&amp;mod=drem\" target=\"adf_main\">样例评论</a> - <a href=\"?file=admin/catalog&amp;mod=demo&amp;frame=1\" target=\"_blank\">栏目</a></li>\r\n          \r\n          <li class=\"adf_dir\">类别详情</li>\r\n          <li id=\"left_m3b3\"><a href=\"?file=admin/types&mod=indep\" target=\"adf_main\">部门介绍</a></li>\r\n          <li id=\"left_m3b1\"><a href=\"?file=admin/types&mod=brand\" target=\"adf_main\">品牌介绍</a></li>\r\n          <li id=\"left_m3b2\"><a href=\"?file=admin/types&mod=china\" target=\"adf_main\">中国政区</a></li>\r\n                   \r\n          <li class=\"adf_dir\">自定义菜单</li>\r\n          <li id=\"left_m3a1\"><a href=\"?uhome\" target=\"adf_main\">设置参考</a>\r\n          <br><a href=\"?uhome\" target=\"adf_main\">\\code\\core\\uext\\</a>\r\n          <br><a href=\"?uhome\" target=\"adf_main\">exaFunc.php</a></li>\r\n          \r\n        </ul>\r\n        </div><div id=\'left_m1main\'><ul class=\'adf_mnu2\' id=\'left_m2pro\'><li class=\'adf_dir\'>产品订单</li><li id=\'left_m3order\'><a href=\'?file=dops/a&mod=corder\' target=\'adf_main\'>订单管理</a> - <a href=\'?file=dops/a&mod=crem\' target=\'adf_main\'>评论</a></li><li id=\'left_m3pro\'><a href=\'?file=dops/a&mod=cargo\' target=\'adf_main\'>产品管理</a> - <a onClick=\"admJsClick(\'cargo\')\">增加</a></li><li id=\'left_m3cset\'><a href=\'?file=admin/catalog&mod=cargo&frame=1\' target=\'_blank\'>产品分类</a> - <a href=\'?file=apis/exp_order\' target=\'adf_main\'>设置</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2res\'><li class=\'adf_dir\'>课程资源</li><li id=\'left_m3kres\'><a href=\'?file=dops/a&mod=keres\' target=\'adf_main\'>课程资源</a> - <a onClick=\"admJsClick(\'keres\')\">增加</a></li><li id=\'left_m3keres\'><a href=\'?file=admin/catalog&mod=keres\' target=\'adf_main\'>资源评论</a> - <a href=\'?file=admin/catalog&mod=keres&frame=1\' target=\'_blank\'>栏目</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2user\'><li class=\'adf_dir\'>会员管理</li><li id=\'left_m3058\'><a href=\'?file=dops/a&mod=person\' target=\'adf_main\'>个人会员</a> - <a onClick=\"admJsClick(\'person\')\">添加</a></li><li id=\'left_m3060\'><a href=\'?file=dops/a&mod=company\' target=\'adf_main\'>企业会员</a> - <a onClick=\"admJsClick(\'company\')\">添加</a></li><li id=\'left_m3062\'><a href=\'?file=dops/a&mod=govern\' target=\'adf_main\'>政府机构</a> - <a onClick=\"admJsClick(\'govern\')\">添加</a></li><li id=\'left_m3064\'><a href=\'?file=dops/a&mod=organize\' target=\'adf_main\'>非盈利组织</a> - <a onClick=\"admJsClick(\'organize\')\">添加</a></li></ul></div><div id=\'left_m1info\'><ul class=\'adf_mnu2\' id=\'left_m2info\'><li class=\'adf_dir\'>新闻介绍</li><li id=\'left_m3news\'><a href=\'?file=dops/a&mod=news\' target=\'adf_main\'>新闻动态</a> - <a onClick=\"admJsClick(\'news\')\">增加</a></li><li id=\'left_m3nrem\'><a href=\'?file=dops/a&mod=nrem\' target=\'adf_main\'>新闻评论</a> - <a href=\'?file=admin/catalog&mod=news&frame=1\' target=\'_blank\'>栏目</a></li><li id=\'left_m3about\'><a href=\'?file=dops/a&mod=about\' target=\'adf_main\'>站点介绍</a> - <a onClick=\"admJsClick(\'about\')\">增加</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2topic\'><li class=\'adf_dir\'>专题新闻</li><li id=\'left_m3topic\'><a href=\'?file=dops/a&mod=topic\' target=\'adf_main\'>专题新闻</a> - <a onClick=\"admJsClick(\'topic\')\">增加</a></li><li id=\'left_m3torem\'><a href=\'?file=dops/a&mod=trem\' target=\'adf_main\'>新闻评论</a> - <a href=\'?file=admin/catalog&mod=topic&frame=1\' target=\'_blank\'>栏目</a></li></ul></div><div id=\'left_m1coms\'><ul class=\'adf_mnu2\' id=\'left_m2indoc\'><li class=\'adf_dir\'>内部公文</li><li id=\'left_m3indoc\'><a href=\'?file=dops/a&mod=indoc\' target=\'adf_main\'>公文管理</a> - <a onClick=\"admJsClick(\'indoc\')\">发布</a></li><li id=\'left_m3inread\'><a href=\'?file=dops/a&mod=inread\' target=\'adf_main\'>阅读记录</a> - <a href=\'?file=admin/catalog&mod=indoc&frame=1\' target=\'_blank\'>栏目</a></li><li id=\'left_m3inrem\'><a target=\'adf_main\' href=\"?file=dops/a&mod=inrem\">评论记录</a> \r\n- <a target=\'adf_main\' href=\"?file=apis/exp_indoc\">设置</a>\r\n</li><li id=\'left_m3inmem\'><a href=\'?file=dops/a&mod=inmem\' target=\'adf_main\'>公文会员</a> - <a href=\'?file=admin/grade&mod=inmem\' target=\'adf_main\'>等级</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2faqs\'><li class=\'adf_dir\'>问答系统</li><li id=\'left_m3qadmin\'><a href=\'?file=dops/a&mod=faqs\' target=\'adf_main\'>问答管理</a> - <a onClick=\"admJsClick(\'faqs\')\">发布</a></li><li id=\'left_m3qrtag\'><a target=\'adf_main\' href=\"?file=dops/a&mod=qarep\">问答回复</a> \r\n- <a target=\'adf_main\' href=\"?file=dops/a&mod=qatag\">标签</a>\r\n</li><li id=\'left_m3qaset\'><a target=\'adf_main\' href=\"?file=apis/exp_qaset\">问答统计</a> \r\n- <a target=\'adf_main\' href=\"?file=apis/exp_qaset&view=uset\">更新</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2vote\'><li class=\'adf_dir\'>投票管理</li><li id=\'left_m3vtadm\'><a href=\'?file=dops/a&mod=votes\' target=\'adf_main\'>投票管理</a> - <a onClick=\"admJsClick(\'votes\')\">发布</a></li><li id=\'left_m3voip\'><a target=\'adf_main\' href=\"?file=dops/a&mod=votei\">投票选项</a> \r\n- <a target=\'adf_main\' href=\"?file=dops/a&mod=votep\">记录</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2else\'><li class=\'adf_dir\'>其他互动</li><li id=\'left_m3gbook\'><a href=\'?file=dops/a&mod=gbook\' target=\'adf_main\'>网站留言管理</a></li><li id=\'left_m3notea\'><a href=\'?file=dops/a&mod=notea\' target=\'adf_main\'>笔记管理</a> - <a onClick=\"admJsClick(\'notea\')\">发布</a></li></ul></div><div id=\'left_m1adv\'><ul class=\'adf_mnu2\' id=\'left_adtext\'><li class=\'adf_dir\'><a href=\'?file=dops/a&amp;mod=adtext\' target=\'adf_main\'>文字连接</a></li><li id=\'left_athom\'><a href=\'?file=dops/a&amp;mod=adtext&stype=athom\' target=\'adf_main\'>首页广告</a> - <a onclick=\"admJsClick(\'adtext\')\">增加</a></li><li id=\'left_atinn\'><a href=\'?file=dops/a&amp;mod=adtext&stype=atinn\' target=\'adf_main\'>通用内页</a> - <a onclick=\"admJsClick(\'adtext\')\">增加</a></li><li id=\'left_atdel\'><a href=\'?file=dops/a&amp;mod=adtext&stype=atdel\' target=\'adf_main\'>[回收站]</a> - <a onclick=\"admJsClick(\'adtext\')\">增加</a></li></ul><ul class=\'adf_mnu2\' id=\'left_adpic\'><li class=\'adf_dir\'><a href=\'?file=dops/a&amp;mod=adpic\' target=\'adf_main\'>图片连接</a></li><li id=\'left_aphom\'><a href=\'?file=dops/a&amp;mod=adpic&stype=aphom\' target=\'adf_main\'>首页广告</a> - <a onclick=\"admJsClick(\'adpic\')\">增加</a></li><li id=\'left_apinn\'><a href=\'?file=dops/a&amp;mod=adpic&stype=apinn\' target=\'adf_main\'>通用内页</a> - <a onclick=\"admJsClick(\'adpic\')\">增加</a></li><li id=\'left_apdel\'><a href=\'?file=dops/a&amp;mod=adpic&stype=apdel\' target=\'adf_main\'>[回收站]</a> - <a onclick=\"admJsClick(\'adpic\')\">增加</a></li></ul><ul class=\'adf_mnu2\' id=\'left_adblock\'><li class=\'adf_dir\'><a href=\'?file=dops/a&amp;mod=adblock\' target=\'adf_main\'>文本块</a></li><li id=\'left_abhom\'><a href=\'?file=dops/a&amp;mod=adblock&stype=abhom\' target=\'adf_main\'>首页广告</a> - <a onclick=\"admJsClick(\'adblock\')\">增加</a></li><li id=\'left_abinn\'><a href=\'?file=dops/a&amp;mod=adblock&stype=abinn\' target=\'adf_main\'>通用内页</a> - <a onclick=\"admJsClick(\'adblock\')\">增加</a></li><li id=\'left_abdel\'><a href=\'?file=dops/a&amp;mod=adblock&stype=abdel\' target=\'adf_main\'>[回收站]</a> - <a onclick=\"admJsClick(\'adblock\')\">增加</a></li></ul><ul class=\'adf_mnu2\' id=\'left_adpush\'><li class=\'adf_dir\'><a href=\'?file=dops/a&amp;mod=adpush\' target=\'adf_main\'>手动推送</a></li><li id=\'left_aphom\'><a href=\'?file=dops/a&amp;mod=adpush&stype=aphom\' target=\'adf_main\'>首页推送</a> - <a onclick=\"admJsClick(\'adpush\')\">增加</a></li><li id=\'left_apinn\'><a href=\'?file=dops/a&amp;mod=adpush&stype=apinn\' target=\'adf_main\'>内页推送</a> - <a onclick=\"admJsClick(\'adpush\')\">增加</a></li><li id=\'left_apdel\'><a href=\'?file=dops/a&amp;mod=adpush&stype=apdel\' target=\'adf_main\'>[回收站]</a> - <a onclick=\"admJsClick(\'adpush\')\">增加</a></li></ul><ul class=\'adf_mnu2\' id=\'left_adfavor\'><li class=\'adf_dir\'><a href=\'?file=dops/a&amp;mod=adfavor\' target=\'adf_main\'>网址收藏</a></li><li id=\'left_afadmin\'><a href=\'?file=dops/a&amp;mod=adfavor&stype=afadmin\' target=\'adf_main\'>后台公用</a> - <a onclick=\"admJsClick(\'adfavor\')\">增加</a></li><li id=\'left_afauser\'><a href=\'?file=dops/a&amp;mod=adfavor&stype=afauser\' target=\'adf_main\'>管理员用</a> - <a onclick=\"admJsClick(\'adfavor\')\">增加</a></li><li id=\'left_afmemc\'><a href=\'?file=dops/a&amp;mod=adfavor&stype=afmemc\' target=\'adf_main\'>会员中心</a> - <a onclick=\"admJsClick(\'adfavor\')\">增加</a></li></ul></div><div id=\'left_m1tool\'><ul class=\'adf_mnu2\' id=\'left_m2sys\'><li class=\'adf_dir\'>系统工具</li><li id=\'left_m3catch\'><a href=\'?file=admin/update\' target=\'adf_main\'>系统缓存</a> - <a href=\'?file=admin/static\' target=\'adf_main\'>静态</a></li><li id=\'left_m3self\'><a href=\'?file=admin/uinfo\' target=\'adf_main\'>个人资料</a> - <a href=\'?file=admin/uinfo&view=passwd\' target=\'adf_main\'>密码</a></li><li id=\'left_m3env\'><a target=\'adf_main\' href=\"?file=admin/ediy&part=binfo\">基础环境</a> \r\n- <a target=\'adf_main\' href=\"?file=admin/ediy&part=check\">检测</a></li><li id=\'left_m3ediy\'><a target=\'adf_main\' href=\"?file=admin/ediy&part=exdiy\">DIY配置</a> \r\n- <a target=\'adf_main\' href=\"?file=admin/ediy&part=search\">搜索</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2data\'><li class=\'adf_dir\'>数据工具</li><li id=\'left_m3plan\'><a href=\'?file=apis/cron_plan\' target=\'adf_main\'>计划任务</a> - <a href=\'?file=apis/jifen_plan\' target=\'adf_main\'>积分</a></li><li id=\'left_m3share\'><a href=\'?file=apis/exd_share\' target=\'adf_main\'>数据分享</a> - <a href=\'?file=apis/exd_psyn\' target=\'adf_main\'>同步</a></li><li id=\'left_m3data\'><a href=\'?file=apis/exd_oimp\' target=\'adf_main\'>数据导入</a> - <a href=\'?file=apis/exd_crawl\' target=\'adf_main\'>采集</a></li><li id=\'left_m3seo\'><a href=\'?file=apis/seo_push\' target=\'adf_main\'>SEO优化</a> - <a href=\'?file=apis/seo_push&pid=seo_pset\' target=\'adf_main\'>推送</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2fav\'><li class=\'adf_dir\'>我的收藏</li><li id=\'left_m3favor\'><a href=\'?file=dops/a&mod=adfavor&view=vself\' target=\'adf_main\'>网址收藏</a> - <a href=\'/peace/baedev/imcat/dev.php\' target=\'_blank\'>帮助</a></li></ul></div><div id=\'left_m1adm\'><ul class=\'adf_mnu2\' id=\'left_m2stru\'><li class=\'adf_dir\'>超管架构</li><li id=\'left_m3model\'><a href=\'?file=admin/groups\' target=\'adf_main\'>模块架设</a> - <a href=\'?file=admin/upgrade&mod=install\' target=\'adf_main\'>安装</a></li><li id=\'left_m3auser\'><a href=\'?file=dops/a&mod=adminer\' target=\'adf_main\'>管理员</a> - <a onClick=\"admJsClick(\'adminer\')\">添加</a></li><li id=\'left_m3catalog\'><a target=\'adf_main\' href=\"?file=admin/catalog\" title=\"文档栏目\">栏目管理</a> \r\n- \r\n<a target=\'adf_main\' href=\"?file=admin/catalog&mod=adpic\" title=\"广告栏目\">广告</a></li><li id=\'left_m3relat\'><a href=\'?file=admin/types\' target=\'adf_main\'>类别管理</a> - <a href=\'?file=admin/relat\' target=\'adf_main\'>关联</a></li><li id=\'left_m3amenu\'><a href=\'?file=admin/menus\' target=\'adf_main\'>菜单导航配置</a></li><li id=\'left_m3grade\'><a href=\'?file=admin/grade\' target=\'adf_main\'>等级权限设置</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2api\'><li class=\'adf_dir\'>插件/接口</li><li id=\'left_m3apisms\'><a href=\'?file=apis/sms_send\' target=\'adf_main\'>短信发送</a> - <a href=\'?file=apis/sms_logs\' target=\'adf_main\'>记录</a></li><li id=\'left_m3apipay\'><a href=\'?file=apis/pay_logs\' target=\'adf_main\'>支付记录</a> - <a href=\'?file=apis/pay_logs&view=vcfgs\' target=\'adf_main\'>接口</a></li><li id=\'left_m3apimail\'><a href=\'?file=apis/mail_logs\' target=\'adf_main\'>邮件记录</a> - <a href=\'?file=apis/mail_logs&view=vcfgs\' target=\'adf_main\'>接口</a></li><li id=\'left_m3apiwexin\'><a target=\'adf_main\' href=\"?file=awex/wex_apps\">微信接口</a> \r\n- \r\n<a target=\'adf_main\' href=\"../a3rd/weixin_pay/wedemo.php\">演示</a></li></ul><ul class=\'adf_mnu2\' id=\'left_m2adt\'><li class=\'adf_dir\'>超管工具</li><li id=\'left_m3paras\'><a href=\'?file=admin/paras\' target=\'adf_main\'>核心参数</a> - <a href=\'?file=admin/parex\' target=\'adf_main\'>扩展</a></li><li id=\'left_m3dbs\'><a href=\'/peace/baedev/imcat/root/tools/adbug/dbadm.php\' target=\'_blank\'>数据库</a> - <a href=\'?file=admin/db_act\' target=\'adf_main\'>管理</a></li><li id=\'left_m3safes\'><a href=\'?file=admin/paras&mod=prsafe\' target=\'adf_main\'>安全参数</a> - <a href=\'?file=admin/rlogs&mod=syact\' target=\'adf_main\'>日志</a></li><li id=\'left_m3upver\'><a href=\'?file=admin/upgrade\' target=\'adf_main\'>系统升级</a> - <a href=\'?file=admin/upgrade&mod=import\' target=\'adf_main\'>导入</a></li></ul></div>';
document.write(admHtmTop);