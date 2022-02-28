import React, { Fragment } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { ButtonProps } from "../types";

export function Button({text,...rest}: ButtonProps) {
  return (
    <Fragment>
      <TouchableOpacity
        style={styles.button}
        onPress={rest.onPress}
        activeOpacity={.7}
        {...rest}
      >
        <Text style={styles.buttonText}>
          {text}
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