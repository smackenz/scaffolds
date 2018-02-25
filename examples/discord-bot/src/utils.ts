export {config} from './config';
import * as Discord from 'discord.js';

export const genEmbed = (title, desc) => new Discord.RichEmbed()
	.setTitle(title)
	.setAuthor('Another Bot', 'https://willb.info/i/822a4be1252dd25c0632e584f0d016c3')
	.setDescription(desc)
	.setFooter('By Willyb321', 'https://willb.info/i/2167372b54bbaf90900a8205a28f3733')
	.setTimestamp();
