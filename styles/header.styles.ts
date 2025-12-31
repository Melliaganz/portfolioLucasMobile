import { StyleSheet, Platform, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: "#101622",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.05)",
    justifyContent: "center",
    zIndex: 100,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    maxWidth: 1280,
    alignSelf: "center",
    width: "100%",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoBox: {
    width: 32,
    height: 32,
    backgroundColor: "#135bec",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  navTitre: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: -0.5,
  },
  burger: {
    padding: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#101622",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 24,
  },
  nav: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    paddingBottom: 100,
  },
  navLink: {
    paddingVertical: 10,
  },
  navText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#94a3b8",
  },
  cvButton: {
    flexDirection: "row",
    backgroundColor: "#135bec",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
    gap: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#135bec",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 15,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  cvButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
