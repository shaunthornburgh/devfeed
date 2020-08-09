function fetchNotificationCount() {
    $.ajax({
        type: 'GET',
        url: Routing.generate('notifications_unread'),
        dataType: 'json',
        success: function (data) {
            if (data['count'] > 0) {
                $('#js-notification-count-badge')
                    .text(data['count'])
                    .show();
            } else {
                $('#js-notification-count-badge')
                    .hide()
            }
            setTimeout(fetchNotificationCount, 5000);
        }
    });
}

function fetchNotifications() {
    $.ajax({
        type: 'GET',
        url: Routing.generate('notifications_all'),
        dataType: 'json',
        success: function (data) {
            $('#js-notification-list').empty();
            if(data.notifications.length === 0){
                let html = emptyNotification();
                $('#js-notification-list').append(html);
            } else {
                $.each(data.notifications, function (key, notification) {
                    var html;
                    console.log(notification.discr);
                    switch (notification.discr) {
                        case 'likedBy':
                            html = notificationRowTemplate(notification.id, notification.user, 'liked your post');
                            break;
                        case 'followedBy':
                            html = notificationRowTemplate(notification.id, notification.user, 'is now following you');
                            break;
                        default:
                            html = 'notification error';
                    }
                    $('#js-notification-list').append(html);
                });
            }
            setTimeout(fetchNotifications, 5000);
        }
    });
}

$(document).on('click', '.js-notification-acknowledge-all', function() {
    const element = $(this);
    element.removeClass('active');
    element.addClass('disabled');
    $.ajax({
        type: 'GET',
        url: Routing.generate('notifications_acknowledge_all'),
        success: function (data) {
            $('#js-notification-list').empty();
            $('#js-notification-count-badge')
                .hide()
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if(xhr.status===401) {
                return window.location.replace(Routing.generate('security_login'));
            }
        }
    });
    element.removeClass('disabled');
});


fetchNotificationCount();
fetchNotifications();

const notificationRowTemplate = (notification, user, action) => `
    <a class="list-group-item text-reset" href="#">
        <div class="row">
            <div class="col-auto">
                <div class="avatar avatar-sm avatar-online">
                    <img class="avatar-img rounded-circle" src="/build/images/avatars/profiles/avatar-1.jpg" alt="..." />
                </div>

            </div>
            <div class="col ml-n2">
                <h5 class="mb-1">
                    ${user.username}
                </h5>
                <p class="small text-gray-700 mb-0">
                    ${action}
                </p>
                <small class="text-muted">
                    2m ago
                </small>
            </div>
        </div> 
    </a>
`;

const emptyNotification = () => `
    <a class="list-group-item text-reset" href="#!">
        <div class="row">
            <div class="col-auto">
                <div class="avatar avatar-sm">
                    <div class="avatar-title font-size-lg bg-primary-soft rounded-circle text-primary">
                        <i class="fe fe-mail"></i>
                    </div>
                </div>
            </div>
            <div class="col ml-n2">
                <h5 class="mb-1">
                    You don't have any notifications.
                </h5>
                <p class="small text-gray-700 mb-0">
                    Any new notifications will appear here, check back again soon!
                </p>
            </div>
        </div>
    </a>
`;