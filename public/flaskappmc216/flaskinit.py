from flask import Flask, request, send_from_directory
from VideoTemplateCreator.main import *
from flask_cors import CORS
import json
import pdb
import shutil
app = Flask(__name__, static_url_path='/static')

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route('/video', methods=['POST'])
def video():
    adsjson = request.get_json()['ads']
    run(adsjson)
    return 'DONE' 
    #return send_from_directory(directory=app.root_path, filename='holy.avi')

if __name__ == "__main__":
    #app.config['WTF_CSRF_METHODS'] = []
    CORS(app)
    app.run(host='0.0.0.0', port = 5000)
