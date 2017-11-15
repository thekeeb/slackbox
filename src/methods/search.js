import spotifyApi from '../api/spotify';

console.log('at least weve made it to the search 1.');

const search = res => async query => {
  console.log('at least weve made it to the search 2.');
  try {
    console.log('at least weve made it to the search 3.');
    const { body: { tracks: { items: tracks } } } = await spotifyApi.searchTracks(query, {limit: 10});
    const messages = tracks.reduce((acc, val, ind) => {
      const artists = val.artists.reduce((acc, val, ind) => `${acc}${ind !== 0 ? ',' : ''} ${val.name}`, '')
      return `${acc}${artists} - ${val.name}\n`;
    }, 'One of these? \n');
    // const payload = {
    //   attachments: [
    //     {
    //       text: 'Choose a track',
    //       callback_id: 'selectTrack',
    //       actions: tracks.map(track => ({
    //         name: 'select',
    //         text: track.name,
    //         value: track.id,
    //         type: 'button',
    //       }))
    //     }
    //   ]
    // };
    return res.send(messages)
  } catch (e) {
    res.send(e.message)
  }
}

export default search;
