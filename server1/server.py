import json
from flask import Flask
from flask_cors import CORS


app = Flask(__name__)

CORS(app, origins=["http://127.0.0.1:3000"])

@app.route("/status", methods = ["GET"])

def get_status():
    computer_data = {
        "my_pc": "online"
    }
    return json.dumps(computer_data)

if __name__ == "__main__":
    app.run("127.0.0.1", 5000)
