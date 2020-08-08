$(document).on('click', '.js-user-follow-link', function() {
    const element = $(this);
    element.addClass('disabled');
    $.ajax({
        type: 'GET',
        url: Routing.generate('following_follow', {'id': $(this).attr("data-user-id")}),
        success: function (data) {
            element.removeClass(['js-user-follow-link', 'btn-primary']);
            element.addClass(['js-user-unfollow-link', 'btn-danger']);
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

$(document).on('click', '.js-user-unfollow-link', function() {
    const element = $(this);
    element.addClass('disabled');
    $.ajax({
        type: 'GET',
        url: Routing.generate('following_unfollow', {'id': $(this).attr("data-user-id")}),
        success: function (data) {
            element.removeClass(['js-user-unfollow-link', 'btn-danger']);
            element.addClass(['js-user-follow-link', 'btn-primary']);
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
