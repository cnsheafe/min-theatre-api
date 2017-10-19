const fetch = require("node-fetch");

/**
 * Gets video results via the Youtube Search API.
 * @param {string} query - Searchphrase to find Youtube Videos
 * @returns {Array<snippet.items>} - Array containing video result info
 */
function getResults(query) {
  const url = "".concat(
    "https://www.googleapis.com/youtube/v3/search?",
    "part=snippet&",
    "type=video&",
    `key=${process.env.YT_KEY}&`,
    `q=${query}`
  );

  return getYTResource(url)
    .then(json => {
      return json.items;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}
/**
 * Gets additional info on retrieved videos from Youtube API.
 * @param {Array<string>} videoIds
 * @returns {Promise} - Info from video resource
 */
function getExtraVideoInfo(videoIds) {
  let videoIdsString = ""; 
  videoIds.forEach(function(vidId) {
    videoIdsString += vidId + ",";
  });
  videoIdsString = videoIdsString.trim().slice(0, videoIdsString.length-1);
  const url = "".concat(
    "https://www.googleapis.com/youtube/v3/videos?",
    "part=contentDetails,statistics&",
    `id=${videoIdsString}&`,
    `key=${process.env.YT_KEY}`
  );
  return getYTResource(url)
    .then(json => {
      return json.items;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}
/**
 * Helper function for accessing Youtube API Resources such as
 * video or search.
 * @private
 * @param {string} url - URL path to youtube resource
 * @returns {YTResource} - JSON of specified resource parts
 */
function getYTResource(url) {
  return fetch(url, {
      method: "GET"
    })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw res;
      }
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}

module.exports = {getResults, getExtraVideoInfo};