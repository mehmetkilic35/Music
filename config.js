module.exports = {
        px: '.',
        playing: '🎵 KılıçMusic',
        messageColor:'#FF6347',

    opt: {
        DJ: {
            enabled: false,
            roleName: 'sa', //DJ rolünüzün ismi. ~AOPRAX
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume']  // ~AOPRAX
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
