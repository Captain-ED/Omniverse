#some important parts of the web app, the ominiverse's api

from  flask import  *
import json,time
app = Flask(__name__)

@app.route('/', methods = ['GET'] )
def homepage():
    data_set = {'Page':'Home' }
    json_dump= json.dumps(data_set)
    return json_dump

@app.route('/persona/new', methods = ['GET'] )
def MakePersona():
    data_set = {'Page':'New Persona' }
    json_dump= json.dumps(data_set)
    return json_dump

@app.route('/squad/create', methods = ['GET'] )
def CreateSquad():
    data_set = {'Page':'New Squad' }
    json_dump= json.dumps(data_set)
    return json_dump

@app.route('/squad/mint', methods = ['GET'] )
def MintSquadMember():
#should return link
    data_set = {'Page':'New Guy' }
    json_dump= json.dumps(data_set)
    return json_dump

@app.route('/watcher', methods = ['GET'] )
def RunWatcher():
    #this should be a continious process
    data_set = {'Page':'New Guy'}
    json_dump = json.dumps(data_set)
    return json_dump
