module.exports = {
        px: '!', //prefix
        playing: 'Youtube: AOPRAX',
        messageColor:'#FF6347',

    opt: {
        DJ: {
            enabled: false, //Eğer sadece DJ'ler kullanabilsin istiyorsanız false yazanı true yapın. ~AOPRAX
            roleName: 'DJ', //DJ rolünüzün ismi ne ise onu yazın. ~AOPRAX
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume']
        },
        maxVol: 250,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
