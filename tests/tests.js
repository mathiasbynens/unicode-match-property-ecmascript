const test = require('ava');
const matchProperty = require('../index.js');

test('unicode-match-property-ecmascript', t => {
	t.deepEqual(
		matchProperty('gc'),
		'General_Category'
	);
	t.deepEqual(
		matchProperty('General_Category'),
		'General_Category'
	);
	t.deepEqual(
		matchProperty('sc'),
		'Script'
	);
	t.deepEqual(
		matchProperty('Script'),
		'Script'
	);
	t.deepEqual(
		matchProperty('scx'),
		'Script_Extensions'
	);
	t.deepEqual(
		matchProperty('Script_Extensions'),
		'Script_Extensions'
	);
	t.throws(
		() => matchProperty('Script Extensions'),
		{ instanceOf: Error },
	);
	t.deepEqual(
		matchProperty('ASCII'),
		'ASCII'
	);
	t.deepEqual(
		matchProperty('Any'),
		'Any'
	);
	t.deepEqual(
		matchProperty('Assigned'),
		'Assigned'
	);
	t.deepEqual(
		matchProperty('AHex'),
		'ASCII_Hex_Digit'
	);
	t.deepEqual(
		matchProperty('Emoji_Modifier'),
		'Emoji_Modifier'
	);
	t.throws(
		() => matchProperty('emojimodifier'),
		{ instanceOf: Error },
	);
	t.deepEqual(
		matchProperty('Emoji_Component'),
		'Emoji_Component'
	);
	t.throws(
		() => matchProperty('emojicomponent'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Composition_Exclusion'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Expands_On_NFC'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Expands_On_NFD'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Expands_On_NFKC'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Expands_On_NFKD'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('FC_NFKC_Closure'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Full_Composition_Exclusion'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Grapheme_Link'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Hyphen'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Other_Alphabetic'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Other_Default_Ignorable_Code_Point'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Other_Grapheme_Extend'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Other_ID_Continue'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Other_ID_Start'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Other_Lowercase'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Other_Math'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Other_Uppercase'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('Prepended_Concatenation_Mark'),
		{ instanceOf: Error },
	);
	t.throws(
		() => matchProperty('unknown property'),
		{ instanceOf: Error },
	);
});
