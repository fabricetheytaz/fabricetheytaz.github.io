
/*
function createSequenceGenerator()
	{
	return (value, key) => key;
	}
*/

const _KEY_AS_VALUE = (value, key) => key;

/**
 * Créer une série de nombre (suite 0, 1, 2,... pour l'instant).
 * 
 * @param {Number} count
 * 
 * @returns {Array}
 */
function sequence(count)
	{
	//return Array.from({length: count}, createSequenceGenerator());
	return Array.from({length: count}, _KEY_AS_VALUE);
	}

export
	{
	_KEY_AS_VALUE as KEY_AS_VALUE,
	sequence
	};
