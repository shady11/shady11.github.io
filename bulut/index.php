<?php include('header.php'); ?>

<body class="loading">

<?php include('modal.php'); ?>

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
            <h1>Музыкальные альбомы</h1>

            <?php include('item.php'); ?>
        </div>

    </section>
</main>

<div class="md-overlay"></div><!-- the overlay element -->

<?php include('footer.php'); ?>