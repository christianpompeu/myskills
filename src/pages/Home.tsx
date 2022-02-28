/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";
import { SkillData } from "../types";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setSkills((oldState) => [...oldState, data]);
    setNewSkill("");
  }

  function handleRemoveSkill(id: string){
    const newSkills = skills.filter(
      (skill) => (skill.id != id)
    );

    setSkills(newSkills);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting("Good Morning!");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting("Good Afternoon!!");
    } else {
      setGretting("Good Night!!!");
    }
  }, []);

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Christian</Text>
        <Text style={styles.gretting}>{gretting}</Text>
        <TextInput
          style={styles.input}
          placeholder="New Skill"
          onChangeText={(text) => setNewSkill(text)}
          value={newSkill}
          placeholderTextColor="#555555"
        />
        <Button
          onPress={handleAddNewSkill}
          text="Adicionar"
        />
        <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>
        <FlatList
          data={skills}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SkillCard 
              text={item.name}
              onPress={()=>(handleRemoveSkill(item.id))}
            />
          )}
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 24,
  },
  input: {
    marginTop: 15,
    backgroundColor: "#1F1E25",
    color: "#FFFFFF",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 20 : 15,
    borderRadius: 5,
  },
  gretting: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 10,
  },
});
