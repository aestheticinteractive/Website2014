
/*====================================================================================================*/
Aei.Anim = function(name, repeater) {
	this._name = name;
	this._repeat = (repeater || new Aei.Repeater());
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.addFrameListener = function(listener) {
	this._repeat.addFrameListener(listener);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.addCompleteListener = function(listener) {
	this._repeat.addCompleteListener(listener);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.start = function(valFrom, valTo, durationMs, easing, delayMs, frequencyMs) {
	this._valFrom = valFrom;
	this._valTo = valTo;
	this._valRange = valTo-valFrom;
	this._easing = (easing || 'linear');
	this._repeat.start((frequencyMs || 30), durationMs, (delayMs || 0));
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.stop = function() {
	this._repeat.stop();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.getProgress = function() {
	return this._repeat.getProgress();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Anim.prototype.getValue = function() {
	var p = this._repeat.getProgress();

	switch ( this._easing ) {
		case 'linear':
			break;

		case 'smooth':
			p = p*p;
			break;

		default:
			console.log('Unknown easing type: %o', this._easing);
			break;
	}

	return this._valRange*p + this._valFrom;
};
