(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/profile"],{

/***/ "./assets/js/profile.js":
/*!******************************!*\
  !*** ./assets/js/profile.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, Routing) {$(document).on('click', '.user-follow-link', function () {
  var element = $(this);
  element.addClass('disabled');
  $.ajax({
    type: 'GET',
    url: Routing.generate('following_follow', {
      'id': $(this).attr("data-user-id")
    }),
    success: function success(data) {
      console.log('here');
      element.removeClass(['user-follow-link', 'btn-primary']);
      element.addClass(['user-unfollow-link', 'btn-danger']);
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
$(document).on('click', '.user-unfollow-link', function () {
  var element = $(this);
  element.addClass('disabled');
  $.ajax({
    type: 'GET',
    url: Routing.generate('following_unfollow', {
      'id': $(this).attr("data-user-id")
    }),
    success: function success(data) {
      console.log('here');
      element.removeClass(['user-unfollow-link', 'btn-danger']);
      element.addClass(['user-follow-link', 'btn-primary']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImVsZW1lbnQiLCJhZGRDbGFzcyIsImFqYXgiLCJ0eXBlIiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwiYXR0ciIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUNsYXNzIiwidGV4dCIsImVycm9yIiwieGhyIiwiYWpheE9wdGlvbnMiLCJ0aHJvd25FcnJvciIsInN0YXR1cyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUFBLG1EQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixtQkFBeEIsRUFBNkMsWUFBVztBQUNwRCxNQUFNQyxPQUFPLEdBQUdILENBQUMsQ0FBQyxJQUFELENBQWpCO0FBQ0FHLFNBQU8sQ0FBQ0MsUUFBUixDQUFpQixVQUFqQjtBQUNBSixHQUFDLENBQUNLLElBQUYsQ0FBTztBQUNIQyxRQUFJLEVBQUUsS0FESDtBQUVIQyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixrQkFBakIsRUFBcUM7QUFBQyxZQUFNVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLElBQVIsQ0FBYSxjQUFiO0FBQVAsS0FBckMsQ0FGRjtBQUdIQyxXQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDckJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQVgsYUFBTyxDQUFDWSxXQUFSLENBQW9CLENBQUMsa0JBQUQsRUFBcUIsYUFBckIsQ0FBcEI7QUFDQVosYUFBTyxDQUFDQyxRQUFSLENBQWlCLENBQUMsb0JBQUQsRUFBdUIsWUFBdkIsQ0FBakI7QUFDQUQsYUFBTyxDQUFDYSxJQUFSLENBQWEsVUFBYjtBQUNILEtBUkU7QUFTSEMsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QkMsV0FBNUIsRUFBeUM7QUFDNUMsVUFBR0YsR0FBRyxDQUFDRyxNQUFKLEtBQWEsR0FBaEIsRUFBcUI7QUFDakIsZUFBT0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QmhCLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixnQkFBakIsQ0FBeEIsQ0FBUDtBQUNIO0FBQ0o7QUFiRSxHQUFQO0FBZUFOLFNBQU8sQ0FBQ1ksV0FBUixDQUFvQixVQUFwQjtBQUNILENBbkJEO0FBcUJBZixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixxQkFBeEIsRUFBK0MsWUFBVztBQUN0RCxNQUFNQyxPQUFPLEdBQUdILENBQUMsQ0FBQyxJQUFELENBQWpCO0FBQ0FHLFNBQU8sQ0FBQ0MsUUFBUixDQUFpQixVQUFqQjtBQUNBSixHQUFDLENBQUNLLElBQUYsQ0FBTztBQUNIQyxRQUFJLEVBQUUsS0FESDtBQUVIQyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixvQkFBakIsRUFBdUM7QUFBQyxZQUFNVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLElBQVIsQ0FBYSxjQUFiO0FBQVAsS0FBdkMsQ0FGRjtBQUdIQyxXQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDckJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQVgsYUFBTyxDQUFDWSxXQUFSLENBQW9CLENBQUMsb0JBQUQsRUFBdUIsWUFBdkIsQ0FBcEI7QUFDQVosYUFBTyxDQUFDQyxRQUFSLENBQWlCLENBQUMsa0JBQUQsRUFBcUIsYUFBckIsQ0FBakI7QUFDQUQsYUFBTyxDQUFDYSxJQUFSLENBQWEsUUFBYjtBQUNILEtBUkU7QUFTSEMsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QkMsV0FBNUIsRUFBeUM7QUFDNUMsVUFBR0YsR0FBRyxDQUFDRyxNQUFKLEtBQWEsR0FBaEIsRUFBcUI7QUFDakIsZUFBT0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QmhCLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixnQkFBakIsQ0FBeEIsQ0FBUDtBQUNIO0FBQ0o7QUFiRSxHQUFQO0FBZUFOLFNBQU8sQ0FBQ1ksV0FBUixDQUFvQixVQUFwQjtBQUNILENBbkJELEUiLCJmaWxlIjoianMvcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudXNlci1mb2xsb3ctbGluaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZm9sbG93aW5nX2ZvbGxvdycsIHsnaWQnOiAkKHRoaXMpLmF0dHIoXCJkYXRhLXVzZXItaWRcIil9KSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFsndXNlci1mb2xsb3ctbGluaycsICdidG4tcHJpbWFyeSddKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoWyd1c2VyLXVuZm9sbG93LWxpbmsnLCAnYnRuLWRhbmdlciddKTtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dCgnVW5mb2xsb3cnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIGFqYXhPcHRpb25zLCB0aHJvd25FcnJvcikge1xuICAgICAgICAgICAgaWYoeGhyLnN0YXR1cz09PTQwMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShSb3V0aW5nLmdlbmVyYXRlKCdzZWN1cml0eV9sb2dpbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy51c2VyLXVuZm9sbG93LWxpbmsnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gJCh0aGlzKTtcbiAgICBlbGVtZW50LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2ZvbGxvd2luZ191bmZvbGxvdycsIHsnaWQnOiAkKHRoaXMpLmF0dHIoXCJkYXRhLXVzZXItaWRcIil9KSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFsndXNlci11bmZvbGxvdy1saW5rJywgJ2J0bi1kYW5nZXInXSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKFsndXNlci1mb2xsb3ctbGluaycsICdidG4tcHJpbWFyeSddKTtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dCgnRm9sbG93Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBhamF4T3B0aW9ucywgdGhyb3duRXJyb3IpIHtcbiAgICAgICAgICAgIGlmKHhoci5zdGF0dXM9PT00MDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoUm91dGluZy5nZW5lcmF0ZSgnc2VjdXJpdHlfbG9naW4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9