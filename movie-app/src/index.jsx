const { createApp, h, ref, computed } = Vue;
const { defWTSC, rgb, px, PE, vh, vw } = wtsc;
// babel会将标签编译为React.createElement,所以我们打了个补丁
const React = { createElement: h };

const w = defWTSC({});

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const Movie = {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return () => {
      const { movie } = props;
      return (
        <div className="con-movie">
          <img src={`${IMG_PATH}${movie.poster_path}`} alt="" />
          <div className="footer">
            <div className="title">{ movie.title}</div>
            <div className="vote_average">{ movie.vote_average}</div>
          </div>
          <div className="overview">
            <h1>Overview</h1>
            { movie.overview}
          </div>
        </div>
      );
    };
  },
};

const App = {
  setup() {
    const movies = ref([]);

    function getMovies(v) {
      if (v === "" || v === undefined) {
        fetch(API_URL, { headers: { "Content-Type": "application/json" } })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            movies.value = data.results;
          });
      } else { 
        fetch(SEARCH_API + v, { headers: { "Content-Type": "application/json" } })
          .then((res) => res.json())
          .then((data) => {
            movies.value = data.results;
          });
      }
    }
    getMovies()
    return () => (
      <div>
        <div className="nav">
          <input

            onKeyup={(e) => {
              if (e.keyCode === 13) { 
                getMovies(e.target.value);
              }
            }
          }
          required
            type="text" placeholder="Search" className="search" />
        </div>
        <div className="movies">
          {movies.value.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  },
};

createApp(App).mount("#app");
