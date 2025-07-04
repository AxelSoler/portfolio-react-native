import { ScrollView, StyleSheet, Image, Pressable } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Octicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import Stack from "@/components/coreStack/Stack";
const profilePicture = require("@/assets/images/profile/profilepic.jpg");

export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
          <ThemedView className="flex flex-row items-center justify-evenly w-full text-left rounded-2xl bg-gray-600/30 dark:bg-black/60">
            <ThemedView>
              <ThemedText className="text-xl font-bold">AXEL SOLER</ThemedText>
              <ThemedText className="text-lg font-bold">
                Full Stack Developer
              </ThemedText>
              <ThemedText className="text-lg">React Specialist</ThemedText>
            </ThemedView>
            <Image
              source={profilePicture}
              alt="Axel Soler"
              style={styles.profileImage}
            />
          </ThemedView>
          <ThemedView className="flex flex-col items-center w-4/5">
            <ThemedView className="space-y-4 mt-2 text-left text-sm">
              <ThemedView className="flex flex-col gap-4 bg-gray-600/30 dark:bg-black/60 rounded-2xl">
                <ThemedText className="text-lg font-bold border-b border-black dark:border-white">
                  About Me
                </ThemedText>
                <ThemedText>
                  I’m a Full Stack Developer with a frontend focus, passionate
                  about crafting fast, modern, and responsive web apps. I mainly
                  work with React, Next.js, and Tailwind CSS, building clean and
                  scalable user experiences.
                </ThemedText>

                <ThemedText>
                  I love working in remote, collaborative environments where I
                  can grow with others and contribute to something meaningful.
                  I’ve been part of agile teams across different time zones and
                  enjoy pairing up, sharing knowledge, and iterating fast.
                </ThemedText>

                <ThemedText>
                  I’m detail-oriented, receptive to feedback, and constantly
                  learning. I believe in continuous improvement, staying humble,
                  and building meaningful things together.
                </ThemedText>
                <ThemedText>
                  Fluent in English and Spanish, I can adapt and communicate
                  easily with international teams.
                </ThemedText>
                <ThemedView>
                  <Pressable
                    className="flex flex-row justify-center items-center gap-2 p-4 my-4 bg-green-600 text-white font-bold rounded-xl"
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
    paddingTop: 48,
    padding: 24,
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 128 / 2,
    borderWidth: 4,
    borderColor: "#4294ff",
    marginBottom: 8,
    marginTop: 8,
  },
});
