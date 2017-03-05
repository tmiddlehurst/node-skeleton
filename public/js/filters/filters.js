var app = angular.module('takeOne');

app.filter('youtubeEmbedUrl', function ($sce) {
	return function (trailerKey) {
		return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + trailerKey);
	};
})