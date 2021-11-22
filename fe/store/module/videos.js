import { produce } from "immer";
import { lorem } from "faker";
import { nanoid } from "nanoid";

// videoId = items[index].id
// title  = items[index].snippet.title
// tags = items[index].snippet.tags
// description = items[index].snippet.description
// thumnails = items[index].snippet.thumnails

const initialState = {
  MainVideos: [
    {
      videoId: nanoid(),
      title: lorem.words(),
      tags: [lorem.word(), lorem.word(), lorem.word()],
      description: lorem.paragraphs(),
      thumbnails: {
        default: {
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          width: 120,
          height: 90,
        },
      },
    },
    {
      videoId: nanoid(),
      title: lorem.words(),
      tags: [lorem.word(), lorem.word(), lorem.word()],
      description: lorem.paragraphs(),
      thumbnails: {
        default: {
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          width: 120,
          height: 90,
        },
      },
    },
  ],
  loadVideoLoading: true,
  loadVideoDone: false,
  loadVideoError: null,
};

export const LOAD_VIDEO_REQUEST = "LOAD_VIDEO_REQUEST";
export const LOAD_VIDEO_SUCCESS = "LOAD_VIDEO_SUCCESS";
export const LOAD_VIDEO_FAILURE = "LOAD_VIDEO_FAILURE";

export const actionLoadVideoRequest = (data) => {
  return {
    type: LOAD_VIDEO_REQUEST,
    data,
  };
};

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
