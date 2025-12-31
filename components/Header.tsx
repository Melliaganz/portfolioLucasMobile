import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/header.styles";

const NAV_LINKS = [
  { label: "À propos", href: "about" },
  { label: "Projets", href: "projects" },
  { label: "Contact", href: "contact" },
];

interface HeaderProps {
  onNavigate: (href: string) => void;
}

export const Header = ({ onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePress = (href: string) => {
    setIsMenuOpen(false);
    setTimeout(() => onNavigate(href), 300);
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.logo} onPress={() => onNavigate('hero')}>
          <View style={styles.logoBox}>
            <Ionicons name="code-slash" size={18} color="#fff" />
          </View>
          <Text style={styles.navTitre}>Lengrand Lucas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.burger} onPress={() => setIsMenuOpen(true)}>
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <Modal visible={isMenuOpen} animationType="fade" transparent={false}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setIsMenuOpen(false)}>
              <Ionicons name="close" size={35} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.nav}>
            {NAV_LINKS.map((link) => (
              <TouchableOpacity 
                key={link.href} 
                style={styles.navLink} 
                onPress={() => handlePress(link.href)}
              >
                <Text style={styles.navText}>{link.label}</Text>
              </TouchableOpacity>
            ))}
            
            <TouchableOpacity style={styles.cvButton} onPress={() => setIsMenuOpen(false)}>
              <Ionicons name="download-outline" size={20} color="#fff" />
              <Text style={styles.cvButtonText}>CV (PDF)</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};
