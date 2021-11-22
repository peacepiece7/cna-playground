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
    const response = await this.youtube.get("vidoes", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    console.log("RESPONSE ARE :", response);
    console.log("RESPONSE HAS DATA BELOW : ", response.data);
    return response.data.items;
  }

  testing() {
    console.log(this.key);
    console.log("ok it`s connected!");
  }
}

export default YouTube;
