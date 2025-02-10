export interface Workshop {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  image: string;
  topics: string[];
  outcomes: string[];
  prerequisites: string;
  videos: {
    day: number;
    title: string;
    url: string;
    description: string;
    duration: string;
  }[];
  materials: {
    title: string;
    type: string;
    url: string;
  }[];
  nextDate: string;
  price: number;
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  certificateTest: {
    description: string;
    url: string;
    passingScore: number;
  };
}

export const workshops: Workshop[] = [
  {
    id: 1,
    title: "Start Work Shop",
    description: "Introduction to Computer Science Workshop - Learn the fundamentals of computing, from basic concepts to programming essentials.",
    level: "Beginner",
    duration: "3 days",
    rating: 4.9,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/WorkshopCover01.png?raw=true",
    topics: [
      "Computing Landscape",
      "Computer History",
      "Computer Hardware and Software Components",
      "Logic Gates",
      "Numbering Systems",
      "Introduction to Programming and First Line of Code"
    ],
    outcomes: [
      "Understand fundamental computing concepts",
      "Learn about computer architecture and components",
      "Master basic logic and number systems",
      "Write your first program",
      "Build a strong foundation for advanced topics"
    ],
    prerequisites: "No prior experience required",
    videos: [
      {
        day: 1,
        title: "Computing Landscape and Computer History",
        description: "Explore the evolution of computing and understand the basic landscape of modern computers.",
        url: "https://www.youtube.com/embed/-p6KQv1qVWY",
        duration: "49 Minutes"
      },
      {
        day: 2,
        title: "Computer Hardware, Software Components and Logic Gates",
        description: "Learn about computer components and the fundamental building blocks of digital logic.",
        url: "https://www.youtube.com/embed/h_B0VlhcGj8",
        duration: "48 Minutes"
      },
      {
        day: 3,
        title: "Numbering Systems and Introduction to Programming",
        description: "Master different number systems and write your first program.",
        url: "https://www.youtube.com/embed/pM8yfkQ-LuM",
        duration: "100 Minutes"
      }
    ],
    materials: [
      {
        title: "Workshop Slides",
        type: "PDF",
        url: "https://example.com/slides.pdf"
      },
      {
        title: "Practice Exercises",
        type: "PDF",
        url: "https://example.com/exercises.pdf"
      },
      {
        title: "Additional Resources",
        type: "PDF",
        url: "https://example.com/resources.zip"
      }
    ],
    nextDate: "2025-01-25",
    price: 0,
    instructor: {
      name: "Hassan Anwar",
      role: "Lead Instructor",
      avatar: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/anwar.png?raw=true",
      bio: "Senior Computer Science Engineer with over 4 years of teaching experience. Passionate about making complex concepts accessible to beginners."
    },
    certificateTest: {
      description: "Complete this test to earn your workshop certificate. You need to score at least 80% to pass.",
      url: "https://forms.office.com/r/HFRr84yndz?origin=lprLink",
      passingScore: 80
    }
  }
];