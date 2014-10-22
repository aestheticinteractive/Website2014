
/*====================================================================================================*/
Aei.Repeater = function() {
	this._reset();
	this._events = new Aei.EventHandler();
};

Aei.Repeater.StartEvent = 'Repeater.Start';
Aei.Repeater.FrameEvent = 'Repeater.Frame';
Aei.Repeater.StopEvent = 'Repeater.Stop';


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.start = function(frequencyMs) {
	this._frequencyMs = (frequencyMs || 30);
	this._startTime = (new Date()).getTime();
	this._elapsedMs = 0;
	this._count = 0;
	this._isActive = true;
	this._events.dispatchEvent(Aei.Repeater.StartEvent, this);
	this._handleFrame();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.stop = function() {
	this._reset();

	if ( this._timeout ) {
		clearTimeout(this._timeout);
	}

	this._events.dispatchEvent(Aei.Repeater.StopEvent, this);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.isActive = function() {
	return this._isActive;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.getElapsedMs = function() {
	return this._elapsedMs;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.getCount = function() {
	return this._count;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.getEventHandler = function() {
	return this._events;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype._reset = function() {
	this._frequencyMs = 0;
	this._startTime = null;
	this._elapsedMs = 0;
	this._count = 0;
	this._isActive = false;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype._handleFrame = function() {
	var me = this;

	var onTimeout = function() {
		me._handleFrame();
	};

	this._count++;
	this._elapsedMs = (new Date()).getTime()-this._startTime;
	this._events.dispatchEvent(Aei.Repeater.FrameEvent, this);
	
	if ( this._isActive ) {
		this._timeout = setTimeout(onTimeout, this._frequencyMs);
	}
};
