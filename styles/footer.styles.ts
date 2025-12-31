import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  footerSection: {
    width: "100%",
    backgroundColor: "#101622",
    paddingBottom: 40,
    paddingTop: 20,
  },
  contentWrapper: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  divider: {
    width: "100%",
    maxWidth: 1200,
    height: 1,
    backgroundColor: "#1e293b",
    marginBottom: 40,
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 15,
    marginBottom: 25,
  },
  iconLink: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#1c1f27",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#282e39",
  },
  copyright: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  madeWith: {
    color: "#64748b",
    fontSize: 12,
    textAlign: "center",
  },
});
