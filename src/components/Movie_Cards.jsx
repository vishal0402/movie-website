import React from "react";
import "./Movie_Cards.css";

class Movie_Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      filterMovies: [],
    };
  }

  filterMovieItems(e) {
    this.setState(
      {
        searchQuery: e.target.value,
        filterMovies: this.props.movieList.filter((movie, i) =>
          movie.Title.toLowerCase().includes(e.target.value.toLowerCase())
        ),
      },
      () => {
        console.log(this.state.filterMovies);
      }
    );
  }
  
  render() {
    let { movieList } = this.props;
    return (
      <>
    <div>
        <h1 className="Movie-title">Movies Application</h1>
        
    </div>
        <div className="searchcontainer">
            
          <input type="search"
            value={this.state.searchQuery || ""}
            onChange={(e) => this.filterMovieItems(e)}
            placeholder="Search Movie Names... ">  
         </input>
         
        </div>
        <div className="moviecontainer">
          {this.state.filterMovies.length <= 0
            ? movieList.map((movie, i) => (
                <div className="moviecard" key={i}>
                  <img src={movie.Poster} alt={i} />
                  <div className="moviedesc">
                    <h3>{movie.Title}</h3>
                  </div>
                </div>
              ))
            : this.state.filterMovies.map((movie, i) => (
                <div className="moviecard" key={i}>
                  <img src={movie.Poster} alt={i} />
                  <div className="moviedesc">
                    <h3>{movie.Title}</h3>
                  </div>
                </div>
              ))}
        </div>
        <footer className="footer">
    <p>&copy;2023 Raja Dhoundiyal</p>
    <p>
      <a href="mailto:mustafaispahani@gmail.com">
        <i className="fa fa-envelope fa-fw"></i>
      </a>
      <a href="https://github.com/Mustafa2503" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github fa-fw"></i>
      </a>
      <a href="https://www.linkedin.com/in/ispahani-m-mustafa" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="https://codepen.io/Mustafa-Ispahani25/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-codepen"></i>
      </a>
      <a href="https://www.freecodecamp.com/mustafa-ispahani25" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-fire fa-fw"></i>
      </a>
    </p>
  </footer>
      </>
    );
  }
}

export default Movie_Cards;