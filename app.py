from flask import Flask, render_template, request, jsonify, send_file
import google.generativeai as genai
import google.cloud.texttospeech as tts
import os
import time

# Initialize Flask App
app = Flask(__name__)

# Set API Key manually here (Replace with your actual API key)
GENAI_API_KEY = "AIzaSyDWPWDmZelDcIe5CIvbzgimTwD8vcSiKOY"

genai.configure(api_key=GENAI_API_KEY)


# Use the latest available Gemini model
gemini_model = genai.GenerativeModel("gemini-1.5-pro-latest")
tts_client = tts.TextToSpeechClient()

def text_to_speech(text):
    """Convert text to speech and save as 'response.wav'"""
    synthesis_input = tts.SynthesisInput(text=text)
    voice = tts.VoiceSelectionParams(
        language_code="en-IN", 
        name="en-IN-Chirp-HD-D", 
        ssml_gender=tts.SsmlVoiceGender.NEUTRAL
    )
    audio_config = tts.AudioConfig(audio_encoding=tts.AudioEncoding.LINEAR16)
    response = tts_client.synthesize_speech(input=synthesis_input, voice=voice, audio_config=audio_config)
    
    with open("response.wav", "wb") as out:
        out.write(response.audio_content)

    time.sleep(1)  # Ensure the file is fully written before playing

@app.route('/')
def index():
    return render_template("professor_x.html")

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get("message", "").strip().lower()

    if not user_input:
        return jsonify({"status": "error", "response": "Please say something."})

    if "exit" in user_input:
        return jsonify({"status": "exit", "response": "Goodbye! Have a great day!"})

    # Fetch AI response
    response = gemini_model.generate_content(user_input)
    full_response = response.text.strip()

    # Summarize response for speech
    summary_prompt = f"Summarize this in 2-3 sentences for speech output:\n{full_response}"
    summary_response = gemini_model.generate_content(summary_prompt)
    summary_text = summary_response.text.strip()

    # Convert summary to speech
    text_to_speech(summary_text)

    return jsonify({"status": "success", "response": full_response})

@app.route('/play_audio')
def play_audio():
    """Serve the latest generated response audio"""
    audio_path = "response.wav"

    # Wait until the file exists
    for _ in range(5):
        if os.path.exists(audio_path) and os.path.getsize(audio_path) > 0:
            break
        time.sleep(1)  # Wait for file to be available

    return send_file(audio_path, mimetype="audio/wav", as_attachment=False)
if __name__ == "__main__":
    app.run(debug=True)
