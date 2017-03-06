angular
	.module('takeOne')
	.factory('Auth', AuthFactory)
	.run(function () {
	  // Initialize Firebase
		var config = {
		    apiKey: "AIzaSyDNwmvpZVGyAZaBvvJt2G4mtXOkkMuIyz8",
		    authDomain: "takeOne-d236a.firebaseapp.com",
		    databaseURL: "https://takeOne-d236a.firebaseio.com",
		    storageBucket: "takeOne-d236a.appspot.com",
	    	messagingSenderId: "819366157812"
	    };

	    firebase.initializeApp(config);		
	})


function AuthFactory ($firebaseAuth) {
	return $firebaseAuth()
}