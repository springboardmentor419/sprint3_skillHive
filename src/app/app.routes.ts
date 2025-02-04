import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { SignupComponent } from './authentication/components/signup/signup.component';
import { adminRouteGuard } from './authentication/guard/admin.auth.guard';
import { candidateRouteGuard } from './authentication/guard/candidate.auth.guard';
import { instructorRouteGuard } from './authentication/guard/instructor.auth.guard';
import { HomeComponent } from './authentication/components/home/home.component';
import { ContactComponent } from './authentication/components/contact/contact.component';
import { AboutusComponent } from './authentication/components/aboutus/aboutus.component';
import { ForgotpasswordComponent } from './authentication/components/forgotpassword/forgotpassword.component';
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
import { ListOfApplicantsComponent } from './instructor/components/Add_Instructor/list-of-applicants/list-of-applicants.component';
import { InstructorApplyComponent } from './instructor/components/instructor-apply/instructor-apply.component';
import { FormsubmittedComponent } from './instructor/components/formsubmitted/formsubmitted.component';
import { InstructorAppliedComponent } from './instructor/components/instructor-applied/instructor-applied.component';
import { InstructorProfileComponent } from './instructor/components/instructor-profile/instructor-profile.component';
import { RegistrationFormComponent } from './instructor/components/Add_Instructor/registration-form/registration-form.component';
import { ProfileComponent } from './instructor/components/profile-of-instructor/profile.component';

export const routes: Routes = [
    //Authentication Module Routes
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutusComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'forgotpassword', component: ForgotpasswordComponent },

    //Course Module Routes 
    { path: 'admin-create-course', component: AdminCreateCourseComponent, canActivate: [adminRouteGuard] },
    { path: 'admin-view-courses', component: AdminViewCoursesComponent, canActivate: [adminRouteGuard] },
    { path: 'candidate-view', component: CandidateViewCoursesComponent },
    { path: 'candidate-my-courses', component: CandidateMyCoursesComponent },

    //Candidate Module Routes
    { path: 'register', component: CandidateRegistrationComponent ,canActivate: [candidateRouteGuard]},
    { path: 'NotFound', component: ErrorPageComponent },
    {
        path: 'candidate', component: CandidateComponent, canActivate: [candidateRouteGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: CandidateDashboardComponent },
            { path: 'change-password', component: ChangePasswordComponent },
            { path: 'update-profile', component: UpdateProfileComponent },
            { path: 'all-courses', component: ViewAllCoursesComponent },
            { path: 'bookmarked-courses', component: BookmarkedCoursesComponent },
            { path: 'track-my-learning', component: TrackMyLearningComponent },
            { path: 'upcoming-events', component: UpcomingEventsComponent },
        ]
    },

    //Instructor Module Routes
    { path: 'apply-instructor', component: InstructorApplyComponent, canActivate: [instructorRouteGuard] },
    { path: 'form', component: RegistrationFormComponent, canActivate: [instructorRouteGuard] },
    { path: 'applicants', component: ListOfApplicantsComponent, canActivate: [adminRouteGuard] },
    { path: 'successfully-submitted', component: FormsubmittedComponent, canActivate: [instructorRouteGuard] },
    { path: 'applicants-details', component: InstructorAppliedComponent, canActivate: [adminRouteGuard] },
    { path: 'available-tutors', component: ListOfApplicantsComponent },
    { path: 'instructor-profile/:id', component: InstructorProfileComponent },
    { path: 'profile', component: ProfileComponent },
];