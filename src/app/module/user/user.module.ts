import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 01. 引入user模块的 user组件，about/address/order组件
import { AboutComponent } from './components/about/about.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';

//02. 引入serve1
import { Serve1Service } from './services/serve1.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    //01.声明中加入组件
    AboutComponent,
    OrderComponent,
    AddressComponent,
    UserComponent,
  ],
  // 02. 注入服务
  providers: [Serve1Service],

  //03. 导出的这些可声明对象就是该模块的公共 API,其他模块才能使用， 系统根模块app,才能使用。-》app.module.
  exports: [
    UserComponent,

    //继续暴露user模块中的，其他组件about/order/address
    // AboutComponent,
    // OrderComponent,
    // AddressComponent,
  ],
})
export class UserModule {}
