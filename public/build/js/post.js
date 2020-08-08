(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/post"],{

/***/ "./assets/js/post.js":
/*!***************************!*\
  !*** ./assets/js/post.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, Routing) {if ($('#postContentNonEditable').is(":hidden")) {
  $('#editPost').html('Cancel');
}

;

window.toggleEditPost = function () {
  var postContentEditable = $('#postContentEditable');
  var postContentNonEditable = $('#postContentNonEditable');
  var text = $('#post_text').text().trim();
  var editPostButton = $('#editPost');

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

$(document).on('click', '.js-post-like-link', function () {
  var element = $(this);
  element.addClass('disabled');
  $.ajax({
    type: 'GET',
    url: Routing.generate('likes_like', {
      'id': $(this).attr("data-post-id")
    }),
    success: function success(data) {
      element.removeClass(['btn-white', 'js-post-like-link']);
      element.addClass(['btn-outline-primary', 'js-post-unlike-link']);
      element.children().first().next().text(data['count']);
    },
    error: function error(xhr, ajaxOptions, thrownError) {
      if (xhr.status === 401) {
        return window.location.replace(Routing.generate('security_login'));
      }
    }
  });
  element.removeClass('disabled');
});
$(document).on('click', '.js-post-unlike-link', function () {
  var element = $(this);
  element.addClass('disabled');
  $.ajax({
    type: 'GET',
    url: Routing.generate('likes_unlike', {
      'id': $(this).attr("data-post-id")
    }),
    success: function success(data) {
      element.removeClass(['btn-outline-primary', 'js-post-unlike-link']);
      element.addClass(['btn-white', 'js-post-like-link']);
      element.children().first().next().text(data['count']);
    },
    error: function error(xhr, ajaxOptions, thrownError) {
      if (xhr.status === 401) {
        return window.location.replace(Routing.generate('security_login'));
      }
    }
  });
  element.removeClass('disabled');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! router */ "./assets/js/router.js")))

