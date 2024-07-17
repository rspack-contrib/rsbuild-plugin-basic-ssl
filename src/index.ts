import type { RsbuildPlugin } from '@rsbuild/core';
import { resolveHttpsConfig } from './util.js';

export const PLUGIN_BASIC_SSL_NAME = 'rsbuild:basic-ssl';

export type PluginBasicSslOptions = {
	/**
	 * Filename of the generated certificate
	 * @default 'fake-cert.pem'
	 */
	filename?: string;
};

export const pluginBasicSsl = (
	options: PluginBasicSslOptions = {},
): RsbuildPlugin => ({
	name: PLUGIN_BASIC_SSL_NAME,
	setup(api) {
		api.modifyRsbuildConfig((config) => {
			config.server = {
				...config.server,
				https: resolveHttpsConfig(config.server?.https, options),
			};
		});
	},
});
