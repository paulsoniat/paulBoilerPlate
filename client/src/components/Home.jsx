import React, { Component } from 'react';
import Navbar from './Navbar';
import '../componentStyles/Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.blinkWords.bind(this)
  }

  componentDidMount () {
    this.blinkWords();
  }
  
  blinkWords = () => {
    const words = ["Developer.", "Entrepeneur.", "Creative Mind."];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 250);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 50);
	};
	loopDeleting();
  };

    typingEffect();
  }
  render() {
      return (
        <div>
          <Navbar/>
            <div className={"homeContainer"}>
              < div>
                <div class="flex">
                <p class="header-sub-title">I am a - </p>
                  <p class="header-sub-title" id="word"></p><p class="header-sub-title blink">|</p>
                </div>
              </div>
            </div>
        </div>
      )
  }
}

export default Home;
