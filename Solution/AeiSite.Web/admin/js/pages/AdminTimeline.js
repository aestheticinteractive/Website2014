
/*====================================================================================================*/
Aei.Pages.AdminTimeline = function(projects, events) {
	this._timeline = new Aei.Timeline(projects, events);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.AdminTimeline.prototype.onRender = function() {
	this._timeline.build('timeline', 300);
};
