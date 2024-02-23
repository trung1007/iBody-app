import csv

database = [
    {
        "topicName": "Tình dục",
        "description": "Năm dấu hiệu đã đến lúc nói với trẻ về nội dung khiêu dâm",
        "ageRangeChild": False,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "1. Trẻ sử dụng điện thoại thông minh hoặc truy cập internet mà không có sự giám sát của người lớn có thể dẫn đến việc tiếp cận dễ dàng cho cả những trường hợp tiếp xúc vô tình và có chủ ý với nội dung khiêu dâm trực tuyến. Người lớn nên làm quen với các thiết bị mà họ đưa cho trẻ, thiết lập kiểm soát của bố mẹ và làm việc với trẻ để thiết lập các thoả thuận về việc sử dụng thiết bị một cách an toàn.\n\n2. Nếu trẻ đi học, đi trông trẻ hoặc có các buổi chơi ngoại ô nhà: Trẻ có thể dễ dàng trải nghiệm các phương tiện truyền thông hoặc tin nhắn chứa nội dung tình dục trong môi trường khác có sự giám sát khác nhau hoặc giá trị đa dạng. Việc duy trì giao tiếp mở cửa với người lớn và người chăm sóc trong những cài đặt này có thể giúp bạn duy trì mối liên kết và phản ứng nhanh chóng nếu có tình huống xảy ra.\n\n3. Nếu trẻ đang tiêu thụ các phương tiện truyền thông: Chương trình truyền hình, phim, quảng cáo, âm nhạc và sách mà trẻ tiếp xúc có thể gửi những thông điệp tình dục và không công bằng hơn theo thời gian so với một lần tiếp xúc với nội dung khiêu dâm có thể. Bằng cách thảo luận về nội dung tình dục, bạn đang khuyến khích kỹ năng hiểu biết truyền thông giúp trẻ phát triển một lối nhìn phê bình.\n\n4. Nếu trẻ có anh chị em lớn hoặc bạn bè mà họ thường xuyên gặp gỡ, có thể xem hoặc nghe những điều mà họ chưa chuẩn bị tâm lý. Khi người lớn duy trì các cuộc trò chuyện sớm và mở cửa với trẻ về sức khỏe tình dục, họ tạo ra một mạng an toàn hiệu quả hơn cho trẻ cảm thấy thoải mái nếu có điều gì đó gây nhầm lẫn hoặc lo lắng khi ở cùng người khác.\n\n5. Nếu một người trẻ đặt câu hỏi liên quan đến cơ thể và tình dục, hãy tận dụng cơ hội này để chia sẻ kiến thức về nội dung tình dục mà họ có thể thấy trực tuyến hoặc trong truyền thông. Điều này đáp ứng sự tò mò tự nhiên của họ và làm cho rõ ràng rằng bạn là một người lớn đáng tin cậy mà họ có thể tìm kiếm sự hỗ trợ không bị xấu hổ.",
    },
    {
        "topicName": "Tình dục",
        "description": "Các nội dung khiêu dâm rất phổ biến trên Internet",
        "ageRangeChild": False,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "1. Thật sự ta rất dễ dàng bắt gặp các nội dung khiêu dâm trên Internet, vì thế, đó không phải là lỗi của bạn nếu bạn tình cờ xem được một nội dung khiêu dâm nào đó.\n2. Hầu hết trẻ nhỏ sẽ tình cờ nhìn thấy nội dung khiêu dâm tại một thời điểm nào đó",
    },
    {
        "topicName": "Tình dục",
        "description": 'Tò mò về tình dục là rất "bình thường"\n',
        "ageRangeChild": False,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": '1. Trẻ thường có xu hướng tò mò và sẽ tìm kiếm hình ảnh khỏa thân hoặc các nội dung về tình dục trên Internet.\n2. "Porn" là hành động quan hệ tình dục nhưng được ghi hình lại, sẽ không có trên TV hằng ngày như các bộ phim hoạt hình mà trẻ hay xem, do đó trẻ thường bị tò mò và cảm giác đây là điều gì đó cấm kị.',
    },
    {
        "topicName": "Cơ quan sinh dục",
        "description": "Những vấn đề khi trẻ tự khám phá cơ quan sinh dục",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Nhiều trẻ thể hiện sự tò mò tình dục tự nhiên của trẻ thông qua việc tự khám phá, các cậu bé có thể sờ dương vật hoặc kéo dương vật, các cô bé thì thường sờ bộ phận sinh dục. Bạn cũng nên dạy con rằng việc thủ dâm là một việc bình thường nhưng nó là việc riêng tư cần giữ kín. Nếu con bạn bắt đầu thủ dâm ở nơi công cộng, cố gắng đánh lạc hướng chúng, nếu vẫn không có tác dụng thì bạn buộc phải nhắc nhở con mình đó là việc riêng tư.Bạn cũng nên trao đổi với con về việc không ai được phép chạm vào bộ phận sinh dục của con bạn mà không được phép của chúng và chúng nên thông báo với người lớn về việc có ai đó cố tình, cố ý chạm vào bộ phận sinh dục của trẻ.",
    },
    {
        "topicName": "Giới tính",
        "description": "Những sự tò mò của trẻ về giới ",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Độ tuổi từ 3-4 trẻ bắt đầu có ý thức về giới tính, nghĩa là chúng bắt đầu nhận ra sự khác biệt giữa nam và nữ. Như là một sự tò mò rất bản năng chúng có thể chơi trò “bác sỹ” để khám phá và xem xét bộ phận sinh dục của nhau. Việc tự khám phá giới tính lẫn nhau ở trẻ nhỏ không phải là điều gì quá xấu nhưng bạn nên hạn chế những trò chơi kiểu như thế này.Giáo dục về tình dục và giới tính không phải là cuộc nói chuyện từ một phía và trong một chốc một nhát, việc giáo dục  nên có sự phản hồi từ cả phái con bạn và nên được thực hiện thường xuyên, hàng ngày.Nếu gia đình bạn sắp sửa có thêm em bé, hãy nhân cơ hội này để nói với đứa trẻ về việc em bé được hình thành như thế nào và sự phát triển của một em bé là một điều kỳ diệu. Nếu con bạn muốn biết nhiều hơn về việc em bé hình thành như thế nào hoặc em bé được sinh ra như thế nào thì hãy cố gắng cung cấp thêm nhiều thông tin hơn cho trẻ.",
    },
    {
        "topicName": "Những câu hỏi của trẻ",
        "description": "Làm thế nào mà em bé lại ở trong bụng của mẹ?",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Bạn có thể nói “À bố và mẹ có những cách đặc biệt để tạo ra em bé trong bụng mẹ” ",
    },
    {
        "topicName": "Những câu hỏi của trẻ",
        "description": "Em bé được sinh ra bằng cách nào?",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Với một vài đứa trẻ bạn có thể nói là “ bác sỹ và y tá sẽ giúp em bé ra khi em bé sẵn sàng”; nhưng với một vài đứa trẻ như vậy là chưa đủ thì bạn có thể trả lời thẳng thắn “ mẹ sẽ sinh em bé qua đường âm đạo”",
    },
    {
        "topicName": "Những câu hỏi của trẻ",
        "description": "Tại sao không phải ai cũng có dương vật?",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Khi gặp câu hỏi này hãy cố gắng trả lời một cách đơn giản như sau : “ cơ thể con trai và con gái là khác nhau”",
    },
    {
        "topicName": "Những câu hỏi của trẻ",
        "description": "Tại sao lại mọc lông ở vùng kín? ",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Đơn giản luôn luôn hiệu quả, bạn nên có một câu trả lời ngắn gọn cho câu hỏi này như sau“ cơ thể chúng ta sẽ thay đổi khi chúng ta lớn lên” hoặc “ con trai sẽ mọc lông ở gần dương vật và con gái sẽ mọc lông ở gần âm đạo” cho những đứa trẻ muốn biết nhiều hơn.",
    },
    {
        "topicName": "Vấn đề của giáo dục giới tính",
        "description": "Teen cần có suy nghĩ đúng về tình dục",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Nhiều bạn trẻ cho rằng hoạt động quan hệ tình dục chỉ xảy ra khi cho dương vật vào âm đạo (quan hệ tình dục qua đường âm đạo). Tuy nhiên, điều này không hoàn toàn đúng. Quan hệ tình dục còn có nhiều hình thức khác, bao gồm:,Quan hệ tình dục bằng miệng,Quan hệ tình dục qua đường hậu môn,Kích thích bộ phận sinh dục đối phương bằng tay,Quan hệ ngoài (Tình dục không xâm nhập),Thủ dâm (hành vi tự kích thích vào bộ phận sinh dục của mình để thỏa mãn nhu cầu sinh lý),Biết được các hình thức quan hệ tình dục khác nhau sẽ giúp bạn nhận diện được những hành vi xâm hại. Từ đó, bạn cũng biết cách phòng tránh và đối phó nếu gặp phải.,Bên cạnh đó, bạn cũng cần hiểu điều quan trọng nhất của quan hệ tình dục là sự đồng ý từ hai phía. Mọi sự bắt ép, đe dọa đều xuất phát từ mối quan hệ không lành mạnh. Bạn trẻ vị thành niên cần có kỹ năng và bản lĩnh để thoát khỏi các mối quan hệ này.",
    },
    {
        "topicName": "Vấn đề của giáo dục giới tính",
        "description": "Giới tính và xu hướng tính dục ở tuổi vị thành niên",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Bên cạnh giáo dục giới tính về tình dục, bạn trẻ tuổi teen cũng có những tò mò nhất định xu hướng tính dục và giới tính của bản thân.Về mặt giải phẫu sinh lý, phần lớn chúng ta công nhận hai giới tính là nam và nữ. Tuy nhiên, việc xác định giới tính của một người không đơn giản như vậy.“Tại sao con thích người cùng giới?” – Phân nhóm xu hướng tính dụcXu hướng tính dục là khái niệm mô tả cảm xúc và sự thu hút của một người với các đối tượng giới tính cụ thể. Về cơ bản, xu hướng tính dục được chia làm 3 nhóm:Dị tính (Heterosexual): Bạn có cảm xúc và tình cảm với người có giới tính khác mình.,Lưỡng tính (Bisexual): Bạn có cảm xúc và tình cảm với cả 2 giới nam và nữ.,Đồng tính (Homosexual): Bạn có tình cảm và cảm xúc với những người có giới tính giống mình.,Ở tuổi vị thành niên, xu hướng tính dục của nhiều bạn trẻ bắt đầu trở nên rõ ràng hơn. Điều này có thể xảy ra kể cả khi bạn chưa có kinh nghiệm về tình dục. ,Nhiều thanh thiếu niên thường tự hỏi rằng liệu mình có phải là người lưỡng tính hoặc đồng tính không. Độ tuổi này là lúc teen đang bắt đầu khám phá sự hấp dẫn về giới tính và tình dục. Do đó, có thể bạn sẽ có những tưởng tượng hoặc tò mò về người cùng giới. Tuy nhiên, nếu bạn vẫn tiếp tục có những cảm xúc này, rất có thể bạn là người thuộc giới tính thứ 3.",
    },
    {
        "topicName": "Xu hướng tính dục",
        "description": "Giới tính và xu hướng tính dục ở tuổi vị thành niên",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Bên cạnh giáo dục giới tính về tình dục, bạn trẻ tuổi teen cũng có những tò mò nhất định xu hướng tính dục và giới tính của bản thân.Về mặt giải phẫu sinh lý, phần lớn chúng ta công nhận hai giới tính là nam và nữ. Tuy nhiên, việc xác định giới tính của một người không đơn giản như vậy.“Tại sao con thích người cùng giới?” – Phân nhóm xu hướng tính dụcXu hướng tính dục là khái niệm mô tả cảm xúc và sự thu hút của một người với các đối tượng giới tính cụ thể. Về cơ bản, xu hướng tính dục được chia làm 3 nhóm:Dị tính (Heterosexual): Bạn có cảm xúc và tình cảm với người có giới tính khác mình.,Lưỡng tính (Bisexual): Bạn có cảm xúc và tình cảm với cả 2 giới nam và nữ.,Đồng tính (Homosexual): Bạn có tình cảm và cảm xúc với những người có giới tính giống mình.,Ở tuổi vị thành niên, xu hướng tính dục của nhiều bạn trẻ bắt đầu trở nên rõ ràng hơn. Điều này có thể xảy ra kể cả khi bạn chưa có kinh nghiệm về tình dục. ,Nhiều thanh thiếu niên thường tự hỏi rằng liệu mình có phải là người lưỡng tính hoặc đồng tính không. Độ tuổi này là lúc teen đang bắt đầu khám phá sự hấp dẫn về giới tính và tình dục. Do đó, có thể bạn sẽ có những tưởng tượng hoặc tò mò về người cùng giới. Tuy nhiên, nếu bạn vẫn tiếp tục có những cảm xúc này, rất có thể bạn là người thuộc giới tính thứ 3.",
    },
    {
        "topicName": "Xu hướng tính dục",
        "description": "Sẽ ra sao nếu bạn thuộc giới tính thứ 3?",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Giới tính thứ 3 (LGBT) là từ viết tắt của 4 từ tiếng Anh: “Lesbian” (đồng tính nữ), “Gay” (đồng tính nam), “Bisexual” (lưỡng tính) và “Transgender” (chuyển giới). Tuy nhiên, hiện nay ý nghĩa của LGBT ngày càng được mở rộng vì nhiều nghiên cứu chứng minh con người còn có đa dạng các xu hướng tính dục hơn nữa chứ không chỉ dừng ở 4 nhóm trên.Nếu bạn là người thuộc giới tính thứ 3 (LGBT) thì điều đó là hoàn toàn bình thường. Sự thành công và hạnh phúc của cá nhân không phụ thuộc vào giới tính mà vào tài năng và phẩm chất của người đó. Hơn nữa, xã hội đang dần cởi mở và công nhận các đóng góp ý nghĩa của cộng đồng LGBT.Điều quan trọng trong giáo dục giới tính là teen cần tự tin vào bản thân và gạt bỏ những lo lắng không đáng có. ",
    },
    {
        "topicName": "Xu hướng tính dục",
        "description": "Gia đình – chỗ dựa vững chắc khi con công khai giới tính",
        "ageRangeChild": True,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Bên cạnh đó, các bậc phụ huynh không nên có phản ứng tiêu cực trước việc con mình thuộc giới tính thứ 3. Quan trọng nhất, gia đình không nên ép buộc giới tính con mình như họ kỳ vọng, vì có thể sẽ dẫn đến những m6u thuẫn, xung đột không đáng có trong chính gia đình. Và để ngăn tình trạng chứng phiền muộn giới xảy ra ở các trẻ, gia đình nên cởi mở và chấp nhận xu hướng tính dục của con em mình. Điều này sẽ dễ dàng giúp các em chia sẻ, gắn kết với gia đình hơn bao giờ hết.Khi thiếu sự chấp nhận của gia đình, bất kỳ trẻ ở lứa tuổi nào cũng có nhiều nguy cơ mắc các bệnh lây nhiễm qua đường tình dục, lạm dụng chất kích thích, trầm cảm và có ý định tự tử. Do đó, sự chấp nhận của gia đình có thể bảo vệ trẻ khỏi những rủi ro này.",
    },
    {
        "topicName": "Quan hệ tình dục",
        "description": "Người ở tuổi vị thành niên có nên quan hệ tình dục không?",
        "ageRangeChild": False,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Quyết định xem bạn đã sẵn sàng quan hệ tình dục hay chưa là quyết định quan trọng mang tính cá nhân. Bạn không cần phải vội vàng. Hãy suy nghĩ kỹ và đợi đến lúc bản thân thực sự sẵn sàng cho chuyện này.",
    },
    {
        "topicName": "Quan hệ tình dục",
        "description": "Làm sao để biết bạn đã sẵn sàng quan hệ tình dục?",
        "ageRangeChild": False,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Quan hệ tình dục với người khác sẽ đi kèm rất nhiều trách nhiệm và rủi ro (như mang thai và mắc bệnh lây qua đường tình dục). Do đó, trước khi quyết định về việc này, bạn cần xem xét nhiều yếu tố liên quan, bao gồm:Giá trị của bản thân, Việc học tập ở trường và mục tiêu nghề nghiệp của bạn,  Bạn thực sự muốn quan hệ hay bị người khác bắt Bạn có đủ sức chịu đựng rủi ro về thể chất và tinh thần nếu chúng xảy ra sau khi quan hệ hay không? Bạn trẻ tuổi teen cần nhớ rằng quan hệ tình dục không phải là cách duy nhất để cho đối phương biết được tình cảm của bạn dành cho họ. Có nhiều cách thể hiện tình cảm như trò chuyện thân mật, đi dạo cùng nhau, nắm tay, giúp đỡ nhau cùng tiến bộ trong học tập hoặc cùng nhau tham gia nhiều hoạt động đoàn, hội…Quan hệ tình dục khi bạn chưa sẵn sàng, quan hệ tình dục với người bạn không tin tưởng hoặc tôn trọng rất dễ tác động xấu đến tâm lý và thể chất của bạn.",
    },
    {
        "topicName": "Quan hệ tình dục",
        "description": "Có vấn đề gì không nếu bạn không có ham muốn quan hệ tình dục?",
        "ageRangeChild": False,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Khi tìm hiểu kiến thức giáo dục giới tính, bạn trẻ cần hiểu mỗi người có ham muốn tình dục khác nhau. Do đó, không có gì phải lo lắng nếu bạn không có ham muốn quan hệ ở tuổi vị thành niên. Rất nhiều điều có thể ảnh hưởng đến ham muốn tình dục như:Căng thẳng, Yếu tố về hormone,Kinh nghiệm sống,Bệnh lý,Mức độ thoải mái của bạn trong mối quan hệ,Tính cách của bạn (bạn là người cẩn trọng hay người tự do, phóng khoáng…),Mức độ thu hút của đối phương đối với bạn",
    },
    {
        "topicName": "Quan hệ tình dục",
        "description": "Giáo dục về tình dục an toàn: Giáo dục sức khỏe giới tính về các biện pháp tránh thai",
        "ageRangeChild": False,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Nếu bạn quan hệ tình dục qua đường âm đạo, bạn có thể mang thai bất cứ lúc nào, kể cả trong lần đầu tiên. Vì vậy, nếu không muốn có thai, bạn cần sử dụng các biện pháp tránh thai.Sử dụng bao cao su là biện pháp tránh thai phổ biến nhất. Bạn trẻ tuổi teen có thể mua chúng tại các hiệu thuốc, cửa hàng bao cao su, cửa hàng tiện lợi hoặc trên internet một cách dễ dàng.Khi chọn mua bao cao su, teen cần lưu ý những yếu tố sau:Kiểm tra bao bì sản phẩm, nhãn mác, hạn sử dụng cẩn thận, Chọn mua sản phẩm của những nhãn hàng uy tín, Chọn mua loại bao cao su phù hợp với kích thước “cậu nhỏ”.Bên cạnh đó, có rất nhiều hình thức ngừa thai khác như thuốc viên tránh thai, thuốc tiêm, que cấy, đặt vòng, miếng dán tránh thai… Một số phương pháp sẽ cần được thực hiện tại các cơ sở y tế dưới sự hướng dẫn của bác sĩ.",
    },
    {
        "topicName": "Quan hệ tình dục",
        "description": "Giáo dục sức khỏe giới tính về các bệnh lây qua đường tình dục",
        "ageRangeChild": False,
        "ageRangeTeen": True,
        "ageRangeParent": True,
        "content": "Bệnh lây truyền qua đường tình dục (STDs) là tình trạng nhiễm trùng lây từ người này sang người khác thông qua quan hệ tình dục. Nguyên nhân của STDs đến từ vi khuẩn, ký sinh trùng và virus.Một số bệnh STDs (như bệnh lậu và chlamydia) có thể được chữa khỏi và không gây nguy hiểm nếu được điều trị kịp thời. Tuy nhiên, cũng có những bệnh có thể gây ra vấn đề sức khỏe nghiêm trọng, đặc biệt là khi không được điều trị.Các bệnh lây truyền qua đường tình dục có tỷ lệ người mắc cao nhất hiện nay là: Lậu,Giang mai,Viêm âm đạo,HIV,Herpes sinh dục,Sùi mào gà,Viêm gan siêu vi B,Chlamydia.Bất cứ ai có quan hệ tình dục đều có nguy cơ mắc phải các bệnh STDs. Tuy nhiên, việc sử dụng các biện pháp bảo vệ sẽ giúp bạn giảm nguy cơ mắc bệnh. Điều này bao gồm sử dụng bao cao su và màng chắn miệng khi quan hệ tình dục..Nếu đối phương của bạn không muốn sử dụng bao cao su để tránh thai và ngăn ngừa STDs thì tức là họ không tôn trọng bạn. Nếu người đó thực sự quan tâm đến bạn, họ sẽ muốn bạn được an toàn. Teen cần nhớ rằng không ai có thể ép buộc bạn làm bất cứ hành vi quan hệ tình dục nào khiến bạn không thoải mái, ngay cả khi hai bạn thực sự thích hoặc yêu nhau.Giáo dục giới tính trẻ vị thành niên là việc vô cùng quan trọng và cần thiết. Hy vọng những thông tin trên sẽ giúp bạn trẻ tuổi teen có suy nghĩ đúng đắn về tình dục và giới tính. Đồng thời có những hành vi phù hợp để có đời sống tình dục lành mạnh và an toàn nhất.",
    },
]
# Define the field names for the CSV file
field_names = database[0].keys()

# Write the data to a CSV file
with open('empty_data.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=field_names)

    # Write the header
    writer.writeheader()

    # Write the data rows
    for item in database:
        writer.writerow(item)

print("CSV file created successfully!")
