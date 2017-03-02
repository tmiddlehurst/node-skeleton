angular
	.module('takeOne')
	.controller('animationController', animationController)
function animationController () {
	var self = this;
	self.visible = false;

	self.showContent = function () {
		self.visible = true;
	}
}