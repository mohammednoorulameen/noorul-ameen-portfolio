
import React from "react";

const About: React.FC = () => {
  return (
    <div >
      <div>
        <h1 className="font-serif text-2xl font-semibold mt-5 md:mt-10 pl-5 md:pl-10 lg:pl-50">
          About Me
        </h1>
        {/* <hr className="w-3/4 h-0.5 bg-gray-900 mt-2" /> */}
        <hr className="w-3/4 h-0.5 bg-gray-900 ml-5 md:ml-10 lg:ml-50 mt-2" />

        {/* Content Section */}
        <div className="mt-5 w-full p-4 md:p-10 lg:ml-40">
          <p className="font-serif text-sm text-justify max-w-7xl leading-relaxed">
            I'm Mohammed Noorul Ameen, a MERN stack developer dedicated to
            building innovative, scalable, and efficient web applications. With
            a deep understanding of modern web technologies, I specialize in
            leveraging frameworks like{" "}
            <span className="font-bold">
              Express.js, React.js, Node.js, and TypeScript
            </span>{" "}
            to deliver robust, user-centric solutions. My skill set also
            includes state management tools like Redux and database expertise
            with{" "}
            <span className="font-bold">MongoDB and PostgreSQL</span>, enabling
            me to create seamless, full-stack applications.
            <br />
            <br />
            Throughout my journey in software development, I have embraced the
            principles of MVC architecture, ensuring that my applications are
            well-structured and maintainable. I have also gained hands-on
            experience with various tools and services, such as{" "}
            <span className="font-bold">Razorpay, JWT, Postman, and AWS</span>,
            to implement secure integrations and optimize application
            performance.
            <br />
            <br />
            What sets me apart is my passion for continuous learning and my
            commitment to delivering clean, maintainable code. I thrive in
            dynamic, fast-paced environments where I can contribute to projects
            from initial concept to final deployment.
            <br />
            <br />
            Beyond technical skills, I am an advocate for collaboration and
            innovation. I enjoy working with teams to tackle challenging
            problems, explore new technologies, and push the boundaries of
            what's possible. My focus on performance optimization and
            scalability ensures that my projects are built to succeed in
            real-world scenarios.
          </p>
        </div>
        <hr className="w-full h-0.5 bg-gray-900 mt-5" />

        {/* Footer Section */}
        <div className="mt-3 pb-10">
          <h1 className="font-serif text-center text-gray-500">
            © 2025 Mohammed Noorul Ameen
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;

