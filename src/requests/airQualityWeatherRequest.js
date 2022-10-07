import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_API_URL;

async function airQualityWeatherRequest() {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        key,
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
}

export default airQualityWeatherRequest;
