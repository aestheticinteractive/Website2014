
/*====================================================================================================*/
Aei.Tables = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Tables.createLink = function(name) {
	return name
		.replace(/#/g, ' Sharp')
		.replace(/\+/g, ' Plus')
		.replace(/ /g, '-');
};


/*====================================================================================================*/
Aei.Tables.Service = [
	{
		id: 'dev',
		name: 'Development',
		desc: 'High-caliber software development is the core of every project. Solid architectures, elegant code, well-tested features, and refined details produce fantastic results.',
		icon: 'cog'
	},
	{
		id: 'des',
		name: 'Design',
		desc: 'Design is synchronized with development from the start. A commitment to style, usability, precision, and engagement generates beautiful software experiences.',
		icon: 'image'
	},
	{
		id: 'cre',
		name: 'Creative',
		desc: 'Brainstorming is a non-stop, collaborative process. Knowledge ranging from technical details to big-picture concepts is the key to valuable, insightful solutions.',
		icon: 'wifi' //'lightbulb-o'
	},
	{
		id: 'com',
		name: 'Communication',
		desc: 'Clear, consistent communication reduces a project\'s complexity. Notes, diagrams, instructions, and documentation keep stakeholders informed and involved.',
		icon: 'comment'
	},
	{
		id: 'mgt',
		name: 'Project Management',
		desc: 'Effective project management is essential. This includes organizing specs, estimating impacts, planning tasks, prioritizing goals, and coordinating efforts.',
		icon: 'calendar' //'calculator'
	}
];

for ( var i in Aei.Tables.Service ) {
	var serv = Aei.Tables.Service[i];
	serv.link = Aei.Tables.createLink(serv.name);
}


/*====================================================================================================*/
Aei.Tables.System = [
	{
		id: 'win',
		name: 'Windows'
	},
	{
		id: 'mac',
		name: 'Mac'
	},
	{
		id: 'ios',
		name: 'iOS'
	},
	{
		id: 'linux',
		name: 'Linux'
	},
	{
		id: 'web',
		name: 'Web'
	},
	{
		id: 'fplay',
		name: 'Flash Player'
	}
];

for ( var i in Aei.Tables.System ) {
	var sys = Aei.Tables.System[i];
	sys.link = Aei.Tables.createLink(sys.name);
}


/*====================================================================================================*/
Aei.Tables.Team = [
	{
		id: 'one',
		name: 'One-Man Team'
	},
	{
		id: 'des',
		name: 'Design Team'
	},
	{
		id: 'dev',
		name: 'Dev Team'
	}
];

for ( var i in Aei.Tables.Team ) {
	var team = Aei.Tables.Team[i];
	team.link = Aei.Tables.createLink(team.name);
}


/*====================================================================================================*/
Aei.Tables.Language = [
	{
		id: 'c#',
		name: 'C#'
	},
	{
		id: 'js',
		name: 'Javascript'
	},
	{
		id: 'html',
		name: 'HTML/CSS'
	},
	{
		id: 'objc',
		name: 'Objective-C'
	},
	{
		id: 'as',
		name: 'ActionScript'
	},
	{
		id: 'sql',
		name: 'SQL'
	},
	{
		id: 'grem',
		name: 'Gremlin'
	},
	{
		id: 'java',
		name: 'Java'
	},
	{
		id: 'php',
		name: 'PHP'
	},
	{
		id: 'c++',
		name: 'C++'
	}
];

for ( var i in Aei.Tables.Language ) {
	var lang = Aei.Tables.Language[i];
	lang.link = Aei.Tables.createLink(lang.name);
}


/*====================================================================================================*/
Aei.Tables.Product = [
	{
		id: 'jquery',
		name: 'jQuery'
	},
	{
		id: 'angjs',
		name: 'AngularJS'
	},
	{
		id: 'foundjs',
		name: 'Foundation'
	},
	{
		id: 'kinjs',
		name: 'KineticJS'
	},
	{
		id: 'd3js',
		name: 'd3.js'
	},
	{
		id: 'flex',
		name: 'Flex'
	},
	{
		id: 'net',
		name: '.NET'
	},
	{
		id: 'cocoa',
		name: 'Cocoa'
	},
	{
		id: 'nhib',
		name: 'NHibernate'
	},
	{
		id: 'ogl',
		name: 'OpenGL'
	},
	{
		id: 'oal',
		name: 'OpenAL'
	},
	/*{
		id: 'gamecen',
		name: 'Game Center'
	},*/
	{
		id: 'flash',
		name: 'Flash'
	},
	{
		id: 'mono',
		name: 'Mono'
	},
	{
		id: 'unity',
		name: 'Unity 3D'
	},
	{
		id: 'mssql',
		name: 'SQL Server'
	},
	{
		id: 'mysql',
		name: 'MySQL'
	},
	{
		id: 'titan',
		name: 'Titan Graph Database'
	},
	{
		id: 'cass',
		name: 'Cassandra'
	},
	{
		id: 'rex',
		name: 'Rexster'
	}
	/*{ //omit "authoring tools" for now
		id: 'fbuild',
		name: 'Flash Builder'
	},
	{
		id: 'vs',
		name: 'Visual Studio'
	},
	{
		id: 'resharper',
		name: 'Resharper'
	},
	{
		id: 'xcode',
		name: 'XCode'
	},
	{
		id: 'photo',
		name: 'Photoshop'
	},*/
	//NancyFX
	//NUnit / Moq
];

for ( var i in Aei.Tables.Product ) {
	var prod = Aei.Tables.Product[i];
	prod.link = Aei.Tables.createLink(prod.name);
}


/*====================================================================================================*/
Aei.Tables.Skill = [
	{
		id: 'mob',
		name: 'Mobile'
	},
	{
		id: 'ui',
		name: 'User Interface'
	},
	{
		id: 'ux',
		name: 'User Experience'
	},
	{
		id: 'resp',
		name: 'Responsive Layout'
	},
	{
		id: '3d',
		name: '3D Graphics'
	},
	{
		id: 'anim',
		name: 'Animation'
	},
	{
		id: 'dataviz',
		name: 'Data Visualization'
	},
	{
		id: 'algo',
		name: 'Algorithms'
	},
	{
		id: 'pixperf',
		name: 'Pixel-Perfect'
	},
	{
		id: 'db',
		name: 'Database'
	},
	{
		id: 'servside',
		name: 'Server-Side'
	},
	{
		id: 'webserv',
		name: 'Web Service'
	},
	{
		id: 'techw',
		name: 'Technical Writing'
	},
	{
		id: 'cont',
		name: 'Content Creation'
	}
	//autonomy/drive?
	//unit testing
	//architecture
	//fluent API
];

for ( var i in Aei.Tables.Skill ) {
	var skill = Aei.Tables.Skill[i];
	skill.link = Aei.Tables.createLink(skill.name);
}


/*====================================================================================================*/
Aei.Tables.Project = [
	//TODO: Momentus
	//TODO: DCS tools
	//TODO: WordNet?
	//TODO: inthemix?
	//TODO: chandra anim?
	//TODO: wixplorer?
	//TODO: flash frameworks: volume, core?
	//TODO: multiplayer flash (school project)?
	//TODO: music/recording projects?
	{
		id: 'fabricapi',
		name: 'Fabric',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: 'Prototype (Relational DB)',
				y: 2011,
				m: 6,
				d: 27
			},
			{
				type: 'end',
				name: 'Prototype (Relational DB)',
				y: 2012,
				m: 10,
				d: 24
			},
			{
				type: 'event',
				name: 'Prototype v1.0.3 Release',
				y: 2012,
				m: 5,
				d: 16
			},
			{
				type: 'event',
				name: 'Prototype v1.1.4 Release',
				y: 2012,
				m: 10,
				d: 10
			},
			{
				type: 'event',
				name: 'Prototype v1.1.7 Release',
				y: 2012,
				m: 10,
				d: 24
			},
			{
				type: 'start',
				name: 'Current (Graph DB)',
				y: 2012,
				m: 11,
				d: 1
			},
			{
				type: 'end',
				name: 'Current (Graph DB)',
				y: 2013,
				m: 5,
				d: 22
			},
			{
				type: 'start',
				name: 'Current (Graph DB)',
				y: 2013,
				m: 6,
				d: 4
			},
			{
				type: 'end',
				name: 'Current (Graph DB)',
				y: 2013,
				m: 9,
				d: 23
			},
			{
				type: 'start',
				name: 'Current (Graph DB)',
				y: 2013,
				m: 10,
				d: 20
			},
			{
				type: 'end',
				name: 'Current (Graph DB)',
				y: 2014,
				m: 5,
				d: 15
			},
			{
				type: 'event',
				name: 'Initial FabricSharpClient functionality completed',
				y: 2013,
				m: 2,
				d: 16
			},
			{
				type: 'event',
				name: 'v0.1.30 Release',
				y: 2013,
				m: 5,
				d: 19
			},
			{
				type: 'event',
				name: 'v0.2.0 Release',
				y: 2013,
				m: 8,
				d: 5
			},
			/*{
				type: 'event',
				name: 'v0.2.1 Release',
				y: 2013,
				m: 8,
				d: 22
			},
			{
				type: 'event',
				name: 'v0.2.2 Release',
				y: 2013,
				m: 9,
				d: 4
			},
			{
				type: 'event',
				name: 'v0.2.3 Release',
				y: 2013,
				m: 9,
				d: 13
			},
			{
				type: 'event',
				name: 'v0.2.4 Release',
				y: 2013,
				m: 9,
				d: 18
			},*/
			{
				type: 'event',
				name: 'v0.3.0 Release',
				y: 2014,
				m: 3,
				d: 24
			},
			{
				type: 'start',
				name: 'Future',
				y: (new Date()).getFullYear()+1,
				m: 0
			},
			{
				type: 'continue',
				name: 'Future'
			}
		],
		summary: 'A platform that collects intelligence from users, organizes it into a relationship-based structure, provides tools to analyze the results, and empowers a new generation of user experiences.',
		url: 'InTheFabric.com',
		github: 'inthefabric/Fabric',
		imageCount: 5,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: '',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: '',
				weight: 0.97
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'linux'),
				desc: '',
				weight: 0.99
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'c#'),
				desc: 'Used for building the server-side web application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'grem'),
				desc: 'Used for interacting with the graph database.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'sql'),
				desc: 'Use for interacting with the relational database.',
				weight: 0.4
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'net'),
				desc: '',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mono'),
				desc: '',
				weight: 0.91
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mysql'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'nhib'),
				desc: '',
				weight: 0.41
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'rex'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'titan'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'cass'),
				desc: '',
				weight: 0.9
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: '',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'servside'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'db'),
				desc: '',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'webserv'),
				desc: '',
				weight: 1
			}
		],
		related: [
			{
				id: 'fabricweb',
				desc: 'The website for the Fabric project.'
			},
			{
				id: 'weaver',
				desc: 'Fabric\'s tool for building Gremlin queries via C#.'
			},
			{
				id: 'rexconnect',
				desc: 'Fabric\'s tool for communicating with the graph database.'
			},
			{
				id: 'kinstnerphoto',
				desc: 'Fabric powers the photo gallery\'s photo data, tags, relationships.'
			}

		],
		weight: 0.97
	},
	{
		id: 'fabricweb',
		name: 'Fabric Website',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: 'Rebuild',
				y: 2011,
				m: 11,
				d: 29
			},
			{
				type: 'end',
				name: 'Rebuild',
				y: 2012,
				m: 2,
				d: 27
			},
			{
				type: 'start',
				name: '',
				y: 2012,
				m: 4,
				d: 9
			},
			{
				type: 'end',
				name: '',
				y: 2012,
				m: 4,
				d: 25
			},
			{
				type: 'start',
				name: '',
				y: 2012,
				m: 5,
				d: 30
			},
			{
				type: 'end',
				name: '',
				y: 2012,
				m: 6,
				d: 14
			},
			{
				type: 'start',
				name: '',
				y: 2012,
				m: 10,
				d: 5
			},
			{
				type: 'end',
				name: '',
				y: 2012,
				m: 10,
				d: 19
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 1,
				d: 22
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 2,
				d: 8
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 2,
				d: 19
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 3,
				d: 2
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 4,
				d: 14
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 4,
				d: 17
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 8,
				d: 13
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 9,
				d: 18
			},
			{
				type: 'start',
				name: '',
				y: 2014,
				m: 4,
				d: 11
			},
			{
				type: 'end',
				name: '',
				y: 2014,
				m: 5,
				d: 6
			},
			{
				type: 'event',
				name: 'Started New Design',
				y: 2014,
				m: 4,
				d: 25
			},
			{
				type: 'start',
				name: 'Future',
				y: (new Date()).getFullYear()+1,
				m: 0
			},
			{
				type: 'continue',
				name: 'Future'
			}
		],
		summary: 'The website for the Fabric project. It provides an overview of key Fabric concepts, examples, data-browsing tools, extensive API documentation, and account management.',
		url: 'InTheFabric.com',
		imageCount: 16,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: '',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: '',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: '',
				weight: 0.96
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: '',
				weight: 0.99
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'linux'),
				desc: '',
				weight: 0.99
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: 'Used for building the web pages.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'js'),
				desc: 'Used for building the web page interactivity and animations.',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'c#'),
				desc: 'Used for building the web application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'grem'),
				desc: 'Used for interacting with the graph database.',
				weight: 0.99
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'net'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mono'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'jquery'),
				desc: '',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'foundjs'),
				desc: '',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'nhib'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'kinjs'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'titan'),
				desc: '',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'rex'),
				desc: '',
				weight: 0.8
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.3
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: '',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'servside'),
				desc: '',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'db'),
				desc: '',
				weight: 0.92
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'mob'),
				desc: '',
				weight: 0.8
			}
		],
		related: [
			{
				id: 'fabricapi',
				desc: 'The core services and tools of the Fabric project.'
			},
			{
				id: 'weaver',
				desc: 'Fabric\'s tool for building Gremlin queries via C#.'
			},
			{
				id: 'rexconnect',
				desc: 'Fabric\'s tool for communicating with the graph database.'
			}
		],
		weight: 0.96
	},
	{
		id: 'weaver',
		name: 'Weaver',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2012,
				m: 11,
				d: 10
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 1,
				d: 16
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 3,
				d: 21
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 7,
				d: 8
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 7,
				d: 27
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 8,
				d: 13
			},
			{
				type: 'event',
				name: 'v0.3 Release',
				y: 2013,
				m: 6,
				d: 13
			},
			{
				type: 'event',
				name: 'v0.4 Release',
				y: 2013,
				m: 6,
				d: 21
			},
			{
				type: 'event',
				name: 'v0.5 Release',
				y: 2013,
				m: 6,
				d: 26
			},
			{
				type: 'event',
				name: 'v0.5.4 Release',
				y: 2013,
				m: 8,
				d: 13
			}
		],
		summary: 'A tool for generating Gremlin scripts using C#. It features a strongly-typed, fluent interface, and allows developers to compose valid queries based on a well-defined data schema.',
		url: null,
		github: 'inthefabric/Weaver',
		imageCount: 6,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Developed a complex, fluent interface for generating Gremlin scripts.|Defined a format for an application to define its graph data schema.|Used the data schema to ensure that all generated scripts are valid.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Invented to solve difficult problems encountered during other development work.|Determined several use cases that the application should support.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, released, and maintained the project.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Described and summarized complex application details.|Wrote extensive instructions and documentation.',
				weight: 0.99
			}
		],
		systems: [
			//TODO: none/library/.net?
			/*{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0
			}*/
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Designed and developed by Zach.',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'c#'),
				desc: 'Used for building the library.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'grem'),
				desc: 'Translated fluent method calls into Gremlin scripts.',
				weight: 0.99
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'net'),
				desc: 'Used the framework through the application.',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Created an efficient experience for developers.|Improved confidence that scripts are valid, even after refactoring.',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: 'Described full usage details and considerations.|Wrote technical documentation and examples.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: 'Implemented logic that maps method calls, parameters, and data schemas into Gremlin scripts.',
				weight: 0.6
			}
		],
		related: [
			{
				id: 'fabricapi',
				desc: 'Weaver was built to support the Fabric project.'
			},
			{
				id: 'fabricweb',
				desc: 'Weaver was built to support the Fabric project.'
			},
			{
				id: 'rexconnect',
				desc: 'Another tool built to support the Fabric project.'
			}
		],
		weight: 0.93
	},
	{
		id: 'rexconnect',
		name: 'RexConnect',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 3,
				d: 18
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 3,
				d: 28
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 4,
				d: 16
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 5,
				d: 4
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 5,
				d: 29
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 6,
				d: 14
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 6,
				d: 29
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 7,
				d: 2
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 7,
				d: 15
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 7,
				d: 29
			},
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 8,
				d: 30
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 9,
				d: 3
			},
			{
				type: 'event',
				name: 'v0.2 Release',
				y: 2013,
				m: 4,
				d: 18
			},
			{
				type: 'event',
				name: 'v0.3 Release',
				y: 2013,
				m: 4,
				d: 30
			},
			{
				type: 'event',
				name: 'v0.4 Release',
				y: 2013,
				m: 6,
				d: 29
			},
			{
				type: 'event',
				name: 'v0.5 Release',
				y: 2013,
				m: 9,
				d: 3
			}
		],
		summary: 'Provides an efficient communication layer for Rexster-based graph databases. It supports distributed database scenarios, and avoids the need for language-specific communication tools.',
		url: null,
		github: 'inthefabric/RexConnect',
		imageCount: 6,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Implemented an API and data structures for sending commands and responses.|Built "server" mode for handling TCP requests.|Built "console" mode for direct user interaction.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Invented to solve difficult problems encountered during other development work.|Determined several use cases that the application should support.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, released, and maintained the project.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Described and summarized complex application details.|Wrote extensive instructions and documentation.',
				weight: 0.99
			}
		],
		systems: [
			//TODO: none/library/.net?
			/*{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0
			}*/
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Designed and developed by Zach.',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'java'),
				desc: 'Used to build the application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'grem'),
				desc: 'Used to interact with the graph database.',
				weight: 0.4
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'rex'),
				desc: 'Implemented the application for Rexster-based graph databases.|Researched in-depth technical details of Rexster\'s RexPro communication layer.',
				weight: 1
			}
		],
		skills: [
			//TCP/networking
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: 'Documented each API command and parameter.|Documented all request and response data structures.|Described full usage details and considerations.|Described detailed issues with the Rexster development team.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'servside'),
				desc: 'Built the application to run directly on each database server.|Supported scenarios where databases are distributed across multiple servers.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Created an intuitive "console" usage mode.|Used special formatting to support pretty-printing at GitHub.',
				weight: 0.4
			}
		],
		related: [
			{
				id: 'fabricapi',
				desc: 'Weaver was built to support the Fabric project.'
			},
			{
				id: 'fabricweb',
				desc: 'Weaver was built to support the Fabric project.'
			},
			{
				id: 'weaver',
				desc: 'Another tool built to support the Fabric project.'
			}
		],
		weight: 0.92
	},
	{
		id: 'idashhtml',
		name: 'Graph Modules (HTML5)',
		client: 'iDashboards',
		timeline: [
			{
				type: 'start',
				name: 'HTML5 Graphs',
				y: 2013,
				m: 12,
				d: 4
			},
			{
				type: 'end',
				name: 'HTML5 Graphs',
				y: 2014,
				m: 8,
				d: 15
			}
		],
		summary: 'A broad collection of modules that visualize incoming data as graphs, gauges, meters, and tabular charts. Each module is built to match the functionality of its Flash-based predecessor.',
		url: 'iDashboards.com',
		imageCount: 9,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built a wide variety of customizable, precision graph modules.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Improved the look-and-feel from previous versions, created several new visual effects.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided ideas for new graph types, visual effects, and customization options.',
				weight: 0.85
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development processes, assisted with high-level development decisions, and coordinated with the application-level development team.',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided quality communication to the client about features and issues.',
				weight: 0.75
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: 'Built for web viewing.',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'dev'),
				desc: 'Worked with the application-level development team.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Worked alone on the graph modules.',
				weight: 0.95
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'js'),
				desc: 'Used for building the graph components.|Used for analyzing and segmenting minified source code.|Used for building application-level features.',
				weight: 1
			}
			//TODO: Groovy
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'kinjs'),
				desc: 'Used for HTML5 canvas drawing.',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Created layouts and menus for each graph type.',
				weight: 0.65
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Provided high-quality, precise, customizable visual experience.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: 'Built graphs to display at any size or aspect ratio.',
				weight: 0.94
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: 'Built several three-dimensional graph types.',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: 'Wrote code to prepare data for display, improve performance, etc.',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: 'Converted raw data into dozens of different graph types.',
				weight: 0.86
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: 'Documented daily development progress, the functionality of each graph, issues and workaround details, etc.',
				weight: 0.8
			}
		],
		related: [
			{
				id: 'idashapp',
				desc: 'An iOS app for loading and displaying dashboards and graphs.'
			},
			{
				id: 'idashboards',
				desc: 'A collection of graph modules built for Flash.'
			}
		],
		weight: 0.99
	},
	{
		id: 'fragmentalleap',
		name: 'Fragmental 3D (Leap Motion)',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2014,
				m: 5,
				d: 16
			},
			{
				type: 'end',
				name: '',
				y: 2014,
				m: 9,
				d: 17
			},
			{
				type: 'event',
				name: 'v1.0 Release',
				y: 2014,
				m: 9,
				d: 24
			}
		],
		summary: 'A re-imagined version of the iOS game, built to use the Leap Motion controller. Players control the game pieces and camera by reaching, grabbing, turning, and moving their hands in mid-air.',
		url: 'Fragmental3D.com',
		imageCount: 8,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the entire game, tutorial, and menu; all using hand-based controls.|Learned Unity 3D and the Leap Motion SDK rapidly to jump-start the development process.|Implemented several optimizations, usability enhancements, and visual effects.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed all game elements, screens, and artwork (except the 3D hand model).',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Adapted the original iOS game concepts for use with the hand-based controls.|Explored several gameplay and user experience variations.|Developed solutions for a wide variety of usability challenges related to the new hand-based control system.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, released, and maintained the project.',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided in-depth progress updates and build notes.|Discussed complex, three-dimensional topics with Leap Motion while working through various challenges.|Described the benefits, downsides, and alternative options for important development decisions.',
				weight: 0.96
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'win'),
				desc: 'Targeted this system using Unity 3D.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'mac'),
				desc: 'Targeted this system using Unity 3D.',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Designed and developed by Zach.',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'c#'),
				desc: 'Used for building the game.',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'unity'),
				desc: 'Used as the game engine.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'net'),
				desc: 'Used the framework throughout the game.',
				weight: 0.9
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Developed the hand-based game control system.|Created an attractive in-game overlay to display vital gameplay info.|Built a 3D menu, configuration, and navigation system.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Created brand-new user experience for a three-dimensional puzzle game.|Invented meters and indicators to provide constant feedback about the player\'s hand positions.|Developed and refined piece movements that are restricted to grid positions.|Offered a freely-orbiting camera to avoid obscured grid areas and to promote immersion in the game.|Created a visual experience that is colorful, varied, fun, and cohesive.|Provided several game options to promote replay value and offer challenges for players of all skill levels.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: 'Realized a new vision for a three-dimensional puzzle using 3D graphics.|Created new control systems and menus that require interaction in three-dimensional space.|Applied spatial and mathematical knowledge to successfully achieve the hand-based control system.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: 'Created several movement, transition, and indicator animations.|Used a spring and inertia-based method for smoothly easing pieces into their grid-aligned positions.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: 'Implemented grid-based analysis to determine game states and events.|Built graceful degradation to maintain 3D graphics performance across various machines.|Implemented a system to smoothly "snap" pieces into grid-aligned positions while the player moves and rotates them.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: 'Created all graphics, visual assets, game sounds, and other marketing-related assets.',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: 'Implemented support for various screen resolutions and aspect ratios.',
				weight: 0.85
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: 'Documented complex issues and concerns for the Leap Motion team.',
				weight: 0.96
			}
		],
		related: [
			{
				id: 'fragmental',
				desc: 'The same game concept, built with a touch-based control system.'
			}
		],
		weight: 1
	},
	{
		id: 'aei2009',
		name: 'Aesthetic Interactive 2009',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2009,
				m: 8,
				d: 23
			},
			{
				type: 'end',
				name: '',
				y: 2009,
				m: 10,
				d: 31
			}
		],
		summary: 'A website to describe services, experience, and projects to prospective clients. It features an open layout, seamless transition animations, custom icons, and a subtle ripple-effect background.',
		url: null,
		imageCount: 6,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash-based website.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed all the pages, icons, animations, and other content.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Created all ideas and concepts for the project.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, and released the project. ',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Created all of the site\'s written content.',
				weight: 0.96
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: '',
				weight: 0.98
			}
		],
		related: [
			{
				id: 'aei2007',
				desc: 'The previous Aesthetic Interactive website.'
			},
			{
				id: 'portfolio',
				desc: 'The second portfolio application.'
			},
			{
				id: 'oldportfolio',
				desc: 'The first portfolio application.'
			}
		],
		weight: 0.79
	},
	{
		id: 'kinstnerphoto',
		name: 'Kinstner Photo Gallery',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: 'v1.0',
				y: 2012, //TODO: find the correct (earlier) date
				m: 1,
				d: 4
			},
			{
				type: 'end',
				name: 'v1.0',
				y: 2012,
				m: 1,
				d: 31
			},
			{
				type: 'start',
				name: 'v1.1',
				y: 2012, //TODO: find the correct (earlier) date
				m: 10,
				d: 24
			},
			{
				type: 'end',
				name: 'v1.1',
				y: 2012,
				m: 11,
				d: 3
			},
			{
				type: 'start',
				name: 'v2.0',
				y: 2013,
				m: 9,
				d: 6
			},
			{
				type: 'end',
				name: 'v2.0',
				y: 2013,
				m: 10,
				d: 30
			},
			{
				type: 'start',
				name: 'Future',
				y: (new Date()).getFullYear()+1,
				m: 0
			},
			{
				type: 'continue',
				name: 'Future'
			}
		],
		summary: 'A website for organizing and browsing family photos. It is powered by Fabric, with a goal to create interesting user experiences via photo metadata, tags, ratings, and relationships.',
		url: 'ZachKinstner.com',
		github: 'aestheticinteractive/PhotoGallery',
		imageCount: 10,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the entire site, database, and communication with the Fabric API.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed all aspects of the website.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Created all concepts and ideas for the project.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, and released the project.',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Created (almost) all of the photographic content.',
				weight: 0.96
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: 'Website.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'linux'),
				desc: 'Database and web application.',
				weight: 0.99
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Created the initial product and documentation.',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: 'Used for building the web pages.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'js'),
				desc: 'Used for building the web page interactivity and animations.|Used for building a full-screen photo browser.|Used for providing a tagging tool with live-search functionality.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'c#'),
				desc: 'Used for building the web application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'sql'),
				desc: 'Used for interacting with the database.',
				weight: 0.9
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'jquery'),
				desc: 'Used throughout the website.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'foundjs'),
				desc: 'Used to provide responsive layouts.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'net'),
				desc: 'Used by the web application.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mysql'),
				desc: 'Used as the application database.',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'nhib'),
				desc: 'Used to access the database.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mono'),
				desc: 'Used to run the web application on Linux.',
				weight: 0.96
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Created the site pages, structures, and tools.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Created interesting and pleasant ways to view photos and their information.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: 'Displayed photo data in various ways.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: 'All pages fill up the entire browser, regardless of size.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: 'Created written and photographic content for the site.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'servside'),
				desc: 'Built the web application that powers the site and communicates with Fabric.',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'db'),
				desc: 'Built the application database.',
				weight: 0.96
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'mob'),
				desc: 'Built all pages to have be mobile-friendly.',
				weight: 0.65
			}
		],
		related: [
			{
				id: 'fabricapi',
				desc: 'Fabric powers the photo data, tags, relationships, and other features of this website.'
			}
		],
		weight: 0.95
	},
	{
		id: 'trellovision',
		name: 'TrelloVision',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2013,
				m: 5,
				d: 26
			},
			{
				type: 'end',
				name: '',
				y: 2013,
				m: 6,
				d: 2
			}
		],
		summary: 'An experimental tool for organizing and visualizing Trello data in new ways. It is built to be highly modular, allowing open-source developers to easily add new components.',
		url: 'TrelloVision.com',
		github: 'aestheticinteractive/TrelloVision',
		imageCount: 4,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the entire site, including communication with the Trello API.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Created a minimal design while focusing on the functionality.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Created all the initial app concepts and feature ideas.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, and released the project.',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Wrote some simple instructions for the site.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: 'Built as a website; can run locally in a browser.',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Created the initial product and documentation.',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: 'Used for building the web pages.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'js'),
				desc: 'Used for connecting to the Trello data services.|Used for converting the raw data into new formats.|Used for building web page interactivity..',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'jquery'),
				desc: 'Used throughout the website.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'angjs'),
				desc: 'Used to structure the site.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'foundjs'),
				desc: 'Used to provide responsive layouts.',
				weight: 0.8
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Created the pages, tools, simple navigation, etc.',
				weight: 0.75
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Provided an alternative experience for viewing and interacting with Trello data.',
				weight: 0.85
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: 'Created new ways to display Trello data.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: 'Created several movement and transition animations.',
				weight: 0.65
			}
		],
		weight: 0.81
	},
	{
		id: 'fragmental',
		name: 'Fragmental 3D (iOS)',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: 'Initial Versions',
				y: 2009,
				m: 9,
				d: 26
			},
			{
				type: 'end',
				name: 'Initial Versions',
				y: 2009,
				m: 12,
				d: 28
			},
			{
				type: 'start',
				name: 'v1.3 Work',
				y: 2010,
				m: 4,
				d: 19
			},
			{
				type: 'end',
				name: 'v1.3 Work',
				y: 2010,
				m: 5,
				d: 4
			},
			{
				type: 'start',
				name: 'v1.5 Work',
				y: 2010,
				m: 10,
				d: 19
			},
			{
				type: 'end',
				name: 'v1.5 Work',
				y: 2010,
				m: 10,
				d: 27
			},
			{
				type: 'start',
				name: 'v1.5 Work',
				y: 2010,
				m: 11,
				d: 7
			},
			{
				type: 'end',
				name: 'v1.5 Work',
				y: 2010,
				m: 11,
				d: 13
			},
			{
				type: 'start',
				name: 'v2.0 Work',
				y: 2011,
				m: 5,
				d: 5
			},
			{
				type: 'end',
				name: 'v2.0 Work',
				y: 2011,
				m: 6,
				d: 26
			},
			{
				type: 'start',
				name: 'v2.2.40 Work',
				y: 2012,
				m: 11,
				d: 26
			},
			{
				type: 'end',
				name: 'v2.2.40 Work',
				y: 2012,
				m: 12,
				d: 11
			},
			{
				type: 'start',
				name: 'v2.2.44 Work',
				y: 2014,
				m: 3,
				d: 7
			},
			{
				type: 'end',
				name: 'v2.2.44 Work',
				y: 2014,
				m: 3,
				d: 13
			},
			{
				type: 'event',
				name: 'v1.0 Release',
				y: 2009,
				m: 12,
				d: 4
			},
			{
				type: 'event',
				name: 'v1.1 Release',
				y: 2009,
				m: 12,
				d: 18
			},
			{
				type: 'event',
				name: 'v1.2 Release',
				y: 2009,
				m: 12,
				d:28
			},
			{
				type: 'event',
				name: 'v1.3 Release',
				y: 2010,
				m: 5,
				d: 3
			},
			{
				type: 'event',
				name: 'v1.4 Release',
				y: 2010,
				m: 11,
				d: 5
			},
			{
				type: 'event',
				name: 'v1.5 Release',
				y: 2010,
				m: 11,
				d: 20
			},
			{
				type: 'event',
				name: 'v2.0 Release',
				y: 2011,
				m: 6,
				d: 24
			},
			{
				type: 'event',
				name: 'v2.2.40 Release',
				y: 2012,
				m: 12,
				d: 15
			},
			{
				type: 'event',
				name: 'v2.2.44 Release',
				y: 2014,
				m: 3,
				d: 20
			}
		],
		summary: 'Leave Tetris in the two-dimensional dust! Players move and rotate falling pieces to create lines across the 3D playing grid. The game features several piece sets and gameplay modes.',
		url: 'Fragmental3D.com',
		imageCount: 18,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the entire game and corresponding marketing website.|Optimized the 3D graphics to perform on the entire range of iOS devices.|Implemented a precise control system, smooth effects, and complex game logic.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed all game elements, screens, and artwork.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Created the overall game concept, gameplay modes, and piece sets.|Invented a touch-based control system for moving pieces and spinning the camera.|Coordinated the overall look, feel, and sounds of the game.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, released, and maintained the project.',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Described the game\'s rules, controls, and other instructions via text and visuals.|Created text, video, and graphical content for describing and marketing the game.',
				weight: 0.9
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'ios'),
				desc: 'Targeted all iPhone, iPod, and iPad devices.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: 'Presented marketing content via website',
				weight: 0.25
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Designed and developed by Zach.',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: 'Used for building the marketing website.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'objc'),
				desc: 'Used for building the app.',
				weight: 1 //0.985
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'cocoa'),
				desc: 'Used for building the menu screens and navigation.',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'ogl'),
				desc: 'Used for rendering the 3D graphics.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'oal'),
				desc: 'Used for playing the sound effects.',
				weight: 0.75
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'mob'),
				desc: 'Created an exciting 3D gameplay experience for all iOS devices.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Developed the touch-based game control system.|Created an attractive in-game overlay to display vital gameplay info.|Built menus and inputs for configuring and learning about the game.',
				weight: 0.92
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Invented an easy-to-understand system for controlling complex game mechanics.|Offered a freely-orbiting camera to avoid obscured grid areas and to promote immersion in the game.|Created a visual experience that is colorful, varied, fun, and cohesive.|Provided several game options to promote replay value and offer challenges for players of all skill levels.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: 'Realized a vision for a three-dimensional puzzle using 3D graphics.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: 'Created free-falling blocks, spinning text, and expanding shockwaves.|Applied smooth, inertia-based tails to the camera motions.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: 'Implemented grid-based analysis to determine game states and achievements.|Built graceful degradation to maintain 3D graphics performance across various devices.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: 'Created marketing content, instructions, videos, game sounds, and other assets.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: 'Implemented support for various device resolutions and aspect ratios.',
				weight: 0.8
			}
		],
		related: [
			{
				id: 'fragmentalleap',
				desc: 'The same game concept, built with a hand-based control system.'
			}
		],
		ready: true,
		weight: 0.94
	},
	{
		id: 'journeyful',
		name: 'Journeyful',
		client: 'Journeyful',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2009,
				m: 11,
				d: 2
			},
			{
				type: 'continue',
				name: ''
			},
			{
				type: 'event',
				name: 'v1.0/Beta Release',
				y: 2010,
				m: 4,
				d: 19
			},
			{
				type: 'event',
				name: 'v1.1 Release',
				y: 2010,
				m: 9,
				d: 2
			},
			{
				type: 'event',
				name: 'v1.2 "Ferryful" Release',
				y: 2010,
				m: 11,
				d: 22
			},
			{
				type: 'event',
				name: 'v1.3 Release',
				y: 2011,
				m: 2,
				d: 3
			},
			{
				type: 'event',
				name: 'v1.4 Release',
				y: 2011,
				m: 3,
				d: 25
			},
			{
				type: 'event',
				name: 'v1.5 Release',
				y: 2011,
				m: 9,
				d: 20
			},
			{
				type: 'event',
				name: 'v1.6 Release',
				y: 2011,
				m: 11,
				d: 22
			},
			{
				type: 'event',
				name: 'v1.7a Release',
				y: 2012,
				m: 2,
				d: 27
			},
			{
				type: 'event',
				name: 'v1.7b Release',
				y: 2012,
				m: 3,
				d: 27
			},
			{
				type: 'event',
				name: 'v1.7c Release',
				y: 2012,
				m: 7,
				d: 18
			},
			{
				type: 'event',
				name: 'v1.8 Release',
				y: 2012,
				m: 9,
				d: 11
			},
			{
				type: 'event',
				name: 'v1.9 Release',
				y: 2012,
				m: 11,
				d: 15
			},
			{
				type: 'event',
				name: 'v1.10 Release',
				y: 2012,
				m: 12,
				d: 12
			},
			{
				type: 'event',
				name: 'v1.11 Release',
				y: 2013,
				m: 2,
				d: 27
			},
			{
				type: 'event',
				name: 'v1.12 Release',
				y: 2013,
				m: 5,
				d: 22
			},
			{
				type: 'event',
				name: 'v1.13 Release',
				y: 2013,
				m: 10,
				d: 1
			},
			{
				type: 'event',
				name: 'v1.14 Release',
				y: 2014,
				m: 2,
				d: 14
			}
		],
		summary: 'A website for reserving hotel rooms, booking ferry trips, and social networking. It also contains a suite of tools for managing hotels, ferries, rates, allotments, staff, bookings, and more.',
		/*desc: 'Journeyful is a travel-based social networking site, with a robust (and ever-growing) list of powerful features. Users can book hotel rooms, ferry tickets, share photos and videos, find travelers whose trips intersect their own, and much more. Each user can have multiple \'identities\' (such as a person, a hotel admin, a ferry staff member, etc.) which each get a separate user experience based on permissions.\n\nAesthetic Interactive built the website\'s Flash-based UI, and is closely involved with design, specification, and planning of the project. The Flash UI features full hotel/ferry booking pipelines, log-ins, photo uploads, a large set of custom input and display components, complex user sessions, complex forms and wizards for hotel/ferry administration and management, and communicates with the API using a SOAP interface.',*/
		url: 'Journeyful.com',
		imageCount: 9,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built a complex Flash-based website; built several smaller projects/prototypes using different technologies.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Participated closely in the design process for the website, branding, and other areas.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Played a key role in brainstorming product/feature ideas, constructing wireframe/workflow documents, developing business concepts, and assessing user experiences.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Established processes for team and project organization, determining project priorities, and tracking complex sets of requirements.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Communicated complex project plans, feature details, brainstorming topics, technical diagrams, etc.',
				weight: 0.97
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: 'Main UI uses Flash Player.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: 'Various sub-projects are all built for the web.',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: 'Worked with designers.',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'dev'),
				desc: 'Worked with back-end developers.',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Worked alone on the main UI and on various other sub-projects.',
				weight: 0.9
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'c#'),
				desc: 'Used for building MVC web applications|Used for parsing and performing data analysis.',
				weight: 0.35
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'js'),
				desc: 'Used for building web page interactivity and animations.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: 'Used for building non-Flash web pages.',
				weight: 0.55
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: 'Used for building the Flash website.',
				weight: 0.995
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'sql'),
				desc: 'Used for collecting and analyzing large datasets from existing databases.',
				weight: 0.5
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: 'Used for building main application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'jquery'),
				desc: 'Used for building non-Flash webpages.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'angjs'),
				desc: 'Used for building non-Flash webpages.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'foundjs'),
				desc: 'Used for building non-Flash webpages.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'd3js'),
				desc: 'Used for creating data visualizations.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'net'),
				desc: 'Used for building various sites and tools.',
				weight: 0.35
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mysql'),
				desc: 'Used for collecting data for analysis.',
				weight: 0.25
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'nhib'),
				desc: 'Used to access the database.',
				weight: 0.24
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Built the entire Flash UI, and others.',
				weight: 0.991
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Focused on delivering the best experiences for all user types.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: 'Created and helped design mobile-friendly pages.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: 'Created smooth transitions and visual effects.',
				weight: 0.65
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: 'Wrote data analysis tools, asynchronous processes, etc.',
				weight: 0.75
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: 'Matched initial design specifications.',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'db'),
				desc: 'Worked with various internal databases.',
				weight: 0.25
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: 'Created graphs to visualize complex hotel-related data.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: 'Described and diagrammed complex requirements, project plans, feature details.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: 'Participated in content creation for user, business, and investor audiences.',
				weight: 0.4
			}
		],
		weight: 0.98
	},
	{
		id: 'lessonvision',
		name: 'Golf Instruction App',
		client: 'LessonVision',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2009,
				m: 10,
				d: 15
			},
			{
				type: 'end',
				name: '',
				y: 2010,
				m: 2,
				d: 25
			}
		],
		summary: 'A web application that allows sports instructors to manage and communicate with their students. Instructors create video-based lessons by recording audio and visual overlays.',
		/*desc: 'This LessonVision application allows sports instructors to send annotated videos directly to their students. Instructors 
		record voice, drawings, and video controls into a lesson package, then assign each lesson to their students. Aesthetic Interactive 
		was responsible for building the Flash UI and specifying the server\'s API requirements.\n\nUpon loading, the Flash UI is initialized 
		for a particular sports club and is populated with database content related to the club and the current user. For the creation and 
		playback of lesson packages, the UI generates complex XML structures to describe the lesson\'s events and to keep the various 
		playback layers synchronized. The UI runs maximized within a browser window, can be resized dynamically, and has a draggable video 
		tray which is always available.',*/
		url: null,
		imageCount: 7,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash-based website and wrote the specification for the data API.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided design documents, and designed new features to match.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided ideas and insights for improving workflows and user experience.',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Coordinated with clients, designers, and back-end developers to keep the project on track.',
				weight: 0.25
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Created API specification and described complex features and issues to the team.',
				weight: 0.55
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: 'Built for web usage.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: 'Built for Flash Player.',
				weight: 0.99
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: 'Worked with design team.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'dev'),
				desc: 'Worked with a back-end developer.',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Worked alone on the Flash UI.',
				weight: 0.9
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: 'Used for building the application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'php'),
				desc: 'Used while reviewing and assisting with server-side code.',
				weight: 0.2
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: 'Used for building main application.',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Created the entire user interface.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Provided intuitive video analysis, workflows, and navigation.',
				weight: 0.92
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: 'Built the application to all available screen space.',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: 'Created transitions and other visual effects.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: 'Matched initial design specifications.',
				weight: 0.85
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: 'Wrote API specification, documented complex features and solution ideas.',
				weight: 0.7
			}
		],
		weight: 0.85
	},
	
	{
		id: 'idashapp',
		name: 'iDashboards App',
		client: 'iDashboards',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2010,
				m: 4,
				d: 26
			},
			{
				type: 'end',
				name: '',
				y: 2012,
				m: 1,
				d: 11
			},
			{
				type: 'event',
				name: 'v1.0 Release',
				y: 2011,
				m: 4,
				d: 16
			},
			{
				type: 'event',
				name: 'v1.1 Release',
				y: 2011,
				m: 5,
				d: 16
			},
			{
				type: 'event',
				name: 'v1.2 Release',
				y: 2011,
				m: 8,
				d: 8
			},
			{
				type: 'event',
				name: 'v1.3 Release',
				y: 2012,
				m: 1,
				d: 11
			}
		],
		summary: 'Provides a mobile experience for viewing dashboards and graphs. All graphs are interactive, zoomable, and rendered with a custom-built engine that replicates Flash drawing functionality.',
		url: 'iDashboards.com',
		imageCount: 9,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built a wide variety of customizable, precision graph modules.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Retained the look-and-feel of the Flash-based graphs.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided ideas for new graph types, visual effects, and customization options.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development processes.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided quality communication to the client about features and issues.',
				weight: 0.75
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'ios'),
				desc: 'Built for iOS devices.',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Worked alone on the app.',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'objc'),
				desc: 'Used for building the app.',
				weight: 1
			}
		],
		products: [
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Created layouts and menus for each graph type.',
				weight: 0.65
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Provided high-quality, precise, customizable visual experience.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: 'Built graphs to display at any size or aspect ratio.',
				weight: 0.94
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: 'Created and optimized some scrolling animations.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: 'Wrote code to prepare data for display, render the display list, optimize drawing performance, etc.',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: 'Converted raw data into dozens of different graph types.',
				weight: 0.86
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: 'Documented daily development progress, the functionality of each graph, issues and workaround details, etc.',
				weight: 0.75
			}
		],
		related: [
			{
				id: 'idashhtml',
				desc: 'A collection of graph modules built for HTML5.'
			},
			{
				id: 'idashboards',
				desc: 'A collection of graph modules built for Flash.'
			}
		],
		weight: 0.91
	},
	{
		id: 'idashboards',
		name: 'Graph Modules (Flash)',
		client: 'iDashboards',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2008,
				m: 1,
				d: 28
			},
			{
				type: 'end',
				name: '',
				y: 2009,
				m: 10,
				d: 27
			},
			{
				type: 'start',
				name: '',
				y: 2010,
				m: 3,
				d: 22
			},
			{
				type: 'end',
				name: '',
				y: 2010,
				m: 4,
				d: 25
			}
		],
		summary: 'A broad collection of modules that visualize incoming data as graphs, gauges, meters, and tabular charts. Each module is interactive, animated, and allows complete visual customization.',
		url: 'iDashboards.com',
		imageCount: 9,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built a wide variety of customizable, precision graph modules.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Improved the look-and-feel from previous versions, created several new visual effects.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided ideas for new graph types, visual effects, and customization options.',
				weight: 0.85
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development processes and coordinated with the application-level development team.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided quality communication to the client about features and issues.',
				weight: 0.75
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: 'Built for a Flash application',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'dev'),
				desc: 'Worked with the application-level development team.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Worked alone on the graph modules.',
				weight: 0.95
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: 'Used for building the graph components.|Used for working on application-level features.',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: 'Used for building main application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flex'),
				desc: 'Used various Flex components.',
				weight: 0.6
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Created layouts and menus for each graph type.',
				weight: 0.65
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Provided high-quality, precise, customizable visual experience.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: 'Built graphs to display at any size or aspect ratio.',
				weight: 0.94
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: 'Built several three-dimensional graph types.',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: 'Created entry animations and other visual effects.',
				weight: 0.85
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: 'Wrote code to prepare data for display, draw with 3D perspective, etc.',
				weight: 0.65
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: 'Converted raw data into dozens of different graph types.',
				weight: 0.86
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: 'Documented daily development progress, the functionality of each graph, issues and workaround details, etc.',
				weight: 0.8
			}
		],
		related: [
			{
				id: 'idashhtml',
				desc: 'A collection of graph modules built for HTML5.'
			},
			{
				id: 'idashapp',
				desc: 'An iOS app for loading and displaying dashboards and graphs.'
			}
		],
		weight: 0.84
	},
	{
		id: 'dtmkiosk',
		name: 'Touch-Screen Kiosk UI',
		client: 'Digital Transaction Machines',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 11,
				d: 1
			},
			{
				type: 'end',
				name: '',
				y: 2008,
				m: 8,
				d: 18
			}
		],
		summary: 'A touch-based application that integrates with various kiosk hardware. Users can burn CDs of custom song playlists, edit and print photos, and complete the purchase in a single session.',
		/*desc: 'This huge Flash application (25,000+ lines of code) is built to operate on kiosk 
		touch-screens in retail locations across the country. Users can listen to new music, create 
		custom playlists, upload photos from their digital camera, edit them, and create photo albums. 
		Once playlists and albums are added to their cart, our Flash software leads the user through 
		the checkout process.\n\nFor this project, Aesthetic Interactive was primarily responsible 
		for the Flash software. We replicated design specifications to exacting detail and contributed 
		to visuals and animations. We also worked closely with the back-end development team to 
		optimize the data-access functionality and to solidify an interface with the various 
		hardware components necessary to take credit cards, burn CDs, and print photos.',*/
		url: null,
		imageCount: 8,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built complex Flash application with data and hardware integration.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided designs, and designed new features to match.',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided concepts for workflow, transitions, and general user experience.',
				weight: 0.3
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Coordinated closely with back-end development team to identify and resolve technical challenges.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the team.',
				weight: 0.4
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: 'Uses Flash Player to run on a kiosk computer.',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'dev'),
				desc: '',
				weight: 0.85
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: 'Used for building the application.',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: 'Used for building main application.',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.75
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: 'Created highly-detailed issues for the back-end development team.',
				weight: 0.75
			}
		],
		weight: 0.86
	},
	{
		id: '1100rooms',
		name: 'Hotel Campus Website',
		client: 'Amway Hotel Collection',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2009,
				m: 5,
				d: 4
			},
			{
				type: 'end',
				name: '',
				y: 2009,
				m: 8,
				d: 18
			}
		],
		desc: 'Aesthetic Interactive worked with a local design firm to create this site, which promotes Amway\'s collection of hotels located in downtown Grand Rapids, MI.\n\nThe site features some impressive visuals. The homepage presents a full-screen background image, chosen at random with each visit. In the \'Get To Know\' section, a Flash application displays hundreds of user-submitted images and quotes which demonstrate all that Grand Rapids has to offer. An interactive map of the downtown area shows users how to get around the hotel campus.\n\nFrom a technical perspective, the site uses ASP.NET to validate and submit various forms to the client, and to send email confirmations to the user.',
		url: '1100rooms.com',
		imageCount: 9,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built website with interactive map and photo components.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided design specifications.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'js'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 0.85
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 0.4
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 0.95
			}
		],
		weight: 0.66
	},
	{
		id: 'teneo',
		name: 'Teneo Configuration Tool',
		client: 'Herman Miller',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2007,
				m: 12,
				d: 21
			},
			{
				type: 'end',
				name: '',
				y: 2008,
				m: 3,
				d: 14
			}
		],
		desc: 'This furniture-customization application provides users with a quick and easy way to configure perfect surface and color settings for their office. Aesthetic Interactive worked with a design firm and a 3D modeler to create this powerful Flash tool.\n\nThe simple swatch-selection interface masks a complex hierarchy of images, overlays, and rules that ensure each configuration looks just like the final product. To let the user get started right away, the images load dynamically as a background process. Despite the large quantity of images, users experience very little wait time.\n\nAdditional features include color themes, copying and resetting configurations across products, and printing.',
		imageCount: 6,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built Flash application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided design specifications.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided ideas for transitions and other functionality.',
				weight: 0.25
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.75
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 0.95
			}
		],
		weight: 0.67
	},
	{
		id: 'footvolley',
		name: 'Footvolley Flash Website',
		client: 'Pepsi',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2008,
				m: 11,
				d: 24
			},
			{
				type: 'end',
				name: '',
				y: 2008,
				m: 12,
				d: 31
			}
		],
		summary: 'An upbeat experience for fans of the Pepsi-sponsored Footvolley sport. The application includes a 3D video carousel, a page-turning book, draggable player animations, and other animateddorm effects.',
		/*desc: 'This fun, upbeat Flash website provides users with a ton of information, images, and video content about the sport of 
		Footvolley. Working from a design spec, Aesthetic Interactive implemented a variety of interesting features, transitions, and 
		effects.\n\nThe small site is packed with content and interactivity. From a page-turning rules book to a 3D video carousel to 
		draggable moves animations, there is plenty to keep users fully engaged.\n\nAll of the site\'s content is loaded dynamically 
		via XML, which allows the client to easily update the site with new images, videos, and information.',*/
		url: 'Footvolley.ro',
		imageCount: 7,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash-based website, full of interesting visual effects.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided design specifications.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided ideas and solutions for a variety of visual effects.',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 0.99
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 0.9
			}
		],
		weight: 0.72
	},
	{
		id: 'briankelly',
		name: 'Photography Website',
		client: 'Brian Kelly Photography',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2007,
				m: 11,
				d: 9
			},
			{
				type: 'end',
				name: '',
				y: 2007,
				m: 11,
				d: 30
			}
		],
		desc: 'This minimalist Flash website showcases a variety of beautiful, high-resolution photos. Selectable album titles listed across the top open a photo paging system in the main content area. Additional content pages are available from the menu across the bottom.\n\nBuilt from a design spec, this site features smooth, clean transitions and subtle effects. All of the content is loaded dynamically via XML, allowing the artist to add and rearrange albums, insert new photos, change contact information, and more.',
		imageCount: 5,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash-based website.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided design specifications.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided solutions for image-loading, transitions, and editing data.',
				weight: 0.35
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 0.9
			}
		],
		weight: 0.68
	},
	{
		id: 'hardlines',
		name: 'HardLines Puzzle Website',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2009,
				m: 6,
				d: 1
			},
			{
				type: 'end',
				name: '',
				y: 2009,
				m: 8,
				d: 22
			}
		],
		summary: 'A game where players must time the release of several "shots" to fulfill the puzzle\'s goals. Users can build custom puzzles via drag-and-drop interface, and rate puzzles with several metrics.',
		/*desc: 'HardLines is our first foray into the area of user-generated, educational gaming. The site is a collection of puzzles, each 
		of which is an exercise in logic, strategy, and often patience.\n\nThe interesting aspect of HardLines is the ability for each user 
		to become both a Player and a Builder. The HardLines Flash application offers a creation mode, which lets users drag, drop, and rotate 
		pieces on the puzzle grid.\n\nBehind the scenes, the puzzle data and solving, building, and rating information is stored in a SQL 
		Server database. The site itself is an ASP.NET web application that displays and updates this information as it changes.',*/
		imageCount: 9,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the entire Flash-based website, back-end application, and database.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed all game elements, editor tools, web pages, etc.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Invented the game concept, rules, functionality, rating systems, etc.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, and released the project. ',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Created all technical and marketing assets for the product.',
				weight: 0.96
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'sql'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: '',
				weight: 0.98
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'net'),
				desc: '',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mssql'),
				desc: '',
				weight: 0.99
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: '',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'db'),
				desc: '',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'servside'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: '',
				weight: 0.85
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: '',
				weight: 0.65
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: '',
				weight: 0.75
			}
		],
		weight: 0.8
	},
	{
		id: 'homelink',
		name: 'HomeLink Presentation',
		client: 'Johnson Controls',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2009,
				m: 4,
				d: 2
			},
			{
				type: 'end',
				name: '',
				y: 2009,
				m: 5,
				d: 5
			}
		],
		desc: 'TODO.',
		url: null,
		imageCount: 5,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: '',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: '',
				weight: 0.2
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 0.6
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
			//Adobe AIR
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 1
			}
		],
		weight: 0.42
	},
	{
		id: 'dormtshirts',
		name: 'T-Shirt Designer Website',
		client: 'DormTShirts.com',
		timeline: [
			{
				type: 'start',
				name: 'Version 1',
				y: 2007,
				m: 4,
				d: 26
			},
			{
				type: 'end',
				name: 'Version 1',
				y: 2007,
				m: 8,
				d: 7
			},
			{
				type: 'start',
				name: 'Design Lab',
				y: 2007,
				m: 10,
				d: 2
			},
			{
				type: 'end',
				name: 'Design Lab',
				y: 2008,
				m: 1,
				d: 2
			},
			{
				type: 'start',
				name: 'Version 2',
				y: 2008,
				m: 3,
				d: 24
			},
			{
				type: 'end',
				name: 'Version 2',
				y: 2008,
				m: 6,
				d: 11
			},
			{
				type: 'start',
				name: 'Final Changes',
				y: 2009,
				m: 1,
				d: 10
			},
			{
				type: 'end',
				name: 'Final Changes',
				y: 2009,
				m: 1,
				d: 22
			}
		],
		summary: 'A web application and various tools for designing shirts, voting for favorites, and purchasing them. The designer tool provides a suite of features for creating, arranging, and saving shirt graphics.',
		/*desc: 'The DormTShirts.com website is a complex system of shirt-designing, voting, shopping, and social networking. Members vote for 
		their favorite user-designed shirts, and the winning shirts go on sale.\n\nThe powerful T-shirt designer tool is the focal point of 
		the site, allowing the user to place layers of text, clipart, and user-uploaded images on a shirt. Users can move and rotate each 
		element, change the shirt color, cycle front to back, zoom, print, and more.\n\nAesthetic Interactive implemented the site using 
		Flash for the designer and voting tools, a client-provided visual design template, and a combination of PHP and HTML to access and 
		display content from the database. Unfortunately, business-related issues prevented the client from launching the site.',*/
		imageCount: 7,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the entire Flash-based application, dynamic website, and database.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed initial guidelines to design the various tools and components.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided ideas for the shirt designer, user experience, and data visualization.',
				weight: 0.75
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.4
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: '',
				weight: 0.91
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'sql'),
				desc: '',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'php'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'js'),
				desc: '',
				weight: 0.25
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mysql'),
				desc: '',
				weight: 0.99
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: '',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'servside'),
				desc: '',
				weight: 0.99
			}
		],
		weight: 0.72
	},
	{
		id: 'alifesim',
		name: 'Artifical Life Simulator',
		client: 'Honors Senior Project',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 8,
				d: 27
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 12,
				d: 15
			}
		],
		summary: 'A simulation where virtual organisms interact in a 3D environment. Populations rise and fall, and neural-network brains (for carnivores and herbivores) evolve with each successful generation.',
		url: null,
		imageCount: 8,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the entire simulation.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed the entire simulation, with random terrain, 3D representations, and the "brain" visualizations.',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Created the entire concept and parameters of the simulation.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, and released the project. ',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Documented the project goals, progress, and results.',
				weight: 0.5
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'win'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'c++'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'ogl'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'techw'),
				desc: '',
				weight: 0.75
			}
		],
		weight: 0.75
	},
	{
		id: 'actionoffice',
		name: 'ActionOffice Animation',
		client: 'Herman Miller',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2008,
				m: 8,
				d: 14
			},
			{
				type: 'end',
				name: '',
				y: 2008,
				m: 9,
				d: 12
			}
		],
		desc: 'TODO.',
		url: null,
		imageCount: 9,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: '',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: '',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: '',
				weight: 0.2
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 0.3
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 0.3
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.75
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 0.99
			}
		],
		weight: 0.6
	},
	{
		id: 'rotator',
		name: 'Floorplan Rotator',
		client: 'Digital Wingman',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2008,
				m: 1,
				d: 1
			},
			{
				type: 'end',
				name: '',
				y: 2008,
				m: 2,
				d: 21
			}
		],
		desc: 'TODO.',
		url: null,
		imageCount: 3,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: '', //designed the entire UI
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: '',
				weight: 0.85
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: '',
				weight: 0.75
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: '',
				weight: 0.2
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'php'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'sql'),
				desc: '',
				weight: 0.98
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mysql'),
				desc: '',
				weight: 0.99
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'servside'),
				desc: '',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'db'),
				desc: '',
				weight: 0.95
			}
		],
		weight: 0.61
	},
	{
		id: 'aei2007',
		name: 'Aesthetic Interactive 2007',
		client: 'Aesthetic Interactive',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2007,
				m: 6
			},
			{
				type: 'end',
				name: '',
				y: 2007,
				m: 9,
				d: 25
			}
		],
		desc: 'The first official Aesthetic Interactive site, this Actionscript 3 Flash application was built with both design and information in mind.\n\nVisually, the site presents a unique set of translucent menu buttons which move vertically in three-dimensional space when selected. Page transitions involve the smooth entry and exit of content boxes within the application space.\n\nThe site is also an interesting exercise in functionality. Every heading, article, news item, text format, and color is controlled by the database, allowing the site to be easily updated and customized without altering the Flash SWF file. This technique is beneficial to clients who wish to have extensive control over their websites and software.',
		url: null,
		imageCount: 6,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash-based website.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed all the pages, buttons, animations, and other content.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Created on the content, transitions, layouts, etc.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, and released the project. ',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Created all of the site\'s written content.',
				weight: 0.96
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'sql'),
				desc: '',
				weight: 0.5
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mssql'),
				desc: '',
				weight: 0.5
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'db'),
				desc: '',
				weight: 0.55
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'servside'),
				desc: '',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: '',
				weight: 0.98
			}
		],
		related: [
			{
				id: 'aei2009',
				desc: 'The next Aesthetic Interactive website.'
			},
			{
				id: 'portfolio',
				desc: 'The second portfolio application.'
			},
			{
				id: 'oldportfolio',
				desc: 'The first portfolio application.'
			}
		],
		weight: 0.59
	},
	{
		id: 'harriscalc',
		name: 'Transmission Calculator',
		client: 'Harris Corporation',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 9
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 11
			}
		],
		summary: 'Reverse-engineered from an Excel spreadsheet, this interactive tool provides dynamic inputs and smooth, real-time graphical output.',
		url: null,
		imageCount: 3,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided design specifications.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.5
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: '',
				weight: 0.95
			}
		],
		weight: 0.38
	},
	{
		id: 'spechealth',
		name: 'Medical Animation Player',
		client: 'Spectrum Health',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2005,
				m: 11
			},
			{
				type: 'end',
				name: '',
				y: 2005,
				m: 12
			}
		],
		summary: 'An application that loads medical animations, provides playback controls, and supports customizable color schemes.',
		url: null,
		imageCount: 4,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash application',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided design specifications.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.3
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 0.9
			}
		],
		weight: 0.37
	},
	{
		id: 'harrisicons',
		name: 'Harris 3D Icon Set',
		client: 'Harris 3D Icon Set',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 8
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 9
			}
		],
		summary: 'A collection of icons for a software package. Each icon is created from a custom-designed 3D model and post-rendering effects.',
		url: null,
		imageCount: 5,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed, modeled, and refined the icon set.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Proposed a variety of icon concepts.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed discovery and design process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Worked with the client to refine the final product.',
				weight: 0.3
			}
		],
		systems: [
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
		],
		products: [
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.4
			}
		],
		weight: 0.62
	},
	{
		id: 'gvsuamasite',
		name: 'GVSU AMA Website',
		client: 'GVSU American Marketing Assn.',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 6
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 8
			}
		],
		summary: 'An website with clever 3D icons and visual effects, interactive calendar and photo album applications, a custom-designed logo, and a suite of administrative tools.',
		url: null,
		imageCount: 5,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the entire website and database.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed all pages, icons, logo, tools, etc.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided all site ideas and concepts.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Worked the project from the discovery phase to release.',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 0.3
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 0.3
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'sql'),
				desc: '',
				weight: 0.4
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'mssql'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'net'),
				desc: '',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 0.3
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 0.3
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'servside'),
				desc: '',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'db'),
				desc: '',
				weight: 0.9
			}
		],
		weight: 0.7
	},
	{
		id: 'siennabakery',
		name: 'Sienna Bakery Brochure',
		client: 'Gordon Food Services',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 2
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 3
			}
		],
		summary: 'An interactive brochure for marketing food products, with static content, input forms, and animated image slideshows.',
		url: null,
		imageCount: 4,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash application',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided design specifications.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.6
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 1
			}
		],
		weight: 0.35
	},
	{
		id: 'illandlev',
		name: 'Illumination & Levitation',
		client: 'Personal Project',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 5
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 6
			}
		],
		summary: 'A real-time lighting effect that provides a sense of depth to 2D content. The light source moves with the cursor, generating soft shadows based on the position of each content item.',
		url: null,
		imageCount: 3,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the experimental Flash application.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Created all design assets and visual effects.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Used existing tools in a new way to create an interactive visual effect.',
				weight: 1
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 0.4
			}
		],
		related: [
			{
				id: 'illumballs',
				desc: 'An lighting experiment from this time period.'
			},
			{
				id: 'sketchtracer',
				desc: 'An drawing experiment from this time period.'
			}
		],
		weight: 0.3
	},
	{
		id: 'portfolio',
		name: 'Corpus Callosum Portfolio',
		client: 'Personal Project',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 5
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 7
			}
		],
		summary: 'A portfolio that highlights software and artistic projects. It features an 3D overlay, animated effects, and a "network" diagram that arranges projects based on their characteristics.',
		url: 'AestheticInteractive.com/portfolio',
		imageCount: 6,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash application.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Created all the visual effects, animations, layouts, etc.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Invented a graphical method for displaying projects.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, and released the project.',
				weight: 0.97
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Created and organized all written and visual content.',
				weight: 0.96
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.3
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'dataviz'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: '',
				weight: 0.85
			}
		],
		related: [
			{
				id: 'portfolio',
				desc: 'The previous portfolio application.'
			},
			{
				id: 'aei2007',
				desc: 'The first Aesthetic Interactive website.'
			},
			{
				id: 'aei2009',
				desc: 'The second Aesthetic Interactive website.'
			}
		],
		weight: 0.58
	},
	{
		id: 'sketchtracer',
		name: 'SketchTracer Draw Tool',
		client: 'Personal Project',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 5
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 6
			}
		],
		summary: 'An experimental tool that records the stokes of a cursor-based drawing, then plays the drawing as an animation. The animation features variable line-thickness based on the stroke speed.',
		url: null,
		imageCount: 5,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the experimental Flash application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Created all design assets and visual effects.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Invented a useful tool for creating stylized drawing animations.',
				weight: 0.99
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 1
			}
		],
		related: [
			{
				id: 'illandlev',
				desc: 'An lighting experiment from this time period.'
			},
			{
				id: 'illumballs',
				desc: 'An lighting experiment from this time period.'
			}
		],
		weight: 0.3
	},
	{
		id: 'art',
		name: 'Traditional Artwork',
		client: 'Personal Project',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2000,
				m: 1
			},
			{
				type: 'end',
				name: '',
				y: 2003,
				m: 6
			}
		],
		summary: 'A collection of artwork with a variety of styles, mediums, and subjects. The highlight is a very large "rocket" mural -- 11 feet in diameter, custom-designed, hand-painted, with oils on brick.',
		url: null,
		imageCount: 9,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Created a variety of traditional artwork.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Composed and brainstormed a variety of artistic concepts.',
				weight: 1
			}
		],
		systems: [
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
		],
		products: [
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 0.4
			}
		],
		related: [
			{
				id: 'skins',
				desc: 'A collection of digital artwork from this time period.'
			}
		],
		weight: 0.5
	},
	{
		id: 'sysmaintmap',
		name: 'Interactive USA Map',
		client: 'Systems Maintenance Services',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 6
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 7
			}
		],
		summary: 'An XML-driven mapping tool that plots cities as animated dots, positions labels to avoid overlap, highlights relevant states, and displays text content for the selected city.',
		url: null,
		imageCount: 3,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided design specifications.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.6
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.8
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 1
			}
		],
		weight: 0.15
	},
	{
		id: 'elexiconblog',
		name: 'Elexicon Blog Website',
		client: 'Elexicon',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 4
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 5
			}
		],
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 4
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 5
			}
		],
		summary: 'A set of custom web pages for a WordPress-powered blog. These dynamic pages use the WordPress API to apply data in specific places, and Lightbox for zooming and browsing images.',
		url: null,
		imageCount: 2,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the website using the WordPress API.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: '	Followed the provided design specifications.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.6
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: '',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'php'),
				desc: '',
				weight: 1
			}
		],
		products: [
			//WordPress API, Lightbox
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.3
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 1
			}
		],
		weight: 0.25
	},
	{
		id: 'oakwoodmaps',
		name: 'Hospital Floorplan Viewer',
		client: 'Oakwood Healthcare System',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 1
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 2
			}
		],
		summary: 'An application for locating specific zones within a multi-floor hospital building. It features custom zooming functionality, smooth animations, and XML-driven content.',
		url: null,
		imageCount: 2,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Followed the provided design specifications.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Provided clear, detailed communication to the client.',
				weight: 0.3
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'des'),
				desc: '',
				weight: 0.6
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'pixperf'),
				desc: '',
				weight: 1
			}
		],
		weight: 0.3
	},
	{
		id: 'skins',
		name: 'Skins (Custom GUIs)',
		client: 'Various',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2001,
				m: 1
			},
			{
				type: 'end',
				name: '',
				y: 2004,
				m: 6
			}
		],
		summary: 'A collection of custom visual interfaces for applications, focused on originality and varied design styles. Initially created as a hobby, these "skins" soon drew the attention of paying clients.',
		url: null,
		imageCount: 8,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Created interfaces with a wide variety of visual styles.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Provided new an interesting user-interface concepts.',
				weight: 1
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'win'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
		],
		products: [
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'resp'),
				desc: '',
				weight: 0.4
			}
		],
		related: [
			{
				id: 'art',
				desc: 'A collection of traditional artwork from this time period.'
			}
		],
		weight: 0.55
	},
	{
		id: 'illumballs',
		name: 'IllumBalls Experiment',
		client: 'Personal Project',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2005,
				m: 12
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 1
			}
		],
		summary: 'A visual effect that creates the illusion of real-time 3D rendering. Using the cursor as the light source, the application fades to a pre-rendered image that has the expected lighting.',
		url: null,
		imageCount: 3,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the experimental Flash application.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Created all design assets and visual effects.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Combined static content with dynamic interactions.',
				weight: 1
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: '',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.7
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 1
			}
		],
		related: [
			{
				id: 'illandlev',
				desc: 'An lighting experiment from this time period.'
			},
			{
				id: 'sketchtracer',
				desc: 'An drawing experiment from this time period.'
			}
		],
		weight: 0.2
	},
	{
		id: 'oldportfolio',
		name: 'Early Portfolio',
		client: 'Personal Project',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2005,
				m: 7
			},
			{
				type: 'end',
				name: '',
				y: 2005,
				m: 8
			}
		],
		summary: 'An interactive portfolio containing software projects, artwork, and music. The application loads its content dynamically via XML, and features interesting visual effects and transitions.',
		url: null,
		imageCount: 4,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash application',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed all the pages, layouts, and visual effects.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Created clever hover effects and transitions.',
				weight: 0.95
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Created all content for the project.',
				weight: 0.75
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 1
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.4
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: '',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: '',
				weight: 0.5
			}
		],
		related: [
			{
				id: 'portfolio',
				desc: 'The next portfolio application.'
			},
			{
				id: 'aei2007',
				desc: 'The first Aesthetic Interactive website.'
			},
			{
				id: 'aei2009',
				desc: 'The second Aesthetic Interactive website.'
			}
		],
		weight: 0.2
	},
	{
		id: 'zkmusic',
		name: 'ZachKinstner Music',
		client: 'Personal Project',
		timeline: [
			{
				type: 'start',
				name: '',
				y: 2006,
				m: 3
			},
			{
				type: 'end',
				name: '',
				y: 2006,
				m: 5
			}
		],
		summary: 'A website providing song and album details, music samples, lyrics, show dates, and a simple portfolio of non-music projects.',
		url: null, //'freewebs.com/zachkinstner',
		imageCount: 3,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the Flash-based website.',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed all pages, menus, and content.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'com'),
				desc: 'Created all written content and music for the project.',
				weight: 0.99
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: '',
				weight: 0.99
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: '',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: '',
				weight: 1
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'flash'),
				desc: '',
				weight: 1
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: '',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: '',
				weight: 0.3
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: '',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'cont'),
				desc: '',
				weight: 0.8
			}
		],
		weight: 0.1
	}
];

