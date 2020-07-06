if($('#postContentNonEditable').is(":hidden")) {
    $('#editPost').html('Cancel');
}
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
