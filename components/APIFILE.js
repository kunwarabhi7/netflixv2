const key = "0f43e2557a2689f3c0849e551cab6ec1";

 const request = {
  reqPopular:    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  reqTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  reqUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  reqPlaying : `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
reqTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
};

// original_title
// release_date
// title
// poster_path
// overview
// backdrop_path




export default request;