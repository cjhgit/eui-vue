let Env = process.env.NODE_ENV;
let envConfig = {
    env: Env
};

let domainUrl;
let imgDomain;

if (Env === 'production') {
	// domainUrl = 'http://www.lcy56.com/v1';
	// imgDomain = 'http://www.lcy56.com/';
	domainUrl = 'http://api.yun.lcy56.com/v1';
	imgDomain = 'http://yun.lcy56.com/';
} else {
	imgDomain = 'http://192.168.3.110:8989/';
	domainUrl = 'http://192.168.3.110:9998';
}

module.exports = { 
	domainUrl,
	envConfig,
	imgDomain 
};
