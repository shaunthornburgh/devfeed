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
$( document ).ready(function() {
    let url = Routing.generate('post_index');
    console.log(url);
});

$('#likePost').click(function () {
    //Routing.generate('$(this).attr("data-id");
    $.ajax({
        url: "./insert-like.php",
        type: "post",
        data: { id: videoID271, userID: userID271 },
        success: function (data) {
            var dataParsed = JSON.parse(data);
            console.log(dataParsed);
        }
    });

});