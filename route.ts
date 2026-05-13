import { NextResponse } from 'next/server';

const MOCK_PROJECTS = [
  {
    id: 'proj_1',
    name: 'Nexus Analytics Dashboard',
    description: 'Enterprise-grade Portfolio Dashboard Web App built with Next.js.',
    status: 'Live',
    category: 'SaaS',
    techStack: ['Next.js', 'Tailwind', 'PostgreSQL'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/nexus',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'proj_2',
    name: 'E-Commerce Microservices',
    description: 'Scalable backend microservices for e-commerce.',
    status: 'In Progress',
    category: 'Backend',
    techStack: ['Go', 'gRPC', 'Redis', 'Docker'],
    demoUrl: null,
    githubUrl: 'https://github.com/example/ecommerce-go',
    createdAt: new Date().toISOString(),
  }
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return NextResponse.json({
    data: MOCK_PROJECTS,
    meta: {
      total: MOCK_PROJECTS.length,
      page: 1,
      limit: 10
    }
  });
}
