import React from 'react';
import { 
  MaterialCommunityIcons, 
  FontAwesome6, 
  Ionicons, 
  SimpleLineIcons,
  FontAwesome
} from '@expo/vector-icons';

type IconProps = {
  color?: string;
  size?: number;
};

export const IconReact = ({ color = "#61dafb", size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="react" size={size} color={color} />
);

export const IconCss = ({ color = "#204de5", size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="language-css3" size={size} color={color} />
);

export const IconTypeScript = ({ color = "#2d79c7", size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="language-typescript" size={size} color={color} />
);

export const IconReactNative = ({ color = "#61dafb", size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="react" size={size} color={color} />
);

export const IconAndroidStudio = ({ color = "#a5c736", size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="android-studio" size={size} color={color} />
);

export const IconAppStore = ({ color = "#1d7df3", size = 24 }: IconProps) => (
  <FontAwesome6 name="app-store-ios" size={size} color={color} />
);

export const IconGradle = ({ color, size = 24 }: IconProps) => (
  <MaterialCommunityIcons name={"gradle" as any} size={size} color={color} />
);

export const IconCode = ({ color, size = 18 }: IconProps) => (
  <MaterialCommunityIcons name="code-tags" size={size} color={color} />
);

export const IconTelecharger = ({ color, size = 18 }: IconProps) => (
  <Ionicons name="download-outline" size={size} color={color} />
);

export const IconJavaScript = ({ color = "#f7df1e", size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="language-javascript" size={size} color={color} />
);

export const IconMongoDb = ({ color = "#139251", size = 24 }: IconProps) => (
  <MaterialCommunityIcons name={"mongodb" as any} size={size} color={color} />
);

export const IconKotlin = ({ color = "#aa23e3", size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="language-kotlin" size={size} color={color} />
);

export const IconGithub = ({ color, size = 24 }: IconProps) => (
  <FontAwesome6 name="github" size={size} color={color} />
);

export const IconMail = ({ color, size = 24 }: IconProps) => (
  <MaterialCommunityIcons name={"email-send-outline" as any} size={size} color={color} />
);

export const IconMySQL = ({ color = "#006f9e", size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="database" size={size} color={color} />
);

export const IconNodeJs = ({ color = "#55b936", size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="nodejs" size={size} color={color} />
);

export const IconDiplome = ({ color, size = 24 }: IconProps) => (
  <FontAwesome6 name="graduation-cap" size={size} color={color} />
);

export const IconMobile = ({ color, size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="cellphone" size={size} color={color} />
);

export const IconParchemin = ({ color, size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="script-text-outline" size={size} color={color} />
);

export const IconEmail = ({ color, size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="email-outline" size={size} color={color} />
);

export const IconMapPin = ({ color, size = 24 }: IconProps) => (
  <Ionicons name="location-sharp" size={size} color={color} />
);

export const IconSend = ({ color, size = 24 }: IconProps) => (
  <Ionicons name="send" size={size} color={color} />
);

export const IconLinkedIn = ({ color, size = 24 }: IconProps) => (
  <FontAwesome name="linkedin" size={size} color={color} />
);

export const IconTwitter = ({ color, size = 24 }: IconProps) => (
  <FontAwesome6 name="x-twitter" size={size} color={color} />
);

export const IconInstagram = ({ color, size = 24 }: IconProps) => (
  <FontAwesome6 name="instagram" size={size} color={color} />
);

export const IconFerme = ({ color, size = 24 }: IconProps) => (
  <MaterialCommunityIcons name="chevron-down" size={size} color={color} />
);

export const IconDiscord = ({ color, size = 24 }: IconProps) => (
  <FontAwesome6 name="discord" size={size} color={color} />
);
