<!doctype html>
<html lang="ar" dir="rtl">

<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Extra Meta-->
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="generator" content="">

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/favicon/site.webmanifest">
    <link rel="mask-icon" href="assets/favicon/safari-pinned-tab.svg" color="#8662a3">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <!-- <link rel="icon" href="assets/favicon/favicon.ico"> -->

    <!-- Open Graph -->
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="">
    <meta property="og:url" content="">
    <meta property="og:site_name" content="">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="ar_AR">
    <meta property="og:locale:alternate" content="en_US">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.rtl.min.css"
        integrity="sha384-OXTEbYDqaX2ZY/BOaZV/yFGChYHtrXH2nyXJ372n2Y8abBhrqacCEe+3qhSHtLjy" crossorigin="anonymous">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;600&display=swap" rel="stylesheet">

    <!-- Slick -->
    <!-- <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" /> -->

    <!-- Swiper -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />

    <!-- Iconoir & Feather -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css">
    <script src="addons/feather-icons/dist/feather.min.js"></script>

    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/fonts.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/global.css">

    <!-- Components -->
    <link rel="stylesheet" href="assets/css/components/triangle.css">
    <link rel="stylesheet" href="assets/css/components/effects.css">
    <link rel="stylesheet" href="assets/css/components/snap.css">
    <link rel="stylesheet" href="assets/css/components/links.css">
    <link rel="stylesheet" href="assets/css/components/decorators.css">
    <link rel="stylesheet" href="assets/css/components/swiper.css">
    <link rel="stylesheet" href="assets/css/components/css-filter.css">

    <!-- Title -->
    <title>زد - القالب الإفتراضي</title>

</head>

<body>

    <!-- Tomporary alert for Mobile Devices -->
    <!-- <section class="d-block d-lg-none">
        <div class="alert bg-gradient d-flex flex-column text-center" role="alert">
            <i class="iconoir-hand-brake iconoir-lg"></i>

            <p class="lead mt-3">
                فضلا التصفح من شاشة جهاز كمبيوتر، أو متصفح بأبعاد كبيرة، الموبايل قادم في القريب العاجل
            </p>
        </div>
    </section> -->

    <!-- Tomporary wrapper for Desktop & large Screens -->
    <!-- <section class="d-none d-lg-block"> -->

    <!-- Progress Loader -->
    <div id="progress"></div>

    <!-- Components -->
    <?php include_once 'templates/top-navigation.html'; ?>
    <?php include_once 'templates/main-navigation.html'; ?>

    <?php include_once 'templates/page-products-hero.html'; ?>
    <?php #include_once 'templates/breadcrumb.html'; 
    ?>
    <?php #include_once 'templates/no-results.html'; 
    ?>
    <?php #include_once 'templates/cart-empty.html'; 
    ?>
    <?php include_once 'templates/page-products-list.html';
    ?>

    <?php include_once 'templates/footer.html'; ?>
    <!-- End of Components -->

    <!-- </section> -->
    <!-- Tomporary wrapper for Desktop & large Screens -->

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous">
    </script>

    <!-- jQuery Dependecies -->
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

    <!-- Swiper -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

    <!-- JS Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
        integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"
        async></script>
    <!-- <script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script> -->
    <script src="addons/progressbar.js/dist/progressbar.min.js"></script>

    <!-- JS Application -->
    <script src="assets/js/app.js"></script>

</body>

</html>