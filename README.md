##本项目根据careyshop后台管理系统进行开发，前端基于d2admin，原后端基于thinkphp5开发，现全部重构成hyperf  
thinkphp 版本文档地址 https://www.careyshop.cn/

### 演示
#### 演示地址：https://shop.sh.cn/
#### 用户名:admin
#### 密码:admin888
#### 请不要更改密码

## 本项目在php74下开发 因为PHP74增加了新语法和支持定义变量类型，用起来比较方便，所以不打算兼容php7.4以下版本，只把定义的类型给去掉了，如果低版本使用，请自行修改XXXSevice 内的新语法 ??= 的部分

欢迎加入hyperf-admin交流群，群聊号码：512465490

#使用方法

```
    git clone https://github.com/lphkxd/hyperf-admin.git

    #进入目录
    cd hyperf-admin/

    #更新项目
    composer update -vvv 

    #导入数据库 install/内的sql数据库
    #配置根目录下 .env 数据库和redis信息

    #运行项目
    php bin/hyperf.php

    #访问
    http://127.0.0.1:9501/index.html

```

#### 由于权限验证是由redis缓存校验的，在您需要编编辑用户组、权限的时候需要注解  * @AuthUpEvict() 默认系统编辑权限的地方已经处理，可以自动更新缓存，具体使用方法可以参考相关代码
#### 数据验证组件由 https://github.com/great-zh/hyperf-validate 提供，具体使用方法可以参考 hyperf-validate


#### 目前已完成
##### 1 管理员管理 增删改查全部功能
![](./screenshot/管理员管理.png)
### 2 权限分配
####     1、权限组管理  增删改查全部功能
![](./screenshot/用户组.png)
####    2、菜单管理  增删改查全部功能
![](./screenshot/菜单管理.png)
###     3、规则管理  增删改查全部功能
![](./screenshot/规则管理.png)
###     4、操作日志 
![](./screenshot/操作日志.png)
###     5、Token验证 基于jwt token 验证
#### Token 验证功能 可节点控制、可以菜单显示隐藏控制

###     6、账户等级 增删改查全部功能
![](./screenshot/账户等级.png)

###     7、会员账户 增删改查全部功能
![](./screenshot/会员账户.png)

 ###     8、文章管理 增删改查全部功能
 ![](./screenshot/文章管理.png)
  
## 版权信息
   
  CareyShop 仅提供个人非商业用途免费使用，商业需授权。
  
  本项目包含的第三方源码和二进制文件之版权信息另行标注。
  
  Copyright © 2016-2019 Carey Stu. 保留所有权利。
