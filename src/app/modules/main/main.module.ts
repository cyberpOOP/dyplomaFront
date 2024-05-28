import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {MainRoutes} from "./main.routes";
import {SharedModule} from "@shared/components/shared.module";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [MainComponent],
    imports: [
        MainRoutes, SharedModule, NgForOf
    ],
  providers: [],
  bootstrap: [MainComponent],
})

export class MainModule{

}
