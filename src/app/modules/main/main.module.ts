import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {MainRoutes} from "./main.routes";
import {SharedModule} from "@shared/components/shared.module";

@NgModule({
  declarations: [MainComponent],
  imports: [
    MainRoutes, SharedModule
  ],
  providers: [],
  bootstrap: [MainComponent],
})

export class MainModule{

}
