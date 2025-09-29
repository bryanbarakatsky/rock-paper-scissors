from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route("/get-bot-decision")
def get_decision():
    rps = ["Rock", "Paper", "Scissors"]
    random_ind = random.randint(0, 2)
    random_bot_decision = rps[random_ind]
    return jsonify({ "decision": random_bot_decision }), 200

if __name__ == "__main__":
    app.run(debug=True)
