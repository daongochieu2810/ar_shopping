import React, { Component } from "react";

import {
  ViroARScene,
  ViroAmbientLight,
  ViroARTrackingTargets,
  ViroARPlane,
} from "react-viro";

import Game from "./components/Game";
import { create as createGame } from "./reversi/game/Game";
import { create as createPlayer } from "./reversi/player/Player";
import { TYPE_BLACK, TYPE_WHITE } from "./reversi/cell/Cell";

class PlayScene extends Component {
  componentDidMount() {
    console.log("ashdb");
  }
  state = {
    game: createGame([
      createPlayer("John", TYPE_BLACK),
      createPlayer("Charly", TYPE_WHITE),
    ]),
  };

  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#fff" />

        <Game game={this.state.game} />
      </ViroARScene>
    );
  }
}

export default PlayScene;
