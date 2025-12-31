import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
  Platform,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { projectsData } from "../data/projectsData";
import { styles } from "../styles/projects.styles";

const STORES = {
  IOS: "https://apps.apple.com/fr/app/impots-gouv/id505488770",
  ANDROID: "https://play.google.com/store/apps/details?id=fr.gouv.finances.smartphone.android",
  DESKTOP: "https://www.impots.gouv.fr",
};

const getSmartLink = (url: string) => {
  if (url !== "dgfip_smart_link") return url;
  if (Platform.OS === "ios") return STORES.IOS;
  if (Platform.OS === "android") return STORES.ANDROID;
  return STORES.DESKTOP;
};

const ProjectCard = ({ project }: { project: any }) => (
  <View style={styles.card}>
    <View style={styles.imageWrapper}>
      <Image source={project.image} style={styles.image} />
      <View style={styles.yearBadge}>
        <Text style={styles.yearText}>{project.year}</Text>
      </View>
    </View>
    <View style={styles.content}>
      <View style={styles.cardHeader}>
        <Text style={styles.projectTitle}>{project.title}</Text>
        <View style={styles.links}>
          {project.githubUrl && (
            <TouchableOpacity
              onPress={() => Linking.openURL(project.githubUrl)}
              style={styles.iconLink}
            >
              <AntDesign name="github" size={18} color="#fff" />
            </TouchableOpacity>
          )}
          {project.liveUrl && (
            <TouchableOpacity
              onPress={() => Linking.openURL(getSmartLink(project.liveUrl))}
              style={styles.iconLink}
            >
              <Ionicons name="eye-outline" size={18} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Text style={styles.description} numberOfLines={3}>
        {project.description}
      </Text>
      <View style={styles.tags}>
        {project.tags.map((tag: string) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  </View>
);

export const Projects = () => {
  const [filter, setFilter] = useState("Tout");

  const categories = useMemo(() => {
    const allTags = projectsData.flatMap((p) => [p.category, ...p.tags]);
    return ["Tout", ...Array.from(new Set(allTags)).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "Tout") return projectsData;
    return projectsData.filter(
      (p) => p.category === filter || p.tags.includes(filter)
    );
  }, [filter]);

  return (
    <View style={styles.projectsSection}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mes Projets</Text>
          <Text style={styles.subtitle}>
            Faites défiler pour explorer mes réalisations.
          </Text>
        </View>

        <View style={styles.filterBarWrapper}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.filterBtn,
                  filter === item && styles.activeFilter,
                ]}
                onPress={() => setFilter(item)}
              >
                <Text
                  style={[
                    styles.filterBtnText,
                    filter === item && styles.activeFilterText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.filterBar}
          />
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filteredProjects}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProjectCard project={item} />}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={Platform.OS === 'web' ? undefined : 364} // 340 width + 24 gap
          contentContainerStyle={styles.projectsList}
        />
      </View>
    </View>
  );
};
