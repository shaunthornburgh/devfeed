(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/profile"],{

/***/ "./assets/js/profile.js":
/*!******************************!*\
  !*** ./assets/js/profile.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, Routing) {$(document).on('click', '.js-user-follow-link', function () {
  var element = $(this);
  element.addClass('disabled');
  $.ajax({
    type: 'GET',
    url: Routing.generate('following_follow', {
      'id': $(this).attr("data-user-id")
    }),
    success: function success(data) {
      element.removeClass(['js-user-follow-link', 'btn-primary']);
      element.addClass(['js-user-unfollow-link', 'btn-danger']);
      element.text('Unfollow');
    },
    error: function error(xhr, ajaxOptions, thrownError) {
      if (xhr.status === 401) {
        return window.location.replace(Routing.generate('security_login'));
      }
    }
  });
  element.removeClass('disabled');
});
$(document).on('click', '.js-user-unfollow-link', function () {
  var element = $(this);
  element.addClass('disabled');
  $.ajax({
    type: 'GET',
    url: Routing.generate('following_unfollow', {
      'id': $(this).attr("data-user-id")
    }),
    success: function success(data) {
      element.removeClass(['js-user-unfollow-link', 'btn-danger']);
      element.addClass(['js-user-follow-link', 'btn-primary']);
      element.text('Follow');
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

},[["./assets/js/profile.js","runtime","vendors~app~js/notification~js/post~js/profile","js/notification~js/post~js/profile"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImVsZW1lbnQiLCJhZGRDbGFzcyIsImFqYXgiLCJ0eXBlIiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwiYXR0ciIsInN1Y2Nlc3MiLCJkYXRhIiwicmVtb3ZlQ2xhc3MiLCJ0ZXh0IiwiZXJyb3IiLCJ4aHIiLCJhamF4T3B0aW9ucyIsInRocm93bkVycm9yIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsbURBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHNCQUF4QixFQUFnRCxZQUFXO0FBQ3ZELE1BQU1DLE9BQU8sR0FBR0gsQ0FBQyxDQUFDLElBQUQsQ0FBakI7QUFDQUcsU0FBTyxDQUFDQyxRQUFSLENBQWlCLFVBQWpCO0FBQ0FKLEdBQUMsQ0FBQ0ssSUFBRixDQUFPO0FBQ0hDLFFBQUksRUFBRSxLQURIO0FBRUhDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGtCQUFqQixFQUFxQztBQUFDLFlBQU1ULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLGNBQWI7QUFBUCxLQUFyQyxDQUZGO0FBR0hDLFdBQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUNyQlQsYUFBTyxDQUFDVSxXQUFSLENBQW9CLENBQUMscUJBQUQsRUFBd0IsYUFBeEIsQ0FBcEI7QUFDQVYsYUFBTyxDQUFDQyxRQUFSLENBQWlCLENBQUMsdUJBQUQsRUFBMEIsWUFBMUIsQ0FBakI7QUFDQUQsYUFBTyxDQUFDVyxJQUFSLENBQWEsVUFBYjtBQUNILEtBUEU7QUFRSEMsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QkMsV0FBNUIsRUFBeUM7QUFDNUMsVUFBR0YsR0FBRyxDQUFDRyxNQUFKLEtBQWEsR0FBaEIsRUFBcUI7QUFDakIsZUFBT0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QmQsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGdCQUFqQixDQUF4QixDQUFQO0FBQ0g7QUFDSjtBQVpFLEdBQVA7QUFjQU4sU0FBTyxDQUFDVSxXQUFSLENBQW9CLFVBQXBCO0FBQ0gsQ0FsQkQ7QUFvQkFiLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHdCQUF4QixFQUFrRCxZQUFXO0FBQ3pELE1BQU1DLE9BQU8sR0FBR0gsQ0FBQyxDQUFDLElBQUQsQ0FBakI7QUFDQUcsU0FBTyxDQUFDQyxRQUFSLENBQWlCLFVBQWpCO0FBQ0FKLEdBQUMsQ0FBQ0ssSUFBRixDQUFPO0FBQ0hDLFFBQUksRUFBRSxLQURIO0FBRUhDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLG9CQUFqQixFQUF1QztBQUFDLFlBQU1ULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLGNBQWI7QUFBUCxLQUF2QyxDQUZGO0FBR0hDLFdBQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUNyQlQsYUFBTyxDQUFDVSxXQUFSLENBQW9CLENBQUMsdUJBQUQsRUFBMEIsWUFBMUIsQ0FBcEI7QUFDQVYsYUFBTyxDQUFDQyxRQUFSLENBQWlCLENBQUMscUJBQUQsRUFBd0IsYUFBeEIsQ0FBakI7QUFDQUQsYUFBTyxDQUFDVyxJQUFSLENBQWEsUUFBYjtBQUNILEtBUEU7QUFRSEMsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QkMsV0FBNUIsRUFBeUM7QUFDNUMsVUFBR0YsR0FBRyxDQUFDRyxNQUFKLEtBQWEsR0FBaEIsRUFBcUI7QUFDakIsZUFBT0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QmQsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGdCQUFqQixDQUF4QixDQUFQO0FBQ0g7QUFDSjtBQVpFLEdBQVA7QUFjQU4sU0FBTyxDQUFDVSxXQUFSLENBQW9CLFVBQXBCO0FBQ0gsQ0FsQkQsRSIsImZpbGUiOiJqcy9wcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy11c2VyLWZvbGxvdy1saW5rJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudCA9ICQodGhpcyk7XG4gICAgZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdmb2xsb3dpbmdfZm9sbG93JywgeydpZCc6ICQodGhpcykuYXR0cihcImRhdGEtdXNlci1pZFwiKX0pLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhbJ2pzLXVzZXItZm9sbG93LWxpbmsnLCAnYnRuLXByaW1hcnknXSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKFsnanMtdXNlci11bmZvbGxvdy1saW5rJywgJ2J0bi1kYW5nZXInXSk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHQoJ1VuZm9sbG93Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICAgIGlmKHhoci5zdGF0dXM9PT00MDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoUm91dGluZy5nZW5lcmF0ZSgnc2VjdXJpdHlfbG9naW4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuanMtdXNlci11bmZvbGxvdy1saW5rJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudCA9ICQodGhpcyk7XG4gICAgZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdmb2xsb3dpbmdfdW5mb2xsb3cnLCB7J2lkJzogJCh0aGlzKS5hdHRyKFwiZGF0YS11c2VyLWlkXCIpfSksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFsnanMtdXNlci11bmZvbGxvdy1saW5rJywgJ2J0bi1kYW5nZXInXSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKFsnanMtdXNlci1mb2xsb3ctbGluaycsICdidG4tcHJpbWFyeSddKTtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dCgnRm9sbG93Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICAgIGlmKHhoci5zdGF0dXM9PT00MDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoUm91dGluZy5nZW5lcmF0ZSgnc2VjdXJpdHlfbG9naW4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9