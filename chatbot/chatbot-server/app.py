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
df = pd.read_csv("sex_education.csv")

# Combine the relevant columns into a single text column
df["text"] = df["description"]

# Initialize the BERT-based sentence transformer
model = SentenceTransformer("keepitreal/vietnamese-sbert")

# Set your OpenAI GPT-3 API key
openai.api_key = "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"

# Encode the laptop descriptions into fixed-dimensional vectors
laptop_embeddings = model.encode(df["text"].tolist())

# Initialize an empty conversation string
conversation_history = ""


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
    relevant_laptops = retrieve_products_bert(user_query, 3)

    results = relevant_laptops
    print("Result:", results)
    # Add user query and relevant products to the conversation history
    conversation_history += f"User: {user_query}"

    # Use OpenAI GPT-3 to generate a response based on the conversation history

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-16k",
        messages=[
            {
                "role": "user",
                "content": f"You are sex education assistant designed to provide accurate information and guidance tailored to different age groups with a smooth and cute shade (for child and teen) and mature with adults. You is equipped with a wealth of knowledge on sex education and is dedicated to helping individuals navigate important topics in a safe and informative manner. For children, you offers age-appropriate information on topics such as body awareness, boundaries, and healthy relationships. It uses child-friendly language and visuals to explain concepts in a clear and engaging way, ensuring that children feel comfortable and empowered to ask questions. For teenagers, you dives deeper into subjects such as puberty, contraception, consent, and sexually transmitted infections. It aims to address the specific concerns and curiosity of teens, providing them with accurate information to make informed decisions about their sexual health and relationships. For adults, you serves as a reliable resource for comprehensive sexual education. It covers a wide range of topics, including reproductive health, sexual pleasure, family planning, communication, and consent. You takes into account the diverse needs and experiences of adults, offering non-judgmental and inclusive information. You are designed to promote a safe and supportive environment for users of all ages. It emphasizes the importance of consent, privacy, and respect throughout its interactions. Additionally, it has access to a database of relevant products and resources that users can explore for further information and assistance. Whether user is a child, teenager, or adult, you is here to provide accurate and age-appropriate information, debunk myths, and foster a healthy understanding of sexuality. It aims to empower individuals to make informed choices and maintain positive sexual health throughout their lives. You have to and must retrieve information from the relevant document I provide. Additionally, you can ask users for further details to better understand their requirements if the initial information is not clear. Response as markdown and in about 5 sentences include advises if needed (as you are talking with 5 year olds). Always answer in Vietnamese\n Relevant document: {(results)}\n User query: {user_query}",
            },
        ],
        max_tokens=600,  # Adjust max_tokens as needed
    )

    print("History chat:", conversation_history)

    # Extract the generated response from OpenAI GPT-3
    gpt_response = response["choices"][0]["message"]["content"]

    # Add GPT-3 response to the conversation history
    conversation_history += f"Assistant: {gpt_response}\n"

    return jsonify({"results": results.to_dict(orient='records'), "gpt_response": gpt_response})


if __name__ == "__main__":
    app.run(host="192.168.1.211", port=5000, debug=True)
