/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleNewSkills() {
    const newSkills = [...skills, newSkill];
    setSkills(newSkills);
    setNewSkill('');
  }
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome, Christian
        </Text>
        <TextInput
          style={styles.input}
          placeholder="New Skill"
          onChangeText={setNewSkill}
          value={newSkill}
          placeholderTextColor="#555555"
        />
        <TouchableOpacity style={styles.button} onPress={handleNewSkills}>
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableOpacity>
        {skills.map(
          (skill) => (
            <Text style={styles.textList} key={skill}>
              {skill}
            </Text>)
        )}
      </View>

    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    marginTop: 15,
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 20 : 15,
    borderRadius: 5,
  },
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
  textList: {
    color: '#FFFFFF',
    backgroundColor: '#1F1E25',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  }
});
