function isLocalHost() {
    return document.location.href.indexOf('localhost') != -1;
}

function isDevelopment() {
    return document.location.href.indexOf('ondev.today') != -1;
}


$(document).ready(function()
{

    var base_url = $.environmentVar(
        "https://apibodegas.loadingplay.com/",
        "https://apibodegas.loadingplay.com/",
        "https://apibodegas.loadingplay.com/"
    );
    var app_public = $.environmentVar('tika','tika','tika');

    var config = {
        'app_public' : app_public,
        'base_url' : base_url,
        'maxProducts' : 6,
        'templateOrigin' : '#product-box',
        'tag' : 'tika%20chip',
        'ignore_stock' : true
    };

    // tika chip
    $('.tika-chip').ecommerce('product_box', config);

    // tika sticks
    config.tag = 'tika%20sticks';
    $('.tika-sticks').ecommerce('product_box', config);

    // tika tortikas
    config.tag = 'tika%20tortikas';
    $('.tika-tortikas').ecommerce('product_box', config);

    // tika crakers
    config.tag = 'tika%20crakers';
    $('.tika-crakers').ecommerce('product_box', config);

    // tika nuts
    config.tag = 'tika%20nuts';
    $('.tika-nuts').ecommerce('product_box', config);

    // tika home
    config.tag = 'tika%20home';
    $('.tika-home').ecommerce('product_box', config);

    // tika pop
    config.tag = 'Tika%20pop';
    $('.tika-pop').ecommerce('product_box', config);

    // tika nativas
    config.tag = 'Tika%20Nativas';
    $('.tika-nativas').ecommerce('product_box', config);


});
