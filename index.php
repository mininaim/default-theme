<?php opcache_reset(); ?>
<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

?>


<?php

$page = @$_GET['page'];

require_once 'templates/commons/header.html';

switch ($page) {

        // ========================
        // default/home
        // ========================
    default:

        // alert
        require_once 'templates/components/alert.html';

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        #require_once 'templates/main-start.html';
        require_once 'templates/home/slider.html';
        require_once 'templates/home/intro.html';
        require_once 'templates/home/categories.html';
        require_once 'templates/home/featured.html';
        require_once 'templates/home/discount.html';
        require_once 'templates/home/best-seller.html';
        require_once 'templates/home/recently-arrived.html';
        require_once 'templates/home/partners.html';
        require_once 'templates/home/reviews.html';
        #require_once 'templates/main-end.html';

        #require_once 'templates/swiper.html';
        #require_once 'templates/snap-scrolling-test.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;



        // ========================
        // products
        // ========================
    case 'products':

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        require_once 'templates/products/hero.html';
        require_once 'templates/products/products-all.html';
        require_once 'templates/offcanvas/filter.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;


        // ========================
        // product
        // ========================
    case 'product':

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        #require_once 'templates/components/breadcrumb.html';
        require_once 'templates/products/products-single.html';
        require_once 'templates/products/products-single-options.html';
        require_once 'templates/products/products-single-tabs.html';
        require_once 'templates/components/related.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;




        // ========================
        // categories
        // ========================
    case 'categories':

        // shared files

        require_once 'templates/commons/header-menus.html';


        // specific files
        require_once 'templates/categories/categories-hero.html';
        require_once 'templates/categories/categories-all.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;

        // ========================
        // category
        // ========================
    case 'category':

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        require_once 'templates/categories/categories-single-hero.html';
        require_once 'templates/categories/categories-single.html';
        require_once 'templates/offcanvas/filter.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;


        // ========================
        // 404
        // ========================
    case '404':
        require_once 'templates/pages/404.html';
        break;


        // ========================
        // search results
        // ========================
    case 'search-results':

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        require_once 'templates/pages/search-results.html';
        require_once 'templates/offcanvas/filter.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;



        // ========================
        // search no results
        // ========================
    case 'search-no-results':

        // shared files

        require_once 'templates/commons/header-menus.html';


        // specific files
        # require_once 'templates/components/hero.html';

        require_once 'templates/pages/search-no-results.html';


        // shared files
        require_once 'templates/commons/footer-columns.html';

        break;

        // ========================
        // cart empty
        // ========================
    case 'cart-empty':

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        #require_once 'templates/components/hero.html';
        require_once 'templates/pages/cart-empty.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;

        // ========================
        // cart view
        // ========================
    case 'cart-view':

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        require_once 'templates/pages/cart-view.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;



        // ========================
        // faqs
        // ========================
    case 'faqs':

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        require_once 'templates/pages/faqs.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;


        // ========================
        // page-sample
        // ========================
    case 'page-sample':

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        require_once 'templates/pages/page-sample.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;


        // ========================
        // shipping
        // ========================
    case 'shipping':

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        require_once 'templates/pages/shipping.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;


        // ========================
        // account
        // ========================
    case 'account':

        // shared files
        require_once 'templates/commons/header-menus.html';


        // specific files
        require_once 'templates/pages/account.html';

        // shared files
        require_once 'templates/commons/footer-columns.html';
        break;
}

require_once 'templates/commons/footer.html';