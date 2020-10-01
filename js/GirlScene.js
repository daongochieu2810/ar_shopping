import React, { Component } from "react";

import {
  ViroARScene,
  ViroAmbientLight,
  Viro3DObject,
  ViroNode,
} from "react-viro";

class GirlScene extends Component {
  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#fff" />
        <ViroNode position={[0.0, 0.0, 0.5]}>
        <Viro3DObject
          source={require("./assets/girl/girl.obj")}
          position={[-0.0, -2.0, -2.0]}
          resources={[
            require("./assets/girl/girl.mtl"),
            require("./assets/girl/texture/all.png"),
            require("./assets/girl/texture/body.png"),
            require("./assets/girl/texture/head.png"),
          ]}
          scale={[0.03, 0.03, 0.03]}
          type="OBJ"
        />
        </ViroNode>
      </ViroARScene>
    );
  }
}

export default GirlScene;
