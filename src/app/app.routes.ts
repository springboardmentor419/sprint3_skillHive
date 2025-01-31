import { Routes } from '@angular/router';

import { ListOfApplicantsComponent } from './instructor/components/Add_Instructor/list-of-applicants/list-of-applicants.component';
import { InstructorApplyComponent } from './instructor/components/instructor-apply/instructor-apply.component';
import { FormsubmittedComponent } from './instructor/components/formsubmitted/formsubmitted.component';
import { InstructorAppliedComponent } from './instructor/components/instructor-applied/instructor-applied.component';
import { InstructorProfileComponent } from './instructor/components/instructor-profile/instructor-profile.component';
import { RegistrationFormComponent } from './instructor/components/Add_Instructor/registration-form/registration-form.component';
import {ProfileComponent} from './instructor/components/profile-of-instructor/profile.component';
export const routes: Routes = [
    {path: '', component:InstructorApplyComponent},
    {path:'form', component:RegistrationFormComponent},
    {
    path:'applicants',component:ListOfApplicantsComponent
    },{
    path:'successfully-submitted',component:FormsubmittedComponent
    },
    {path:'applicants-details',component: InstructorAppliedComponent},
    {path:'available-tutors',component: ListOfApplicantsComponent},
    {path:'instructor-profile/:id',component:InstructorProfileComponent},
    {path:'profile',component:ProfileComponent},
];
