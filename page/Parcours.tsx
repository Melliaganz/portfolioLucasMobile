import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Linking, Animated, Easing } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { experiences } from "../data/parcours";
import { styles } from "../styles/parcours.styles";

const ExpandableButton = ({ isExpanded, onPress }: { isExpanded: boolean; onPress: () => void }) => {
  const animatedValue = useRef(new Animated.Value(isExpanded ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [isExpanded]);

  const rotateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.readMoreBtn}>
      <Text style={styles.readMoreText}>
        {isExpanded ? "Réduire" : "Détails"}
      </Text>
      <Animated.View style={{ transform: [{ rotate: rotateX }], marginLeft: 4 }}>
        <Ionicons name="chevron-down" size={16} color="#60a5fa" />
      </Animated.View>
    </TouchableOpacity>
  );
};

export const Parcours = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <View style={styles.headerIconBox}>
          <Ionicons name="school-outline" size={24} color="#fff" />
        </View>
        <Text style={styles.titleMain}>Mon Parcours</Text>
      </View>

      <View style={styles.card}>
        {experiences.map((exp, index) => {
          const isLast = index === experiences.length - 1;
          const isExpanded = expandedIds[exp.id];

          return (
            <View key={exp.id} style={styles.experienceWrapper}>
              <View style={styles.timelineLeft}>
                <View style={[styles.stepIcon, exp.isActive && styles.activeIcon]}>
                  {React.isValidElement(exp.icon) ? 
                    React.cloneElement(exp.icon as React.ReactElement<any>, {
                      size: 18,
                      color: exp.isActive ? "#fff" : "#94a3b8"
                    }) 
                    : null
                  }
                </View>
                {!isLast && <View style={styles.line} />}
              </View>

              <View style={styles.stepContent}>
                <Text style={[styles.date, exp.isActive && styles.dateActive]}>
                  {exp.date}
                </Text>
                
                <Text style={styles.jobTitle}>{exp.title}</Text>
                
                <TouchableOpacity 
                  disabled={!exp.companyUrl} 
                  onPress={() => exp.companyUrl && Linking.openURL(exp.companyUrl)}
                >
                  <Text style={styles.company}>
                    {exp.company} • {exp.location}
                  </Text>
                </TouchableOpacity>

                <View style={styles.descriptionContainer}>
                  {exp.intro && (
                    <Text style={styles.introText}>{exp.intro}</Text>
                  )}
                  
                  {exp.isList && Array.isArray(exp.description) ? (
                    <View>
                      {(isExpanded ? exp.description : exp.description.slice(0, 2)).map((point, i) => (
                        <Text key={i} style={styles.textBlock}>
                          • {point}
                        </Text>
                      ))}
                      {!isExpanded && exp.description.length > 2 && (
                        <Text style={styles.textBlock}>...</Text>
                      )}
                    </View>
                  ) : (
                    <Text 
                      style={styles.textBlock} 
                      numberOfLines={isExpanded ? undefined : 3}
                    >
                      {exp.description}
                    </Text>
                  )}
                </View>

                <ExpandableButton 
                  isExpanded={isExpanded} 
                  onPress={() => toggleExpand(exp.id)} 
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
