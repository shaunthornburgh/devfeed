function fetchNotificationStatus() {
    $.ajax({
        type: 'GET',
        url: Routing.generate('notifications_unread'),
        success: function (data) {
            if (data['count'] > 0) {
                $('#notifications-count-badge').text(data['count'])
                $('#notifications-count-badge').show();
            } else {
                $('#notifications-count-badge').hide()
            }
            setTimeout(fetchNotificationStatus, 5000);
        }
    });
}

fetchNotificationStatus();