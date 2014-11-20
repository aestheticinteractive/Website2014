
/*====================================================================================================*/
Aei.Admin = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Admin.getTabs = function(count) {
	return ('\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t').substr(0, count);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Admin.buildProjectTable = function() {
	return Aei.Admin.getObjectText(Aei.Tables.Project, 0);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Admin.getObjectText = function(object, tabCount) {
	var tab0 = Aei.Admin.getTabs(tabCount);
	var tab1 = Aei.Admin.getTabs(tabCount+1);
	var texts = [];
	var isArray = (object instanceof Array);

	for ( var key in object ) {
		var prop = object[key];
		var text = '';
		
		if ( !isArray ) {
			text += '\n'+tab1+key+': ';
		}

		if ( prop == null ) {
			text += 'null';
		}
		else if ( prop instanceof Array ) {
			text += '[';
			text += Aei.Admin.getObjectText(prop, tabCount+1);
			text += '\n'+tab1+']';
		}
		else if ( typeof(prop) == 'string' ) {
			text += '\'';
			text += prop
				.replace(/\n/g, '\\n')
				.replace(/'/g, '\\\'');
			text += '\'';
		}
		else if ( typeof(prop) == 'number' ) {
			text += prop;
		}
		else if ( key == 'service' ) {
			text += 'Aei.Database.selectById(Aei.Tables.Service, \''+prop.id+'\')';
		}
		else if ( key == 'skill' ) {
			text += 'Aei.Database.selectById(Aei.Tables.Skill, \''+prop.id+'\')';
		}
		else {
			text += Aei.Admin.getObjectText(prop, tabCount+1);
		}

		texts.push(text);
	}

	if ( isArray ) {
		return texts.join(',');
	}

	return '\n'+tab0+'{'+
		texts.join(',')+
		'\n'+tab0+'}';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Admin.normalizeServiceWeights = function() {
	for ( var i in Aei.Tables.Project ) {
		var proj = Aei.Tables.Project[i];
		var maxWeight = 0;

		proj.weight = 0;

		for ( var si in proj.services ) {
			proj.weight += proj.services[si].weight;
			maxWeight = Math.max(maxWeight, proj.services[si].weight);
		}
		
		proj.weight /= proj.services.length;
		proj.weight = Math.round(proj.weight*100)/100;
		
		for ( si in proj.services ) {
			proj.services[si].weight /= maxWeight;
			proj.services[si].weight = Math.round(proj.services[si].weight*100)/100;
		}
	}
};