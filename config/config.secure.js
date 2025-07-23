let config = {
	address: "0.0.0.0",
	port: 8080,
	basePath: "/",
	// SECURITY: Use environment variables for IP whitelist in production
	ipWhitelist: process.env.IP_WHITELIST ? process.env.IP_WHITELIST.split(',') : ["127.0.0.1", "::ffff:127.0.0.1"],
	// SECURITY: Enable HTTPS in production
	useHttps: process.env.NODE_ENV === 'production',
	// SECURITY: Use environment variables for SSL certificates
	httpsPrivateKey: process.env.HTTPS_PRIVATE_KEY || "",
	httpsCertificate: process.env.HTTPS_CERTIFICATE || "",
	
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
						// SECURITY: Use environment variables for calendar URLs
						url: process.env.CALENDAR_URL || "YOUR_CALENDAR_URL.ics",
						// SECURITY: Use environment variables for authentication
						user: process.env.CALENDAR_USER || "",
						pass: process.env.CALENDAR_PASS || ""
					}
				]
			}
		},
		{
			module: "MMM-NFTFloorPrice",
			position: "top_left",
			config: {
				// SECURITY: Use environment variables for API keys
				apiKey: process.env.NFT_API_KEY || "YOUR_API_KEY",
				collectionSlug: "founders-of-zo-world",
				classes: "small thin",
				maxWidth: "300px"
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
				// SECURITY: Use environment variables for location
				lat: process.env.WEATHER_LAT || 34.05,
				lon: process.env.WEATHER_LON || -118.24,
				// SECURITY: Use environment variables for API keys if needed
				apiKey: process.env.WEATHER_API_KEY || "",
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
				lat: process.env.WEATHER_LAT || 34.05,
				lon: process.env.WEATHER_LON || -118.24,
				type: 'forecast'
			}
		},
		{
			module: "ZoHouseRules",
			position: "bottom_bar",
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
				// SECURITY: Use environment variables for API keys
				apikey: process.env.CRYPTO_API_KEY || "YOUR_CRYPTO_API_KEY",
				currency: ["BTC", "ETH", "SOL"],
				conversion: "USD",
				displayType: "logo"
			}
		}
	]
};

if (typeof module !== "undefined") {
	module.exports = config;
} 