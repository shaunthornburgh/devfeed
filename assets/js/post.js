if ($('#postContentNonEditable').is(":hidden")) {
    $('#editPost').html('Cancel');
};

window.toggleEditPost = function() {
    const postContentEditable = $('#postContentEditable');
    const postContentNonEditable = $('#postContentNonEditable');
    const text = $('#post_text').text().trim();
    const editPostButton = $('#editPost');
    if (editPostButton.html().trim() === 'Edit') {
        postContentEditable.show();
        postContentNonEditable.hide();
        editPostButton.html('Cancel');
    } else {
        postContentEditable.hide();
        postContentNonEditable.show();
        postContentNonEditable.html(text);
        editPostButton.html('Edit');
    }
};

$(document).on('click', '.post-like-link', function() {
    const element = $(this);
    element.addClass('disabled');
    $.ajax({
        type: 'GET',
        url: Routing.generate('likes_like', {'id': $(this).attr("data-post-id")}),
        success: function (data) {
            element.removeClass(['btn-white', 'post-like-link']);
            element.addClass(['btn-outline-primary', 'post-unlike-link']);
            element.children().first().next().text(data['count']);

        },
        error: function (xhr, ajaxOptions, thrownError) {
            if(xhr.status===401) {
                return window.location.replace(Routing.generate('security_login'));
            }
        }
    });
    element.removeClass('disabled');
});

$(document).on('click', '.post-unlike-link', function() {
    const element = $(this);
    element.addClass('disabled');
    $.ajax({
        type: 'GET',
        url: Routing.generate('likes_unlike', {'id': $(this).attr("data-post-id")}),
        success: function (data) {
            element.removeClass(['btn-outline-primary', 'post-unlike-link']);
            element.addClass(['btn-white', 'post-like-link']);
            element.children().first().next().text(data['count']);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if(xhr.status===401) {
                return window.location.replace(Routing.generate('security_login'));
            }
        }
    });
    element.removeClass('disabled');
});
