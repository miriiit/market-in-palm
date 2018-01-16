import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListMovieComponent  } from './list-movie.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import {ReactiveFormsModule , FormsModule,} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SearchService} from './search.service';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ListMovieComponent
            },
            {
                "path":"model-form",
                "component":ModelDrivenComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,ReactiveFormsModule,
        FormsModule,
        HttpModule,
    ], exports: [
        RouterModule
    ], declarations: [
    	ListMovieComponent,
    	ModelDrivenComponent
    ],providers:[SearchService]
})
export class ListModule {
}