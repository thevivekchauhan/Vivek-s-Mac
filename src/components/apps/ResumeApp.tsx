import React from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  Book,
  Award,
} from "lucide-react";

const ResumeApp: React.FC = () => {
  return (
    <div className="h-full p-6 overflow-auto bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="px-8 py-6 bg-gray-800 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Vivek Chauhan</h1>
              <h2 className="text-xl text-gray-300 mt-1">
                Full Stack Developer
              </h2>
            </div>

            <div className="mt-4 md:mt-0">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center hover:bg-blue-600">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>thechauhanvivek@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>send me mail first </span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>India</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              <span>thevivekchauhan.com</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 text-gray-700 border-b pb-2">
              Summary
            </h3>
            <p className="text-gray-600">
              Experienced Full Stack Developer with a passion for building
              elegant, user-friendly web applications. Proficient in modern
              JavaScript frameworks and libraries such as React, Redux, Next.js,
              and TypeScript Dedicated to writing clean, maintainable code and
              staying up-to-date with industry best practices.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 text-gray-700 border-b pb-2">
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Frontend</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>React, Redux, Next.js</li>
                  <li>TypeScript, JavaScript (ES6+)</li>
                  <li>HTML5, CSS3, Sass</li>
                  <li>Tailwind CSS, Material UI</li>
                  {/* <li>Jest, React Testing Library</li> */}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2">Backend</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Node.js, Express.js</li>
                  {/* <li>Python, Django</li> */}
                  {/* <li>RESTful APIs, GraphQL</li> */}
                  <li>MongoDB</li>
                  {/* <li>Git, GitHub Actions</li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 text-gray-700 border-b pb-2 flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Work Experience
            </h3>

            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h4 className="text-md font-medium text-gray-800">
                  MERN Stack Developer
                </h4>
                <div className="text-gray-500 text-sm mt-1 md:mt-0">
                  April 2025 - Present
                </div>
              </div>
              <div className="text-gray-700 mb-2">iCoderz Private Limited</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>
                  I’m thrilled to join Icoderz Solutions Pvt. Ltd. as a MERN
                  Stack Developer Trainee.
                </li>
                <li>
                  {" "}
                  I am working on full-stack JavaScript technologies like
                  MongoDB, Express.js, React.js, and Node.js, building scalable
                  web applications and enhancing my development skills.
                </li>
                <li>
                  Big thanks to the team at Icoderz for the opportunity! Looking
                  forward to growing, building, and collaborating.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h4 className="text-md font-medium text-gray-800">
                  Web Developer
                </h4>
                <div className="text-gray-500 text-sm mt-1 md:mt-0">
                  Oct 2023 - Sep 2024
                </div>
              </div>
              <div className="text-gray-700 mb-2">BitBeast Private Limited</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>
                  I am a Frontend Developer with one year of experience and a
                  three-month internship at Bitbeast Private Limited. Proficient
                  in HTML, CSS, JavaScript, and React.js.
                </li>
                <li>
                  I have worked on live projects under senior guidance and am
                  skilled in design frameworks like Ant Design and Material-UI.
                </li>
                <li>
                  Additionally, I have expertise in video editing, cartoon image
                  editing, and vlogging, enabling me to create engaging
                  multimedia content.
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 text-gray-700 border-b pb-2 flex items-center">
              <Book className="w-5 h-5 mr-2" />
              Education
            </h3>

            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h4 className="text-md font-medium text-gray-800">
                  Bachelor of Computer Application (BCA)
                </h4>
                <div className="text-gray-500 text-sm mt-1 md:mt-0">
                  2019 - 2022
                </div>
              </div>
              <div className="text-gray-700">
                BPCCS College of Science and Technology, Gandhinagar, Gujarat,
                India
              </div>
              <div className="text-gray-600 text-sm mt-1">GPA: 8.17/10.0</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h4 className="text-md font-medium text-gray-800">
              Master of Science in Information Techonology (MSC.IT)
            </h4>
            <div className="text-gray-500 text-sm mt-1 md:mt-0">
              2024 - 2026
            </div>
          </div>
          <div className="text-gray-700">
            GLS University, Ahmedabad, Gujarat,
            India
          </div>
          <div className="text-gray-600 text-sm mt-1">GPA: 8.17/10.0</div>
          <br />
          {/* <br /> */}

          {/* Certifications */}
          {/* <div>
            <h3 className="text-lg font-bold mb-3 text-gray-700 border-b pb-2 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Certifications
            </h3>

            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>AWS Certified Developer - Associate (2022)</li>
              <li>Google Cloud Professional Developer (2021)</li>
              <li>MongoDB Certified Developer (2020)</li>
              <li>Certified Scrum Master (2019)</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ResumeApp;
