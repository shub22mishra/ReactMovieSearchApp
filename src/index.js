import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import SearchMovie from "./SearchMovie";

class Main extends React.Component {
  render() {
    {
      return (
        <div className="container">
          <h1 className="title"> React Movie Search</h1>
          <SearchMovie />
        </div>
      );
    }
  }
}
ReactDom.render(<Main />, document.getElementById("root"));
// API Key
//4a0759204426c96159fccceea87f4d83
// api request
// https://api.themoviedb.org/3/movie/550?api_key=4a0759204426c96159fccceea87f4d83
// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTA3NTkyMDQ0MjZjOTYxNTlmY2NjZWVhODdmNGQ4MyIsInN1YiI6IjVmMmEzNjA5NGU2NzQyMDAzNDc5Y2I0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5hs7LJK7rW_JDCbH4Ky9xJ3-5tiAMuJiTmw-hGKLUMk
