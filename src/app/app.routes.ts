import { Routes } from '@angular/router';
import { CourseComponent } from './assessmentgrading/components/instructor/course/course.component';
import { AssessmentComponent } from './assessmentgrading/components/instructor/assessment/assessment.component';
import { ScheduleAssessmentComponent } from './assessmentgrading/components/instructor/schedule-assessment/schedule-assessment.component';
import { AssessmentDashComponent } from './assessmentgrading/components/candidate/assessment-dash/assessment-dash.component';
import { candeactivateGuard } from './assessmentgrading/components/candidate/candeactivate.guard';
import { InassessmentComponent } from './assessmentgrading/components/candidate/inassessment/inassessment.component';
import { ReviewComponent } from './assessmentgrading/components/candidate/review/review.component';
import { ReportComponent } from './assessmentgrading/components/candidate/report/report.component';
import { UpdateAssessComponent } from './assessmentgrading/components/instructor/update-assess/update-assess.component';

export const routes: Routes = [
    {
        path : 'course',
        component : CourseComponent
    },
    {
        path : 'assessment/:id',
        component : AssessmentComponent
    },
    {
        path : 'schedule',
        component : ScheduleAssessmentComponent
    },
    {
        path : 'assessmentdash',
        component : AssessmentDashComponent ,
    },
    {
        path : 'insideassessment',
        component : InassessmentComponent,
        canDeactivate : [candeactivateGuard],
    },
    {
        path : 'review',
        component : ReviewComponent
    },
    {
        path : 'report',
        component : ReportComponent
    },
    {
        path : 'update_assessment',
        component : UpdateAssessComponent
    }
];
