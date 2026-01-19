import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// تعريف الـ Interface جوه نفس الملف أو ملف منفصل لضمان الـ Type Safety
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  projects: Project[] = [
    {
      title: 'AirBot AI',
      description: 'An intelligent AI platform leveraging OpenAI APIs and .NET Core for high-speed, real-time chat interactions. Designed with a focus on seamless user experience.',
      image: 'airbot.jpeg', // تأكد من وجود الصورة في الفولدر ده
      tags: ['Angular', '.NET API', 'OpenAI', 'Tailwind'],
      link: 'https://airbotai.vercel.app/'
    },
    {
      title: 'Lumina Learn',
      description: 'A comprehensive educational management system built for scalability. Features intuitive dashboards and efficient course tracking using C# and SQL Server.',
      image: 'lu.jpeg',
      tags: ['Angular', 'Web API', 'SQL Server', 'Bootstrap'],
      link: 'https://lumina-learn-woad.vercel.app/'
    },
    {
      title: 'CryptoSphere',
      description: 'A real-time cryptocurrency dashboard that visualizes market trends. Utilizes RxJS for stream handling and external crypto APIs for live data.',
      image: 'cryptoshpere.jpeg',
      tags: ['Angular', 'RxJS', 'Crypto API', 'Tailwind'],
      link: 'https://cryptosphere-five.vercel.app/'
    },
    {
      title: 'X-Fit',
      description: 'A feature-rich fitness application built with .NET MVC and Angular. Manages workouts, user progress, and health metrics with a robust SQL backend.',
      image: 'x-fitLogo.png',
      tags: ['Angular', 'ASP.NET MVC', 'Entity Framework', 'SQL'],
      link: 'https://x-fit.vercel.app'
    },
    {
      title: 'ShopCart',
      description: '"A modern, responsive E-commerce solution designed for scale. This platform offers a lightning-fast shopping experience with advanced filtering, dynamic product management, and a secure payment gateway integration. Built with a focus on SEO and high conversion rates.',
      image: 'x-fitLogo.png',
      tags: ['React' , 'firebase', 'Tailwind'],
      link: 'https://shop-cart-131cb.web.app/'
    }
  ];

  constructor() {}
}