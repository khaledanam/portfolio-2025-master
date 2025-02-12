import React, { useState } from 'react';
import './Dashboard.css';
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseconfig"; // Adjust the path if necessary
import { useEffect } from "react";

function Dashboard({ data, handleDataChange }) {
  const [inputData, setInputData] = useState(data);
  const [activeSection, setActiveSection] = useState('home');

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    setInputData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [name]: value,
      },
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "dashboard", activeSection);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setInputData(prevState => ({
            ...prevState,
            [activeSection]: docSnap.data(),
          }));
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [activeSection]);

  // const handleSubmit = (e, section) => {
  //   e.preventDefault();
  //   handleDataChange(section, inputData[section]);
  // };

// const handleSubmit = async (e, section) => {
//   e.preventDefault();
//   try {
//     // await setDoc(doc(db, "dashboard", section), inputData[section]);
//     console.log(`${section} data saved successfully`);
//   } catch (error) {
//     console.error("Error saving data: ", error);
//   }
// };

const handleSubmit = async (e, section) => {
  e.preventDefault();

  // Extract the section data
  const sectionData = inputData[section];

  // Check for empty fields
  const hasEmptyFields = Object.values(sectionData).some(value => value === '' || value === undefined);

  if (hasEmptyFields) {
    alert("All fields are required. Please fill out all fields before submitting.");
    return;
  }

  try {
    // Save the data (uncomment the actual saving line when needed)
    // await setDoc(doc(db, "dashboard", section), sectionData);
    console.log(`${section} data saved successfully`);
  } catch (error) {
    console.error("Error saving data: ", error);
  }
};

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => handleSectionClick('home')}
          >
            Home
          </li>
          <li
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => handleSectionClick('skills')}
          >
            Skills
          </li>
          <li
            className={activeSection === 'services' ? 'active' : ''}
            onClick={() => handleSectionClick('services')}
          >
            Services
          </li>
          <li
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleSectionClick('contact')}
          >
            Contact
          </li>
          <li
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleSectionClick('projects')}
          >
            Projects
          </li>
        </ul>
      </div>

      <div className="main-content">
        <form onSubmit={(e) => handleSubmit(e, activeSection)}>
          <h2>{`${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section`}</h2>

          {activeSection === 'home' && (
  <>
      <h6>Upload Image</h6>
    <input
      type="file"
      name="image"
      onChange={(e) => handleChange(e, 'home')}
      accept="image/*"
    />
    <h6>Input Name</h6>
    <input
      type="text"
      name="name"
    //   value={inputData.home.name}
      onChange={(e) => handleChange(e, 'home')}
      placeholder="Write here..."
    />
    <h6>Input Profession</h6>
    <input
      type="text"
      name="profession"
    //   value={inputData.home.profession}
      onChange={(e) => handleChange(e, 'home')}
      placeholder="Write here..."
    />
    <h6>Input Bio</h6>
    <textarea
      name="description"
    //   value={inputData.home.description}
      onChange={(e) => handleChange(e, 'home')}
      placeholder="Write here..."
    />

  </>
)}


{activeSection === 'skills' && (
  <>
    <h3>Add more skills</h3>
    <h6>Input Title</h6>
    <input
      type="text"
      name="skillTitle"
      value={inputData.skills.skillTitle}
      onChange={(e) => handleChange(e, 'skills')}
      placeholder="Skill Title"
    />
    <h6>Input Description</h6>
    <input
      type="text"
      name="description1"
      value={inputData.skills.description1}
      onChange={(e) => handleChange(e, 'skills')}
      placeholder="Description 1"
    />
    <h6>Input Description</h6>
    <input
      type="text"
      name="description2"
      value={inputData.skills.description2}
      onChange={(e) => handleChange(e, 'skills')}
      placeholder="Description 2"
    />
    <h6>Input Description</h6>
    <input
      type="text"
      name="description3"
      value={inputData.skills.description3}
      onChange={(e) => handleChange(e, 'skills')}
      placeholder="Description 3"
    />
  </>
)}


{activeSection === 'services' && (
  <>
    <h3>Add Services</h3>
    <input
      type="text"
      name="serviceTitle"
      value={inputData.services.serviceTitle}
      onChange={(e) => handleChange(e, 'services')}
      placeholder="Service Title"
    />
    <textarea
      name="serviceDescription"
      value={inputData.services.serviceDescription}
      onChange={(e) => handleChange(e, 'services')}
      placeholder="Add Description"
    />
  </>
)}
{activeSection === 'contact' && (
  <>
    <h3>Contact Information</h3>
    <input
      type="email"
      name="email"
      value={inputData.contact.email}
      onChange={(e) => handleChange(e, 'contact')}
      placeholder="Email"
    />
    <input
      type="text"
      name="phone"
      value={inputData.contact.phone}
      onChange={(e) => handleChange(e, 'contact')}
      placeholder="Phone"
    />
    <input
      type="text"
      name="whatsapp"
      value={inputData.contact.whatsapp}
      onChange={(e) => handleChange(e, 'contact')}
      placeholder="WhatsApp"
    />
    <input
      type="text"
      name="linkedin"
      value={inputData.contact.linkedin}
      onChange={(e) => handleChange(e, 'contact')}
      placeholder="LinkedIn"
    />
  </>
)}

{activeSection === 'projects' && (
  <>
    <h3>Add Project</h3>
    <input
      type="text"
      name="projectTitle"
      value={inputData.projects.projectTitle}
      onChange={(e) => handleChange(e, 'projects')}
      placeholder="Project Title"
    />
    <textarea
      name="projectDescription"
      value={inputData.projects.projectDescription}
      onChange={(e) => handleChange(e, 'projects')}
      placeholder="Project Description"
    />
  </>
)}
          <button type="submit">{`Save ${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section`}</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
