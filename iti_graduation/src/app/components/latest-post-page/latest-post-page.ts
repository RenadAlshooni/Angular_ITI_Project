import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LatestPage } from '../latest-page/latest-page';
import { LatestPostComponent } from '../latest-post-component/latest-post-component';

@Component({
  selector: 'app-latest-post-page',
  imports: [LatestPage, LatestPostComponent],
  templateUrl: './latest-post-page.html',
  styleUrl: './latest-post-page.css',
})
export class LatestPostPage {}
