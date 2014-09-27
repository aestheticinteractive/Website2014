
/*====================================================================================================*/
Aei.Queries = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Queries.getPropertyCompareFunc = function(propertyFunc, dir) {
	return function(a, b) {
		var valA = propertyFunc(a);
		var valB = propertyFunc(b);
		return (valA == valB ? 0 : (valA < valB ? 1 : -1))*dir;
	};
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Queries.selectProjectUsesOfService = function(service) {
	var projects = Aei.Database.selectList(Aei.Tables.Project);
	var uses = [];
	var i, j, proj, servEntry;

	for ( i in projects ) {
		proj = projects[i];
		
		for ( j in proj.services ) {
			servEntry = proj.services[j];
			
			if ( servEntry.service != service ) {
				continue;
			}

			uses.push({
				project: proj,
				serviceEntry: servEntry
			});
		}
	}

	var propFunc = function(x) { return x.serviceEntry.weight; };
	uses.sort(Aei.Queries.getPropertyCompareFunc(propFunc, 1));
	return uses;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Queries.selectProjectUsesOfSkill = function(skill) {
	var projects = Aei.Database.selectList(Aei.Tables.Project);
	var uses = [];
	var i, j, proj, skillEntry;

	for ( i in projects ) {
		proj = projects[i];
		
		for ( j in proj.skills ) {
			skillEntry = proj.skills[j];
			
			if ( skillEntry.skill != skill ) {
				continue;
			}

			uses.push({
				project: proj,
				skillEntry: skillEntry
			});
		}
	}
	
	var propFunc = function(x) { return x.skillEntry.weight; };
	uses.sort(Aei.Queries.getPropertyCompareFunc(propFunc, 1));
	return uses;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Queries.calculateSkillWeights = function(skillGroup) {
	var projects = Aei.Database.selectList(Aei.Tables.Project);
	var skills = Aei.Database.selectList(Aei.Tables.Skill);
	var skillMap = {};
	var skillPairList = [];
	var maxWeight = 0;
	var i, j, proj, skillEntry, key, skill;

	for ( i in projects ) {
		proj = projects[i];
		
		for ( j in proj.skills ) {
			skillEntry = proj.skills[j];
			
			if ( skillEntry.skill.group != skillGroup ) {
				continue;
			}

			key = skillEntry.skill.id;

			if ( !skillMap[key] ) {
				skillMap[key] = {
					skill: skillEntry.skill,
					weight: 0
				};
			}

			skillMap[key].weight += skillEntry.weight;
			maxWeight = Math.max(maxWeight, skillMap[key].weight);
		}
	}

	for ( i in skills ) {
		skill = skills[i];
			
		if ( skill.group != skillGroup ) {
			continue;
		}

		key = skill.id;

		if ( !skillMap[key] ) {
			skillMap[key] = {
				skill: skill,
				weight: 0
			};
		}
	}

	for ( key in skillMap ) {
		skillMap[key].weight /= maxWeight;
		skillPairList.push(skillMap[key]);
	}
	
	var propFunc = function(x) { return x.weight; };
	skillPairList.sort(Aei.Queries.getPropertyCompareFunc(propFunc, 1));
	return skillPairList;
};
