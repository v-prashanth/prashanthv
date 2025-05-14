const experiments = {
  "industrial-control": {
    title: "Industrial Control System (MFC)",
    description: "Windows GUI for real-time machine monitoring and socket-based communication.",
    status: "Completed",
    content: `
      Developed using Microsoft Foundation Classes (MFC), this application monitors machine state
      in real time. It implements efficient socket-based communication between client and server,
      featuring a dynamic packet system for transmitting and decoding live data. The system
      refreshes every 60 seconds to ensure seamless updates.
    `
  },
  "enterprise-report": {
    title: "Enterprise Report Management Platform",
    description: "Secure web-based tool for dynamic report generation with TCPDF and session auth.",
    status: "Completed",
    content: `
      This web platform enables authenticated users to generate and manage internal reports
      securely. It uses TCPDF to support custom templates and document merging. Sessions and
      authentication are implemented for access control and data protection.
    `
  },
  "remote-data-access": {
    title: "Remote ATE Report System",
    description: "Web interface with batch automation for accessing test equipment data remotely.",
    status: "Completed",
    content: `
      A remote access platform for viewing reports from Automated Test Equipment (ATE).
      It automates file transfers via batch scripting from ATE machines to a central server,
      improving workflow efficiency and enabling secure access to machine output logs.
    `
  },
  "workflow-platform": {
    title: "Workflow Automation Platform",
    description: "Web solution for internal indent creation and process streamlining.",
    status: "Completed",
    content: `
      Designed to digitize and automate an organization's internal workflows, this solution
      facilitates indent creation and approval. Built with a scalable web architecture and
      integrated with internal tools through close collaboration with cross-functional teams.
    `
  },
  "interior-website": {
    title: "Interior Design Website (Freelance)",
    description: "Portfolio site for a small business to establish an online presence.",
    status: "Completed",
    content: `
      Freelance project for a local interior design studio. The site showcases their
      design philosophy, work portfolio, and contact options. Delivered a modern,
      mobile-friendly design using responsive layout techniques and lightweight frontend tech.
    `
  }
};

export default experiments;
