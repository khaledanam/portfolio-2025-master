import React from "react";
import "./Projects.css"; // Separate CSS for Projects

function Projects() {
  return (
    <section id="Projects" className="Projects">
      <h2 className="Projects-header">My Projects</h2>
      <div className="service-cards">


      <div className="service-card">
          <h3>Blockchain Based E-Voting System</h3>
          <p>The key technologies used for its development are, 
            Solidity: used for writing smart contracts 
            that handle the election logic on the Ethereum blockchain. 
            React is employed to build an interactive and responsive user 
            interface, allowing voters to easily participate in the voting 
            process. Hardhat is used for compiling, testing, 
            and deploying the smart contracts. Lastly, 
            Metamask serves as the interface for users to securely 
            interact with the blockchain and cast their votes. </p>
        </div>

        <div className="service-card">
          <h3>Portfolio for a Social Club</h3>
          <p>This Social Club Portfolio web app uses modern web 
            technologies for a dynamic user experience. 
            React powers the responsive UI, while HTML and 
            CSS structure and style the site. JavaScript adds interactivity, 
            and Firebase serves as the secure backend database for 
            storing user data and content, 
            ensuring a functional and maintainable portfolio.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
