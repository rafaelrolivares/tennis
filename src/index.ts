import createMatch from "./game/createMatch";
import { logPlayers } from "./scoreboard/logs";
import playMatch from "./game/playMatch";
import { getRandomPlayers } from "./game/util";

// Entry point of the app. Pick two random players, create a match and play.
const playRandomMatch = () => {
  const [firstPlayer, secondPlayer] = getRandomPlayers();

  const match = createMatch(firstPlayer, secondPlayer);

  setTimeout(() => {
    logPlayers(match);
    playMatch(match);
  }, 2000);
};

playRandomMatch();
