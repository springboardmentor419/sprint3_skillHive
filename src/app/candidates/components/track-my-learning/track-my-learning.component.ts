import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { CandidateService } from '../../services/candidate.service';


@Component({
  selector: 'app-track-my-learning',
  templateUrl: './track-my-learning.component.html',
  styleUrls: ['./track-my-learning.component.css'],
  standalone:true,
  imports: [CommonModule] 

})
export class TrackMyLearningComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/courses';
  totalCourses: number = 5;
  completedCourses: number = 3;
  hoursSpent: number = 12;
  overallPerformance: number = 85;
  candidateEmail: string | null = '';
  courses: any[] = [];
  filteredCourses: any[] = [];

  constructor(private http: HttpClient, private candidateService:CandidateService) {}

  ngOnInit(): void {
    this.candidateEmail = this.candidateService.getlocalStorage();
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.filteredCourses = data.filter((course) =>
          course.enrolledCandidates.includes(this.candidateEmail)
        );
        console.log('Filtered Courses:', this.filteredCourses);
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  calculateDuration(startDate: string, endDate: string): string {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return `${daysDiff} Days`;
  }

  getProgress(course: any): number {
    if (course.status === 'Completed') return 100;
    if (course.status === 'Upcoming') return 0;
    return 50;
  }
}
