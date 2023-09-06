$(document).ready(function () {
  getToken();
})

// window.onSpotifyIframeApiReady = (IFrameAPI) => {

// };


const clientId = 'aace5f500b004bd987fbd76950c65ed3';
const clientSecret = 'd3a4f2f98cd84191bd0dfffdf624a31e';
var searchEndPoint = 'https://api.spotify.com/v1/search?q=jazz&type=track';


const getToken = async () => {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  var token = data.access_token;

  getTracks(token, searchEndPoint);
  return token;
}

const getTracks = async (token, endPoint) => {
  // console.log("getTracks token:" + token + " endpoint: " + endPoint)
  const result = await fetch(endPoint, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token }
  });

  const data = await result.json();
  // need to put songPreview, artist, and album ins some kind of container.
  var songPreview = data.tracks.items[0].preview_url
  var artist = data.tracks.items[0].artists[0].name
  var album = data.tracks.items[0].album.name // 
  console.log("song preview: ", songPreview)
  console.log("the artist: ", artist)
  console.log("the album is: ", album)
  appendToHtml(data, songPreview, artist, album);
  return data.items;
}

function appendToHtml(data, song, artist, album) {
  console.log('appendToHtml data: ', data)
  var songContainer = $("#songContainer");
  var appSong = $('<p class="songPreview">Song Preview: ' + song + '</p>');
  songContainer.append(appSong);
  var appArtist = $('<p class="songArtist">Artis : ' + artist + '</p>');
  songContainer.append(appArtist);
  var appAlbum = $('<p class="songAlbum">Song Preview: ' + album + '</p>');
  songContainer.append(appAlbum);
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');
  const options = {
    uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
  };
  const callback = (EmbedController) => {  
    document.querySelectorAll('.episode').forEach(
    episode => {
      episode.addEventListener('click', () => {
        // click event handler logic goes here
      });
    }) };
  IFrameAPI.createController(element, options, callback);




};
const callback = (EmbedController) => {
  document.querySelectorAll('.episode').forEach(
    episode => {
      episode.addEventListener('click', () => {
        // click event handler logic goes here
      });
    })
};
episode.addEventListener('click', () => {
  EmbedController.loadUri(episode.dataset.spotifyId)
});
const options = {
  width: '60%',
  height: '200',
  uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
};