const SongsManager = function () {
    const _songs = {}
    const _youtubeBase = "https://www.youtube.com/watch?v="

    //assumes the given URL is in the form of https://www.youtube.com/watch?v=kJQP7kiw5Fk
    const _extractIdentifier = url => url.split("").splice(32).join("")
    const _getUrl = identifier => _youtubeBase + identifier

    const addSong = (name, url) => _songs[name] = _extractIdentifier(url)
    const getSong = name => console.log(_getUrl(_songs[name]))

    return {
        addSong: addSong,
        getSong: getSong
    }
}


module.exports = (SongsManager);




