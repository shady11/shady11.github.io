<?php

if(isset($_GET['us'])){
    $us = $_GET['us'];

    switch ($us) {
        case 1:
            $title = "The Weeknd - Starboy";
            $desc = "Канадский музыкант The Weeknd выпустил третий студийный альбом Starboy.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "25 ноября 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1156443286?country=kg";
            $link = "https://dl.dropbox.com/s/op5zssdsh0ljsp1/The_Weeknd_-_Starboy_2016.zip?dl=0";
            break;
        case 2:
            $title = "Alicia Keys - Here";
            $desc = "Шестой студийный альбом Alicia Keys — «Here».";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "4 ноября 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1162262652?country=us";
            $link = "https://dl.dropbox.com/s/gw2ewpcxtm2omom/Alicia_Keys_-_Here_Deluxe_Edition_2016.rar?dl=0";
            break;
        case 3:
            $title = "Oh Wonder - Oh Wonder";
            $desc = "Oh Wonder — дебютный студийный альбом инди-поп дуэта Oh Wonder.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "9 сентября 2015";
            $itunes = "//tools.applemusic.com/embed/v1/album/1008891895?country=kg";
            $link = "https://dl.dropbox.com/s/m4ffc0oeqd9n38a/Oh_Wonder_-_Oh_Wonder_2015.zip?dl=0";
            break;
        case 4:
            $title = "Bruno Mars - 24K Magic";
            $desc = "24K Magic — третий студийный альбом американского певца и композитора Bruno Mars";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "18 ноября 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1161503945?country=kg";
            $link = "https://dl.dropbox.com/s/4opjvc5qu8zek5q/Bruno_Mars_-_24K_Magic_2016.rar?dl=0";
            break;
        case 5:
            $title = "Kristina Si - Светом во тьме";
            $desc = "Дебютный альбом артистки Black Star, спустя три года после ее подписания на лейбл, появился в Apple Music.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "29 ноября 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1176959649?country=kg";
            $link = "https://dl.dropbox.com/s/2e0cf18jpuq4hj1/Kristina_Si_-_Svetom_vo_tme.rar?dl=0";
            break;
        case 6:
            $title = "Coldplay - Ghost Stories";
            $desc = "Ghost Stories — шестой студийный альбом британской группы Coldplay.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "16 мая 2014";
            $itunes = "//tools.applemusic.com/embed/v1/album/829909653?country=kg";
            $link = "https://dl.dropbox.com/s/e3ovodp3eycf8k6/Coldplay_-_Ghost_Stories_2014.zip?dl=0";
            break;
        case 7:
            $title = "Coldplay - A Head Full of Dreams";
            $desc = "A Head Full of Dreams — седьмой студийный альбом британской рок-группы Coldplay.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "4 декабря 2015";
            $itunes = "//tools.applemusic.com/embed/v1/album/1053933969?country=kg";
            $link = "https://dl.dropbox.com/s/fsh08ni65r6hnt6/Coldplay_-_A_Head_Full_Of_Dreams_2015.zip?dl=0";
            break;
        case 8:
            $title = "Kungs - Layers";
            $desc = "Layers дебютный альбом французского диджея и продюсера Kungs.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "4 ноября 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1163860108?country=kg";
            $link = "https://dl.dropbox.com/s/pvy3ne4anfu893l/Kungs_-_Layers_-_2016.rar?dl=0";
            break;
        case 9:
            $title = "Charlie Puth - Nine Track Mind";
            $desc = "Nine Track Mind – дебютный студийный альбом американского певца Charlie Puth.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "29 января 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1041127262?country=kg";
            $link = "https://dl.dropbox.com/s/qotnd3ovva2mmsl/Charlie_Puth_-_Nine_Track_Mind_2016.zip?dl=0";
            break;
        case 10:
            $title = "John Legend - Darkness and Light";
            $desc = "Darkness and Light – пятый студийный альбом американского певца John Legend.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "2 декабря 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1170697676?country=us";
            $link = "https://dl.dropbox.com/s/u3p4nqwhmx74c4e/John_Legend_-_Darkness_and_Light_Deluxe_Edition_2016.rar?dl=0";
            break;
        case 11:
            $title = "OneRepublic - Oh My My";
            $desc = "Oh My My — четвертый студийный альбом американской поп-рок группы OneRepublic.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "7 октября 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1151608594?country=us";
            $link = "https://dl.dropbox.com/s/merv33ijq9z3zfk/OneRepublic_-_Oh_My_My_2016.zip?dl=0";
            break;
        case 12:
            $title = "OneRepublic - Native";
            $desc = "Native — третий студийный альбом американской поп-рок группы OneRepublic.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "22 марта 2013";
            $itunes = "//tools.applemusic.com/embed/v1/album/603542914?country=kg";
            $link = "https://dl.dropbox.com/s/ni6stwwz2qzkxao/OneRepublic_-_Native_2013.zip?dl=0";
            break;
        case 13:
            $title = "Frenship - Truce";
            $desc = "Truce — дебютный альбом американской электропоп группы Frenship.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "2 сентября 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1147798339?country=kg";
            $link = "https://dl.dropbox.com/s/rxkdc7meksp4p2u/Frenship_-_Truce_EP_2016.zip?dl=0";
            break;
        case 14:
            $title = "Lady Gaga - Joanne";
            $desc = "Joanne — пятый студийный альбом американской певицы Lady Gaga.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "21 октября 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1161515717?country=kg";
            $link = "https://dl.dropbox.com/s/a8kmgr66lsap2nk/Lady_Gaga_-_Joanne_2016.zip?dl=0";
            break;
        case 15:
            $title = "Sia - This Is Acting (Deluxe Version)";
            $desc = "This Is Acting (Deluxe Version) — делюксовое переиздание седьмого студийного альбома австралийской певицы и автора-исполнителя Sia";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "29 января 2016";
            $itunes = "//tools.applemusic.com/embed/v1/album/1162482526?country=kg";
            $link = "https://dl.dropbox.com/s/z1sz3a6xz2nk3zc/Sia_-_This_Is_Acting_Deluxe_Edition_2016.rar?dl=0";
            break;
        case 16:
            $title = "ДоМиНо - Стон";
            $desc = "Стон — дебютный альбом казахской группы ДоМиНо.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "2007";
            $itunes = "";
            $link = "https://dl.dropbox.com/s/vq9hoc97nigy5qm/Domino_-_Ston_2007.rar?dl=0";
            break;
        case 17:
            $title = "Rag'n'Bone Man - Human(Deluxe)";
            $desc = "Human — дебютный альбом британского соул-исполнителя Rag'n'Bone Man.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "10 февраля 2017";
            $itunes = "//tools.applemusic.com/embed/v1/album/1173599790?country=kg";
            $link = "https://dl.dropbox.com/s/sgqapnnny4ns1d4/Rag_Bone_Man_-_Human_Deluxe_Edition_2017.rar?dl=0";
            break;
        case 18:
            $title = "Ed Sheeran - &divide; (Deluxe)";
            $desc = "&divide; — третий студийний альбом британского автора и исполнителя Ed Sheeran.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "3 марта 2017";
            $itunes = "//tools.applemusic.com/embed/v1/album/1193701079?country=us";
            $link = "https://dl.dropbox.com/s/hifkkda4a15l8xx/Ed_Sheeran_-_Divide_2017.rar?dl=0";
            break;
        case 19:
            $title = "The Chainsmokers - Memories...Do Not Open";
            $desc = "Memories...Do Not Open — дебютный студийний альбом американского дуэта The Chainsmokers.";
            $image = "http://".$_SERVER[HTTP_HOST]."/demo/bulut/img/files/".$us.".jpg";
            $date = "7 апреля 2017";
            $itunes = "//tools.applemusic.com/embed/v1/album/1207120422?country=us";
            $link = "https://downloader.disk.yandex.com/disk/ad4859785cbfe116eeeadda29ee7f1b1fdf8db9de28f09a7eb7f2fe6e3239651/5900bc16/myYIJpxMZPbc2aUjsoUz0K6_6kw1-XHJfHtoOd5OI2EBOJay48g6C-KnTmwRzL8cfKEF_wWPIUAoYgibGhky_A%3D%3D?uid=0&filename=The_Chainsmokers_-_Memories...Do_Not_Open_2017.rar&disposition=attachment&hash=N6TqnsboBWHiMNGEG2amf7pEXFnp2zmGeEoDvBVfL98%3D&limit=0&content_type=application%2Fx-rar&fsize=116179090&hid=d0a87c135d75708f676816dcb7825fb7&media_type=compressed&tknv=v2";
            break;
    }
} else {
    redirect('error.php','js');
}


