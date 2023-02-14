export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","logo.jpeg"]),
	mimeTypes: {".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-5971f762.js","imports":["_app/immutable/start-5971f762.js","_app/immutable/chunks/index-de65d63a.js","_app/immutable/chunks/singletons-015948cd.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/imprint",
				pattern: /^\/imprint\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
