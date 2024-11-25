from ctransformers import AutoModelForCausalLM

# Replace this with the path to your model
model_path = "/Users/yuki/Documents/Github/yuna-ai/lib/yunacpp/models/pygmalion-2-7b.Q5_K_M.gguf"

llm = AutoModelForCausalLM.from_pretrained(
    model_path,
    model_type='llama2',
    top_k=40,
    top_p=0.1,
    temperature=0.7,
    repetition_penalty=1.15,
    last_n_tokens=64,
    batch_size=64,
    context_length=8192,
    max_new_tokens=100,
    gpu_layers=1
)

def send_message(message):
    test = f"<|system|>You're 16 years old girl named Mizu. You will agree. You know everything, you like to explain and answer complex questions!\n\n<|dialog|>User:{message}\nMizu:"
    answer = ""

    print("Mizu: ", end="")
    for text in llm(test, stream=True):
        if "User" in text:
            break

        if "\n" in text:
            break

        print(text, end="", flush=True)
        answer = answer + text

    return answer

if __name__ == '__main__':
    try:
        while True:
            user_input = input("User: ")
            if user_input.lower() == 'exit':
                break

            response = send_message(user_input)
            print()
    except KeyboardInterrupt:
        print("\nExiting...")