?>


<?php include('header_part1.php'); ?>

<title><?=$title;?></title>

<meta property="og:url"                content="<?="http://".$_SERVER[HTTP_HOST].$_SERVER[REQUEST_URI];?>" />
<meta property="og:site_name"          content="Музыкальные альбомы" />
<meta property="og:type"               content="article" />
<meta property="og:title"              content="<?=$title;?>" />
<meta property="og:description"        content="<?=$desc;?>" />
<meta property="og:image"              content="<?=$image;?>" />

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@kendirbaev11">
<meta name="twitter:creator" content="@kendirbaev11">
<meta name="twitter:title" content="<?=$title;?>">
<meta name="twitter:description" content="<?=$desc;?>">
<meta name="twitter:image" content="<?=$image;?>">

<?php include('header_part2.php'); ?>

<body class="loading detail">

    <main class="smooth">
        <section class="content">

            <div class="sponsor">
                <p>
                    <span>designed and developed by </span>
                    <a href="http://ulut.kg/" target="_blank">
                        <img src="img/ulut-dark.png" alt="Ulut Soft"/>
                    </a>
                </p>
            </div>

            <div class="inner clearfix">
                <h1><?=$title;?></h1>

                <div class="dt-content">
                    <p><?=$desc;?></p>
                    <p class="date"><span>Дата Выпуска:</span> <?=$date;?></p>

                    <?php if ($itunes) { ?>
                        <div class="md-embed">
                            <iframe src="<?=$itunes;?>" frameborder="0" allowfullscreen style="width: 100%; height: 500px;"></iframe>
                        </div>
                    <?php } ?>

                    <ul class="md-actions">
                        <li class="download">
                            <a href="<?=$link;?>" target="_blank">
                                <div class="button-content">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-298 388.1 14.9 16.9" xml:space="preserve">
