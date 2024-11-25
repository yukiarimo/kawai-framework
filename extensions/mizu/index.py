from flask import Flask, request, jsonify
import json
from flask_cors import CORS
from ctransformers import AutoModelForCausalLM

app = Flask(__name__)
CORS(app)

"""
AutoModelForCausalLM.from_pretrained(
  "TheBloke/Pygmalion-2-7B-GGUF",
  model_file="pygmalion-2-7b.Q5_K_M.gguf",
  model_type='llama2',
"""

llm = AutoModelForCausalLM.from_pretrained(
  "/Users/yuki/Documents/Github/yuna-ai/lib/yunacpp/models/pygmalion-2-7b.Q5_K_M.gguf",
  model_type='llama2',
  top_k=40,
  top_p=0.1,
  temperature=0.7,
  repetition_penalty=1.15,
  last_n_tokens=64,
  batch_size=64,
  context_length=8192,
  max_new_tokens=10,
  gpu_layers=1
)

# New route for sending and receiving messages
@app.route('/send_message', methods=['POST'])
def send_message():
    message = request.form.get('message')  # Get the message from the request

    test = f"<|system|>\nYou're unbiased human-like advanced AI girl named Yuna. You know everything, you like to explain and answer complex questions!\n\n<|user|>{message}\n<|model|>\n"

    answer = ""

    print("Yuna: ", end="")
    for text in llm(test, stream=True):
        if "<|user|>" in text:
            break
        print(text, end="", flush=True)
        answer = answer + text

    return jsonify({'response': answer})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4848)  # Run the app locally on the given port