Chào các bạn học viên khóa học FrontEnd của [Edsolabs](https://edsolabs.com/).

Đây sẽ là kênh git chung của cả lớp để các bạn có thể nộp các bài tập hàng ngày cho các thầy cô, anh chị mentor.

Khóa học đi thực tiễn các kiến thức, kĩ năng để các bạn có thể tham gia 1 dự án FrontEnd của công ty. Hi vọng cả lớp sẽ có nhiều trải nghiệm thú vị khi tham dự khóa học này!

# Hướng dẫn chung

- Đối với các bạn chưa có kiến thức về git, bạn có thể tham khảo tài liệu: [Học git cơ bản](https://backlog.com/git-tutorial/vn/)
- Sau mỗi ngày học trên trang [học trực tuyến của Edsolabs](https://elearning.edsolabs.com/), các học viên sẽ gửi các bài tâp lên đây theo 1 cấu trúc thư mục hướng dẫn bên dưới để các thầy cô, anh chị mentor có thể đánh giá, góp ý cho các bạn đc tốt nhất.
  `

  > - B1: Đăng kí tài khoản git
  > - B2: Truy cập trang git của khóa học [Edsolabs](https://github.com/viehaed/edsolabs-fe) và fork dự án này về. Tham khảo [cách fork 1 dự án](https://docs.github.com/en/get-started/quickstart/fork-a-repo). Bỏ qua bước này nếu bạn đã có project, thực hiện B9 để lấy bài tập mới nhất hàng ngày.
  > - B3: Trở về trang git của bạn, sẽ thấy 1 project mới đc tạo. Tiếp tục bằng việc clone dự án về máy tính.
  > - B4: Vào thư mục dự án, từ branch `upstream/main` bạn `checkout -b` sang branch mới. Hạn chế làm trực tiếp trên `main`.
  > - B5: Trong thư mục **DayXX** (XX = 01,02,... tương ứng với ngày học), tạo thư mục bài tập của riêng bạn. Bạn Nguyễn Văn Ánh thì đặt tên thư mục `AnhNV`. Trường hợp có thư mục trùng thì đặt `AnhNV01`, `AnhNV02` và báo lại cho các anh chị quản lý. Sau buổi 01 thì mỗi bạn sẽ có 1 folder riêng và giống nhau trong tất cả các ngày.
  > - B6: Thực hiện làm bài tập bằng việc commit code lên git của bạn. `git push orgin branch-name`
  > - B7: Thực hiện nộp bài tập bằng việc gửi [pull request tới upstream branch](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) tương ứng. VD day-01 thì gửi pull request vào branch day-01 trên upstream branch.
  > - B8: Các thầy cô, anh chị mentor sẽ comment những lỗi trong bài làm của các bạn, hãy chú ý đọc comment và resolve chúng. Những bài làm đạt yêu cầu sẽ đc merge vào git chung của khóa học.
  > - B9: Đầu ngày, chạy `git fetch upstream`, check code trên nhánh `upstream/main` để tiếp tục lấy những bài học mới nhất từ giảng viên và những bài chữa của các bạn học viên khác.

# 1 số lưu ý trước khi nộp bài lên git chung của cả lớp:

- Lấy code mới nhất trên nhánh `upstream/main` hàng ngày.
- Có thể checkout sang các nhánh `upstream/day-xx` để tham khảo bài tập đã nộp của các bạn khác nhưng tuyệt đối ko merge code đó sang nhánh của mình.
- Bài tập gửi lên đc checkout từ nhánh `upstream/main`, chỉ chứa bài tập ngày hôm nay, ko merge chung với bài tập của những ngày khác.
- Tạo pull request vào branch `day-xx` tương ứng với nội dung buổi học hôm đó. 
- Với những bước thực hiện trên, bạn đã nắm đc kha khá quy trình git trong 1 dự án thực tế.
  Nếu có câu hỏi gì cần thảo luận, trao đổi, trên github chung của cả lớp có phần hỏi đáp. Bạn có thể đưa ra vấn đề tại đây: [Góc trao đổi](https://github.com/viehaed/edsolabs-fe/discussions)

_Chúc các bạn thành công! :)_
