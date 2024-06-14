from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    response = requests.get(f'https://api.spotify.com/v1/search?q={query}&type=track')
    return jsonify(response.json())
