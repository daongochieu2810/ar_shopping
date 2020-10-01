import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
} from "react-native";
import {
  ViroARSceneNavigator,
  ViroARScene,
  ViroAmbientLight,
  Viro3DObject,
} from "react-viro";
var sharedProps = {
  apiKey: "API_KEY_HERE",
};
import PlayScene from "./PlayScene";
import GirlScene from "./GirlScene";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  overlay: {
    flex: 1,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const states = {
  MENU: "MENU",
  PLAY: "PLAY",
  RENDER: "RENDER",
};

class MainScene extends Component {
  state = {
    appState: states.MENU,
  };

  handleSetAppState = (appState) => () => this.setState({ appState });

  renderARPortal = (scene) => (
    <ViroARSceneNavigator {...sharedProps} initialScene={{ scene }} />
  );

  renderMenu = () => (
    <View style={styles.overlay}>
      <TouchableHighlight onPress={this.handleSetAppState(states.PLAY)}>
        <View style={styles.playButton}>
          <Image
            source={require("./assets/target.jpg")}
            style={{ width: 300, height: 300 }}
          />
          <Text style={{ fontSize: 30 }}>PLAY REVERSI</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this.handleSetAppState(states.RENDER)}>
        <View style={styles.playButton}>
          <Text style={{ fontSize: 30 }}>RENDER</Text>
        </View>
      </TouchableHighlight>
    </View>
  );

  renderPlay = () => this.renderARPortal(PlayScene);

  renderObject = () => this.renderARPortal(GirlScene);
  renderAppState = () => {
    const { appState } = this.state;

    switch (appState) {
      case states.MENU:
        return this.renderMenu();
      case states.PLAY:
        return this.renderPlay();
      case states.RENDER:
        return this.renderObject();
      default:
        return null;
    }
  };

  render() {
    return <View style={styles.root}>{this.renderAppState()}</View>;
  }
}

export default MainScene;
