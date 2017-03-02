angular
	.module('takeOne')
	.controller('animationController', animationController)
function animationController () {
	var self = this;
	self.visible=true;

	self.showContent = function () {
		console.log(self.visible);
		self.visible = false;
		console.log(self.visible);
	}
}