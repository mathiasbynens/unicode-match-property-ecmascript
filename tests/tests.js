import test from 'ava';
import matchProperty from '../index.js';

test(t => {
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
		Error
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
		Error
	);
	t.deepEqual(
		matchProperty('Emoji_Component'),
		'Emoji_Component'
	);
	t.throws(
		() => matchProperty('emojicomponent'),
		Error
	);
	t.throws(
		() => matchProperty('Composition_Exclusion'),
		Error
	);
	t.throws(
		() => matchProperty('Expands_On_NFC'),
		Error
	);
	t.throws(
		() => matchProperty('Expands_On_NFD'),
		Error
	);
	t.throws(
		() => matchProperty('Expands_On_NFKC'),
		Error
	);
	t.throws(
		() => matchProperty('Expands_On_NFKD'),
		Error
	);
	t.throws(
		() => matchProperty('FC_NFKC_Closure'),
		Error
	);
	t.throws(
		() => matchProperty('Full_Composition_Exclusion'),
		Error
	);
	t.throws(
		() => matchProperty('Grapheme_Link'),
		Error
	);
	t.throws(
		() => matchProperty('Hyphen'),
		Error
	);
	t.throws(
		() => matchProperty('Other_Alphabetic'),
		Error
	);
	t.throws(
		() => matchProperty('Other_Default_Ignorable_Code_Point'),
		Error
	);
	t.throws(
		() => matchProperty('Other_Grapheme_Extend'),
		Error
	);
	t.throws(
		() => matchProperty('Other_ID_Continue'),
		Error
	);
	t.throws(
		() => matchProperty('Other_ID_Start'),
		Error
	);
	t.throws(
		() => matchProperty('Other_Lowercase'),
		Error
	);
	t.throws(
		() => matchProperty('Other_Math'),
		Error
	);
	t.throws(
		() => matchProperty('Other_Uppercase'),
		Error
	);
	t.throws(
		() => matchProperty('Prepended_Concatenation_Mark'),
		Error
	);
	t.throws(
		() => matchProperty('unknown property'),
		Error
	);
});
