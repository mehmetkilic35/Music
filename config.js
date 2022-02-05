module.exports = {
        px: '!', //prefix
        playing: 'Semih Yılmaz-Müzik Botu', //Botunuzun oynuyor durumu

    opt: {
        DJ: {
            enabled: false, //Eğer sadece DJ'ler kullanabilsin istiyorsanız false yazanı true yapın.
            roleName: 'DJ', //DJ rolünüzün ismi ne ise onu yazın. Sunucunuzda sadece o role sahip kişiler kullanabilecektir.
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Dokunmayın.
        },
        maxVol: 250, //maximum ses seviyesi kaç olacak belirtebilirsiniz.
        loopMessage: false, //Ellemeyin.
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Ellemeyin.
                highWaterMark: 1 << 25 //Ellemeyin.
            }
        }
    }
};
