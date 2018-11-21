import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, FaceDetector } from 'expo';

export default class Cam extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    autoFocus: Camera.Constants.AutoFocus.on,
    ratio: '1:1',

  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleFacesDetecsted = () => {
    alert(123)
  }

  handleFacesDetected = ({ faces }) => {
    if (faces.length > 0) {
      this.props.renderBtn(true)
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    else {
      return (
        <View style={{ flex: 1 }}>

          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ratio={this.state.ratio}
            onFacesDetected={this.handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.Constants.Mode.fast,
              detectLandmarks: FaceDetector.Constants.Mode.none,
              runClassifications: FaceDetector.Constants.Mode.none,
            }}
          >
          </Camera>

        </View>
      );
    }
  }
}