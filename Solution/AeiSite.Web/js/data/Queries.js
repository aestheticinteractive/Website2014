
/*====================================================================================================*/
Aei.Queries = {};


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

	return uses;
};
