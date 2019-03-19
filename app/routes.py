import json
from app import app
from flask import Flask, jsonify, request, render_template

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html", token="my_secret_token")

@app.route("/test", methods=["GET"])
def catch_all():
    return jsonify("Valid Endpoint"), 200
