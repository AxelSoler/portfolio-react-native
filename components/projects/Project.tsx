import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
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

const Project = ({
  project,
  isEven
}: {
  project: ProjectProps;
  isEven: boolean;
}) => {
  const handleLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
  };

  return (
    <View
      style={[
        styles.container,
        { flexDirection: isEven ? "row" : "row-reverse" },
      ]}
    >
      <Image
        source={project.image}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{project.name}</Text>
        <Text style={styles.description}>
          {project.longDescription || project.description}
        </Text>
        <View style={styles.links}>
          {project.live === "private" ? (
            <View style={[styles.button, styles.disabled]}>
              <Text style={styles.buttonText}>Private</Text>
              <Feather name="external-link" size={16} color="#fff" />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLink(project.live)}
            >
              <Text style={styles.buttonText}>Live Site</Text>
              <Feather name="external-link" size={16} color="#fff" />
            </TouchableOpacity>
          )}
          {project.repository === "private" ? (
            <View style={[styles.button, styles.disabled]}>
              <Text style={styles.buttonText}>Private</Text>
              <FontAwesome name="github" size={16} color="#fff" />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLink(project.repository)}
            >
              <Text style={styles.buttonText}>Repository</Text>
              <FontAwesome name="github" size={16} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(75, 85, 99, 0.3)",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    gap: 16,
  },
  image: {
    width: 200,
    height: 130,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  description: {
    fontSize: 16,
  },
  links: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 12,
    flexWrap: "wrap",
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
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Project;