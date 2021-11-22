import { produce } from "immer";

const initialState = {
  mainPosts: [
    {
      id: "",
      content: "",
      images: [],
      comments: [
        {
          id: "dummy1",
          content: "foo",
        },
        {
          id: "dummy2",
          content: "bar",
        },
        {
          id: "dummy3",
          content: "boo",
        },
      ],
    },
  ],
  // ADD POST
  addPostDone: false,
  addPostError: null,
  addPostLoading: false,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const actionAddPostRequest = (data) => {
  return {
    type: ADD_POST_REQUEST,
    data,
  };
};

const post = (state = initialState, { data, error, type } = {}) =>
  // eslint-disable-next-line consistent-return
  produce(state, (draft) => {
    switch (type) {
      // ADD POST CASES
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addpostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.data = data;
        draft.addPostDone = true;
        draft.addPostLoading = false;
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = error;
        break;
      default:
        return draft;
    }
  });

export default post;
