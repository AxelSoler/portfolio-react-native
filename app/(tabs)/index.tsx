import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Octicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import Stack from "@/components/coreStack/Stack";
import LoadImage from "@/components/loadImage/Index";
const profilePicture = require("@/assets/images/profile/profilepic.jpg");

export default function HomeScreen() {
  const [expanded, setExpanded] = useState(false);
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedView className="flex flex-row items-center justify-evenly w-full text-left rounded-2xl" style={styles.header}>
          <ThemedView>
            <ThemedText className="text-xl font-bold">AXEL SOLER</ThemedText>
            <ThemedText className="text-lg font-bold">
              Full Stack Developer
            </ThemedText>
            <ThemedText className="text-lg">React Specialist</ThemedText>
          </ThemedView>
          <LoadImage source={profilePicture} containerStyle={styles.profileImage} />
        </ThemedView>
        <ThemedView className="flex flex-col items-center w-4/5">
          <ThemedView className="space-y-4 mt-2 text-left text-sm">
            <ThemedView className="flex flex-col gap-4 rounded-2xl">
              <ThemedText style={styles.subtitle}>
                About Me
              </ThemedText>
              <ThemedText numberOfLines={expanded ? undefined : 12}>
                I’m a Full Stack Developer with a frontend focus, passionate
                about crafting fast, modern, and responsive web apps. I mainly
                work with React, Next.js, and Tailwind CSS, building clean and
                scalable user experiences.
                {"\n\n"}I love working in remote, collaborative environments
                where I can grow with others and contribute to something
                meaningful. I’ve been part of agile teams across different time
                zones and enjoy pairing up, sharing knowledge, and iterating
                fast.
                {"\n\n"}I’m detail-oriented, receptive to feedback, and
                constantly learning. I believe in continuous improvement,
                staying humble, and building meaningful things together.
                {"\n\n"}Fluent in English and Spanish, I can adapt and
                communicate easily with international teams.
              </ThemedText>

              <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                <ThemedText style={styles.toggleText}>
                  {expanded ? "Show less" : "Show more"}
                </ThemedText>
              </TouchableOpacity>
              <ThemedView>
                <Pressable
                  style={styles.resumeLink}
                  onPress={() =>
                    Linking.openURL(
                      "https://drive.google.com/file/d/1Ful06pTzhNJO2ErFBoUAmNYZEsEeN1F2/view?usp=drive_link"
                    )
                  }
                >
                  <ThemedText className="bg-transparent">
                    My Resume on Google Drive
                  </ThemedText>
                  <Octicons name="link-external" size={20} color="white" />
                </Pressable>
              </ThemedView>
            </ThemedView>
            <Stack />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 8,
    padding: 24,
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#fff"
  },
  profileImage: {
    width: 112,
    height: 112,
    borderRadius: 128 / 2,
    borderWidth: 4,
    borderColor: "#4294ff",
    marginBottom: 8,
    marginTop: 8
  },
  toggleText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#4F46E5",
    textAlign: "right"
  },
  resumeLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: "100%",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#16a34a",
    marginTop: 24,
    marginBottom: 24,
    fontWeight: "600",
  }
});
