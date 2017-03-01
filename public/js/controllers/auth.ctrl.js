angular
	.module('whatToWatch')
	.controller('authenticationController', authenticationController)

function authenticationController (Auth, User, $state) {
	var self = this;

	self.signIn = function () {
		Auth.$signInWithEmailAndPassword(self.email, self.password)
			.then (function (user) {
				$state.go('home');
				resetCredentials();
			})
			.catch(function (error) {
				self.error = error
			})
	}

	self.createUser = function () {

		Auth.$createUserWithEmailAndPassword(self.email, self.password)
			.then(function (user) {
				// resetCredentials();
				console.log(user);
				User.create({
					uid: user.uid
				}).then(function (dbUser) {
					$state.go('home')
				}).catch(function (err) {
					console.log(err)
				})


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