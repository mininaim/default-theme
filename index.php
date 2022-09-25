<?php

$page = $_GET['page'];

require_once 'templates/commons/header.html';

// shared componments
include_once 'templates/componments/alert.html';
include_once 'templates/componments/top-navigation.html';
include_once 'templates/componments/cart-offcanvas.html';
include_once 'templates/componments/main-navigation.html';
include_once 'templates/componments/menu-offcanvas.html';

switch ($cmd) {

        // default/home
    default:
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
        break;

        // 404
    case '404':
        include_once 'templates/pages/404.html';
        break;

        // search no results
    case 'search-no-results':
        include_once 'templates/componments/hero.html';
        include_once 'templates/pages/search-no-results.html';
        break;

        // products
    case 'products':
        include_once 'templates/products/hero.html';
        include_once 'templates/products/list.html';
        include_once 'templates/products/filters-offcanvas.html';
        break;

        // categories
    case 'categories':
        include_once 'templates/categories/hero.html';
        include_once 'templates/categories/list.html';
        break;

        // category
    case 'category':
        include_once 'templates/categories/hero-single.html';
        include_once 'templates/categories/list-single.html';
        break;

        // cart empty
    case 'cart-empty':
        include_once 'templates/componments/hero.html';
        include_once 'templates/pages/cart-empty.html';
        break;

        // cart view
    case 'cart-view':
        include_once 'templates/pages/cart-view.html';
        break;
}

require_once 'templates/commons/footer-columns.html';
require_once 'templates/commons/footer.html';