import axios from 'axios';

const STATISTICS_API_URL = 'https://www.googleapis.com/youtube/v3/videos';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyDueM0SFoHBYu_4QmudMvmfSoQSFxDrfpQ';


export const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
  };

  export const viewCountByVideo = (videoId) => {
    const params = {
      key: API_KEY,
      id: videoId,
      part: 'statistics',
    };
    return new Promise((resolve, reject) => {
      axios.get(STATISTICS_API_URL, { params })
        .then((response) => {
          resolve(response.data.items[0].statistics.viewCount);
        })
        .catch((error) => {
          console.log(`youtube statistics api error: ${error}`);
          reject(error);
        });
    });
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};

