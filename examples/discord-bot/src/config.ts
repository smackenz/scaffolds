
/**
 * @module Utils
 */
/**
 * ignore
 */
const confToUse = '../config.json';

export const config: IConfig = require(confToUse);

export interface IConfig {
	ravenDSN: string;
	token: string;
	mongoURL: string;
	ownerID: string[];
}
