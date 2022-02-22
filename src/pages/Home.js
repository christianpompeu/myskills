/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    setSkills(oldState => ([...oldState, newSkill]));
    setNewSkill('');
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good Morning!')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Afternoon!!')
    } else {
      setGretting('Good Night!!!')
    }
  }, []);

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome, Christian
        </Text>
        <Text style={styles.gretting}>
          {gretting}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="New Skill"
          // onChangeText={setNewSkill}
          onChangeText={text => setNewSkill(text)}
          value={newSkill}
          placeholderTextColor="#555555"
        />
        <Button onPress={handleAddNewSkill} text="Adicionar" />
        <Text style={[styles.title, { marginTop: 50 }]}>
          My Skills
        </Text>
        <FlatList
          data={skills}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <SkillCard skill={item} />
          )}
        />
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
  gretting: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 10,
  },
});
