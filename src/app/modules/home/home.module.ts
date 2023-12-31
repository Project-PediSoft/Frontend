import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { AlgorithmComponent } from './components/algorithm/algorithm.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown'
import { VisualizerModule } from '../visualizer/visualizer.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './home.component';
import { MainComponent } from './components/main/main.component';
import { UsersComponent } from './components/users/users.component';
import { HelpComponent } from './components/help/help.component';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { FormBuilderModule } from "../form-builder/form-builder.module";
import { TabViewModule, } from 'primeng/tabview';
import { MessageModule } from 'primeng/message';
import { ResultModule } from '../result/result.module';
import { UserModule } from '../user/user.module';
import { YouTubePlayerModule } from "@angular/youtube-player";

/**
 * This is the main module of the project, containes the basic view for selecting a service,
 * an algorithm, filling the form and viewing the results
 */
@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AlgorithmComponent,
        HomeComponent,
        MainComponent,
        UsersComponent,
        HelpComponent
    ],
    providers: [
        MessageService,
    ],
    bootstrap: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ButtonModule,
        FormsModule,
        DropdownModule,
        VisualizerModule,
        HttpClientModule,
        ToastModule,
        FieldsetModule,
        DividerModule,
        FormBuilderModule,
        TabViewModule,
        MessageModule,
        ResultModule,
        UserModule,
        YouTubePlayerModule
    ]
})
export class HomeModule { }
