import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../styles/footer.styles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/Melliaganz",
      icon: <FontAwesome6 name="github" size={20} color="#9da6b9" />,
      title: "Github",
    },
    {
      href: "https://discord.gg/YJhEmGKK",
      icon: <FontAwesome6 name="discord" size={18} color="#9da6b9" />,
      title: "Discord",
    },
    {
      href: "mailto:lucaslengranddev@gmail.com",
      icon: <MaterialCommunityIcons name="email" size={22} color="#9da6b9" />,
      title: "Mail",
    },
    {
      href: "https://x.com/LucasLengrand2",
      icon: <FontAwesome6 name="x-twitter" size={18} color="#9da6b9" />,
      title: "X",
    },
    {
      href: "https://www.linkedin.com/in/lucaslengrand",
      icon: <FontAwesome6 name="linkedin" size={20} color="#9da6b9" />,
      title: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/melliaganz/",
      icon: <FontAwesome6 name="instagram" size={20} color="#9da6b9" />,
      title: "Instagram",
    },
  ];

  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.footerSection}>
      <View style={styles.contentWrapper}>
        <View style={styles.divider} />
        
        <View style={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(link.href)}
              style={styles.iconLink}
              accessibilityLabel={link.title}
            >
              {link.icon}
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.copyright}>
          © {currentYear} Lengrand Lucas. Tous droits réservés.
        </Text>
        
        <Text style={styles.madeWith}>
          Propulsé par React Native & Expo
        </Text>
      </View>
    </View>
  );
};
