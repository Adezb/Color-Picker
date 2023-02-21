import { ref, reactive } from "@vue/reactivity";

const useColorPicker = () => {
  const colors = reactive(["red", "green", "blue", "yellow"]);

  //background for the color buttons
  const colorBackground = reactive([
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
  ]);

  //declare a function to get the background color
  const getBackgroundColor = (color) => {
    return colorBackground[colors.indexOf(color)];
  };

  let message = ref("Select a color...");

  //declare scores
  const scores = reactive({
    previousScore: 0,
    currentScore: 0,
  });

  //declare a function to update scores
  const updateScores = (points) => {
    scores.previousScore = scores.currentScore;
    scores.currentScore = points;
  };

  //declare a function to deduct scores
  const deductScores = (points) => {
    scores.currentScore = scores.previousScore;
    scores.previousScore = points;
  };

  //declare a function to update score
  //   const updateScore = (points) => {
  //     score.value += points;
  //   };

  //declare a function to deduct score
  //   const deductScore = (points) => {
  //     score.value -= points;
  //   };

  //Declare a function to deactivate the button
  const deactivateButton = () => {
    if (scores.currentScore === -15) {
      return true;
    } else {
      return false;
    }
  };

  //Reset Game
  const restartGame = () => {
    message.value = "Select a color...";
    scores.previousScore = 0;
    scores.currentScore = 0;
  };

  const matchColor = (value) => {
    //random color based on array index
    const randomColor = Math.floor(Math.random() * colors.length);

    //if the value is equal to the random color
    if (colors[randomColor] === value) {
      message.value = `You Win! [Result: ${colors[randomColor].toUpperCase()}]`;
      console.log("----------->", colors[randomColor]);
      updateScores(scores.currentScore + 5);
    } else if (colors[randomColor] !== value) {
      message.value = `You Lose! [Result: ${colors[
        randomColor
      ].toUpperCase()}]`;
      deductScores(scores.currentScore - 5);
    }

    //if score is equal to -15, Game Over
    if (scores.currentScore === -15 && colors[randomColor] !== value) {
      message.value = `Game Over! Click
        RESTART GAME to start again [Result: ${colors[
          randomColor
        ].toUpperCase()}]`;
    }

    //if the value is not equal to the random color
    // message.value = `You Lose! [Result: ${colors[
    //   randomColor
    // ].name.toUpperCase()}]`;
    // score.value -= 5;
    //if score is equal to -15, Game Over
    // if (score.value === -15 && colors[randomColor].name !== value.name) {
    //   message.value = `Game Over! Click
    //   RESET GAME to start again [Result: ${colors[
    //     randomColor
    //   ].name.toUpperCase()}]`;
    // }
  };

  return {
    colors,
    message,
    matchColor,
    restartGame,
    scores,
    deactivateButton,
    getBackgroundColor,
  };
};

export default useColorPicker;

// { name: "red", bg: "#ff0000" },
//     { name: "green", bg: "#00ff00" },
//     { name: "blue", bg: "#0000ff" },
//     { name: "yellow", bg: "#ffff00" },

// deductScore(0);
//       updateScore(0);
//       manageScore(previousScore.value - 5, (previousScore.value = score.value)),
//         `${previousScore.value} - ${score.value}`;

// updateScore(0);
// deductScore(0);
// manageScore(previousScore.value + 5, (score.value = previousScore.value)),
//   `${previousScore.value} + ${score.value}`;
