import React, { Fragment } from 'react';
import { 
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

export function SkillCard(props) {
  return (
    <Fragment>
      <TouchableOpacity style={styles.skillCard}>
        <Text style={styles.skillText}>
          {props.skill}
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
