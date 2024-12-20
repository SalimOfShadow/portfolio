//projects start
const projects = [
  {
    name: "Recca",
    description:
      "An Electron application that integrates Python with OpenCV for template matching and OBS's WebSocket API to detect a game's process and create scenes dynamically. It captures and uploads segments of gameplay to video-sharing platforms like YouTube and Streamable, while also serving as a repository for upload entries, storing each user's uploads in MongoDB.",
    stack: ["React", "NodeJS", "Express", "MongoDB", "Python", "Electron"],
    sourceCode: "https://github.com/SalimOfShadow/Recca/tree/electron-app-test",
    img: "/recca.png",
    preview: "https://github.com/SalimOfShadow/Recca/tree/electron-app-test/",
  },
  {
    name: "Kamernet-bot",
    description:
      "A Typescript bot that automatically replies to insertions matching personalized criterias on a popular site named Kamernet. Using a patched version of Puppeteer and randomizing interactions with the website to behave like a human as much as possible, it is able to pass various tests on bot detection sites. It can run both locally or inside a docker container.",
    stack: ["React", "NodeJS", "Express", "MongoDB"],
    sourceCode: "https://github.com/SalimOfShadow/Kamernet-Bot/",
    img: "/kamernet-bot.png",
    preview: "https://github.com/SalimOfShadow/Kamernet-Bot/",
  },
  {
    name: "Scala Image Converter",
    description:
      "A GUI interface that uses ScalaFX to modify,convert between different formats and upload pictures. I've written this piece of software to familiarize with the language while also improving the quality of my unit tests.",
    stack: ["React", "NodeJS", "Express", "MongoDB"],
    sourceCode: "https://github.com/SalimOfShadow/ScalaImgTool",
    img: "/scalafx.png",
    preview: "#",
  },
];

//projects end
export default projects;
