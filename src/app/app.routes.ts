import { Routes } from '@angular/router';
import { CandidateLoginComponent } from './candidates/components/candidate-login/candidate-login.component';
import { CandidateRegistrationComponent } from './candidates/components/candidate-registration/candidate-registration.component';
import { CandidateDashboardComponent } from './candidates/components/candidate-dashboard/candidate-dashboard.component';
import { UpdateProfileComponent } from './candidates/components/update-profile/update-profile.component';
import { ChangePasswordComponent } from './candidates/components/change-password/change-password.component';
import { CandidateComponent } from './candidates/components/candidate/candidate.component';
import { ErrorPageComponent } from './candidates/components/error-page/error-page.component';
import { ViewAllCoursesComponent } from './candidates/components/view-all-courses/view-all-courses.component';
import { TrackMyLearningComponent } from './candidates/components/track-my-learning/track-my-learning.component';
import { AdminCreateCourseComponent } from './course/components/admin-create-course/admin-create-course.component';
import { AdminViewCoursesComponent } from './course/components/admin-view-courses/admin-view-courses.component';
import { CandidateViewCoursesComponent } from './course/components/candidate-view-courses/candidate-view-courses.component';
import { CandidateMyCoursesComponent } from './course/components/candidate-my-courses/candidate-my-courses.component';
import { UpcomingEventsComponent } from './candidates/components/upcoming-events/upcoming-events.component';
import { BookmarkedCoursesComponent } from './candidates/components/bookmarked-courses/bookmarked-courses.component';


export const routes: Routes = [

  // course module Routes 
  { path: 'admin-create-course', component: AdminCreateCourseComponent },
  { path: 'admin-view-courses', component: AdminViewCoursesComponent },
  { path: 'candidate-view', component: CandidateViewCoursesComponent },
  { path: 'candidate-my-courses', component: CandidateMyCoursesComponent },

  //Candidate Module Routes
  { path: 'login', component: CandidateLoginComponent },
  { path: 'register', component: CandidateRegistrationComponent },
  { path: 'NotFound', component: ErrorPageComponent },
  { path: 'candidate', component: CandidateComponent, 
    children:[
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: CandidateDashboardComponent},
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'update-profile', component: UpdateProfileComponent },
      { path: 'all-courses', component: ViewAllCoursesComponent },
      { path: 'bookmarked-courses', component: BookmarkedCoursesComponent },
      { path: 'track-my-learning', component: TrackMyLearningComponent },
      { path: 'upcoming-events', component: UpcomingEventsComponent },
    ]
  },
  // { path: '**', redirectTo: '/NotFound' }
];
