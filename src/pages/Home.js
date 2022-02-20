/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('Teste');
  const [skills, setSkills] = useState([]);

  function handleNewSkills(){
    const newSkills = [...skills, newSkill];
    setSkills(newSkills);
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
          placeholderTextColor="#555"
        />
        <TouchableOpacity></TouchableOpacity>
        <Text>
          {newSkill}
        </Text>
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
  }
});
