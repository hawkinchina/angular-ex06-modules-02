import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/home/home.component';

//03.01 引入自定义模块
import { UserModule } from './module/user/user.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //03. 01 注入 user模块 -> 在app.component.html中使用
    UserModule,
  ],
  declarations: [AppComponent, HelloComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
