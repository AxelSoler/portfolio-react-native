import { useState } from "react";
import {
  TextLayoutEventData,
  NativeSyntheticEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Feather, FontAwesome } from "@expo/vector-icons";

type ProjectProps = {
  name: string;
  description: string;
  longDescription?: string;
  image: any;
  live: string;
  repository: string;
  technologies: string[];
  position: string;
  company: string;
};

const Project = ({ project }: { project: ProjectProps }) => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  const handleTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    if (e.nativeEvent.lines.length > 5) {
      setShowToggle(true);
    }
  };
  const handleLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
  };

  return (
    <ThemedView style={[styles.container]}>
      <Image source={project.image} style={styles.image} resizeMode="contain" />
      <ThemedView style={styles.content}>
        <ThemedText style={styles.title}>{project.name}</ThemedText>
        <ThemedText
          style={styles.description}
          numberOfLines={expanded ? undefined : 5}
          onTextLayout={handleTextLayout}
        >
          {project.longDescription || project.description}
        </ThemedText>

        {showToggle && (
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <ThemedText style={styles.toggleText}>
              {expanded ? "Show less" : "Show more"}
            </ThemedText>
          </TouchableOpacity>
        )}
        <ThemedView style={styles.links}>
          {project.live !== "private" && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLink(project.live)}
            >
              <ThemedText style={styles.buttonText}>Live Site</ThemedText>
              <Feather name="external-link" size={16} color="#fff" />
            </TouchableOpacity>
          )}
          {project.repository !== "private" && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLink(project.repository)}
            >
              <ThemedText style={styles.buttonText}>Repository</ThemedText>
              <FontAwesome name="github" size={16} color="#fff" />
            </TouchableOpacity>
          )}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    gap: 16
  },
  image: {
    width: 200,
    height: 130,
    borderRadius: 12,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    gap: 8
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  description: {
    fontSize: 16
  },
  links: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 12,
    flexWrap: "wrap"
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#6366F1",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
    alignItems: "center",
    gap: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600"
  },
  disabled: {
    opacity: 0.5
  },
  toggleText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#4F46E5",
    textAlign: "right"
  }
});

export default Project;
