import { Image } from "react-native";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

const Stack = () => (
  <ThemedView className="bg-gray-600/30 dark:bg-black/60 rounded-2xl mt-4">
    <ThemedText className="text-left text-3xl font-bold border-b border-black dark:border-white">
      Core Stack
    </ThemedText>
    <ThemedView className="py-4 px-0 flex flex-col gap-y-4 text-xs">
      <ThemedView className="flex items-center">
        <ThemedText className="font-bold underline">Frontend</ThemedText>
      </ThemedView>
      <ThemedView className="flex flex-row flex-wrap justify-between gap-3">
        <ThemedView className="flex flex-col items-center justify-center">
          <Ionicons name="logo-javascript" size={40} color="yellow" />
          <ThemedText>JavaScript</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <Ionicons name="logo-react" size={40} color="#00BFFF" />
          <ThemedText>React</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          
          <Image
            source={require("../../assets/images/icons/next-logo.png")}
            style={{ width: 40, height: 40, backgroundColor: "transparent" }}
          />
          <ThemedText>Next.js</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <MaterialCommunityIcons
            name="language-typescript"
            size={40}
            color="blue"
          />
          <ThemedText>TypeScript</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <Ionicons name="logo-html5" size={40} color="#FF6B00" />
          <ThemedText>HTML</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <Ionicons name="logo-css3" size={40} color="#006385" />
          <ThemedText>CSS</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <Fontisto name="redux" size={40} color="#8F00FF" />
          <ThemedText>Redux</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <MaterialCommunityIcons name="tailwind" size={40} color="#004aad" />
          <ThemedText>Tailwind</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView className="flex items-center">
        <ThemedText className="font-bold underline">Backend</ThemedText>
      </ThemedView>
      <ThemedView className="flex flex-row flex-wrap justify-between gap-3">
        <ThemedView className="flex flex-col items-center justify-center">
          <FontAwesome5 color="green" size={40} name="node-js" />
          <ThemedText>NodeJS</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <MaterialCommunityIcons color="red" size={40} name="language-ruby" />
          <ThemedText>Ruby</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <MaterialCommunityIcons
            color="red"
            name="language-ruby-on-rails"
            size={40}
          />
          <ThemedText>Rails</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView className="flex items-center">
        <ThemedText className="font-bold underline">Databases</ThemedText>
      </ThemedView>
      <ThemedView className="flex flex-row flex-wrap justify-between gap-3">
        <ThemedView className="flex flex-col items-center justify-center">
          <Fontisto color="green" size={40} name="mongodb" />
          <ThemedText>MongoDB</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <Image
            source={require("../../assets/images/icons/postgresql-logo.png")}
            style={{ width: 40, height: 40, backgroundColor: "transparent" }}
          />
          <ThemedText>PostgreSQL</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <Fontisto name="mysql" color="#00758F" size={40} />
          <ThemedText>MySQL</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView className="flex items-center">
        <ThemedText className="font-bold underline">Testing/DevOps</ThemedText>
      </ThemedView>
      <ThemedView className="flex flex-row flex-wrap justify-between gap-3">
        <ThemedView className="flex flex-col items-center justify-center">
          <AntDesign name="github" color="#FFF" size={40} />
          <ThemedText>GitHub</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <AntDesign color="#FF6B00" size={40} name="gitlab" />
          <ThemedText>GitLab</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <Image
            source={require("../../assets/images/icons/jest-logo.png")}
            style={{ width: 40, height: 40, backgroundColor: "transparent" }}
          />
          <ThemedText>Jest</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <Image
            source={require("../../assets/images/icons/rspec-logo.png")}
            style={{ width: 40, height: 40, backgroundColor: "transparent" }}
          />
          <ThemedText>RSpec</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView className="flex items-center">
        <ThemedText className="font-bold underline">Others</ThemedText>
      </ThemedView>
      <ThemedView className="flex flex-row flex-wrap justify-between gap-3">
        <ThemedView className="flex flex-col items-center justify-center">
          <MaterialCommunityIcons name="docker" color="#00BFFF" size={40} />
          <ThemedText>Docker</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <FontAwesome5 name="figma" color="#FF6B00" size={40} />
          <ThemedText>Figma</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <Image
            source={require("../../assets/images/icons/postman-logo.png")}
            style={{ width: 50, height: 50, backgroundColor: "transparent" }}
          />
          <ThemedText>Postman</ThemedText>
        </ThemedView>
        <ThemedView className="flex flex-col items-center justify-center">
          <MaterialCommunityIcons
            name="language-csharp"
            color="#00BFFF"
            size={40}
          />
          <ThemedText>C#</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  </ThemedView>
);

export default Stack;
