import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LinksPage } from './links.page';
import { LinkItemComponent } from './link-item/link-item.component';

const routes: Routes = [
  {
    path: '',
    component: LinksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LinksPage, LinkItemComponent]
})
export class LinksPageModule {}
