//projects start
const projects = [
  {
    name: 'Recca',
    description:
      "An Electron application that integrates Python with OpenCV for template matching and OBS's WebSocket API to detect the game process and create scenes dynamically. It captures and uploads segments of gameplay to video-sharing platforms like YouTube and Streamable, while also serving as a repository for upload entries, storing each user's uploads in MongoDB.",
    stack: ['React', 'NodeJS', 'Express', 'MongoDB', 'Python', 'Electron'],
    sourceCode: 'https://github.com/randilt/booking.com-clone-nextjs14',
    img: '/bookingcom.jpg',
    preview: 'https://bookingcomnext14.netlify.app/',
  },
  {
    name: 'Kamernet-bot',
    description:
      'A Typescript bot that automatically replies to insertions matching personalized criterias on a popular site named Kamernet. Using a patched version of Puppeteer and randomizing interactions with the website to behave like a human as much as possible, it is able to pass various tests on bot detection sites. It can run both locally or inside a docker container',
    stack: ['React', 'NodeJS', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/randilt/cyberscourge-hub',
    img: '/cyberscourge.jpg',
    preview: 'https://rtharusha.tech',
  },
  {
    name: 'Jotion (Notion Clone)',
    description:
      'A clone of the popular note taking app Notion. This app is built using Nextjs 13 and Tailwind CSS. It uses clerk for authentication and convex for its real time database. The project is not yet complete ',
    stack: ['React', 'NodeJS', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/randilt/notion-clone',
    img: '/jotion.jpg',
    preview: '#',
  },
];

//projects end
export default projects;
