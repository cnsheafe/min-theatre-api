const fetch = require("node-fetch");

function getResults(url) {
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
    .then(json => {
      return json.items;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}

module.exports = getResults;