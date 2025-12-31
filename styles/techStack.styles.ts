import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  stackContainer: {
    width: "100%",
    maxWidth: 500,
    paddingVertical: 32, // Correspond à 2rem
  },
  title: {
    fontSize: 14, // Correspond à .875rem
    fontWeight: "600",
    color: "#f8fafc",
    marginBottom: 16, // Correspond à 1rem
    textTransform: "uppercase",
    letterSpacing: 0.5, // Simulation de .05em
    opacity: 0.9,
    textAlign: "left",
  },
  marqueeContainer: {
    flexDirection: "row",
    overflow: "hidden",
    position: "relative",
  },
  marqueeTrack: {
    flexDirection: "row",
    gap: 16, // Correspond à 1rem
    paddingVertical: 16, // Correspond à 1rem
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12, // Correspond à .75rem
    paddingHorizontal: 16, // Correspond à 1rem
    paddingVertical: 8, // Correspond à .5rem
    backgroundColor: "rgba(30, 41, 59, 0.3)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
  },
  techName: {
    fontSize: 12,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.8)",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
});
