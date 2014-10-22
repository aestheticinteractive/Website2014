
/*====================================================================================================*/
Aei.EventHandler = function() {
	this._listeners = [];
};

Aei.EventHandler._EventId = 0;


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.EventHandler.prototype.addListener = function(type, func) {
	var id = ++Aei.EventHandler._EventId;

	this._listeners.push({
		id: id,
		type: type,
		func: func
	});

	return id;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.EventHandler.prototype.removeListener = function(id) {
	var listeners = this._listeners;
	var len = listeners.length;
	var i, listen;

	for ( i = 0 ; i < len ; ++i ) {
		listen = listeners[i];

		if ( listen.id == id ) {
			listeners.splice(i, 1);
			return true;
		}
	}

	return false;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.EventHandler.prototype.dispatchEvent = function(type, param) {
	var listeners = this._listeners;
	var i, listen;

	for ( i in listeners ) {
		listen = listeners[i];

		if ( listen.type == type ) {
			listen.func(param);
		}
	}
};
