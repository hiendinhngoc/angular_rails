angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])
.config([
.controller('MainCtrl', [
	'$scope',
	'posts'
	function($scope){
		$scope.posts = [
			{title: 'post 1', upvotes: 5},
			{title: 'post 2', upvotes: 2},
			{title: 'post 3', upvotes: 15},
			{title: 'post 4', upvotes: 9},
			{title: 'post 5', upvotes: 4}
		];
	$scope.addPost = function(){
		if (!$scope.title || $scope.title === '') { return; }
		posts.create({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0,
		});
		$scope.title = '';
		$scope.link = '';
	}

	$scope.incrementUpvotes = function(post){
		posts.upvote(post);
	}

	//$scope.posts = posts.posts;
}])]);