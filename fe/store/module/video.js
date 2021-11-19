import { produce } from "immer";
import { lorem } from "faker";

// videoId = items[index].id
// title  = items[index].snippet.title
// tags = items[index].snippet.tags
// description = items[index].snippet.description
// thumnails = items[index].snippet.thumnails

const initialState = {
  Videos: [
    {
      videoId: "A66ABB33CC",
      title: lorem.words(),
      tags: [lorem.word(), lorem.word(), lorem.word()],
      description: lorem.paragraphs(),
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mlUIoA6NHxw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/mlUIoA6NHxw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/mlUIoA6NHxw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/mlUIoA6NHxw/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/mlUIoA6NHxw/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
    },
    {
      videoId: "DDKSA123",
      title: lorem.words(),
      tags: [lorem.word(), lorem.word(), lorem.word()],
      description: lorem.paragraphs(),
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mlUIoA6NHxw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/mlUIoA6NHxw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/mlUIoA6NHxw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/mlUIoA6NHxw/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/mlUIoA6NHxw/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
    },
  ],
  loadVideoLoading: false,
  loadVideoDone: false,
  loadVideoError: null,
};

export const LOAD_VIDEO_REQUEST = "LOAD_VIDEO_REQUEST";
export const LOAD_VIDEO_SUCCESS = "LOAD_VIDEO_SUCCESS";
export const LOAD_VIDEO_FAILURE = "LOAD_VIDEO_FAILURE";

const videoReducer = (state = initialState, { type, error, data } = {}) =>
  // eslint-disable-next-line consistent-return
  produce(state, (draft) => {
    switch (type) {
      case LOAD_VIDEO_REQUEST:
        draft.loadVideoLoading = true;
        draft.loadVideoDone = false;
        draft.loadVideoError = null;
        break;
      case LOAD_VIDEO_SUCCESS:
        draft.Videos = data;
        draft.loadVideoLoading = false;
        draft.loadVideoDone = true;
        break;
      case LOAD_VIDEO_FAILURE:
        draft.Videos = draft;
        draft.loadVideoLoading = false;
        draft.loadVideoError = error;
        break;
      default:
        return draft;
    }
  });

export default videoReducer;
