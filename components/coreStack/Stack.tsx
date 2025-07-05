import { ReactNode, useState } from "react";
import { StyleSheet, Image, Pressable, Platform, TouchableWithoutFeedback } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
  AntDesign
} from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

type StackItem = {
  label: string;
  icon: ReactNode;
};

type StackSectionProps = {
  title: string;
  items: StackItem[];
};

const StackSection = ({ title, items }: StackSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = Platform.OS !== "web";

  const handleOutsidePress = () => {
    if (activeIndex !== null) setActiveIndex(null);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <ThemedView className="bg-[#1a1a1a] rounded-xl p-4 mb-4" lightColor="rgba(75, 85, 99, 0.3)">
        <ThemedText className="font-bold text-base underline mb-4">{title}</ThemedText>
        <ThemedView className="flex flex-row flex-wrap justify-center gap-2" lightColor="transparent">
          {items.map(({ icon, label }, index) => (
            <Pressable
              key={index}
              className={`flex flex-col items-center min-w-[80px] max-w-[110px] p-2 rounded-lg ${
                activeIndex === index ? "bg-[#2a2a2a]" : ""
              }`}
              onPress={() => setActiveIndex(index)}
            >
              {icon}
              {(activeIndex === index || !isMobile) && (
                <ThemedText className="text-center text-sm mt-1 leading-tight" lightColor="white">{label}</ThemedText>
              )}
            </Pressable>
          ))}
        </ThemedView>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

const Stack = () => (
  <ThemedView className="rounded-2xl mt-4 px-2">
    <ThemedText style={styles.subtitle}>Core Stack</ThemedText>

    <StackSection
      title="Frontend"
      items={[
        {
          label: "JavaScript",
          icon: <Ionicons name="logo-javascript" size={40} color="yellow" />
        },
        {
          label: "React",
          icon: <Ionicons name="logo-react" size={40} color="#00BFFF" />
        },
        {
          label: "Next.js",
          icon: (
            <Image
              source={require("../../assets/images/icons/next-logo.png")}
              style={styles.icon}
            />
          )
        },
        {
          label: "TypeScript",
          icon: (
            <MaterialCommunityIcons
              name="language-typescript"
              size={40}
              color="blue"
            />
          )
        },
        {
          label: "HTML",
          icon: <Ionicons name="logo-html5" size={40} color="#FF6B00" />
        },
        {
          label: "CSS",
          icon: <Ionicons name="logo-css3" size={40} color="#006385" />
        },
        {
          label: "Redux",
          icon: <Fontisto name="redux" size={40} color="#8F00FF" />
        },
        {
          label: "Tailwind",
          icon: (
            <MaterialCommunityIcons name="tailwind" size={40} color="#004aad" />
          )
        }
      ]}
    />

    <StackSection
      title="Backend"
      items={[
        {
          label: "NodeJS",
          icon: <FontAwesome5 name="node-js" size={40} color="green" />
        },
        {
          label: "Ruby",
          icon: (
            <MaterialCommunityIcons
              name="language-ruby"
              size={40}
              color="red"
            />
          )
        },
        {
          label: "Rails",
          icon: (
            <MaterialCommunityIcons
              name="language-ruby-on-rails"
              size={40}
              color="red"
            />
          )
        }
      ]}
    />

    <StackSection
      title="Databases"
      items={[
        {
          label: "MongoDB",
          icon: <Fontisto name="mongodb" size={40} color="green" />
        },
        {
          label: "PostgreSQL",
          icon: (
            <Image
              source={require("../../assets/images/icons/postgresql-logo.png")}
              style={styles.icon}
            />
          )
        },
        {
          label: "MySQL",
          icon: <Fontisto name="mysql" size={40} color="#00758F" />
        }
      ]}
    />

    <StackSection
      title="Testing / DevOps"
      items={[
        {
          label: "GitHub",
          icon: <AntDesign name="github" size={40} color="#fff" />
        },
        {
          label: "GitLab",
          icon: <AntDesign name="gitlab" size={40} color="#FF6B00" />
        },
        {
          label: "Jest",
          icon: (
            <Image
              source={require("../../assets/images/icons/jest-logo.png")}
              style={styles.icon}
            />
          )
        },
        {
          label: "RSpec",
          icon: (
            <Image
              source={require("../../assets/images/icons/rspec-logo.png")}
              style={styles.icon}
            />
          )
        }
      ]}
    />

    <StackSection
      title="Others"
      items={[
        {
          label: "Docker",
          icon: (
            <MaterialCommunityIcons name="docker" size={40} color="#00BFFF" />
          )
        },
        {
          label: "Figma",
          icon: <FontAwesome5 name="figma" size={40} color="#FF6B00" />
        },
        {
          label: "Postman",
          icon: (
            <Image
              source={require("../../assets/images/icons/postman-logo.png")}
              style={[styles.icon, { width: 50, height: 50 }]}
            />
          )
        },
        {
          label: "C#",
          icon: (
            <MaterialCommunityIcons
              name="language-csharp"
              size={40}
              color="#00BFFF"
            />
          )
        }
      ]}
    />
  </ThemedView>
);

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingBottom: 4
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 4
  }
});

export default Stack;
