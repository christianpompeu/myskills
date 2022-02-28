import React, { Fragment } from 'react';
import { 
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { SkillCardProps } from "../types";

export function SkillCard({text,...rest}: SkillCardProps) {
  return (
    <Fragment>
      <TouchableOpacity 
        style={styles.skillCard}
        {...rest}
      >
        <Text style={styles.skillText}>
          {text}
        </Text>
      </TouchableOpacity>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  skillCard: {
    backgroundColor: '#1F1E25',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  skillText: {
    color: '#FFFFFF',
    fontSize: 18,
  }
});
