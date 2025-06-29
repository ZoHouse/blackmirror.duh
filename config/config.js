let config = {
	address: "0.0.0.0",
	port: 8080,
	basePath: "/",
	ipWhitelist: [],
	useHttps: false,
	// See https://docs.magicmirror.builders/modules/configuration.html#language
	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	modules: [
		{
			module: "alert"
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_center"
		},
		{
			module: "calendar",
			header: "Zo Events",
			position: "top_left",
			config: {
				calendars: [
					{
						// To add your own calendar, replace the URL below with your calendar's .ics link.
						// See the README for more details.
						url: "YOUR_CALENDAR_URL.ics"
					}
				]
			}
		},
		{
			module: "ZoCompliments",
			position: "middle_center",
			config: {
				compliments: {
					anytime: ["Zo Zo Zo Sexy!", "Vibe Check", "Ready to crush the day?"]
				}
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				// To set your location, update the latitude and longitude below.
				// See the README for instructions on how to find your coordinates.
				lat: 34.05, // Your latitude
				lon: -118.24, // Your longitude
				initialLoadDelay: 2500,
				animationSpeed: 1000,
				tableClass: "small"
			}
		},
		{
			module: 'weather',
			position: 'top_right',
			header: "Weather Forecast",
			config: {
				weatherProvider: 'openmeteo',
				lat: 34.05,
				lon: -118.24,
				type: 'forecast'
			}
		},
		{
			module: "ZoHouseRules",
			position: "bottom_center",
			config: {
				compliments: {
					anytime: [
						'Say "Zo Zo Zo" to tune in—everyone\'s invited to join Zo!',
						"Gift your talents, from mentoring to vibe curation, to fuel the community's fire.",
						"Chase epic moments over material things—Follow your Heart",
						"Pursue your passion through quests, shaping your own high-agency journey.",
						"Create, code, or dream loud—Zo is the centre stage to shine in any culture.",
						"Team work makes the dream work.",
						"Vibe doesnt create it self, get to work.",
						"Clean, inspire, and uplift for the next player.",
						"Join quests, events, or mixers—action is your key to leveling up.",
						'Say "Zo Zo Zo" to seize every epic moment.'
					]
				}
			}
		},
		{
			module: "MMM-cryptocurrency",
			position: "top_right",
			config: {
				currency: ["BTC", "ETH", "SOL"],
				conversion: "USD",
				displayType: "logo"
			}
		},
		{
			module: "MMM-NFTFloorPrice",
			position: "bottom_right",
			config: {
				collectionSlug: "founders-of-zo-world"
			}
		}
	]
};

if (typeof module !== "undefined") {
	module.exports = config;
}
