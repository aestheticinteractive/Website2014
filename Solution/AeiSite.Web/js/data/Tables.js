
/*====================================================================================================*/
Aei.Tables = {};


/*====================================================================================================*/
Aei.Tables.Projects = [
	{
		id: 'fragmental',
		name: 'Fragmental 3D',
		client: 'Aesthetic Interactive',
		start: '9/26/2009',
		end: '12/15/2009',
		desc: 'Fragmental 3D is a puzzle game of skill, strategy, and timing for iPhone and iPod Touch devices. Various pieces fall from the top of the playing grid. As a Fragment falls, you can move and rotate it to fit on the grid. The goal: create as many winning lines as you can before you run out of space in your grid.\n\nThis iPhone app was designed and developed in-house by Aesthetic Interactive. Fragmental\'s 3D gameplay and effects are implemented using the OpenGL framework, with powerful polygon-drawing optimizations to allow the app to perform well on all the various Apple devices. The app leverages the Cocoa framework for the menu systems, and integrates with an online service for the leaderboards. Paid and free versions are both available in the App Store.',
		url: 'www.fragmental3d.com',
		imageCount: 5
	},
	{
		id: 'journeyful',
		name: 'Journeyful',
		client: 'Journeyful',
		start: '11/2/2009',
		end: 'Present',
		desc: 'Journeyful is a travel-based social networking site, with a robust (and ever-growing) list of powerful features. Users can book hotel rooms, ferry tickets, share photos and videos, find travelers whose trips intersect their own, and much more. Each user can have multiple \'identities\' (such as a person, a hotel admin, a ferry staff member, etc.) which each get a separate user experience based on permissions.\n\nAesthetic Interactive built the website\'s Flash-based UI, and is closely involved with design, specification, and planning of the project. The Flash UI features full hotel/ferry booking pipelines, log-ins, photo uploads, a large set of custom input and display components, complex user sessions, complex forms and wizards for hotel/ferry administration and management, and communicates with the API using a SOAP interface.', 
		url: 'www.journeyful.com',
		imageCount: 9
	},
	{
		id: 'lessonvision', 
		name: 'Golf Instruction App', 
		client: 'LessonVision', 
		start: '10/15/2009', 
		end: '2/25/2010', 
		desc: 'This LessonVision application allows sports instructors to send annotated videos directly to their students. Instructors record voice, drawings, and video controls into a lesson package, then assign each lesson to their students. Aesthetic Interactive was responsible for building the Flash UI and specifying the server\'s API requirements.\n\nUpon loading, the Flash UI is initialized for a particular sports club and is populated with database content related to the club and the current user. For the creation and playback of lesson packages, the UI generates complex XML structures to describe the lesson\'s events and to keep the various playback layers synchronized. The UI runs maximized within a browser window, can be resized dynamically, and has a draggable video tray which is always available.', 
		url: null ,
		imageCount: 7
	},
	{
		id: 'idashboards',
		name: 'Custom Graph Modules',
		client: 'iDashboards', 
		start: '01/28/2008', 
		end: 'Present',
		desc: 'This collection of interactive and highly-customizable graphs was built to operate within the latest version of iDashboards software. Each individual graph displays and animates any arbitrary set of data, offers the user a myriad of settings, and communicates with other graphs when a data point is selected.\n\nGraphs are constructed as custom Flex modules for Flash, using Actionscript 3. Functionality, accuracy, flexability, and performance were key during development. Aesthetic Interactive was also responsible for the design of each graph type, providing users with a dramatic improvement in appearance from previous versions.\n\nThe gallery displays a few of the many graph types available to an iDashboards user.',
		url: 'www.idashboards.com',
		imageCount: 9
	},
	{
		id: 'dtmkiosk',
		name: 'Touch-Screen Kiosk UI',
		client: 'Digital Transaction Machines',
		start: '11/01/2006',
		end: '08/18/2008',
		desc: 'This huge Flash application (25,000+ lines of code) is built to operate on kiosk touch-screens in retail locations across the country. Users can listen to new music, create custom playlists, upload photos from their digital camera, edit them, and create photo albums. Once playlists and albums are added to their cart, our Flash software leads the user through the checkout process.\n\nFor this project, Aesthetic Interactive was primarily responsible for the Flash software. We replicated design specifications to exacting detail and contributed to visuals and animations. We also worked closely with the back-end development team to optimize the data-access functionality and to solidify an interface with the various hardware components necessary to take credit cards, burn CDs, and print photos.',
		url: null,
		imageCount: 8
	},
	{
		id: '1100rooms',
		name: 'Hotel Campus Website',
		client: 'Amway Hotel Collection',
		start: '05/04/2009',
		end: '08/18/2009',
		desc: 'Aesthetic Interactive worked with a local design firm to create this site, which promotes Amway\'s collection of hotels located in downtown Grand Rapids, MI.\n\nThe site features some impressive visuals. The homepage presents a full-screen background image, chosen at random with each visit. In the \'Get To Know\' section, a Flash application displays hundreds of user-submitted images and quotes which demonstrate all that Grand Rapids has to offer. An interactive map of the downtown area shows users how to get around the hotel campus.\n\nFrom a technical perspective, the site uses ASP.NET to validate and submit various forms to the client, and to send email confirmations to the user.',
		url: 'www.1100rooms.com',
		imageCount: 9
	},
	{
		id: 'teneo',
		name: 'Teneo Configuration Tool',
		client: 'Herman Miller',
		start: '12/21/2007',
		end: '03/14/2008',
		desc: 'This furniture-customization application provides users with a quick and easy way to configure perfect surface and color settings for their office. Aesthetic Interactive worked with a design firm and a 3D modeler to create this powerful Flash tool.\n\nThe simple swatch-selection interface masks a complex hierarchy of images, overlays, and rules that ensure each configuration looks just like the final product. To let the user get started right away, the images load dynamically as a background process. Despite the large quantity of images, users experience very little wait time.\n\nAdditional features include color themes, copying and resetting configurations across products, and printing.', 
		url: 'www2.hermanmiller.com/teneoexperience/index_large.html',
		imageCount: 6
	},
	{
		id: 'footvolley',
		name: 'Footvolley Flash Website',
		client: 'Pepsi',
		start: '11/24/2008',
		end: '12/31/2008',
		desc: 'This fun, upbeat Flash website provides users with a ton of information, images, and video content about the sport of Footvolley. Working from a design spec, Aesthetic Interactive implemented a variety of interesting features, transitions, and effects.\n\nThe small site is packed with content and interactivity. From a page-turning rules book to a 3D video carousel to draggable moves animations, there is plenty to keep users fully engaged.\n\nAll of the site\'s content is loaded dynamically via XML, which allows the client to easily update the site with new images, videos, and information.',
		url: 'www.pepsifootball.com',
		imageCount: 7
	},
	{
		id: 'briankelly',
		name: 'Photography Website',
		client: 'Brian Kelly Photography',
		start: '11/09/2007',
		end: '11/30/2007',
		desc: 'This minimalist Flash website showcases a variety of beautiful, high-resolution photos. Selectable album titles listed across the top open a photo paging system in the main content area. Additional content pages are available from the menu across the bottom.\n\nBuilt from a design spec, this site features smooth, clean transitions and subtle effects. All of the content is loaded dynamically via XML, allowing the artist to add and rearrange albums, insert new photos, change contact information, and more.',
		url: 'www.briankellyphoto.net',
		imageCount: 5
	},
	{
		id: 'hardlines',
		name: 'HardLines Puzzle Website',
		client: 'Aesthetic Interactive',
		start: '06/01/2009',
		end: 'Present',
		desc: 'HardLines is our first foray into the area of user-generated, educational gaming. The site is a collection of puzzles, each of which is an exercise in logic, strategy, and often patience.\n\nThe interesting aspect of HardLines is the ability for each user to become both a Player and a Builder. The HardLines Flash application offers a creation mode, which lets users drag, drop, and rotate pieces on the puzzle grid.\n\nBehind the scenes, the puzzle data and solving, building, and rating information is stored in a SQL Server database. The site itself is an ASP.NET web application that displays and updates this information as it changes.',
		url: 'www.playhardlines.com',
		imageCount: 9
	},
	{
		id: 'dormtshirts',
		name: 'T-Shirt Designer Website',
		client: 'DormTShirts.com',
		start: '04/26/2007',
		end: '02/17/2009',
		desc: 'The DormTShirts.com website is a complex system of shirt-designing, voting, shopping, and social networking. Members vote for their favorite user-designed shirts, and the winning shirts go on sale.\n\nThe powerful T-shirt designer tool is the focal point of the site, allowing the user to place layers of text, clipart, and user-uploaded images on a shirt. Users can move and rotate each element, change the shirt color, cycle front to back, zoom, print, and more.\n\nAesthetic Interactive implemented the site using Flash for the designer and voting tools, a client-provided visual design template, and a combination of PHP and HTML to access and display content from the database. Unfortunately, business-related issues prevented the client from launching the site.',
		url: 'www.dormtshirts.com/index.php?pageid=submit',
		imageCount: 7
	},
	{
		id: 'alifesim',
		name: 'Artifical Life Simulator',
		client: 'Honors Senior Project',
		start: '08/27/2006',
		end: '12/15/2006',
		desc: 'A non-deterministic simulation of neural-net brained animals living and evolving in 3D environment.',
		url: null,
		imageCount: 8
	},
	{
		id: 'aei2007',
		name: 'Aesthetic Interactive 2007',
		client: 'Aesthetic Interactive',
		start: '06/1/2007',
		end: '09/25/2007',
		desc: 'The first official Aesthetic Interactive site, this Actionscript 3 Flash application was built with both design and information in mind.\n\nVisually, the site presents a unique set of translucent menu buttons which move vertically in three-dimensional space when selected. Page transitions involve the smooth entry and exit of content boxes within the application space.\n\nThe site is also an interesting exercise in functionality. Every heading, article, news item, text format, and color is controlled by the database, allowing the site to be easily updated and customized without altering the Flash SWF file. This technique is beneficial to clients who wish to have extensive control over their websites and software.',
		url: null,
		imageCount: 6
	},
	{
		id: 'harriscalc',
		name: 'Transmission Calculator',
		client: 'Harris Corporation',
		start: '9/01/2006',
		end: '11/01/2006',
		desc: 'Reverse-engineered from Excel, this Flash app features dynamic inputs and smooth, realtime output graphing.',
		url: 'www.broadcast.harris.com/products/radiotransmission/calculator2/',
		imageCount: 3
	},
	{
		id: 'spechealth',
		name: 'Medial Animation Player',
		client: 'Spectrum Health',
		start: '11/01/2005',
		end: '12/01/2005',
		desc: 'This Flash video player loads a selected animation and features fully-customizable, swappable color schemes.',
		url: null,
		imageCount: 4
	},
	{
		id: 'harrisicons',
		name: 'Harris 3D Icon Set',
		client: 'Harris 3D Icon Set',
		start: '08/01/2006',
		end: '09/01/2006',
		desc: 'A collection of custom-built 3D models which were rendered, retouched, then converted into ICO files.',
		url: null,
		imageCount: 5
	},
	{
		id: 'gvsuamasite',
		name: 'GVSU AMA Website',
		client: 'GVSU American Marketing Assn.',
		start: '06/01/2006',
		end: '08/01/2006',
		desc: 'An eye-catching site with clever 3D icons, interesting Flash utilities, and an ASP.NET admin section.',
		url: null,
		imageCount: 5
	},
	{
		id: 'siennabakery',
		name: 'Sienna Bakery Brochure',
		client: 'Gordon Food Services',
		start: '02/01/2006',
		end: '03/01/2006',
		desc: 'A Flash marketing brochure that displays dynamically loaded images in smoothly transitioning slideshows.',
		url: null,
		imageCount: 4
	},
	{
		id: 'illandlev',
		name: 'Illumination &amp; Levitation',
		client: 'Personal Project',
		start: '05/01/2006',
		end: '06/01/2006',
		desc: 'This stunning, sans-filter, real-time effect can provide depth and soft shadowing to nearly any Flash app.',
		url: null,
		imageCount: 3
	},
	{
		id: 'portfolio',
		name: 'Corpus Callosum Portfolio',
		client: 'Personal Project',
		start: '05/01/2006',
		end: '07/01/2006',
		desc: 'A former portfolio, this Flash app features innovative \'project web\' navigation and static 3D overlay.',
		url: 'www.aestheticinteractive.com/portfolio',
		imageCount: 6
	},
	{
		id: 'sketchtracer',
		name: 'SketchTracer Draw Tool',
		client: 'Personal Project',
		start: '05/01/2006',
		end: '06/01/2006',
		desc: 'This fun Flash drawing app records pen strokes, then animates them with a custom line width effect.',
		url: null,
		imageCount: 5
	},
	{
		id: 'art',
		name: 'Traditional Artwork',
		client: 'Personal Project',
		start: null,
		end: null,
		desc: 'Featuring a massive 11\'x11\' mural, this assortment of styles and mediums reveals a solid artistic foundation.',
		url: null,
		imageCount: 8
	},
	{
		id: 'sysmaintmap',
		name: 'Interactive USA Map',
		client: 'Systems Maintenance Services',
		start: '06/01/2006',
		end: '07/01/2006',
		desc: 'A dynamic Flash mapping tool with locations and labels placed and animated based on local XML content.',
		url: 'www.sysmaint.com/locations/default.aspx',
		imageCount: 3
	},
	{
		id: 'elexiconblog',
		name: 'Elexicon Blog Website',
		client: 'Elexicon',
		start: '04/01/2006',
		end: '05/01/2006',
		desc: 'This table-free, dynamically loading set of webpages uses Lightboxed images and PHP for the WordPress back-end.',
		url: null,
		imageCount: 2
	},
	{
		id: 'oakwoodmaps',
		name: 'Hospital Floorplan Viewer',
		client: 'Oakwood Healthcare System',
		start: '01/01/2006',
		end: '02/01/2006',
		desc: 'A Flash app used for locating hospital departments, featuring a custom zoom utility and XML-driven content.',
		url: null,
		imageCount: 2
	},
	{
		id: 'skins',
		name: 'Skins (Custom GUIs)',
		client: 'Various',
		start: '01/01/2000',
		end: '06/01/2004',
		desc: 'Initially a hobby, the quality and originality of these interfaces soon drew the attention of paying clients.',
		url: null,
		imageCount: 8
	},
	{
		id: 'illumballs',
		name: 'IllumBalls Experiment',
		client: 'Personal Project',
		start: '12/01/2005',
		end: '01/01/2006',
		desc: 'A Flash app that creates the illusion of real-time 3D by fading between a series of pre-rendered 3D images.',
		url: null,
		imageCount: 3
	},
	{
		id: 'oldportfolio',
		name: 'Early Portfolio',
		client: 'Personal Project',
		start: '07/01/2005',
		end: '08/01/2005',
		desc: 'An XML-driven Flash app that displays organized project content and includes some interesting visual effects.',
		url: null,
		imageCount: 4
	},
	{
		id: 'zkmusic',
		name: 'ZachKinstner Music',
		client: 'Personal Project',
		start: '03/01/2006',
		end: '05/01/2006',
		desc: 'A basic Flash-based site providing listeners with music, lyrics, show dates, and other related content.',
		url: 'www.freewebs.com/zachkinstner',
		imageCount: 3
	}
];

for ( var i in Aei.Tables.Projects ) {
	var proj = Aei.Tables.Projects[i];
	proj.link = proj.name.replace(/ /g, '-');
	proj.imageIndexes = [];

	for ( var c = 0 ; c < proj.imageCount ; ++c ) {
		proj.imageIndexes[c] = c;
	}
}