/***/ })

},[["./assets/js/post.js","runtime","vendors~app~js/notification~js/post~js/profile","js/notification~js/post~js/profile"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9zdC5qcyJdLCJuYW1lcyI6WyIkIiwiaXMiLCJodG1sIiwid2luZG93IiwidG9nZ2xlRWRpdFBvc3QiLCJwb3N0Q29udGVudEVkaXRhYmxlIiwicG9zdENvbnRlbnROb25FZGl0YWJsZSIsInRleHQiLCJ0cmltIiwiZWRpdFBvc3RCdXR0b24iLCJzaG93IiwiaGlkZSIsImRvY3VtZW50Iiwib24iLCJlbGVtZW50IiwiYWRkQ2xhc3MiLCJhamF4IiwidHlwZSIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImF0dHIiLCJzdWNjZXNzIiwiZGF0YSIsInJlbW92ZUNsYXNzIiwiY2hpbGRyZW4iLCJmaXJzdCIsIm5leHQiLCJlcnJvciIsInhociIsImFqYXhPcHRpb25zIiwidGhyb3duRXJyb3IiLCJzdGF0dXMiLCJsb2NhdGlvbiIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHNEQUFJQSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsRUFBN0IsQ0FBZ0MsU0FBaEMsQ0FBSixFQUFnRDtBQUM1Q0QsR0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlRSxJQUFmLENBQW9CLFFBQXBCO0FBQ0g7O0FBQUE7O0FBRURDLE1BQU0sQ0FBQ0MsY0FBUCxHQUF3QixZQUFXO0FBQy9CLE1BQU1DLG1CQUFtQixHQUFHTCxDQUFDLENBQUMsc0JBQUQsQ0FBN0I7QUFDQSxNQUFNTSxzQkFBc0IsR0FBR04sQ0FBQyxDQUFDLHlCQUFELENBQWhDO0FBQ0EsTUFBTU8sSUFBSSxHQUFHUCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCTyxJQUFoQixHQUF1QkMsSUFBdkIsRUFBYjtBQUNBLE1BQU1DLGNBQWMsR0FBR1QsQ0FBQyxDQUFDLFdBQUQsQ0FBeEI7O0FBQ0EsTUFBSVMsY0FBYyxDQUFDUCxJQUFmLEdBQXNCTSxJQUF0QixPQUFpQyxNQUFyQyxFQUE2QztBQUN6Q0gsdUJBQW1CLENBQUNLLElBQXBCO0FBQ0FK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QUNIO0FBQ0o7QUFaRSxHQUFQO0FBY0FOLFNBQU8sQ0FBQ1UsV0FBUixDQUFvQixVQUFwQjtBQUNILENBbEJELEUiLCJmaWxlIjoianMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmICgkKCcjcG9zdENvbnRlbnROb25FZGl0YWJsZScpLmlzKFwiOmhpZGRlblwiKSkge1xuICAgICQoJyNlZGl0UG9zdCcpLmh0bWwoJ0NhbmNlbCcpO1xufTtcblxud2luZG93LnRvZ2dsZUVkaXRQb3N0ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcG9zdENvbnRlbnRFZGl0YWJsZSA9ICQoJyNwb3N0Q29udGVudEVkaXRhYmxlJyk7XG4gICAgY29uc3QgcG9zdENvbnRlbnROb25FZGl0YWJsZSA9ICQoJyNwb3N0Q29udGVudE5vbkVkaXRhYmxlJyk7XG4gICAgY29uc3QgdGV4dCA9ICQoJyNwb3N0X3RleHQnKS50ZXh0KCkudHJpbSgpO1xuICAgIGNvbnN0IGVkaXRQb3N0QnV0dG9uID0gJCgnI2VkaXRQb3N0Jyk7XG4gICAgaWYgKGVkaXRQb3N0QnV0dG9uLmh0bWwoKS50cmltKCkgPT09ICdFZGl0Jykge1xuICAgICAgICBwb3N0Q29udGVudEVkaXRhYmxlLnNob3coKTtcbiAgICAgICAgcG9zdENvbnRlbnROb25FZGl0YWJsZS5oaWRlKCk7XG4gICAgICAgIGVkaXRQb3N0QnV0dG9uLmh0bWwoJ0NhbmNlbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RDb250ZW50RWRpdGFibGUuaGlkZSgpO1xuICAgICAgICBwb3N0Q29udGVudE5vbkVkaXRhYmxlLnNob3coKTtcbiAgICAgICAgcG9zdENvbnRlbnROb25FZGl0YWJsZS5odG1sKHRleHQpO1xuICAgICAgICBlZGl0UG9zdEJ1dHRvbi5odG1sKCdFZGl0Jyk7XG4gICAgfVxufTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1wb3N0LWxpa2UtbGluaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbGlrZXNfbGlrZScsIHsnaWQnOiAkKHRoaXMpLmF0dHIoXCJkYXRhLXBvc3QtaWRcIil9KSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoWydidG4td2hpdGUnLCAnanMtcG9zdC1saWtlLWxpbmsnXSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKFsnYnRuLW91dGxpbmUtcHJpbWFyeScsICdqcy1wb3N0LXVubGlrZS1saW5rJ10pO1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbigpLmZpcnN0KCkubmV4dCgpLnRleHQoZGF0YVsnY291bnQnXSk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgICAgaWYoeGhyLnN0YXR1cz09PTQwMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShSb3V0aW5nLmdlbmVyYXRlKCdzZWN1cml0eV9sb2dpbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1wb3N0LXVubGlrZS1saW5rJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudCA9ICQodGhpcyk7XG4gICAgZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdsaWtlc191bmxpa2UnLCB7J2lkJzogJCh0aGlzKS5hdHRyKFwiZGF0YS1wb3N0LWlkXCIpfSksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFsnYnRuLW91dGxpbmUtcHJpbWFyeScsICdqcy1wb3N0LXVubGlrZS1saW5rJ10pO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhbJ2J0bi13aGl0ZScsICdqcy1wb3N0LWxpa2UtbGluayddKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4oKS5maXJzdCgpLm5leHQoKS50ZXh0KGRhdGFbJ2NvdW50J10pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgYWpheE9wdGlvbnMsIHRocm93bkVycm9yKSB7XG4gICAgICAgICAgICBpZih4aHIuc3RhdHVzPT09NDAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFJvdXRpbmcuZ2VuZXJhdGUoJ3NlY3VyaXR5X2xvZ2luJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==