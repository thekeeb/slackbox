const pl = process.env.SPOTIFY_PLAYLIST_ID

const playlist = res =>
  res.send({
    attachments: [
      {
        fallback: `PLAYLIST`,
        title: `PLAYLIST`,
        title_link: `https://open.spotify.com/user/thekeeb/playlist/${pl}`,
      }
    ]
  });

export default playlist;
