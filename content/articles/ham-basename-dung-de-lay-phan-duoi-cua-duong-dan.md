---
id: 416
title: Hàm basename dùng để lấy phần đuôi của đường dẫn
description: Hàm basename thường dùng để lấy tên của một tệp nào đó từ một đường dẫn được chỉ định.
date: 2019-11-01
author: Ime Share
layout: post
permalink: /ham-basename-dung-de-lay-phan-duoi-cua-duong-dan/
post_views_count:
  - "76"
categories: [PHP]
tags: [PHP]
authors:
  - name: 'anhkevin'
---
Hàm **basename()** thường dùng để lấy tên của một tệp nào đó từ một đường dẫn được chỉ định.  
<span style="color: #800000;"><strong>Chý ý:</strong></span> Đường dẫn chỉ định được ngăn cách bằng dấu "/" hoặc "\" và **basename()** chỉ lấy phần cuối cùng dựa vào dấu ngăn cách trên

<span style="font-size: 14pt;"><strong>Cú pháp:</strong></span>

```
basename($path, $suffix)
```

- **$path**: là đường dẫn chỉ định cần lấy phần đuôi  
- **$suffix**: phần đuôi cuối cùng có $suffix này sẽ bị cắt đi

<span style="font-size: 14pt;"><strong>Ví dụ:</strong></span>  
`echo basename("/path/domain.com");                    //Ouput: domain.com`  
`echo basename("/path/domain.com", ".info");           //Ouput: ime-share`  
`echo basename("/path/");                                  //Ouput: path`  
`echo basename(".");                                       //Ouput: .`  
`echo basename("/");                                       //Ouput:`  
`echo basename("/domain.com(/Test)", ".info(/Test)");  //Ouput: Test)`

<div id="gtx-trans" style="position: absolute; left: 488px; top: 55px;">
  <div class="gtx-trans-icon">
  </div>
</div>