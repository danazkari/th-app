// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { AppComponent } from "./app.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";

@NgModule({
    declarations: [
        AppComponent,
        LeaderboardComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule
    ],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
