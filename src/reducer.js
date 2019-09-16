export function reducer(state, action) {
  if (action.type === "FETCHING") {
    return { ...state, loading: true };
  }

  if (action.type === "SUCCESS") {
    return {
      ...state,
      images: action.images,
      loading: false
    };
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      loading: false
    };
  }

  if (action.type === "SAVE_IMAGE") {
    return {
      ...state,
      savedImages: [...state.savedImages, action.savedImage]
    };
  }

  return state;
}

export let initialState = {
  images: null,
  loading: false,
  savedImages: []
};
