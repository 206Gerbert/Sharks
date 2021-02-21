$(document).ready(() => {    

    const $page = $(`main > section[id="${window.location.pathname}"]`);

    if ($page.length) {
        $('main > section[id="/404"]').remove();
        $(document.scrollingElement).scrollTop($page.offset().top);
    } else {
        $('main > section[id!="/404"]').remove();
        $(document.scrollingElement).scrollTop($('main > section[id="/404"]').offset().top);
    }

    $('a[href]').on('click', function(e) {
        if ($page.length) e.preventDefault();
        $(this).blur();
        
        const destination = new URL($(this).attr('href'), window.location.origin);
        if (destination.pathname == window.location.pathname) return;

        $(document.scrollingElement).animate({ 
            scrollTop: $(`[id="${destination.pathname}"]`).offset().top 
        }, 1000, 'easeInOutCubic', () => {
            window.location.href = destination.href;
        });

    });

});