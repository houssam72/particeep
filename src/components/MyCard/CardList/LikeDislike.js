import React,{Component} from "react";
import c from "classnames";
import "./LikeDislike.css";

class LikeDislike extends Component {
  state = {
    like: this.props.like,
    dislike: this.props.dislikes,
    likeActive: false,
    dislikeActive: false
  };

  setDislike() {
    this.setState({
      dislikeActive: !this.state.dislikeActive,
      dislike: this.state.dislikeActive
        ? this.state.dislike - 1
        : this.state.dislike + 1
    });
  }
  setLike() {
    this.setState({
      likeActive: !this.state.likeActive,
      like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
    });
  }

  handleLike() {
    if (this.state.dislikeActive) {
      this.setLike();
      this.setDislike();
    }
    this.setLike();
  }

  handleDislike() {
    if (this.state.likeActive) {
      this.setDislike();
      this.setLike();
    }
    this.setDislike();
  }

  render() {
    return (
      <>
        <button
          onClick={() => this.handleLike()}
          className={  c({ ["activeL"]: this.state.likeActive })}
        >
         <img  alt="" src="./like.png" width="30px"/>
        </button>
        <p>
        {this.state.like}
        </p>
        

        <button
          className={c({ ["activeD"]: this.state.dislikeActive })}
          onClick={() => this.handleDislike()}
        >
           <img alt="" src="./dislike.png" width="30px"/>
          
        </button>
        <p>
        {this.state.dislike}
        </p>
      </>
    );
  }
}

export default LikeDislike;


