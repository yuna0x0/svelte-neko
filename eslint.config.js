import svelteEslintParser from 'svelte-eslint-parser';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	{
		files: ['*.svelte'],
		ignores: [
			'.DS_Store',
			'node_modules',
			'build',
			'.svelte-kit',
			'package',
			'.env',
			'.env.*',
			'!env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		],
		languageOptions: {
			parser: svelteEslintParser,
			parserOptions: {
				parser: typescriptEslintParser,
				sourceType: 'module',
				ecmaVersion: 2020,
				extraFileExtensions: ['.svelte']
			}
		},
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
			svelte: eslintPluginSvelte
		},
		rules: {
			...eslintPluginSvelte.configs.recommended.rules,
			...typescriptEslintPlugin.configs.recommended.rules,
			...eslintConfigPrettier.rules
		}
	},
	{
		files: ['*.js', '*.ts'],
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2020
			}
		},
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
			svelte: eslintPluginSvelte
		},
		rules: {
			...eslintPluginSvelte.configs.recommended.rules,
			...typescriptEslintPlugin.configs.recommended.rules,
			...eslintConfigPrettier.rules
		}
	}
];
