module.exports = {
        px: '!', //prefix
        playing: '!y', //Botunuzun oynuyor durumu

    opt: {
        DJ: {
            enabled: false, //Eğer sadece DJ'ler kullanabilsin istiyorsanız false yazanı true yapın.
            roleName: 'DJ', //DJ rolünün ismi ne ise yazın. Discord sunucunuzda sadece o roldekiler kullanabilir.
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Dokunmayın
        },
        maxVol: 250, //Maximum ses seviyesi kaç olacak belirte bilirsiniz.
        loopMessage: false, //Elleme
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Elleme
                highWaterMark: 1 << 25 //Elleme
            }
        }
    }
};
