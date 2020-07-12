$(document).on('click', '.user-follow-link', function() {
    const element = $(this);
    element.addClass('disabled');
    $.ajax({
        type: 'GET',
        url: Routing.generate('following_follow', {'id': $(this).attr("data-user-id")}),
        success: function (data) {
            console.log('here');
            element.removeClass(['user-follow-link', 'btn-primary']);
            element.addClass(['user-unfollow-link', 'btn-danger']);
            element.text('Unfollow');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if(xhr.status===401) {
                return window.location.replace(Routing.generate('security_login'));
            }
        }
    });
    element.removeClass('disabled');
});

$(document).on('click', '.user-unfollow-link', function() {
    const element = $(this);
    element.addClass('disabled');
    $.ajax({
        type: 'GET',
        url: Routing.generate('following_unfollow', {'id': $(this).attr("data-user-id")}),
        success: function (data) {
            console.log('here');
            element.removeClass(['user-unfollow-link', 'btn-danger']);
            element.addClass(['user-follow-link', 'btn-primary']);
            element.text('Follow');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if(xhr.status===401) {
                return window.location.replace(Routing.generate('security_login'));
            }
        }
    });
    element.removeClass('disabled');
});
