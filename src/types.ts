import { TouchableOpacityProps } from "react-native";

export interface SkillData{
  id: string;
  name: string;
}

export interface ButtonProps extends TouchableOpacityProps{
  text: string;
}

export interface SkillCardProps extends TouchableOpacityProps{
  text: string;
}