import React, { Suspense, lazy, useRef } from "react";
import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles/app.styles";

const Header = lazy(() =>
  import("./components/Header").then((module) => ({ default: module.Header }))
);
const Hero = lazy(() =>
  import("./page/Hero").then((module) => ({ default: module.Hero }))
);
const Parcours = lazy(() =>
  import("./page/Parcours").then((module) => ({ default: module.Parcours }))
);
const Projects = lazy(() =>
  import("./page/Project").then((module) => ({ default: module.Projects }))
);
const Contact = lazy(() =>
  import("./page/Contact").then((module) => ({ default: module.Contact }))
);
const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({ default: module.Footer }))
);

export default function App() {
  const scrollRef = useRef<ScrollView>(null);
  const sectionPositions = useRef<Record<string, number>>({});

  const handleLayout = (name: string, y: number) => {
    sectionPositions.current[name] = y;
  };

  const scrollToSection = (name: string) => {
    const position = sectionPositions.current[name];
    if (position !== undefined && scrollRef.current) {
      scrollRef.current.scrollTo({ y: position, animated: true });
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <StatusBar style="light" />
        <Suspense fallback={null}>
          <Header onNavigate={scrollToSection} />
        </Suspense>

        <ScrollView 
          ref={scrollRef} 
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <Suspense
            fallback={
              <View style={styles.center}>
                <ActivityIndicator size="large" color="#135bec" />
              </View>
            }
          >
            <View
              onLayout={(e) => handleLayout("hero", e.nativeEvent.layout.y)}
            >
              <Hero />
            </View>
            <View
              onLayout={(e) => handleLayout("about", e.nativeEvent.layout.y)}
            >
              <Parcours />
            </View>
            <View
              onLayout={(e) => handleLayout("projects", e.nativeEvent.layout.y)}
            >
              <Projects />
            </View>
            <View
              onLayout={(e) => handleLayout("contact", e.nativeEvent.layout.y)}
            >
              <Contact />
            </View>
            <Footer />
          </Suspense>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
