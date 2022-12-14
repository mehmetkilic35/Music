player.on('error', (queue, error) => {
    console.log(`Şarkı kuyruğu ile ilgili bir sorun oluştu => ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Bağlanma sorunu yaşanıyor => ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`🎵 Müzik çalmaya başladı: **${track.title}** -> Kanal: **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`**${track.title}** İsimli şarkı çalma listesine eklendi. ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Bağlı ses kanalından birisi attı, bütün çalma listesi temizlendi! ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Sesli kanalda kimse olmadığı için ses kanalından ayrıldım. ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Bütün çalma sırası bitti. ✅');
});
