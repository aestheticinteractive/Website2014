
Aei = {};
Aei.Pages = {};

Aei.SiteMap = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'Projects',
		url: '/Projects'
	},
	{
		name: 'ProjectTags',
		url: '/ProjectTags'
	},
	{
		name: 'ProjectTexts',
		url: '/ProjectTexts'
	},
	{
		name: 'Weights',
		url: '/Weights'
	},
	{
		name: 'Timeline',
		url: '/Timeline'
	}
];


//TEMP
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
