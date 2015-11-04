angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])
.config([
.factory('posts', [ 
	'$http',
	function(){
	var o = {
		posts: []
	};
	return o;
	o.getAll = function(){
		return $http.get('/posts.json').success(function(data){
			angular.copy(data, o.posts);
		});
	};

	o.create = function(post){
		return $http.post('/posts.json', post).success(function(data){
			o.posts.push(data);
		});
	};

	o.upvote = function(post){
		return $http.put('/posts/' + post.id + '/upvote.json')
		.success(function(data){
			post.upvotes += 1;
		});
	};

	o.get = function(id){
		return $http.get('/posts/'+ id + '.json').then(function(res){
			return res.data;
		});
	};

	resole: {
		post: ['$stateParams', 'posts', function($stateParams, posts){
			return posts.get($stateParams.id);
		}];
	};

	o.addComment = function(id, comment){
		return $http.post('/posts/' + id + '/comments.json', comment);
	};

	o.upvoteComment = function(post, comment){
		return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json')
		.success(function(data){
			comment.upvotes += 1;
		});
	};
}])]);