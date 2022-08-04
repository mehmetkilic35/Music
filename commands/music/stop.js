module.exports = {
    name: 'stop',
    aliases: ['kapat'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);  // ~AOPRAX

        queue.destroy();

        message.channel.send(`Şarkı durduruldu! ✅`);
    },
};