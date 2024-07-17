import fs from 'node:fs';
import path from 'node:path';
import type { ServerConfig } from '@rsbuild/core';
import selfsigned from 'selfsigned';
import type { PluginBasicSslOptions } from './index.js';

type HttpsConfig = ServerConfig['https'];

async function ensureDir(dir: string) {
	try {
		await fs.promises.access(dir);
	} catch (error) {
		await ensureDir(path.dirname(dir));
		await fs.promises.mkdir(dir);
	}
}

export const resolveHttpsConfig = async (
	config: HttpsConfig,
	options: PluginBasicSslOptions,
): Promise<{
	key: NonNullable<HttpsConfig>['key'];
	cert: NonNullable<HttpsConfig>['cert'];
}> => {
	const { key, cert } = config ?? {};

	if (key && cert) {
		return { key, cert };
	}

	const certPath = path.join(
		options.outputPath ?? __dirname,
		options.filename ?? 'fake-cert.pem',
	);

	if (fs.existsSync(certPath)) {
		const stats = await fs.promises.stat(certPath);
		const timeDiff = Date.now() - stats.mtimeMs;
		const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

		// Default validity period is 30 days
		if (daysDiff < 30) {
			const content = await fs.promises.readFile(certPath, {
				encoding: 'utf-8',
			});
			return {
				key: content,
				cert: content,
			};
		}
	}

	const pem = selfsigned.generate(
		[{ name: 'commonName', value: 'localhost' }],
		{
			days: 30,
			keySize: 2048,
		},
	);

	const content = pem.private + pem.cert;

	if (options.outputPath) {
		await ensureDir(options.outputPath);
	}

	await fs.promises.writeFile(certPath, content, { encoding: 'utf-8' });

	return {
		key: content,
		cert: content,
	};
};
