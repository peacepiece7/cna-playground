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

const post = (state = initialState, { data, error, type } = {}) => {
  switch (type) {
    // ADD POST CASES
    case ADD_POST_REQUEST: {
      return {
        ...state,
        addPostLoading: true,
        addpostDone: false,
        addPostError: null,
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        data,
        addPostDone: true,
        addPostLoading: false,
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        addPostLoading: false,
        addPostError: error,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default post;
