import React, { Fragment } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export function Button(props) {
  return (
    <Fragment>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    marginVertical: 15,
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});