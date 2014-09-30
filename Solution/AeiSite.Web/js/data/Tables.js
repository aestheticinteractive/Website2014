
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
		desc: 'Planning and building software.'
	},
	{
		id: 'des',
		name: 'Design',
		desc: 'Creating new visual designs.'
	},
	{
		id: 'cre',
		name: 'Creative',
		desc: 'Brainstorming new ideas for features, solutions, and business.'
	},
	{
		id: 'mgt',
		name: 'Project Management',
		desc: 'Organizing teams, planning features, making decisions, etc.'
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
		name: 'HTML'
	},
	{
		id: 'css',
		name: 'CSS'
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
		id: 'gremlin',
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
		id: 'ogl',
		name: 'OpenGL'
	},
	{
		id: 'oal',
		name: 'OpenAL'
	},
	{
		id: 'gamecen',
		name: 'Game Center'
	},
	{
		id: 'flash',
		name: 'Flash'
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
	}
];

for ( var i in Aei.Tables.Skill ) {
	var skill = Aei.Tables.Skill[i];
	skill.link = Aei.Tables.createLink(skill.name);
}


/*====================================================================================================*/
Aei.Tables.Project = [
	{
		id: 'fragmental',
		name: 'Fragmental 3D',
		client: 'Aesthetic Interactive',
		start: '9/26/2009',
		end: '12/15/2009',
		desc: 'Fragmental 3D is a puzzle game of skill, strategy, and timing for iPhone and iPod Touch devices. Various pieces fall from the top of the playing grid. As a Fragment falls, you can move and rotate it to fit on the grid. The goal: create as many winning lines as you can before you run out of space in your grid.\n\nThis iPhone app was designed and developed in-house by Aesthetic Interactive. Fragmental\'s 3D gameplay and effects are implemented using the OpenGL framework, with powerful polygon-drawing optimizations to allow the app to perform well on all the various Apple devices. The app leverages the Cocoa framework for the menu systems, and integrates with an online service for the leaderboards. Paid and free versions are both available in the App Store.',
		url: 'www.fragmental3d.com',
		imageCount: 5,
		services: [
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'dev'),
				desc: 'Built the entire app; game logic, effects, controls, menus, optimizations, etc.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'des'),
				desc: 'Designed all game screens, controls, backgrounds, menus, etc.',
				weight: 0.98
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'cre'),
				desc: 'Invented the game concept, control systems, game variations, etc.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Planned, executed, released, and maintained the project.',
				weight: 0.97
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'ios'),
				desc: 'Native app for all iPhone/iPod/iPad devices.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'web'),
				desc: 'Simple marketing website.',
				weight: 0.25
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'one'),
				desc: 'Created entirely by Zach.',
				weight: 1
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: 'Built a simple marketing website.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'css'),
				desc: 'Styled the app\'s marketing website.',
				weight: 0.2
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'objc'),
				desc: 'Wrote app in this language.',
				weight: 0.985
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'cocoa'),
				desc: 'Used in the app\'s menus.',
				weight: 0.5
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'ogl'),
				desc: 'Used for the app\'s 3D graphics.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'oal'),
				desc: 'Used for the app\'s sound effects.',
				weight: 0.75
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'gamecen'),
				desc: 'Used for the leaderboards.',
				weight: 0.8
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'mob'),
				desc: 'Built as a native iOS app.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ui'),
				desc: 'Created all the screens, backgrounds, and menus.',
				weight: 0.92
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'ux'),
				desc: 'Invented the control system for moving/rotating pieces and orbiting the camera.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, '3d'),
				desc: 'Created interactive 3D graphics and textures.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'anim'),
				desc: 'Created several movement and transition animations.',
				weight: 0.9
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'algo'),
				desc: 'Implemented several algorithms for game logic and optimization of 3D graphics performance.',
				weight: 0.95
			}
		],
		weight: 1
	},
	{
		id: 'journeyful',
		name: 'Journeyful',
		client: 'Journeyful',
		start: '11/2/2009',
		end: 'Present',
		desc: 'Journeyful is a travel-based social networking site, with a robust (and ever-growing) list of powerful features. Users can book hotel rooms, ferry tickets, share photos and videos, find travelers whose trips intersect their own, and much more. Each user can have multiple \'identities\' (such as a person, a hotel admin, a ferry staff member, etc.) which each get a separate user experience based on permissions.\n\nAesthetic Interactive built the website\'s Flash-based UI, and is closely involved with design, specification, and planning of the project. The Flash UI features full hotel/ferry booking pipelines, log-ins, photo uploads, a large set of custom input and display components, complex user sessions, complex forms and wizards for hotel/ferry administration and management, and communicates with the API using a SOAP interface.',
		url: 'www.journeyful.com',
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
				desc: 'Played a key role in brainstorming prouduct/feature ideas, constructing wireframe/workflow documents, developing business concepts, and assessing user experiences.',
				weight: 0.99
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Established processes for team and project organization, determining project priorities, and tracking complex sets of requirements.',
				weight: 0.98
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
				desc: 'Used for building MVC websites and performing data analysis.',
				weight: 0.35
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'js'),
				desc: 'Used for building interactive pages.',
				weight: 0.6
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'html'),
				desc: 'Used for building non-Flash webpages.',
				weight: 0.55
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'css'),
				desc: 'Used for building non-Flash webpages.',
				weight: 0.55
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'as'),
				desc: 'Used to build the main Flash website.',
				weight: 0.995
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'sql'),
				desc: 'Used to collect and analyze datasets.',
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
			}
		],
		weight: 0.99
	},
	{
		id: 'lessonvision',
		name: 'Golf Instruction App',
		client: 'LessonVision',
		start: '10/15/2009',
		end: '2/25/2010',
		desc: 'This LessonVision application allows sports instructors to send annotated videos directly to their students. Instructors record voice, drawings, and video controls into a lesson package, then assign each lesson to their students. Aesthetic Interactive was responsible for building the Flash UI and specifying the server\'s API requirements.\n\nUpon loading, the Flash UI is initialized for a particular sports club and is populated with database content related to the club and the current user. For the creation and playback of lesson packages, the UI generates complex XML structures to describe the lesson\'s events and to keep the various playback layers synchronized. The UI runs maximized within a browser window, can be resized dynamically, and has a draggable video tray which is always available.',
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
				desc: 'Used for building the Flash application.',
				weight: 1
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'php'),
				desc: 'Used to review and assist with server-side code.',
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
			}
		],
		weight: 0.95
	},
	{
		id: 'idashboards',
		name: 'Flash Graph Modules',
		client: 'iDashboards',
		start: '01/28/2008',
		end: 'Present',
		desc: 'This collection of interactive and highly-customizable graphs was built to operate within the latest version of iDashboards software. Each individual graph displays and animates any arbitrary set of data, offers the user a myriad of settings, and communicates with other graphs when a data point is selected.\n\nGraphs are constructed as custom Flex modules for Flash, using Actionscript 3. Functionality, accuracy, flexability, and performance were key during development. Aesthetic Interactive was also responsible for the design of each graph type, providing users with a dramatic improvement in appearance from previous versions.\n\nThe gallery displays a few of the many graph types available to an iDashboards user.',
		url: 'www.idashboards.com',
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
			}
		],
		systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'fplay'),
				desc: 'Built for a Flash applicaiton',
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
				desc: 'Used to build Flash components.',
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
				weight: 0.85
			}
		],
		weight: 0.98
	},
	{
		id: 'dtmkiosk',
		name: 'Touch-Screen Kiosk UI',
		client: 'Digital Transaction Machines',
		start: '11/01/2006',
		end: '08/18/2008',
		desc: 'This huge Flash application (25,000+ lines of code) is built to operate on kiosk touch-screens in retail locations across the country. Users can listen to new music, create custom playlists, upload photos from their digital camera, edit them, and create photo albums. Once playlists and albums are added to their cart, our Flash software leads the user through the checkout process.\n\nFor this project, Aesthetic Interactive was primarily responsible for the Flash software. We replicated design specifications to exacting detail and contributed to visuals and animations. We also worked closely with the back-end development team to optimize the data-access functionality and to solidify an interface with the various hardware components necessary to take credit cards, burn CDs, and print photos.',
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
				desc: '',
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
			}
		],
		weight: 0.94
	},
	{
		id: '1100rooms',
		name: 'Hotel Campus Website',
		client: 'Amway Hotel Collection',
		start: '05/04/2009',
		end: '08/18/2009',
		desc: 'Aesthetic Interactive worked with a local design firm to create this site, which promotes Amway\'s collection of hotels located in downtown Grand Rapids, MI.\n\nThe site features some impressive visuals. The homepage presents a full-screen background image, chosen at random with each visit. In the \'Get To Know\' section, a Flash application displays hundreds of user-submitted images and quotes which demonstrate all that Grand Rapids has to offer. An interactive map of the downtown area shows users how to get around the hotel campus.\n\nFrom a technical perspective, the site uses ASP.NET to validate and submit various forms to the client, and to send email confirmations to the user.',
		url: 'www.1100rooms.com',
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
				item: Aei.Database.selectById(Aei.Tables.Language, 'css'),
				desc: '',
				weight: 0.99
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
				desc: 'Used for building main application.',
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
		start: '12/21/2007',
		end: '03/14/2008',
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
				weight: 0.3
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
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
				desc: 'Used for building main application.',
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
		start: '11/24/2008',
		end: '12/31/2008',
		desc: 'This fun, upbeat Flash website provides users with a ton of information, images, and video content about the sport of Footvolley. Working from a design spec, Aesthetic Interactive implemented a variety of interesting features, transitions, and effects.\n\nThe small site is packed with content and interactivity. From a page-turning rules book to a 3D video carousel to draggable moves animations, there is plenty to keep users fully engaged.\n\nAll of the site\'s content is loaded dynamically via XML, which allows the client to easily update the site with new images, videos, and information.',
		url: 'www.footvolley.ro',
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
				desc: 'Used for building main application.',
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
		start: '11/09/2007',
		end: '11/30/2007',
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
				weight: 0.3
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Service, 'mgt'),
				desc: 'Managed internal development process, worked with client to complete the project.',
				weight: 0.2
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
				desc: 'Used for building main application.',
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
		start: '06/01/2009',
		end: 'Present',
		desc: 'HardLines is our first foray into the area of user-generated, educational gaming. The site is a collection of puzzles, each of which is an exercise in logic, strategy, and often patience.\n\nThe interesting aspect of HardLines is the ability for each user to become both a Player and a Builder. The HardLines Flash application offers a creation mode, which lets users drag, drop, and rotate pieces on the puzzle grid.\n\nBehind the scenes, the puzzle data and solving, building, and rating information is stored in a SQL Server database. The site itself is an ASP.NET web application that displays and updates this information as it changes.',
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
			},
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'css'),
				desc: '',
				weight: 0.97
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
			}
		],
		weight: 0.8
	},
	{
		id: 'dormtshirts',
		name: 'T-Shirt Designer Website',
		client: 'DormTShirts.com',
		start: '04/26/2007',
		end: '02/17/2009',
		desc: 'The DormTShirts.com website is a complex system of shirt-designing, voting, shopping, and social networking. Members vote for their favorite user-designed shirts, and the winning shirts go on sale.\n\nThe powerful T-shirt designer tool is the focal point of the site, allowing the user to place layers of text, clipart, and user-uploaded images on a shirt. Users can move and rotate each element, change the shirt color, cycle front to back, zoom, print, and more.\n\nAesthetic Interactive implemented the site using Flash for the designer and voting tools, a client-provided visual design template, and a combination of PHP and HTML to access and display content from the database. Unfortunately, business-related issues prevented the client from launching the site.',
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
				item: Aei.Database.selectById(Aei.Tables.Language, 'css'),
				desc: '',
				weight: 0.9
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
		start: '08/27/2006',
		end: '12/15/2006',
		desc: 'A non-deterministic simulation of neural-net brained animals living and evolving in a 3D environment.',
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
				desc: 'Designed the entire simulation, with random terrain, 3D representations, and the "brain" visualizations..',
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
			}
		],
		weight: 0.75
	},
	{
		id: 'aei2007',
		name: 'Aesthetic Interactive 2007',
		client: 'Aesthetic Interactive',
		start: '06/1/2007',
		end: '09/25/2007',
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
			}
		],
		weight: 0.6
	},
	{
		id: 'harriscalc',
		name: 'Transmission Calculator',
		client: 'Harris Corporation',
		start: '9/01/2006',
		end: '11/01/2006',
		desc: 'Reverse-engineered from Excel, this Flash app features dynamic inputs and smooth, realtime output graphing.',
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
		start: '11/01/2005',
		end: '12/01/2005',
		desc: 'This Flash video player loads a selected animation and features fully-customizable, swappable color schemes.',
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
			}
		],
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.37
	},
	{
		id: 'harrisicons',
		name: 'Harris 3D Icon Set',
		client: 'Harris 3D Icon Set',
		start: '08/01/2006',
		end: '09/01/2006',
		desc: 'A collection of custom-built 3D models which were rendered, retouched, then converted into ICO files.',
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
			}
		],
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.62
	},
	{
		id: 'gvsuamasite',
		name: 'GVSU AMA Website',
		client: 'GVSU American Marketing Assn.',
		start: '06/01/2006',
		end: '08/01/2006',
		desc: 'An eye-catching site with clever 3D icons, interesting Flash utilities, and an ASP.NET admin section.',
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
			}
		],
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.7
	},
	{
		id: 'siennabakery',
		name: 'Sienna Bakery Brochure',
		client: 'Gordon Food Services',
		start: '02/01/2006',
		end: '03/01/2006',
		desc: 'A Flash marketing brochure that displays dynamically loaded images in smoothly transitioning slideshows.',
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
			}
		],
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.35
	},
	{
		id: 'illandlev',
		name: 'Illumination & Levitation',
		client: 'Personal Project',
		start: '05/01/2006',
		end: '06/01/2006',
		desc: 'This stunning, sans-filter, real-time effect can provide depth and soft shadowing to nearly any Flash app.',
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
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.3
	},
	{
		id: 'portfolio',
		name: 'Corpus Callosum Portfolio',
		client: 'Personal Project',
		start: '05/01/2006',
		end: '07/01/2006',
		desc: 'A former portfolio, this Flash app features innovative \'project web\' navigation and static 3D overlay.',
		url: 'www.aestheticinteractive.com/portfolio',
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
			}
		],
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.58
	},
	{
		id: 'sketchtracer',
		name: 'SketchTracer Draw Tool',
		client: 'Personal Project',
		start: '05/01/2006',
		end: '06/01/2006',
		desc: 'This fun Flash drawing app records pen strokes, then animates them with a custom line width effect.',
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
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.3
	},
	{
		id: 'art',
		name: 'Traditional Artwork',
		client: 'Personal Project',
		start: null,
		end: null,
		desc: 'Featuring a massive 11\'x11\' mural, this assortment of styles and mediums reveals a solid artistic foundation.',
		url: null,
		imageCount: 8,
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
		weight: 0.5
	},
	{
		id: 'sysmaintmap',
		name: 'Interactive USA Map',
		client: 'Systems Maintenance Services',
		start: '06/01/2006',
		end: '07/01/2006',
		desc: 'A dynamic Flash mapping tool with locations and labels placed and animated based on local XML content.',
		url: 'www.sysmaint.com/locations/default.aspx',
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
			}
		],
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.15
	},
	{
		id: 'elexiconblog',
		name: 'Elexicon Blog Website',
		client: 'Elexicon',
		start: '04/01/2006',
		end: '05/01/2006',
		desc: 'This table-free, dynamically loading set of webpages uses Lightboxed images and PHP for the WordPress back-end.',
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
			}
		],
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.25
	},
	{
		id: 'oakwoodmaps',
		name: 'Hospital Floorplan Viewer',
		client: 'Oakwood Healthcare System',
		start: '01/01/2006',
		end: '02/01/2006',
		desc: 'A Flash app used for locating hospital departments, featuring a custom zoom utility and XML-driven content.',
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
			}
		],
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.3
	},
	{
		id: 'skins',
		name: 'Skins (Custom GUIs)',
		client: 'Various',
		start: '01/01/2000',
		end: '06/01/2004',
		desc: 'Initially a hobby, the quality and originality of these interfaces soon drew the attention of paying clients.',
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
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.55
	},
	{
		id: 'illumballs',
		name: 'IllumBalls Experiment',
		client: 'Personal Project',
		start: '12/01/2005',
		end: '01/01/2006',
		desc: 'A Flash app that creates the illusion of real-time 3D by fading between a series of pre-rendered 3D images.',
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
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.2
	},
	{
		id: 'oldportfolio',
		name: 'Early Portfolio',
		client: 'Personal Project',
		start: '07/01/2005',
		end: '08/01/2005',
		desc: 'An XML-driven Flash app that displays organized project content and includes some interesting visual effects.',
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
			}
		],
		weight: 0.2
	},
	{
		id: 'zkmusic',
		name: 'ZachKinstner Music',
		client: 'Personal Project',
		start: '03/01/2006',
		end: '05/01/2006',
		desc: 'A basic Flash-based site providing listeners with music, lyrics, show dates, and other related content.',
		url: 'www.freewebs.com/zachkinstner',
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
			}
		],
		/*systems: [
			{
				item: Aei.Database.selectById(Aei.Tables.System, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		teams: [
			{
				item: Aei.Database.selectById(Aei.Tables.Team, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		languages: [
			{
				item: Aei.Database.selectById(Aei.Tables.Language, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		products: [
			{
				item: Aei.Database.selectById(Aei.Tables.Product, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],
		skills: [
			{
				item: Aei.Database.selectById(Aei.Tables.Skill, 'xxx'),
				desc: '',
				weight: 0.0
			}
		],*/
		weight: 0.1
	}
];

for ( var i in Aei.Tables.Project ) {
	//continue; //skip this loop when rebuilding the project table
	var proj = Aei.Tables.Project[i];
	proj.link = Aei.Tables.createLink(proj.name);
	proj.imageIndexes = [];

	for ( var c = 0 ; c < proj.imageCount ; ++c ) {
		proj.imageIndexes[c] = c;
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
