import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { TechStack } from "../components/TechStack";
import { techNames } from "../utils/techData";
import { styles } from "../styles/hero.styles";

const { width } = Dimensions.get("window");

interface HeroProps {
  onNavigate: (href: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const displayedSkills = useMemo(
    () =>
      techNames
        .slice(0, 6)
        .map((skill) => `'${skill}'`)
        .join(", "),
    []
  );

  return (
    <View style={styles.hero}>
      <View style={styles.haloPrimary} />

      <View style={styles.container}>
        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>Disponible en freelance</Text>
        </View>

        <Text style={styles.title}>
          Développeur {"\n"}
          <Text style={styles.gradientText}>React</Text> &{" "}
          <Text style={styles.gradientText}>Mobile</Text>
        </Text>

        <Text style={styles.description}>
          Je conçois des expériences web et mobiles performantes, accessibles et
          modernes. Expert en écosystème JavaScript, je transforme vos idées en
          produits digitaux robustes.
        </Text>

        <TechStack />

        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={styles.btnPrimary} 
            onPress={() => onNavigate('projects')}
          >
            <Text style={styles.btnTextPrimary}>Voir mes projets</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.btnSecondary} 
            onPress={() => onNavigate('contact')}
          >
            <Text style={styles.btnTextSecondary}>Me contacter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.visualWrapper}>
          <View style={styles.cardContent}>
            <View style={styles.editor}>
              <View style={styles.dots}>
                <View style={[styles.dot, { backgroundColor: "#ff5f56" }]} />
                <View style={[styles.dot, { backgroundColor: "#ffbd2e" }]} />
                <View style={[styles.dot, { backgroundColor: "#27c93f" }]} />
              </View>
              <Text style={styles.codeLine}>
                <Text style={styles.purple}>const</Text>{" "}
                <Text style={styles.blue}>Developer</Text> = {"{"}
              </Text>
              <Text style={[styles.codeLine, styles.indent]}>
                name: <Text style={styles.green}>'Lengrand Lucas'</Text>,
              </Text>
              <Text style={[styles.codeLine, styles.indent]}>
                skills: [<Text style={styles.green}>{displayedSkills}</Text>],
              </Text>
              <Text style={[styles.codeLine, styles.indent]}>
                status: <Text style={styles.green}>'Open to work'</Text>
              </Text>
              <Text style={styles.codeLine}>{"};"}</Text>
            </View>

            <View style={styles.profileImageWrapper}>
              <Image
                source={require("../assets/images/lucasTravail.webp")}
                style={styles.profileImage}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
