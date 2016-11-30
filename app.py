import os
from flask import Flask, render_template
from flask_compress import Compress

app = Flask(__name__)
app.config.from_object('settings')

Compress(app)

@app.route("/")
def login():
    return render_template('index.html')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
