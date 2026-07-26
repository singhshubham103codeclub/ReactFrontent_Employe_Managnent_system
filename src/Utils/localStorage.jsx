const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React.",
        taskDate: "2026-07-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navigation issue.",
        taskDate: "2026-07-18",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect login API with frontend.",
        taskDate: "2026-07-19",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Develop employee dashboard layout.",
        taskDate: "2026-07-21",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Attendance Module",
        taskDescription: "Implement attendance table.",
        taskDate: "2026-07-22",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Complete employee profile page.",
        taskDate: "2026-07-17",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark theme support.",
        taskDate: "2026-07-18",
        category: "UI"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build REST API",
        taskDescription: "Create CRUD APIs for tasks.",
        taskDate: "2026-07-21",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "MongoDB Schema",
        taskDescription: "Design employee schema.",
        taskDate: "2026-07-15",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDescription: "Secure APIs with JWT.",
        taskDate: "2026-07-22",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Password Reset",
        taskDescription: "Implement forgot password feature.",
        taskDate: "2026-07-19",
        category: "Authentication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve MongoDB performance.",
        taskDate: "2026-07-16",
        category: "Database"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Create tests for authentication.",
        taskDate: "2026-07-21",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review frontend pull request.",
        taskDate: "2026-07-18",
        category: "Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Verification",
        taskDescription: "Verify reported dashboard bugs.",
        taskDate: "2026-07-22",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Test",
        taskDescription: "Run load testing on APIs.",
        taskDate: "2026-07-20",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy latest build to staging.",
        taskDate: "2026-07-21",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Docker Setup",
        taskDescription: "Containerize backend service.",
        taskDate: "2026-07-17",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "CI/CD Pipeline",
        taskDescription: "Configure GitHub Actions.",
        taskDate: "2026-07-22",
        category: "Automation"
      },
      {
        active: false,
        newTask: false,
        completed:false,
        failed: true,
        taskTitle: "Server Monitoring",
        taskDescription: "Set up uptime monitoring.",
        taskDate: "2026-07-19",
        category: "Infrastructure"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SSL Configuration",
        taskDescription: "Configure HTTPS certificate.",
        taskDate: "2026-07-16",
        category: "Security"
      }
    ]
  }
];

const Admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

 export const setLocalStorag =()=>{
    localStorage.setItem('empolyees',JSON.stringify(employees))
    localStorage.setItem('Admin',JSON.stringify(Admin))
 };

 export const getLocalStorag =()=>{
    
    const employee= JSON.parse(localStorage.getItem('empolyees'))
    const admin= JSON.parse(localStorage.getItem('Admin'))
    // console.log(employee,admin)
     return { employee, admin }
 }
 