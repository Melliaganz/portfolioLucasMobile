import React from "react";
import { View, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { techNames } from "../utils/techData";
import { styles } from "../styles/techStack.styles";

const technologies = [
  {
    name: techNames[0],
    icon: <MaterialCommunityIcons name="react" size={20} color="#61DAFB" />,
  },
  {
    name: techNames[1],
    icon: (
      <MaterialCommunityIcons
        name="language-typescript"
        size={20}
        color="#3178C6"
      />
    ),
  },
  {
    name: techNames[2],
    icon: <MaterialCommunityIcons name="react" size={20} color="#61DAFB" />,
  },
  {
    name: techNames[3],
    icon: (
      <MaterialCommunityIcons name="language-css3" size={20} color="#1572B6" />
    ),
  },
  {
    name: techNames[4],
    icon: (
      <MaterialCommunityIcons name="android-studio" size={20} color="#3DDC84" />
    ),
  },
  {
    name: techNames[5],
    icon: <FontAwesome6 name="app-store-ios" size={20} color="#007AFF" />,
  },
  {
    name: techNames[6],
    icon: (
      <MaterialCommunityIcons
        name="elephant"
        size={20}
        color="#02303A"
      />
    ),
  },
  {
    name: techNames[7],
    icon: (
      <MaterialCommunityIcons
        name="language-javascript"
        size={20}
        color="#F7DF1E"
      />
    ),
  },
  {
    name: techNames[8],
    icon: (
      <MaterialCommunityIcons
        name="leaf"
        size={20}
        color="#47A248"
      />
    ),
  },
  {
    name: techNames[9],
    icon: (
      <MaterialCommunityIcons
        name="language-kotlin"
        size={20}
        color="#7F52FF"
      />
    ),
  },
  {
    name: techNames[10],
    icon: (
      <MaterialCommunityIcons name="dolphin" size={20} color="#4479A1" />
    ),
  },
  {
    name: techNames[11],
    icon: (
      <MaterialCommunityIcons
        name={"nodejs" as any}
        size={20}
        color="#339933"
      />
    ),
  },
];

export const TechStack = () => {
  return (
    <View style={styles.stackContainer}>
      <Text style={styles.title}>Stack technique principale</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.marqueeTrack}
        decelerationRate="fast"
      >
        {technologies.map((tech, index) => (
          <View key={index} style={styles.badge}>
            <View style={styles.icon}>{tech.icon}</View>
            <Text style={styles.techName}>{tech.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
