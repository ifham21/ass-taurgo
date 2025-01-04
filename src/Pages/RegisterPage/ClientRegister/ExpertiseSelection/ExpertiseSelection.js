import React, { useState } from "react";
import "./ExpertiseSelection.css";
import TaurgoRegistration from "./TaurgoRegistration";

const expertiseAreas = [
  {
    title: "Photography",
    details: [
      "Capture 360-Degree Imagery: Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.",
      "Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.",
      "Smartphone-Based Photography: Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features.",
      "Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.",
      "Obtain Raw Floor Plans: Using your smartphone, capture the raw floor plans of the properties.",
      "Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.",
    ],
    roleDescription:
      "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
  },
  {
    title: "Inventory Clerk",
    details: [
        "Capture 360-Degree Imagery: Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.",
        "Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.",
        "Smartphone-Based Photography: Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features.",
        "Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.",
        "Obtain Raw Floor Plans: Using your smartphone, capture the raw floor plans of the properties.",
        "Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.",
      ],
      roleDescription:
        "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
    },
  {
    title: "Field Assessor",
    details: [
        "Capture 360-Degree Imagery: Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.",
        "Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.",
        "Smartphone-Based Photography: Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features.",
        "Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.",
        "Obtain Raw Floor Plans: Using your smartphone, capture the raw floor plans of the properties.",
        "Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.",
      ],
      roleDescription:
        "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
    },
  {
    title: "RICS Surveyor / Valuer",
    details: [
        "Capture 360-Degree Imagery: Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.",
        "Ensure the 360 photos capture all angles and details of the interior and exterior of the properties.",
        "Smartphone-Based Photography: Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features.",
        "Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.",
        "Obtain Raw Floor Plans: Using your smartphone, capture the raw floor plans of the properties.",
        "Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs.",
      ],
      roleDescription:
        "Your role is crucial in providing Taurqo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.",
    },
];

const ExpertiseSelection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div >
      <TaurgoRegistration />
      <h2>Select your area of expertise</h2>
      <div>
        {expertiseAreas.map((expertise, index) => (
          <div className="expertise-container">
            <div key={index} className="expertise-item">
            <div className="expertise-header">
                <input type="checkbox" id={`expertise-${index}`} />
                <label
                htmlFor={`expertise-${index}`}
                onClick={() => toggleExpand(index)}
                className="expertise-title"
                >
                {expertise.title}
                </label>
            </div>
            {expanded === index && (
                <div className="expertise-details">
                <ul>
                    {expertise.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                    ))}
                </ul>
                {expertise.roleDescription && (
                    <p className="role-description">{expertise.roleDescription}</p>
                )}
                </div>
            )}
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default ExpertiseSelection;
