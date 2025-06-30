// import profilePicture from "@/img/profile/profilepic.jpg";
import { Ionicons } from "@expo/vector-icons";
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import "./index.css";

const About = () => (
  <ThemedView
    className="text-center flex flex-col items-center md:pt-16"
    id="about"
  >
    <ThemedView className="flex items-center justify-evenly w-full md:w-4/5 text-left rounded-2xl p-4 bg-gray-600/30 dark:bg-black/60">
      <ThemedView>
        <ThemedText className="text-xl md:text-4xl font-bold">
          AXEL SOLER
        </ThemedText>
        <ThemedText className="text-lg md:text-3xl font-bold">
          Full Stack Developer
        </ThemedText>
        <ThemedText className="text-lg md:text-3xl">
          React Specialist
        </ThemedText>
      </ThemedView>
      {/* <Image
        className="rounded-full w-28 h-28 md:w-40 md:h-40 border-4 border-[#4294ff]"
        src={profilePicture}
        alt="Axel Soler"
      /> */}
    </ThemedView>
    <ThemedView className="flex flex-col items-center md:w-4/5">
      <ThemedView className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 text-left text-sm md:text-lg">
        <ThemedView className="flex flex-col gap-4 bg-gray-600/30 dark:bg-black/60 p-4 rounded-2xl">
          <ThemedText className="text-lg md:text-2xl font-bold border-b border-black dark:border-white">
            About Me
          </ThemedText>
          <ThemedText>
            I’m a Full Stack Developer with a frontend focus, passionate about
            crafting fast, modern, and responsive web apps. I mainly work with
            React, Next.js, and Tailwind CSS, building clean and scalable user
            experiences.
          </ThemedText>

          <ThemedText>
            I love working in remote, collaborative environments where I can
            grow with others and contribute to something meaningful. I’ve been
            part of agile teams across different time zones and enjoy pairing
            up, sharing knowledge, and iterating fast.
          </ThemedText>

          <ThemedText>
            I’m detail-oriented, receptive to feedback, and constantly learning.
            I believe in continuous improvement, staying humble, and building
            meaningful things together.
          </ThemedText>
          <ThemedText>
            Fluent in English and Spanish, I can adapt and communicate easily
            with international teams.
          </ThemedText>
          {/* <ThemedText>
            Take a look at my{" "}
            <a
              href="#projects"
              className="underline text-blue-700 dark:text-green-300"
            >
              projects
            </a>
            . if anything stands out, feel free to{" "}
            <a
              href="#contact"
              className="underline text-blue-700 dark:text-green-300"
            >
              reach out
            </a>
            , I’d love to connect!
          </ThemedText> */}
          {/* <ThemedView className="flex justify-center items-center gap-4 mt-auto mb-1 md:mb-8">
            <a
              href="/AxelSolerResume.pdf"
              download
              className="px-2 md:px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center gap-2"
            >
              Get My Resume
              <FaDownload />
            </a>
            <ThemedText>or</ThemedText>
            <a
              href="https://drive.google.com/file/d/1Ful06pTzhNJO2ErFBoUAmNYZEsEeN1F2/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 md:px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center gap-2"
            >
              Google Drive
              <FaGoogleDrive />
            </a>
          </ThemedView> */}
        </ThemedView>
        <ThemedView className="bg-gray-600/30 dark:bg-black/60 p-4 rounded-2xl grid">
          <ThemedText className="text-left text-lg md:text-2xl font-bold border-b border-black dark:border-white">
            Core Stack
          </ThemedText>
          <ThemedView className="grid grid-cols-[1fr_3fr] py-4 gap-4 text-xs md:text-sm lg:text-lg">
            <ThemedView className="flex items-center">
              <ThemedText className="font-bold">Frontend:</ThemedText>
            </ThemedView>
            <ThemedView className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
              <ThemedView className="skill">
                <Ionicons name="logo-javascript" size={40} color="yellow" />
                <ThemedText>JavaScript</ThemedText>
              </ThemedView>
              <ThemedView className="skill">
                <Ionicons name="logo-react" size={40} color="#00BFFF" />
                <ThemedText>React</ThemedText>
              </ThemedView>
              <ThemedView className="skill">
                <Ionicons name="logo-react" size={40} color="#FFF" />
                <ThemedText>Next.js</ThemedText>
              </ThemedView>
              <ThemedView className="skill">
                <MaterialCommunityIcons name="language-typescript" size={40} color="blue" />
                <ThemedText>TypeScript</ThemedText>
              </ThemedView>
              <ThemedView className="skill">
                <Ionicons name="logo-html5" size={40} color="#FF6B00" />
                <ThemedText>HTML</ThemedText>
              </ThemedView>
              <ThemedView className="skill">
                <Ionicons name="logo-css3" size={40} color="#006385" />
                <ThemedText>CSS</ThemedText>
              </ThemedView>
              <ThemedView className="skill">
                <Fontisto name="redux" size={40} color="#8F00FF" />
                <ThemedText>Redux</ThemedText>
              </ThemedView>
              <ThemedView className="skill">
                <MaterialCommunityIcons name="tailwind" size={40} color="#004aad" />
                <ThemedText>TailwindCSS</ThemedText>
              </ThemedView>
            </ThemedView>
            {/* <ThemedView className="flex items-center">
              <ThemedText className="font-bold">Backend:</ThemedText>
            </ThemedView>
            <ThemedView className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
              <ThemedView className="skill">
                <RiNodejsLine
                  color="green"
                  className="text-2xl lg:text-4xl xl:text-5xl"
                />
                Node.js
              </ThemedView>
              <ThemedView className="skill">
                <DiRuby
                  color="red"
                  className="text-2xl lg:text-4xl xl:text-5xl"
                />
                Ruby
              </ThemedView>
              <ThemedView className="skill">
                <SiRubyonrails
                  color="red"
                  className="text-2xl lg:text-4xl xl:text-5xl"
                />
                Rails
              </ThemedView>
            </ThemedView> */}
            {/* <ThemedView className="flex items-center">
              <ThemedText className="font-bold">Databases:</ThemedText>
            </ThemedView>
            <ThemedView className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
              <ThemedView className="skill">
                <SiMongodb
                  color="green"
                  className="text-2xl lg:text-4xl xl:text-5xl"
                />
                MongoDB
              </ThemedView>
              <ThemedView className="skill">
                <BiLogoPostgresql className="text-2xl lg:text-4xl xl:text-5xl text-[#1E3A8A] dark:text-blue-400" />
                PostgreSQL
              </ThemedView>
              <ThemedView className="skill">
                <SiMysql className="text-2xl lg:text-4xl xl:text-5xl text-[#005366] dark:text-[#00758F]" />
                MySQL
              </ThemedView>
            </ThemedView>
            <ThemedView className="flex items-center">
              <ThemedText className="font-bold">Testing/DevOps:</ThemedText>
            </ThemedView> */}
            {/* <ThemedView className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
              <ThemedView className="skill">
                <FaGithubSquare className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-white" />
                GitHub
              </ThemedView>
              <ThemedView className="skill">
                <FaGitlab
                  color="#FF6B00"
                  className="text-2xl lg:text-4xl xl:text-5xl"
                />
                Gitlab
              </ThemedView>
              <ThemedView className="skill">
                <SiJest
                  color="#FF6B00"
                  className="text-2xl lg:text-4xl xl:text-5xl"
                />
                Jest
              </ThemedView>
              <ThemedView className="skill">
                <SiRubygems
                  color="red"
                  className="text-2xl lg:text-4xl xl:text-5xl"
                />
                RSpec
              </ThemedView>
            </ThemedView> */}
            {/* <ThemedView className="flex items-center">
              <ThemedText className="font-bold">Others:</ThemedText>
            </ThemedView>
            <ThemedView className="flex flex-wrap justify-start gap-3 lg:gap-6 xl:gap-8">
              <ThemedView className="skill">
                <SiDocker className="text-2xl lg:text-4xl xl:text-5xl text-[#006385] dark:text-[#00BFFF]" />
                Docker
              </ThemedView>
              <ThemedView className="skill">
                <SiFigma className="text-2xl lg:text-4xl xl:text-5xl text-black dark:text-white" />
                Figma
              </ThemedView>
              <ThemedView className="skill">
                <SiPostman
                  color="#FF6B00"
                  className="text-2xl lg:text-4xl xl:text-5xl"
                />
                Postman
              </ThemedView>
              <ThemedView className="skill">
                <SiCplusplus className="text-2xl lg:text-4xl xl:text-5xl text-[#006385] dark:text-[#00BFFF]" />
                C#
              </ThemedView>
            </ThemedView> */}
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  </ThemedView>
);

export default About;
