import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#101622",
  },
  container: {
    paddingVertical: 80,
    paddingHorizontal: 24,
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
  infoColumn: {
    marginBottom: 50,
    width: "100%",
  },
  accentBar: {
    width: 48,
    height: 4,
    backgroundColor: "#135bec",
    borderRadius: 9999,
    marginBottom: 20,
  },
  title: {
    fontSize: width > 768 ? 48 : 36,
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: 20,
    lineHeight: width > 768 ? 58 : 44,
  },
  subtitle: {
    color: "#9da6b9",
    fontSize: 18,
    lineHeight: 28,
    maxWidth: 500,
  },
  contactDetails: {
    marginVertical: 40,
    gap: 25,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconWrapper: {
    width: 52,
    height: 52,
    backgroundColor: "#1c1f27",
    borderWidth: 1,
    borderColor: "#282e39",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  labelSmall: {
    fontSize: 13,
    color: "#9da6b9",
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  detailLink: {
    fontSize: 17,
    color: "#ffffff",
    fontWeight: "700",
  },
  staticDetail: {
    fontSize: 17,
    color: "#ffffff",
    fontWeight: "700",
  },
  socialGroup: {
    marginTop: 20,
  },
  socialTitle: {
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#4a5568",
    marginBottom: 15,
  },
  socialLinksRow: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#1c1f27",
    borderWidth: 1,
    borderColor: "#282e39",
    alignItems: "center",
    justifyContent: "center",
  },
  formCard: {
    backgroundColor: "#161a23",
    padding: width > 768 ? 40 : 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#282e39",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 30,
    color: "#ffffff",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#e2e8f0",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#1c1f27",
    borderWidth: 1,
    borderColor: "#2d3748",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    fontSize: 16,
    color: "#ffffff",
  },
  textarea: {
    height: 150,
    textAlignVertical: "top",
  },
  submitBtn: {
    backgroundColor: "#135bec",
    flexDirection: "row",
    height: 58,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    width: "100%",
  },
  successBtn: {
    backgroundColor: "#10b981",
  },
  errorBtn: {
    backgroundColor: "#ef4444",
  },
  disabledBtn: {
    opacity: 0.7,
  },
  submitBtnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
});
