import { NgModule } from '@angular/core';
import {TemplateComponent} from "./template.component";
import {TemplateRoutes} from "./template.routes";

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    TemplateRoutes
  ],
  providers: [],
  bootstrap: [TemplateComponent],
})
export class TemplateModule {}
