function fetchNotificationCount() {
    $.ajax({
        type: 'GET',
        url: Routing.generate('notifications_unread'),
        success: function (data) {
            if (data['count'] > 0) {
                $('#notifications-count-badge')
                    .text(data['count'])
                    .show();
            } else {
                $('#notifications-count-badge')
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
        success: function (data) {
            $.each(data, function (key, notification) {
                _addNotification(notification);
                setTimeout(fetchNotifications, 5000);
            });
        }
    });
}

function _addNotification(notification) {
    var html = notificationTemplate(notification);

    console.log(html);
}

fetchNotificationCount();
fetchNotifications();

const notificationTemplate = (notification) => `
    <a class="list-group-item text-reset" href="#!">
        <div class="row">
            <div class="col-auto">
                <div class="avatar avatar-sm avatar-online">
                    <img class="avatar-img rounded-circle" src="../../../assets/img/avatars/profiles/avatar-1.jpg" alt="..." />
                </div>

            </div>
            <div class="col ml-n2">
                <h5 class="mb-1">
                    Dianna Smiley
                </h5>
                <p class="small text-gray-700 mb-0">
                    Liked your post
                </p>
                <small class="text-muted">
                    2m ago
                </small>

            </div>
        </div> 
    </a>
`;