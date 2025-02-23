import {
    c,
    cpp,
    csharp,
    css,
    django,
    dotnet,
    git,
    html,
    javascript,
    jinr,
    python,
    reactjs,
    schneider,
    tailwind,
    chessgame,
    modbus,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const services = [
    {title: "C", icon: c},
    {title: "C++", icon: cpp},
    {title: "Python", icon: python},
    {title: "C#", icon: csharp},
    {title: "JavaScript", icon: javascript},
    {title: "Django", icon: django},
    {title: ".NET", icon: dotnet},
    {title: "React", icon: reactjs},
];

export const technologies = [
    {name: "HTML 5", icon: html},
    {name: "CSS 3", icon: css},
    {name: "JavaScript", icon: javascript},
    {name: "Rect JS", icon: reactjs},
    {name: "Tailwind CSS", icon: tailwind},
    {name: "git", icon: git},
];

export const experiences = [
    {
        title: "Application Design Engineer",
        company_name: "Schneider Electric | Warsaw, Poland",
        icon: schneider,
        iconBg: "#3dcd58",
        date: "Dec 2022 - Present",
        points: [
            "Led the development of three key projects in the Oil & Gas sector: HVO (Hydrotreated Vegetable Oil) BMS and ESD Application, TGTU (Tail Gas Treatment Unit) BMS and ESD, and HOG (Hydrodesulphurisation of Gudron) Turbomachinery Steam Turbine with Compressor ITCC Application with SCADA.",
            "Ensured the validity of project assumptions through direct customer verification and feedback.",
            "Developed PLC applications for Emergency Shutdown Systems (ESD) and Burner Management Systems (BMS) using the FBD programming language.",
            "Designed and implemented automated testing procedures for controller applications, ensuring high reliability and performance.",
            "Developed and optimized Human Machine Interfaces (HMI) for enhanced usability and operational efficiency.",
            "Prepared comprehensive test procedures and actively participated in Factory Acceptance Tests (FAT) and Site Acceptance Tests (SAT).",
            "Conducted on-site commissioning, working directly with electrical cabinets and automation equipment to ensure proper integration and functionality.",
            "Configured essential network components such as switches and firewalls to ensure secure and reliable communication within industrial control systems.",
            "Performed hardening of engineering workstations, implementing security best practices to protect critical infrastructure.",
            "Handled Functional Safety aspects, ensuring compliance with IEC 61511 and IEC 61508 standards.",
            "Took on leadership responsibilities in project execution, demonstrating the ability to manage tasks independently and collaborate effectively within teams."
        ],
    },
    {
        title: "Student Intern",
        company_name: "Joint Institute for Nuclear Research | Dubna, Russia",
        icon: jinr,
        iconBg: "#009afe",
        date: "Jul 2021 - Sep 2021",
        points: [
            "Implemented the integration of the FRS-RACK®2 fire extinguishing panel with a PLC using the SNMP protocol, enabling real-time communication and control.",
            "Designed and developed a basic SCADA system for monitoring and managing the fire suppression system, enhancing automation and safety.",
            "Gained hands-on experience in PLC programming, industrial communication protocols, and system automation within a research-driven environment.",
            "Collaborated in an international research setting, improving technical problem-solving and adaptability in complex automation projects."
        ],
    },
];

export const projects = [
    {
        name: "Chess Game",
        description:
            "I developed a 1vs1 chess game in C++ using Qt for the GUI. The project focused on implementing the game logic for two players, including piece movement and game state management. I also integrated a move undo feature, allowing players to step back through previous moves. The Qt framework was used to design an interactive chessboard, enabling easy moving functionality for piece movement and real-time updates. This project helped me enhance my skills in C++ programming, GUI development, and basic game logic.",
        tags: [
            {name: "C++", color: "blue-text-gradient"},
            {name: "Qt", color: "green-text-gradient"},
            // {name: "Weather API by API Ninjas", color: "yellow-text-gradient"},
        ],
        image: chessgame,
        source_code_link: "https://github.com/kblazejewski/ChessGame",
    },
    {
        name: "Modbus App",
        description: "Developed a cross-platform Modbus application using .NET MAUI for communication with Modbus devices via TCP. The app allows users to connect to servers, write to and read from Modbus registers (coils, holding registers, etc.), and provides real-time feedback on connection and operation status. Utilized CommunityToolkit.Mvvm for implementing the MVVM pattern.",
        tags: [
            {name: "C#", color: "blue-text-gradient"},
            {name: ".NET MAUI", color: "green-text-gradient"},
        ],
        image: modbus,
        source_code_link: "https://github.com/kblazejewski/ModbusApp",
    },

];
