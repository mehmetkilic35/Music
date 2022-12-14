const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım","y", "müzik"],
    showHelp: false,
    utilisation: 'k!müzik',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor(client.config.messageColor);
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.addField(`Müzik Komutları`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('KılıçMusic | PealDigital', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};
