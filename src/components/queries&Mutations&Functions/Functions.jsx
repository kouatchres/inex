import React from 'react';

const uniqueCodeGen = (keyLength) => {
	var i,
		key = '',
		//  characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		characters = 'abcdefghijklmnopqrstuvwxyzABCDEF@#$%&GHIJKLMNOPQRSTUVWXYZ0123456789';

	var charactersLength = characters.length;

	for (i = 0; i < keyLength; i++) {
		key += characters.substr(Math.floor(Math.random() * charactersLength + 1), 1);
	}

	return key;
};

const objectFromCode = (codeValue) => {
	const storedObject = {
		candCode: `${codeValue}`
	};
	return storedObject;
};

const getSelectedObject = (dataSource, objectID) => {
	// 1 copy the data source
	if (dataSource.length > 0) {
		const tempObjects = [ ...dataSource ];
		// get the object
		const selectedObject = tempObjects.find((item) => item.id === objectID);
		return selectedObject;
	}
};

export { objectFromCode, uniqueCodeGen, getSelectedObject };
