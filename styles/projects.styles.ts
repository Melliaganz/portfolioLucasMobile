import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  projectsSection: {
    width: "100%",
    paddingVertical: 80,
    backgroundColor: "#101622",
  },
  container: {
    width: "100%",
    maxWidth: 1280,
  },
  header: {
    marginBottom: 40,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: width > 768 ? 40 : 32,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 16,
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 17,
    maxWidth: 600,
    textAlign: "center",
  },
  filterBarWrapper: {
    marginBottom: 40,
  },
  filterBar: {
    paddingHorizontal: 20,
    gap: 8,
  },
  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#282e39",
    backgroundColor: "#1c1f27",
  },
  activeFilter: {
    backgroundColor: "#135bec",
    borderColor: "#135bec",
    ...Platform.select({
      ios: {
        shadowColor: "#135bec",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  filterBtnText: {
    fontSize: 14,
    color: "#9da6b9",
  },
  activeFilterText: {
    color: "#ffffff",
  },
  projectsList: {
    paddingHorizontal: 20,
    gap: 24,
  },
  card: {
    width: width <= 480 ? 300 : 340,
    backgroundColor: "#1c1f27",
    borderWidth: 1,
    borderColor: "#282e39",
    borderRadius: 16,
    overflow: "hidden",
  },
  imageWrapper: {
    position: "relative",
    aspectRatio: 16 / 9,
    overflow: "hidden",
    backgroundColor: "#282e39",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  yearBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(16, 22, 34, 0.8)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  yearText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "600",
  },
  content: {
    padding: 20,
    flex: 1,
    gap: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    flex: 1,
  },
  links: {
    flexDirection: "row",
    gap: 8,
  },
  iconLink: {
    width: 36,
    height: 36,
    backgroundColor: "#282e39",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  description: {
    color: "#94a3b8",
    fontSize: 14,
    lineHeight: 21,
    minHeight: 63,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 8,
  },
  tag: {
    backgroundColor: "rgba(19, 91, 236, 0.15)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(19, 91, 236, 0.2)",
  },
  tagText: {
    color: "#60a5fa",
    fontSize: 11,
    fontWeight: "700",
  },
});
