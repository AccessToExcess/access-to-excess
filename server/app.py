from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api/health")
def health():
    return {"status": "ok"}

# TODO: Implement Stripe integration
# TODO: Implement Airtable integration


@app.route("/api/food-pickup", methods=['GET'])
def get_airtable_data():
    try:
        token = os.getenv('AIRTABLE_TOKEN')
        url = os.getenv('AIRTABLE_URL')

        headers = {
            'Authorization' : f'Bearer {token}'
        }

        response = requests.get(url, headers=headers)
        response.raise_for_status()

        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error' : str(e)}), 500




@app.route("/api/mailinglist-subscribe", methods=["POST"])
def add_receiver_to_mailing_list():
    try:
        MAILCHIMP_API_KEY = os.getenv("MAILCHIMP_API_KEY")
        MAILCHIMP_AUDIENCE_ID = os.getenv("MAILCHIMP_AUDIENCE_ID")
        MAILCHIMP_DATA_CENTER = os.getenv("MAILCHIMP_DATA_CENTER")

        data = request.get_json()

        first_name = data.get("firstName", "").strip()
        last_name = data.get("lastName", "").strip()
        email = data.get("email", "").strip().lower()
        phone = data.get("phone")
        role = data.get("role", "recipient")

        if not first_name or not last_name:
            return jsonify({"error": "First and last name are required"}), 400
        if not email:
            return jsonify({"error": "Email is required"}), 400

        import hashlib
        subscriber_hash = hashlib.md5(email.encode()).hexdigest()

        url = f"https://{MAILCHIMP_DATA_CENTER}.api.mailchimp.com/3.0/lists/{MAILCHIMP_AUDIENCE_ID}/members/{subscriber_hash}"

        payload = {
            "email_address": email,
            "status_if_new": "subscribed",
            "status": "subscribed",
            "merge_fields": {
                "FNAME": first_name,
                "LNAME": last_name,
                "PHONE": phone,
            },
            "tags": [role],
        }

        response = requests.put(
            url,
            auth=("anystring", MAILCHIMP_API_KEY),
            json=payload,
        )

        if response.status_code not in (200, 201):
            return jsonify(response.json()), response.status_code

        return jsonify({"message": "Successfully subscribed", "data": response.json()})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", 5000)))
