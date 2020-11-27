import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './service/interceptor/auth-interceptor.service';
import { DynamicFormModule } from '@prajna10/sd_design';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './service/interceptor/error-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const baseURL = environment.baseURL;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DynamicFormModule.forRoot({url: `${baseURL}/activeFields`}),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true})
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true

        },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
      ]
    };
  }
 }
