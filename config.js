module.exports = {
        px: '!',
        playing: 'Youtube: AOPRAX',
        messageColor:'#FF6347',

    opt: {
        DJ: {
            enabled: false, // ~AOPRAX
            roleName: 'DJ', //DJ rolünüzün ismi. ~AOPRAX
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
