---
title: "Kết nối với Ripple (Linux)"
reference_version: 2a77df23ecc8f9be75819e98afadcef1
---
Hướng dẫn này chỉ dành cho kết nối osu! vào Ripple, chứ không phải cài đặt osu!. Bạn xem [hướng dẫn này](https://gist.github.com/Francesco149/a2f796683a4e5195458f4bb171d88eb0) để cài đặt client

### Sửa đổi tệp hosts
Đối với điều này, bạn sẽ cần phải sửa đổi tập tin *host*. Để làm như vậy, chạy `nano / etc / hosts` với root / với sudo.

Khi bạn đã mở nó, copy paste 2 dòng dưới đây vào cuối trang:

```
{ipmain} osu.ppy.sh c.ppy.sh c1.ppy.sh c2.ppy.sh c3.ppy.sh c4.ppy.sh c5.ppy.sh c6.ppy.sh ce.ppy.sh a.ppy.sh s.ppy.sh i.ppy.sh
{ipmirror} bm6.ppy.sh
```
**CTRL+X** và **Enter** để lưu tệp.

### Cài đặt certificate
Tải certificate bằng cách nhấp vào [*đây*](https://zxq.co/ripple/ripple-server-switcher/raw/commit/d206bffb6fc896bc9c5121b30ba302e9e31c1161/RippleServerSwitcher/Resources/certificate.cer)

Mở cấu hình của Internet Explorer (configuration) bằng cách chạy `wine control`.

Nhấp đúp vào biểu tượng *Internet Settings*, rồi di chuyển đến tab *Content*, rồi nhấp vào nút *Certificates...* .

Nhấp vào *Import*, sau đó *Next*.

Ấn *Browse...* rồi chọn Ripple certificate.

Ấn *Next*.

Ấn *Place all certificates in the following store*, rồi nhấp *Browse*.

Chọn **Trusted Root Certification Authorities**, và ấn *Ok*.

Ấn vào *Next*, *Finish*.

Bạn sẽ nhận được thông báo **The import was successful**.


Sau khi đã hoàn tất, bạn có thể cài đặt client và đăng nhập vào Ripple
