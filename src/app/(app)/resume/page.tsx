// import React, { ChangeEvent, useState } from "react";

// const ResumeUpload = () => {
//   const [fileName, setFileName] = useState("");

//   const handleFileChange = (event: { target: { files: any[] } }) => {
//     const file = event.target.files[0];
//     if (file) {
//       setFileName(file.name);
//     }
//   };

//   const handleSubmit = (event: { preventDefault: () => void }) => {
//     event.preventDefault();
//     // Here you can handle the form submission,
//     // like sending the file to a server or handling it locally
//     alert("File submitted: " + fileName);
//   };

//   return (
//     <div>
//       <h2>Upload Your Resume</h2>
// <<<<<<< Tabnine <<<<<<<
// <form onSubmit={handleSubmit}>//-
//         <input//-
//           type="file"//-
//           accept=".pdf,.doc,.docx"//-
//           onChange={(event: ChangeEvent<HTMLInputElement>) =>//-
//             handleFileChange(event)//-
//           } //+//-
//         />//-
//         {fileName && <p>File selected: {fileName}</p>}//-
//         <button type="submit">Submit</button>//-
//       </form>//-
// const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {//+
//   const file = event.target.files[0];//+
//   if (file) {//+
//     setFileName(file.name);//+
//   }//+
// };//+
// >>>>>>> Tabnine >>>>>>>
//     </div>
//   );
// };

// h