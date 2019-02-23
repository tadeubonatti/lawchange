import { NgModule } from '@angular/core';

import { LawchangeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LawchangeSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LawchangeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LawchangeSharedCommonModule {}
