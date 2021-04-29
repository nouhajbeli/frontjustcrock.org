import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfomosqueComponent } from './trouvermosqueetunisie/infomosque/infomosque.component';
import { MacqueliveComponent } from './macquelive/macquelive.component';
import { TempspriereComponent } from './tempspriere/tempspriere.component';
import { TrouvermosqueeComponent } from './trouvermosquee/trouvermosquee.component';
import { TrouvermosqueetunisieComponent } from './trouvermosqueetunisie/trouvermosqueetunisie.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FullscreenmosqueComponent } from './fullscreenmosque/fullscreenmosque.component';
import { QuranecritComponent } from './quranecrit/quranecrit.component';
import { RevendiquermosqueComponent } from './revendiquermosque/revendiquermosque.component';
import { RecitateursComponent } from './recitateurs/recitateurs.component';
import { ConditiongeneraleComponent } from './conditiongenerale/conditiongenerale.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './list-mosquee/details/details.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPComponent } from './reset-p/reset-p.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditProprietaireComponent } from './edit-proprietaire/edit-proprietaire.component';
import { EditMosqueComponent } from './edit-mosque/edit-mosque.component';
import {MosqueDetailsComponent} from './mosque-details/mosque-details.component'
import { DetailsProfilComponent } from './details-profil/details-profil.component';
import { ListMosqueeComponent } from './list-mosquee/list-mosquee.component';
import { AddPropMosqueComponent } from './add-prop-mosque/add-prop-mosque.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'macquelive', component: MacqueliveComponent },
  { path: 'touvermosquee', component: TrouvermosqueeComponent },
  { path: 'touvermosqueetunisie', component: TrouvermosqueetunisieComponent },
  { path: 'tempspriere', component: TempspriereComponent },
  { path: 'infomosque/:idm', component: InfomosqueComponent },
  { path: 'fullscreenmosque/:idm', component: FullscreenmosqueComponent },
  { path: 'quranecrit', component: QuranecritComponent },
  { path: 'revendiquermosque/:idm', component: RevendiquermosqueComponent },
  { path: 'recitations', component: RecitateursComponent },
  { path: 'conditionsgenerales', component: ConditiongeneraleComponent },
  { path: 'addPropMosque', component: AddPropMosqueComponent },
  {
    path: 'aboutUs',
   component: AboutUsComponent },
  {
     path: 'login',
  component: LoginComponent
},
  {
    path: 'register',
  component: RegisterComponent
},
  {
    path: 'mosqueDetails',
   component: MosqueDetailsComponent },
   {
    path: 'DetailsProfil/:id',
   component:DetailsProfilComponent },
  {
    path: 'userProfile',
    component: ProfileComponent
  },
  { path: 'updateMosque',
    component: EditMosqueComponent }
  ,
  {
    path: 'listUsers',
    component: ListUsersComponent,
  },

  {
    path: 'add/:code',
    component: AddComponent,
  },
  {
    path: 'list-mosquee',
    component: ListMosqueeComponent,
  },
  {
    path: 'detail/:id',
    component: DetailsComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'reset-password',
    component: ResetPComponent,
  },
  {
    path: 'reset/:token',
    component: NewpasswordComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'editUser/:id',
    component: EdituserComponent,
  },
  {
    path: 'editproprietaire/:id',
    component: EditProprietaireComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
