
/**
 * Créer une série de nombre (suite 0, 1, 2,... pour l'instant).
 * 
 * @param {Number} count
 * 
 * @returns {Number[]}
 */
function sequence(count)
	{
	return Array.from({length: count}, (value, key) => key);
	}

export
	{
	sequence
	};
