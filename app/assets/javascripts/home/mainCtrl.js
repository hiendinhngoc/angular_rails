angular.module('flapperNews')
.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){
		resolve: {
			postPromise: ['posts', function(posts){
				return posts.getAll();
		}]
	};

	$scope.posts = posts.posts;

	$scope.addPost = function(){
		if (!$scope.title || $scope.title === '') { return; }
		posts.create({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0,
		});
		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post){
		posts.upvote(post);
	};

}]);