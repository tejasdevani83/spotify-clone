export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    "BQD1h73hYeidM_JPb2NA9M7E9p4I-9xuKlQIZYEEHz8JzBbmi5c75RAFttepxc7J_zNJH4k46IB-1hHBd8q_D2cf_bnvtt1tRDeBKgdKpDccoVX4wwmps_E5Fm9pefF8wAzP_06yWKrMGLcdvAv1BnFDMFaO-K_sxVgfXJkM9fbhGyLZ",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
