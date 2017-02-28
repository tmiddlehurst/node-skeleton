angular
	.module('whatToWatch')
	.controller('authenticationController', authenticationController)

function authenticationController (Auth, $state) {
	var self = this;

	// self.signIn = function () {
	// 	Auth.$signInWithEmailAndPassword(self.email, self.password)
	// 		.then (function (user) {
	// 			$state.go('secret');
	// 			resetCredentials();
	// 		})
	// 		.catch(function (error) {
	// 			self.errorn = error
	// 		})
	// }

	self.createUser = function () {

		Auth.$createUserWithEmailAndPassword(self.email, self.password)
			.then(function (user) {
				resetCredentials();
				console.log(user);
			}).catch(function (error) {
				self.error = error;
			})
	}

	self.signOut = function () {
		Auth.$signOut();
		$state.go('home');
	}

	Auth.$onAuthStateChanged(function (user) {
		console.log(user);
		self.user = user;
	})

	function resetCredentials () {
		self.email = "";
		self.password = ""
	}
}