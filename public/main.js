angular.module ('app', [])

angular.module('app')
		.controller('mainController', ['$scope', '$http', function($scope, $http){
			
			$scope.submission = {}
			

			$http.get('/getsubmissions')
				.then(function(returnData){

					$scope.submissions = returnData.Data
				})

			$scope.createSubmission = function(){

				



				$http.post('/submissions', $scope.submission) 

					.then(function(returnData){
					console.log(returnData.data )

					$scope.submissions = returnData.data
				})
			}

		}])

		//