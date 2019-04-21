import React from "react";
import { withTheme } from "styled-components/native";
import { Text, View } from "react-native";

// THIS DOESN'T WORK
@withTheme
export class Button extends React.Component {
  render() {
    const { theme } = this.props;

    return (
      <View>
        <Text style={theme.buttonColor}>some text</Text>
      </View>
    );
  }
}

//THIS WORKS:
// class ButtonUI extends React.Component {
//   render() {
//     const { theme } = this.props;

//     return (
//       <View>
//         <Text style={{ color: theme.buttonColor }}>this should be red</Text>
//       </View>
//     );
//   }
// }

// export const Button = withTheme(ButtonUI);
