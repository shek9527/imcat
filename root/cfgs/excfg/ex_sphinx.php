<?php

// 
$_ex_sphinx['cfgs'] = array(
    'host' => '127.0.0.1',
    'port' => 9312, //不要引号
);

// 
$_ex_sphinx['index'] = array(
    // 模型 => sphinx索引
    'test1' => 'test1',
    //'demo' => '', //index_imcat_demo_main,index_imcat_demo_delta
    'news' => '',
    'cargo' => '',
);

/*


### sphinx.conf配置参考

source source_imcat_demo_main
{
    type                    = mysql
    sql_host                = localhost
    sql_user                = imcat
    sql_pass                = 123456
    sql_db                  = txmao_main
    sql_port                = 3306
    #sql_sock               = /tmp/mysql.sock # 如果是使用unix sock连接可以使用这个。
    sql_query_pre           = SET NAMES utf8
    sql_query_pre           = SET SESSION query_cache_type=OFF
    sql_query_pre           = REPLACE INTO plus_sphinx_ys SELECT 'demo', MAX(spid) FROM docs_demo_ys LIMIT 1
    sql_query               = SELECT spid,did,CRC32(catid) AS catid,title,`show`,click,atime,mname,CRC32(morg) AS morg FROM docs_demo_ys WHERE spid >= $start AND spid <= $end
    sql_query_range         = SELECT min(spid),max(spid) FROM docs_demo_ys
    sql_range_step          = 10000
    sql_attr_uint           = catid
    sql_attr_uint           = show
    sql_attr_uint           = click
    sql_attr_uint           = morg
    sql_attr_timestamp      = atime
}
source source_imcat_demo_delta
{
    type                    = mysql
    sql_host                = localhost
    sql_user                = imcat
    sql_pass                = 123456
    sql_db                  = txmao_main
    sql_port                = 3306
    #sql_sock               = /tmp/mysql.sock # 如果是使用unix sock连接可以使用这个。
    sql_query_pre           = SET NAMES utf8
    sql_query_pre           = SET SESSION query_cache_type=OFF
    sql_query               = SELECT spid,did,CRC32(catid) AS catid,title,`show`,click,atime,mname,CRC32(morg) AS morg FROM docs_demo_ys WHERE spid > (SELECT maxid FROM plus_sphinx_ys WHERE modid = 'demo')
    sql_attr_uint           = catid
    sql_attr_uint           = show
    sql_attr_uint           = click
    sql_attr_uint           = morg
    sql_attr_timestamp      = atime
}
index index_imcat_demo_main
{
    source                  = source_imcat_demo_main
    path                    = D:/phpStudy/sphinx-2211/data/index_imcat_demo_main
    docinfo                 = extern
    mlock                   = 0
    morphology              = none
    min_word_len            = 2
    html_strip              = 0
    #charset_dictpath        = /usr/local/mmseg3/etc/
    #charset_type            = zh_cn.utf-8
    #  指定utf-8 的编码表
    charset_table           = 0..9, A..Z->a..z, _, a..z, U+410..U+42F->U+430..U+44F, U+430..U+44F
    # 简单分词，只支持0 和1 ，如果要搜索中文，请指定为1
    ngram_len               = 1
    # 需要分词的字符，如果要搜索中文，去掉前面的注释
    ngram_chars             = U+3000..U+2FA1F
}
index index_imcat_demo_delta
{
    source                  = source_imcat_demo_delta
    path                    = D:/phpStudy/sphinx-2211/data/index_imcat_demo_delta
    docinfo                 = extern
    mlock                   = 0
    morphology              = none
    min_word_len            = 2
    html_strip              = 0
    #charset_dictpath        = /usr/local/mmseg3/etc/
    #charset_type            = zh_cn.utf-8
    #  指定utf-8 的编码表
    charset_table           = 0..9, A..Z->a..z, _, a..z, U+410..U+42F->U+430..U+44F, U+430..U+44F
    # 简单分词，只支持0 和1 ，如果要搜索中文，请指定为1
    ngram_len               = 1
    # 需要分词的字符，如果要搜索中文，去掉前面的注释
    ngram_chars             = U+3000..U+2FA1F
}


### 扩展知识 : charset_table / ngram_chars

[http://blog.csdn.net/yagas/article/details/50145137] 使用sphinx创建搜索引擎(一)----简单索引

charset_table = U+FF10..U+FF19->0..9, 0..9, U+FF41..U+FF5A->a..z, U+FF21..U+FF3A->a..z,A..Z->a..z, a..z, U+0149, U+017F, U+0138, U+00DF, U+00FF, U+00C0..U+00D6->U+00E0..U+00F6,U+00E0..U+00F6, U+00D8..U+00DE->U+00F8..U+00FE, U+00F8..U+00FE, U+0100->U+0101, U+0101,U+0102->U+0103, U+0103, U+0104->U+0105, U+0105, U+0106->U+0107, U+0107, U+0108->U+0109,U+0109, U+010A->U+010B, U+010B, U+010C->U+010D, U+010D, U+010E->U+010F, U+010F,U+0110->U+0111, U+0111, U+0112->U+0113, U+0113, U+0114->U+0115, U+0115, U+0116->U+0117,U+0117, U+0118->U+0119, U+0119, U+011A->U+011B, U+011B, U+011C->U+011D, U+011D,U+011E->U+011F, U+011F, U+0130->U+0131, U+0131, U+0132->U+0133, U+0133, U+0134->U+0135,U+0135, U+0136->U+0137, U+0137, U+0139->U+013A, U+013A, U+013B->U+013C, U+013C,U+013D->U+013E, U+013E, U+013F->U+0140, U+0140, U+0141->U+0142, U+0142, U+0143->U+0144,U+0144, U+0145->U+0146, U+0146, U+0147->U+0148, U+0148, U+014A->U+014B, U+014B,U+014C->U+014D, U+014D, U+014E->U+014F, U+014F, U+0150->U+0151, U+0151, U+0152->U+0153,U+0153, U+0154->U+0155, U+0155, U+0156->U+0157, U+0157, U+0158->U+0159, U+0159,U+015A->U+015B, U+015B, U+015C->U+015D, U+015D, U+015E->U+015F, U+015F, U+0160->U+0161,U+0161, U+0162->U+0163, U+0163, U+0164->U+0165, U+0165, U+0166->U+0167, U+0167,U+0168->U+0169, U+0169, U+016A->U+016B, U+016B, U+016C->U+016D, U+016D, U+016E->U+016F,U+016F, U+0170->U+0171, U+0171, U+0172->U+0173, U+0173, U+0174->U+0175, U+0175,U+0176->U+0177, U+0177, U+0178->U+00FF, U+00FF, U+0179->U+017A, U+017A, U+017B->U+017C,U+017C, U+017D->U+017E, U+017E, U+0410..U+042F->U+0430..U+044F, U+0430..U+044F,U+05D0..U+05EA, U+0531..U+0556->U+0561..U+0586, U+0561..U+0587, U+0621..U+063A, U+01B9,U+01BF, U+0640..U+064A, U+0660..U+0669, U+066E, U+066F, U+0671..U+06D3, U+06F0..U+06FF,U+0904..U+0939, U+0958..U+095F, U+0960..U+0963, U+0966..U+096F, U+097B..U+097F,U+0985..U+09B9, U+09CE, U+09DC..U+09E3, U+09E6..U+09EF, U+0A05..U+0A39, U+0A59..U+0A5E,U+0A66..U+0A6F, U+0A85..U+0AB9, U+0AE0..U+0AE3, U+0AE6..U+0AEF, U+0B05..U+0B39,U+0B5C..U+0B61, U+0B66..U+0B6F, U+0B71, U+0B85..U+0BB9, U+0BE6..U+0BF2, U+0C05..U+0C39,U+0C66..U+0C6F, U+0C85..U+0CB9, U+0CDE..U+0CE3, U+0CE6..U+0CEF, U+0D05..U+0D39, U+0D60,U+0D61, U+0D66..U+0D6F, U+0D85..U+0DC6, U+1900..U+1938, U+1946..U+194F, U+A800..U+A805,U+A807..U+A822, U+0386->U+03B1, U+03AC->U+03B1, U+0388->U+03B5, U+03AD->U+03B5,U+0389->U+03B7, U+03AE->U+03B7, U+038A->U+03B9, U+0390->U+03B9, U+03AA->U+03B9,U+03AF->U+03B9, U+03CA->U+03B9, U+038C->U+03BF, U+03CC->U+03BF, U+038E->U+03C5,U+03AB->U+03C5, U+03B0->U+03C5, U+03CB->U+03C5, U+03CD->U+03C5, U+038F->U+03C9,U+03CE->U+03C9, U+03C2->U+03C3, U+0391..U+03A1->U+03B1..U+03C1,U+03A3..U+03A9->U+03C3..U+03C9, U+03B1..U+03C1, U+03C3..U+03C9, U+0E01..U+0E2E,U+0E30..U+0E3A, U+0E40..U+0E45, U+0E47, U+0E50..U+0E59, U+A000..U+A48F, U+4E00..U+9FBF,U+3400..U+4DBF, U+20000..U+2A6DF, U+F900..U+FAFF, U+2F800..U+2FA1F, U+2E80..U+2EFF,U+2F00..U+2FDF, U+3100..U+312F, U+31A0..U+31BF, U+3040..U+309F, U+30A0..U+30FF,U+31F0..U+31FF, U+AC00..U+D7AF, U+1100..U+11FF, U+3130..U+318F, U+A000..U+A48F,U+A490..U+A4CF
ngram_chars = U+4E00..U+9FBF, U+3400..U+4DBF, U+20000..U+2A6DF, U+F900..U+FAFF,U+2F800..U+2FA1F, U+2E80..U+2EFF, U+2F00..U+2FDF, U+3100..U+312F, U+31A0..U+31BF,U+3040..U+309F, U+30A0..U+30FF,U+31F0..U+31FF, U+AC00..U+D7AF, U+1100..U+11FF,U+3130..U+318F, U+A000..U+A48F, U+A490..U+A4CF


### 扩展知识 : sphinx.conf 配置继承 示例

source source_impub #公用source
{
    type                    = mysql
    sql_host                = localhost
    sql_user                = imcat
    sql_pass                = 123456
    sql_db                  = txmao_main
    sql_port                = 3306
    #sql_sock               = /tmp/mysql.sock # 如果是使用unix sock连接可以使用这个。
    sql_query_pre           = SET SESSION query_cache_type=OFF
    #...
    sql_attr_uint           = catid
    sql_attr_uint           = show
    sql_attr_uint           = click
    sql_attr_uint           = morg
    sql_attr_timestamp      = atime
}
source source_imcat_demo_main : source_impub 
{
    sql_query_pre           = SET NAMES utf8
    sql_query_pre           = REPLACE INTO plus_sphinx_ys SELECT 'demo', MAX(spid) FROM docs_demo_ys LIMIT 1
    sql_query               = SELECT spid,did,CRC32(catid) AS catid,title,`show`,click,atime,mname,CRC32(morg) AS morg FROM docs_demo_ys WHERE spid >= $start AND spid <= $end
    sql_query_range         = SELECT min(spid),max(spid) FROM docs_demo_ys
    sql_range_step          = 10000
}
source source_imcat_demo_delta : source_impub 
{
    sql_query_pre           = SET NAMES utf8
    sql_query               = SELECT spid,did,CRC32(catid) AS catid,title,`show`,click,atime,mname,CRC32(morg) AS morg FROM docs_demo_ys WHERE spid > (SELECT maxid FROM plus_sphinx_ys WHERE modid = 'demo')
}

index index_imcat_demo_main
{
    source                  = source_imcat_demo_main
    path                    = E:/peace/server/sphinx-211/data/index_imcat_demo_main
    docinfo                 = extern
    mlock                   = 0
    morphology              = none
    min_word_len            = 2
    html_strip              = 0
    #  指定utf-8 的编码表
    charset_table           = 0..9, A..Z->a..z, _, a..z, U+410..U+42F->U+430..U+44F, U+430..U+44F
    # 简单分词，只支持0 和1 ，如果要搜索中文，请指定为1
    ngram_len               = 1
    # 需要分词的字符，如果要搜索中文，去掉前面的注释
    ngram_chars             = U+3000..U+2FA1F
}
index index_imcat_demo_delta : index_imcat_demo_main 
{
    source                  = source_imcat_demo_delta
    path                    = E:/peace/server/sphinx-211/data/index_imcat_demo_delta
}


*/