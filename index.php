<?php

$page = $_GET['page'];

require_once 'templates/commons/header.html';

switch ($page) {

        // ========================
        // default/home
        // ========================
    default:

        // shared files
        include_once 'templates/componments/alert.html';
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/home/slider.html';
        include_once 'templates/home/intro.html';
        include_once 'templates/home/categories.html';
        include_once 'templates/home/featured.html';
        include_once 'templates/home/discount.html';
        include_once 'templates/home/best-seller.html';
        include_once 'templates/home/recently-arrived.html';
        include_once 'templates/home/partners.html';
        include_once 'templates/home/reviews.html';

        #include_once 'templates/swiper.html';
        #include_once 'templates/snap-scrolling-test.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;



        // ========================
        // products
        // ========================
    case 'products':

        // shared files
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/products/hero.html';
        include_once 'templates/products/list.html';

        // shared files
        include_once 'templates/componments/filters-offcanvas.html';
        require_once 'templates/commons/footer-columns.html';
        break;


        // ========================
        // categories
        // ========================
    case 'categories':

        // shared files
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/categories/categories-hero.html';
        include_once 'templates/categories/categories-page.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;

        // ========================
        // category
        // ========================
    case 'category':

        // shared files
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/categories/category-hero.html';
        include_once 'templates/categories/category-page.html';


        // shared files
        include_once 'templates/componments/filters-offcanvas.html';
        require_once 'templates/commons/footer-columns.html';
        break;


        // ========================
        // 404
        // ========================
    case '404':
        include_once 'templates/pages/404.html';
        break;


        // ========================
        // search results
        // ========================
    case 'search-results':

        // shared files
        #include_once 'templates/componments/alert.html';
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/pages/search-results.html';

        // shared files
        include_once 'templates/componments/filters-offcanvas.html';
        require_once 'templates/commons/footer-columns.html';
        break;



        // ========================
        // search no results
        // ========================
    case 'search-no-results':

        // shared files
        #include_once 'templates/componments/alert.html';
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/componments/hero.html';
        include_once 'templates/pages/search-no-results.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;

        // ========================
        // cart empty
        // ========================
    case 'cart-empty':
        // shared files
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/componments/hero.html';
        include_once 'templates/pages/cart-empty.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;

        // ========================
        // cart view
        // ========================
    case 'cart-view':
        // shared files
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/pages/cart-view.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;



        // ========================
        // faqs
        // ========================
    case 'faqs':

        // shared files
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/pages/faqs.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;


        // ========================
        // page-sample
        // ========================
    case 'page-sample':

        // shared files
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/pages/page-sample.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;


        // ========================
        // shipping
        // ========================
    case 'shipping':

        // shared files
        include_once 'templates/componments/top-navigation.html';
        include_once 'templates/componments/cart-offcanvas.html';
        include_once 'templates/componments/main-navigation.html';
        include_once 'templates/componments/menu-offcanvas.html';

        // specific files
        include_once 'templates/pages/shipping.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;
}

require_once 'templates/commons/footer.html';




        // product-1
        // product-2
        // product-3
        // product-4

        // account