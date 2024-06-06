import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.console } },
  pluginJs.configs.recommended,
  pluginReactConfig,
];
