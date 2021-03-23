
$( document ).ready(function() {
    console.log('hello');

    // Menu open function
    function openMenu() {
        $('.menu-drawer').addClass('menu-opened');
        $('.overlay').show();
    }
    function closeMenu() {
        $('.menu-drawer').removeClass('menu-opened');
        $('.overlay').hide();
    }
   
    // Menu trigger function
    $('.menu-drawer-trigger').on('click', function() {
        event.preventDefault();
        if ($(this).hasClass('menu-open')) {
            closeMenu();
            $(this).removeClass('menu-open');
        } else {
            $(this).addClass('menu-open');
            openMenu();
        }
    });


    // Menu open function
    function openCartMenu() {
        $('.cart-drawer').addClass('cart-opened');
        $('.overlay').show();
    }
    function closeCartMenu() {
        $('.cart-drawer').removeClass('cart-opened');
        $('.overlay').hide();
    }
       
    // $('.cart-link').on('click', function() {
    //     event.preventDefault();
    //     openCartMenu()
    // }); 

    // $('.close-cart').on('click', function() {
    //     event.preventDefault();
    //     closeCartMenu()
    // }); 
    // Overlay menu close function
    $('.overlay').on('click', function() {
            closeMenu();
    }); 

});
