from flask import Flask
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

@app.route("/api/health")
def health():
    return {"status": "ok"}

# TODO: Implement Stripe integration
# TODO: Implement Airtable integration

if __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", 5000)))
