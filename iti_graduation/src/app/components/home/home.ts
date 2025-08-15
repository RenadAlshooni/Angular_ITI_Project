import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturdPost } from '../featurd-post/featurd-post';
import { LatestPostComponent } from '../latest-post-component/latest-post-component';

interface CreativeProject {
  image: string;
  category: string;
  header: string;
  author: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, FeaturdPost, LatestPostComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  creativeProjects: CreativeProject[] = [
    {
      image: 'post-image-1.jpg',
      category: 'Digital Art',
      header:
        'Exploring new digital art techniques in my latest creative campaign',
      author: 'My Creative Studio',
    },
    {
      image: 'post-image-2.jpg',
      category: 'Web Design',
      header:
        'Launching my new portfolio collection inspired by modern design trends',
      author: 'My Design Lab',
    },
    {
      image: 'post-image-3.jpg',
      category: 'Photography',
      header:
        'Capturing creative moments: My photography journey and portfolio',
      author: 'My Photography',
    },
    {
      image: 'post-image-4.jpg',
      category: 'UI/UX Design',
      header:
        'Creating intuitive user experiences: My design philosophy and approach',
      author: 'My Design Studio',
    },
    {
      image: 'post-image-5.jpg',
      category: 'Graphic Design',
      header:
        'Visual storytelling through graphic design: My creative process and inspiration',
      author: 'My Creative Mind',
    },
    {
      image: 'post-image-6.jpg',
      category: 'Creative Direction',
      header:
        'Curating creative visions: My approach to artistic direction and collaboration',
      author: 'My Creative Vision',
    },
  ];
}
