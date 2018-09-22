import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavBar from "./components/NavBar/navBar";
import Header from "./components/Header/header";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    clicked: [],
    Message: "Click an image to begin"
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };


  clickedImage = props => {
    if (this.state.clicked.includes(props.id) === false) {
      this.state.clicked.push(props.id);
      this.setState({
        score: this.state.score + 1,
      });
      if (this.state.score >= this.state.topScore) {
        this.setState((prevState) => ({ 
          topScore: prevState.score,
          topMessage:"You guessed correctly!"
         }))
        this.Shuffle();
      };
    }
    else {
      this.setState({
        score: 0,
        clicked: [],
        topMessage: "You guessed incorrectly!",
        
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score })
        
      };
      this.Shuffle();
    };
  };
  
  Shuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
<div>
  <NavBar
  scores = {this.state}

/>
<Header />
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickedImage = {this.clickedImage}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
