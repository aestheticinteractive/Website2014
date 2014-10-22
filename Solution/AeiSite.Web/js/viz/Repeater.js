
/*====================================================================================================*/
Aei.Repeater = function() {
	this._frameListeners = [];
	this._completeListeners = [];
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.addFrameListener = function(listener) {
	this._frameListeners.push(listener);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.addCompleteListener = function(listener) {
	this._completeListeners.push(listener);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.start = function(frequencyMs, deplayMs, durationMs) {
	this._frequencyMs = (frequencyMs || 30);
	this._durationMs = (durationMs || 0);
	this._startTime = (new Date()).getTime() + (deplayMs || 0);
	this._elapsedMs = 0;
	this._progress = 0;
	this._count = 0;
	this._handleFrame();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.stop = function() {
	if ( !this._timeout ) {
		return;
	}

	clearTimeout(this._timeout);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.getElapsedMs = function() {
	return this._elapsedMs;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.getCount = function() {
	return this._count;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype.getProgress = function() {
	return this._progress;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype._handleFrame = function() {
	var stop = false;
	var duraMs = this._durationMs;
	var elapMs = (new Date()).getTime()-this._startTime;

	if ( duraMs ) {
		if ( elapMs >= duraMs ) {
			stop = true;
			elapMs = duraMs;
		}

		this._progress = elapMs/duraMs;
	}
	
	if ( elapMs >= 0 ) { //not within delay time
		this._elapsedMs = elapMs;
		++this._count;
		this._callListeners(this._frameListeners);
	}

	if ( stop ) {
		this._callListeners(this._completeListeners);
		return;
	}
	
	////

	var me = this;

	var onTimeout = function() {
		me._handleFrame();
	};

	this._timeout = setTimeout(onTimeout, this._frequencyMs);
};



////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Repeater.prototype._callListeners = function(listeners) {
	for ( var i in listeners ) {
		listeners[i](this);
	}
};