for ( var i in Aei.Tables.Project ) {
	var proj = Aei.Tables.Project[i];
	proj.link = Aei.Tables.createLink(proj.name);
	proj.imageIndexes = [];

	var c, r, rel;

	for ( c = 0 ; c < proj.imageCount ; ++c ) {
		proj.imageIndexes[c] = c;
	}
	
	for ( r in proj.related ) {
		rel = proj.related[r];
		rel.project = Aei.Database.selectById(Aei.Tables.Project, rel.id);
	}
	
	var compareWeight = function(a, b) {
		return (a.weight == b.weight ? 0 : (a.weight > b.weight ? -1 : 1));
	};

	if ( proj.services ) {
		proj.services.sort(compareWeight);
	}

	if ( proj.systems ) {
		proj.systems.sort(compareWeight);
	}

	if ( proj.teams ) {
		proj.teams.sort(compareWeight);
	}

	if ( proj.languages ) {
		proj.languages.sort(compareWeight);
	}

	if ( proj.products ) {
		proj.products.sort(compareWeight);
	}

	if ( proj.skills ) {
		proj.skills.sort(compareWeight);
	}
}

Aei.Tables.Project.sort(function(a, b) {
	return (a.weight == b.weight ? 0 : (a.weight > b.weight ? -1 : 1));
});


/*====================================================================================================*/
Aei.Tables.ZachTimeline = [
	{
		type: 'event',
		name: 'High School Graduation',
		y: 2003,
		m: 6
	},
	{
		type: 'event',
		name: 'College Graduation',
		y: 2007,
		m: 4
	},
	{
		type: 'event',
		name: 'Wedding Day',
		y: 2007,
		m: 8,
		d: 11
	},
	{
		type: 'event',
		name: 'New House/Office',
		y: 2007,
		m: 9,
		d: 13
	},
	{
		type: 'event',
		name: 'First Daughter Born',
		y: 2010,
		m: 6,
		d: 29
	},
	{
		type: 'event',
		name: 'Second Daughter Born',
		y: 2012,
		m: 9,
		d: 7
	},
	{
		type: 'event',
		name: 'New House/Office',
		y: 2014,
		m: 2,
		d: 12
	}
];
