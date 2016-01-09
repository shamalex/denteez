// Get data
angular
		.module('myeventsApp',[])
		.controller('EventsController',['$scope','$http',function($scope,$http) {
			$('.loadePageImg').show();
			$scope.get = $http.get('http://jsonplaceholder.typicode.com/posts').
			success(function (data) {
				console.log("200 - success data")
				$scope.categories = data;
				$('.loadePageImg').hide();
			}).
			//errors desc
			error(function(data, status, headers, config) {
				$('#myModal').modal('toggle');
				$('.loadePageImg').hide();
				if(status == 401) {
					$('#myModal .modal-body h3').append(status + " - Authorization error");
				}
				else if(status == 500){
					$('#myModal .modal-body h3').append(status + " - Server internal error");
				}
				else if(status == 404){
					$('#myModal .modal-body h3').append(status + " - Page not found");
				}

			});
		}]);