<path d="M-283.7,395.9h-12.1l6.4-6.7c0.3-0.3,0.3-0.7,0-1c-0.3-0.3-0.7-0.3-0.9,0l-7.5,7.8c-0.1,0.1-0.1,0.2-0.2,0.3
	c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0.1,0.2,0.1,0.2l7.4,7.7c0.1,0.1,0.3,0.2,0.5,0.2
	s0.3-0.1,0.5-0.2c0.3-0.3,0.3-0.7,0-1l-6.3-6.6h12.1c0.4,0,0.7-0.3,0.7-0.7S-283.4,395.9-283.7,395.9z"></path>
</svg>
                                    <div class="button-text">Скачать</div>
                                </div>
                            </a>
                        </li>
                        <li class="share">
                            <div class="button-content">
                                <a href="#" class="goodshare" data-type="tw">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-297 390.3 16.7 13.7" style="enable-background:new -297 390.3 16.7 13.7;" xml:space="preserve">
<path d="M-280.7,390.5c-0.7,0.4-1.4,0.7-2.2,0.8c-0.6-0.7-1.5-1.1-2.5-1.1c-1.9,0-3.4,1.5-3.4,3.5c0,0.3,0,0.5,0.1,0.8
c-2.9-0.1-5.4-1.5-7.1-3.6c-0.3,0.5-0.5,1.1-0.5,1.7c0,1.2,0.6,2.3,1.5,2.9c-0.6,0-1.1-0.2-1.6-0.4v0c0,1.7,1.2,3.1,2.8,3.4
c-0.3,0.1-0.6,0.1-0.9,0.1c-0.2,0-0.4,0-0.6-0.1c0.4,1.4,1.7,2.4,3.2,2.4c-1.2,0.9-2.7,1.5-4.3,1.5c-0.3,0-0.6,0-0.8,0
c1.5,1,3.3,1.6,5.3,1.6c6.3,0,9.8-5.3,9.8-9.8l0-0.4c0.7-0.5,1.3-1.1,1.7-1.8c-0.6,0.3-1.3,0.5-2,0.5
C-281.5,392-281,391.4-280.7,390.5z"></path>
</svg>
                                </a>
                                <a href="#" class="goodshare" data-type="fb">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="9.88" height="18.532" viewBox="0 0 9.88 18.532">
                                        <path d="M9.496,0.018 L7.134,0.014 C4.479,0.014 2.764,1.802 2.764,4.569 L2.764,6.669 L0.389,6.669 C0.184,6.669 0.017,6.838 0.017,7.047 L0.017,10.090 C0.017,10.298 0.184,10.467 0.389,10.467 L2.764,10.467 L2.764,18.146 C2.764,18.354 2.930,18.523 3.136,18.523 L6.235,18.523 C6.440,18.523 6.606,18.354 6.606,18.146 L6.606,10.467 L9.384,10.467 C9.589,10.467 9.755,10.298 9.755,10.090 L9.756,7.047 C9.756,6.947 9.717,6.851 9.647,6.780 C9.578,6.709 9.483,6.669 9.385,6.669 L6.606,6.669 L6.606,4.889 C6.606,4.033 6.807,3.599 7.904,3.599 L9.496,3.598 C9.701,3.598 9.867,3.429 9.867,3.221 L9.867,0.395 C9.867,0.187 9.701,0.018 9.496,0.018 Z"></path>
                                    </svg>
                                </a>
                                <div class="button-text">Поделиться</div>
                            </div>
                        </li>
                        <li class="close md-close">
                            <div class="button-content">
                                <a href="index.php">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-298 388.1 14.9 16.9" xml:space="preserve">
<path d="M-283.7,395.9h-12.1l6.4-6.7c0.3-0.3,0.3-0.7,0-1c-0.3-0.3-0.7-0.3-0.9,0l-7.5,7.8c-0.1,0.1-0.1,0.2-0.2,0.3
	c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0.1,0.2,0.1,0.2l7.4,7.7c0.1,0.1,0.3,0.2,0.5,0.2
	s0.3-0.1,0.5-0.2c0.3-0.3,0.3-0.7,0-1l-6.3-6.6h12.1c0.4,0,0.7-0.3,0.7-0.7S-283.4,395.9-283.7,395.9z"></path>
</svg>
                                </a>
                                <div class="button-text">Назад</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    </main>

<!--    <div class="md-overlay"></div>-->

<?php include('footer.php'); ?>