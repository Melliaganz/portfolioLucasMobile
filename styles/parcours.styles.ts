import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  section: {
    width: "100%",
    backgroundColor: "#101622",
    paddingVertical: 64, // 4rem
    paddingHorizontal: 20,
    alignItems: "center",
  },
  header: {
    marginBottom: 48, // 3rem
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerIconBox: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#3b82f6",
    ...Platform.select({
      ios: {
        shadowColor: "#3b82f6",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  titleMain: {
    fontSize: 28,
    fontWeight: "700",
    color: "#ffffff",
  },
  card: {
    width: "100%",
    maxWidth: 1000,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#282e39",
    backgroundColor: "#161b26",
    padding: 24,
  },
  experienceWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  timelineLeft: {
    width: 40,
    alignItems: "center",
    marginRight: 16,
  },
  stepIcon: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#282e39",
    backgroundColor: "#161b26",
    zIndex: 1,
  },
  activeIcon: {
    borderColor: "#3b82f6",
    backgroundColor: "#3b82f6",
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: "#282e39",
    marginVertical: 4,
  },
  stepContent: {
    flex: 1,
    paddingBottom: 40,
  },
  date: {
    fontSize: 14,
    fontWeight: "600",
    color: "#a1a1aa",
    marginBottom: 4,
  },
  dateActive: {
    color: "#3b82f6",
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 4,
  },
  company: {
    fontSize: 14,
    fontWeight: "600",
    color: "#cbd5e1",
    marginBottom: 12,
  },
  descriptionContainer: {
    marginTop: 8,
  },
  introText: {
    color: "#e2e8f0",
    fontSize: 15,
    marginBottom: 8,
    fontWeight: "500",
  },
  textBlock: {
    color: "#94a3b8",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 4,
  },
  readMoreBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  readMoreText: {
    color: "#3b82f6",
    fontSize: 14,
    fontWeight: "600",
  },
});
