import axios from "axios";

class YouTube {
  constructor(key) {
    this.key = key;
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: this.key },
    });
  }

  async getLoading() {
    // const config = {
    //   method: "get",
    //   url: "https://youtube.googleapis.com/youtube/v3?AIzaSyBVHAnrthQ31LMqBRaWYb4BGAYGXHvKd18&part=snippet&chart=mostPopular&maxResults=25",
    //   headers: {},
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    const response = await this.youtube.get("vidoes", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }
}

export default YouTube;
