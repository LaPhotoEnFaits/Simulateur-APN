APN = function(propertiesObject) {
	for (var propName in propertiesObject) {
		if (propertiesObject.hasOwnProperty(propName)) {
			this[propName] = propertiesObject[propName];
		}
	}
};

module.exports = APN;