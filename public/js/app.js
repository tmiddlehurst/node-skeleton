angular
	.module("takeOne", ['ui.router', 'firebase'])
	.config(MainRouter)
  .constant('API', '/api')
  .run(AuthCatcher)

function AuthCatcher ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    if (error === "AUTH_REQUIRED") $state.go('authrequired')
  })
}

function MainRouter ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  var authRequired = {
    currentAuth: function (Auth) {
      return Auth.$requireSignIn()
    }
  }

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/states/home.html',
      resolve: authRequired
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'js/states/signup.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/states/login.html'
    })
    .state('authrequired', {
      url: '/authrequired',
      templateUrl: 'js/states/authrequired.html'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'js/states/search.html',
      resolve: authRequired
    })
    .state('showSimilar', {
      url:'/showsimilar',
      templateUrl: '/js/states/showsimilar.html',
      resolve: authRequired
    })
    .state('customSearch', {
      url: '/customsearch',
      templateUrl: 'js/states/customsearch.html',
      resolve: authRequired
    })

}	