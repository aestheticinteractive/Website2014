
/*====================================================================================================*/
Aei.Anim = function(name, repeater) {
	this._name = name;
	this._repeat = repeater;
	this._events = new Aei.EventHandler();
	this.data = {};
};

Aei.Anim.StartEvent = 'Anim.Start';
Aei.Anim.FrameEvent = 'Anim.Frame';
Aei.Anim.StopEvent = 'Anim.Stop';
Aei.Anim.CompleteEvent = 'Anim.Complete';

Aei.Anim.EaseLinear = 'Linear';
Aei.Anim.EaseIn = 'In2';
Aei.Anim.EaseIn3 = 'In3';
Aei.Anim.EaseOut = 'Out2';
Aei.Anim.EaseOut3 = 'Out3';


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.start = function(valFrom, valTo, durationMs, easing, delayMs) {
	var me = this;
	var rep = this._repeat;
	var revEvt = rep.getEventHandler();
	
	var onFrame = function() {
		me._handleFrame();
	};

	if ( this._frameListenId ) {
		this.stop();
	}
	
	this._valFrom = Number(valFrom);
	this._valTo = Number(valTo);
	this._valRange = valTo-valFrom;
	this._durationMs = durationMs;
	this._easing = (easing || Aei.Anim.EaseLinear);
	this._progress = 0;
	this._startElapsedMs = rep.getElapsedMs()+(delayMs || 0);
	this._frameListenId = revEvt.addListener(Aei.Repeater.FrameEvent, onFrame);
	this._events.dispatchEvent(Aei.Anim.StartEvent, this);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.stop = function() {
	this._repeat.getEventHandler().removeListener(this._frameListenId);
	this._frameListenId = null;

	this._events.dispatchEvent(Aei.Anim.StopEvent, this);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.getProgress = function() {
	return this._progress;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.getValue = function() {
	var p = Aei.Anim.getEasedProgress(this._progress, this._easing);
	return this._valRange*p + this._valFrom;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.getEventHandler = function() {
	return this._events;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.getEasedProgress = function(progress, easing) {
	var p = progress;

	switch ( easing ) {
		case Aei.Anim.EaseLinear:
			return p;

		case Aei.Anim.EaseIn:
			return Math.pow(p, 2);

		case Aei.Anim.EaseIn3:
			return Math.pow(p, 3);
			
		case Aei.Anim.EaseOut:
			return 1-Math.pow(1-p, 2);
			
		case Aei.Anim.EaseOut3:
			return 1-Math.pow(1-p, 3);

		default:
			console.log('Unknown easing type: %o', this._easing);
			break;
	}

	return 0;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype._handleFrame = function() {
	var stop = false;
	var duraMs = this._durationMs;
	var elapMs = this._repeat.getElapsedMs()-this._startElapsedMs;

	if ( elapMs >= duraMs ) {
		stop = true;
		elapMs = duraMs;
	}

	if ( elapMs >= 0 ) { //not within delay time
		this._progress = elapMs/duraMs;
		this._events.dispatchEvent(Aei.Anim.FrameEvent, this);
	}

	if ( stop ) {
		this._events.dispatchEvent(Aei.Anim.CompleteEvent, this);
		this.stop();
		return;
	}
};
