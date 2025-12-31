import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  Alert,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/contact.styles";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Demande de projet",
    message: "",
  });

  const endpoint = process.env.EXPO_PUBLIC_GETFORM_URL;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    if (!validateEmail(form.email)) {
      Alert.alert("Erreur", "L'adresse email n'est pas valide.");
      return;
    }

    if (!endpoint) {
      Alert.alert("Erreur de Config", "L'URL Getform est manquante dans le .env.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          subject: "Demande de projet",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        Alert.alert("Erreur", "Le serveur a refusé la requête.");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      Alert.alert("Erreur", "Impossible de contacter Getform.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const socialLinks = [
    { href: "https://discord.gg/7q5KAbqfdu", icon: "discord", Lib: FontAwesome6 },
    { href: "https://github.com/Melliaganz", icon: "github", Lib: FontAwesome6 },
    { href: "https://www.linkedin.com/in/lucaslengrand", icon: "linkedin", Lib: FontAwesome6 },
    { href: "https://x.com/LucasLengrand2", icon: "x-twitter", Lib: FontAwesome6 },
    { href: "https://www.instagram.com/melliaganz/", icon: "instagram", Lib: FontAwesome6 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.infoColumn}>
        <View style={styles.accentBar} />
        <Text style={styles.title}>Travaillons ensemble</Text>
        <Text style={styles.subtitle}>
          Spécialiste React & TypeScript, je construis des applications web et
          mobiles évolutives.
        </Text>

        <View style={styles.contactDetails}>
          <TouchableOpacity
            style={styles.detailItem}
            onPress={() => Linking.openURL("mailto:lucaslengranddev@gmail.com")}
          >
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons name="email-outline" size={24} color="#135bec" />
            </View>
            <View>
              <Text style={styles.labelSmall}>Email</Text>
              <Text style={styles.detailLink}>lucaslengranddev@gmail.com</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.detailItem}>
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons name="map-marker-outline" size={24} color="#135bec" />
            </View>
            <View>
              <Text style={styles.labelSmall}>Localisation</Text>
              <Text style={styles.staticDetail}>Paris, France</Text>
            </View>
          </View>
        </View>

        <View style={styles.socialGroup}>
          <Text style={styles.socialTitle}>Suivez-moi</Text>
          <View style={styles.socialLinksRow}>
            {socialLinks.map((soc, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => Linking.openURL(soc.href)}
                style={styles.socialBtn}
              >
                <soc.Lib name={soc.icon as any} size={20} color="#fff" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.formTitle}>Envoyer un message</Text>

        <Text style={styles.inputLabel}>Nom</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          placeholderTextColor="#9da6b9"
          value={form.name}
          onChangeText={(t) => setForm({ ...form, name: t })}
        />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="john@example.com"
          placeholderTextColor="#9da6b9"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(t) => setForm({ ...form, email: t })}
        />

        <Text style={styles.inputLabel}>Message</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Décrivez votre projet..."
          placeholderTextColor="#9da6b9"
          multiline
          numberOfLines={6}
          value={form.message}
          onChangeText={(t) => setForm({ ...form, message: t })}
        />

        <TouchableOpacity
          style={[
            styles.submitBtn,
            status === "loading" && styles.disabledBtn,
            status === "success" && styles.successBtn,
            status === "error" && styles.errorBtn,
          ]}
          onPress={handleSubmit}
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <>
              <Text style={styles.submitBtnText}>
                {status === "success"
                  ? "Envoyé !"
                  : status === "error"
                  ? "Erreur"
                  : "Envoyer"}
              </Text>
              <MaterialCommunityIcons
                name={status === "success" ? "check-circle" : "send"}
                size={18}
                color="#fff"
              />
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
