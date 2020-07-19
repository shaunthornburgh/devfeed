function fetchNotificationStatus() {
    $.ajax({
        type: 'GET',
        url: Routing.generate('notifications_unread'),
        success: function (data) {
            if (data.count['count'] > 0) {
                $('#notifications-icon').after('<span class="badge badge-soft-info" id="notifications-count-badge">' + data.count['count'] + '</span>');
            } else {
                $('#notifications-count-badge').remove();
            }
            setTimeout(fetchNotificationStatus, 5000);
        }
    });
}

fetchNotificationStatus();