import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface CreativeSkill {
  image: string;
  name: string;
  role: string;
}
@Component({
  selector: 'app-about-page',
  imports: [CommonModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  creativeSkills: CreativeSkill[] = [
    {
      image: 'team1.jpg',
      name: 'Digital Art & Illustration',
      role: 'Creative Designer & Digital Artist',
    },
    {
      image: 'team2.jpg',
      name: 'Web Design & Development',
      role: 'Frontend Developer & UI Designer',
    },
    {
      image: 'team3.jpg',
      name: 'Photography & Visual Storytelling',
      role: 'Creative Photographer & Visual Artist',
    },
    {
      image: 'team4.jpg',
      name: 'UI/UX Design',
      role: 'User Experience Designer & Researcher',
    },
    {
      image: 'team5.jpg',
      name: 'Graphic Design & Branding',
      role: 'Brand Identity Designer & Creative Director',
    },
    {
      image: 'team6.jpg',
      name: 'Creative Direction',
      role: 'Artistic Director & Creative Strategist',
    },
    {
      image: 'team7.jpg',
      name: 'Interactive Design',
      role: 'Interactive Media Designer & Developer',
    },
    {
      image: 'team8.jpg',
      name: 'Motion Graphics',
      role: 'Motion Designer & Animation Artist',
    },
    {
      image: 'team9.jpg',
      name: '3D Modeling & Visualization',
      role: '3D Artist & Visual Effects Designer',
    },
    {
      image: 'team10.jpg',
      name: 'Creative Writing & Content',
      role: 'Content Creator & Creative Writer',
    },
  ];
}
