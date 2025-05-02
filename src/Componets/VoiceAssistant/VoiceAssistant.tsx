// import React, { useEffect } from "react";
// // @ts-ignore
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// const VoiceAssistant: React.FC = () => {
//   const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       alert("Your browser does not support speech recognition!");
//     }
//   }, [browserSupportsSpeechRecognition]);

//   const handleCommand = (command: string) => {
//     const darkModeCommands = ["dark mode", "enable dark mode", "turn on dark mode"];
//     const lightModeCommands = ["light mode", "disable dark mode", "turn off dark mode"];

//     if (darkModeCommands.some((c) => command.inclrudes(c))) {
//       document.documentElement.classList.add("dark");
//       alert("Dark mode enabled!");
//     } else if (lightModeCommands.some((c) => command.includes(c))) {
//       document.documentElement.classList.remove("dark");
//       alert("Light mode enabled!");
//     } else {
//       console.log("Command not recognized:", command);
//     }
//   };

//   useEffect(() => {
//     if (transcript) {
//       handleCommand(transcript.toLowerCase());
//       resetTranscript(); // Clear transcript after handling the command
//     }
//   }, [transcript]);

//   return (
//     <div className="voice-assistant">
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={listening ? SpeechRecognition.stopListening : SpeechRecognition.startListening}
//       >
//         {listening ? "Stop Listening" : "Start Voice Assistant"}
//       </button>
//       <p className="mt-2 text-gray-700 dark:text-white">Transcript: {transcript}</p>
//     </div>
//   );
// };

// export default VoiceAssistant;








// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // @ts-ignore
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// const VoiceAssistant: React.FC = () => {
//   const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();
//     let navigate = useNavigate()

//     const HandleCVDownload = () =>{
//       try {
//         console.log("hellp")
//           const cvUrl = "/Mohammed Noorul Ameen.pdf";
//           const link = document.createElement("a");
//           link.href = cvUrl;
//           link.download = "Mohammed Noorul Ameen.pdf";
//           document.body.appendChild(link);
//           link.click();
//           document.body.removeChild(link);
        
//       } catch (error) {
//         console.log("not working")
//       }
//     }
  

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       alert("Your browser does not support speech recognition!");
//     }
//   }, [browserSupportsSpeechRecognition]);

//   const handleCommand = (command: string) => {
//     const instagramCommands = ["instagram", "open instagram", "go to instagram"];
//     const githubCommands  = ["github","open github", "navigate to github", "go to github"];
//     const linkedinCommands  = ["linkedin","navigate to linkedin", "navigate to linkedin", "go to linkedin"];
//     const downloadCVCommands  = ["downloadcv","navigate to downloadcv", "navigate to downloadcv", "go to downloadcv"];
//     const emailCommands = ["emial", "navigate to emial", "navigate to emial", "go to emial"]
//     const visitProjectCommands = ["visitprojects", "navigate to visitprojects", "navigate to visitprojects", "go to visitprojects"];
//     const visitSkillsCommands = ["visit skills","navigate to visitskills", "navigate to visitskills", "go to visitskills"];

//     if (instagramCommands.some((c) => command.includes(c))) {
//       window.open("https://www.instagram.com/noorulameen___/", "_blank");
//     } else if (githubCommands.some((c) => command.includes(c))) {
//       window.open("https://github.com/mohammednoorulameen", "_blank");
//     } else if (linkedinCommands.some((c) => command.includes(c))) {
//       window.open("https://www.linkedin.com/in/mohammed-noorul-ameen-n5445n/", "_blank");
//      }  else if (downloadCVCommands.some((c) => command.includes(c))) {
//       HandleCVDownload();
//      }  else if (emailCommands.some((c) => command.includes(c))) {
//       window.open("mailto:noorulameen8606@gmail.com?subject=Hello&body=I would like to connect with you", "_blank");
//      }  else if (visitProjectCommands.some((c) => command.includes(c))) {
//       navigate('/projects')
//      } else if (visitSkillsCommands.some((c) => command.includes(c))) {
//       navigate('/skills')
//      } else {
//       console.log("Command not recognized:", command);
//     }
//   };

//   useEffect(() => {
//     if (transcript) {
//       handleCommand(transcript.toLowerCase());
//       resetTranscript(); // Clear transcript after handling the command
//     }
//   }, [transcript]);

//   const startListening = () => {
//     SpeechRecognition.startListening({ continuous: true }); // Enable continuous listening
//   };

//   return (
//     <div className="voice-assistant">
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={listening ? SpeechRecognition.stopListening : startListening}
//       >
//         {listening ? "Stop Listening" : "Start Voice Assistant"}
//       </button>
//       <p className="mt-2 text-gray-700">Transcript: {transcript}</p>
//     </div>
//   );
// };

// export default VoiceAssistant;


// import React, { useEffect } from "react";
// // @ts-ignore
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// const VoiceAssistant: React.FC = () => {
//   const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       alert("Your browser does not support speech recognition!");
//     }
//   }, [browserSupportsSpeechRecognition]);

//   const handleCommand = (command: string) => {
//     const instagramCommands = ["instagram", "open instagram", "go to instagram"];
//     const contactCommands = ["contact", "navigate to contact", "go to contact"];

//     if (instagramCommands.some((c) => command.includes(c))) {
//       window.open("https://www.instagram.com/noorulameen___/", "_blank");
//     } else if (contactCommands.some((c) => command.includes(c))) {
//       alert("Navigating to Contact section...");
//     } else {
//       console.log("Command not recognized:", command);
//     }
//   };

//   useEffect(() => {
//     if (transcript) {
//       handleCommand(transcript.toLowerCase());
//       resetTranscript(); // Clear transcript after handling the command
//     }
//   }, [transcript]);

//   return (
//     <div className="voice-assistant">
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={listening ? SpeechRecognition.stopListening : SpeechRecognition.startListening}
//       >
//         {listening ? "Stop Listening" : "Start Voice Assistant"}
//       </button>
//       <p className="mt-2 text-gray-700">Transcript: {transcript}</p>
//     </div>
//   );
// };

// export default VoiceAssistant;
