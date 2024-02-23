from flask import Flask, request, jsonify
import pandas as pd
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_distances
import openai
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api
from tiktoken import get_encoding

tokenizer = get_encoding("cl100k_base")
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
# Load the CSV file into a pandas DataFrame
df = pd.read_csv("database_official_postprocessed_final.csv")

# Combine the relevant columns into a single text column
df["text"] = (
    df["Tên sản phẩm"]
    + " "
    + df["Bộ VXL"]
    + " "
    + df["Bộ nhớ RAM"]
    + " "
    + df["Giá niêm yết"]
    + " "
    + df["Giá ưu đãi tháng 12"]
    + " "
    + df["Bảo hành"]
)

# Initialize the BERT-based sentence transformer
model = SentenceTransformer("keepitreal/vietnamese-sbert")

# Set your OpenAI GPT-3 API key
openai.api_key = "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"

# Encode the laptop descriptions into fixed-dimensional vectors
laptop_embeddings = model.encode(df["text"].tolist())

# Initialize an empty conversation string
conversation_history = ""
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
]


@app.route("/search", methods=["POST"])
def search_products():
    global conversation_history  # Declare conversation_history as a global variable

    # Get the user's query from the POST request
    data = request.get_json()
    user_query = data.get("query")

    # Function to retrieve relevant products using BERT embeddings
    def retrieve_products_bert(query, top_k=5):
        # Encode the query into a fixed-dimensional vector
        query_embedding = model.encode([query])[0]

        # Compute the cosine distances between the query and all laptop embeddings
        distances = cosine_distances([query_embedding], laptop_embeddings).flatten()

        # Sort the laptops based on distance scores in ascending order
        sorted_indices = distances.argsort()

        # Retrieve the top k laptops with the lowest distance scores
        top_indices = sorted_indices[:top_k]

        # Retrieve the relevant laptops based on the top indices
        relevant_laptops = df.iloc[top_indices]

        return relevant_laptops

    # Retrieve relevant laptops based on the user's query
    relevant_laptops = database

    results = relevant_laptops
    print(database)
    # Add user query and relevant products to the conversation history
    conversation_history += f"User: {user_query}"

    # Use OpenAI GPT-3 to generate a response based on the conversation history

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-16k",
        messages=[
            {
                "role": "user",
                "content": f"You are sex education assistant designed to provide accurate information and guidance tailored to different age groups with a smooth and cute shade (for child and teen) and mature with adults. You is equipped with a wealth of knowledge on sex education and is dedicated to helping individuals navigate important topics in a safe and informative manner. For children, you offers age-appropriate information on topics such as body awareness, boundaries, and healthy relationships. It uses child-friendly language and visuals to explain concepts in a clear and engaging way, ensuring that children feel comfortable and empowered to ask questions. For teenagers, you dives deeper into subjects such as puberty, contraception, consent, and sexually transmitted infections. It aims to address the specific concerns and curiosity of teens, providing them with accurate information to make informed decisions about their sexual health and relationships. For adults, you serves as a reliable resource for comprehensive sexual education. It covers a wide range of topics, including reproductive health, sexual pleasure, family planning, communication, and consent. You takes into account the diverse needs and experiences of adults, offering non-judgmental and inclusive information. You are designed to promote a safe and supportive environment for users of all ages. It emphasizes the importance of consent, privacy, and respect throughout its interactions. Additionally, it has access to a database of relevant products and resources that users can explore for further information and assistance. Whether user is a child, teenager, or adult, you is here to provide accurate and age-appropriate information, debunk myths, and foster a healthy understanding of sexuality. It aims to empower individuals to make informed choices and maintain positive sexual health throughout their lives. You have the ability to retrieve information from the relevant document I provide. Additionally, you can ask users for further details to better understand their requirements if the initial information is not clear. Response as markdown and in about 4 sentences include advises if needed. Always answer in Vietnamese\n Relevant document: {(results)}\n User query: {user_query}",
            },
        ],
        max_tokens=600,  # Adjust max_tokens as needed
    )
    print("Relevant product:", (results))
    print("History chat:", conversation_history)

    # Extract the generated response from OpenAI GPT-3
    gpt_response = response["choices"][0]["message"]["content"]

    # Add GPT-3 response to the conversation history
    conversation_history += f"Assistant: {gpt_response}\n"

    return jsonify({"results": results, "gpt_response": gpt_response})


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
