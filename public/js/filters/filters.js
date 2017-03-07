var app = angular.module('takeOne');

app.filter('youtubeEmbedUrl', function ($sce) {
	return function (trailerKey) {
		return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + trailerKey);
	};
})
// restrict movie title to 40char
app.filter('titleLength40', function (title) {
	return title.substr(0, 40) + '...'
})