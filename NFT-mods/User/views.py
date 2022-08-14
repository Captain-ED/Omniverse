from django.shortcuts import render
import json
import json
import requests
headers ={}
Data = {}
Metaplex_format = json.loads(open('OGNFT.json','r').read())


# Create Deriv NFT Meta Data
def NewPersona(request, BaseTokenAddress):
    BaseNFT_token = BaseTokenAddress
    BaseNFT_url = 'https://api-devnet.magiceden.dev/v2/tokens/' + BaseNFT_token
    MetaData= json.loads(requests.get(BaseNFT_url, headers = headers, data = Data).text)
    #Convert Data to metaplex format
        #insert changeable image uri
        #add base image uri as attribute
        #add status attribute
    #Add Persona to data base


def NewSquad(request, BaseTokenAddress):
    BaseNFT_token = BaseTokenAddress
    BaseNFT_url = 'https://api-devnet.magiceden.dev/v2/tokens/' + BaseNFT_token
    MetaData= json.loads(requests.get(BaseNFT_url, headers = headers, data = Data).text)
    #Convert Data to metaplex format
        #no set supply
        #add status attribute
        #add controll Eleements
    #Add Squad to database

