var playlist = { artistNames : 'songTitles'}

function updatePlaylist(playlist, artistNames, songTitles) {
  return Object.assign({}, playlist, {[artistNames]: songTitles})
}

function removeFromPlaylist(playlist, artistNames) {
  return delete playlist.artistNames
}
