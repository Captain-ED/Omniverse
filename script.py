import json
import requests
headers ={}
Data= {}

def Watcher(BaseTokenAddress, PersonaTokenAddress):
    BaseNFT_token = BaseTokenAddress
    Persona_token = PersonaTokenAddress

    BaseNFT_url = 'https://api-devnet.magiceden.dev/v2/tokens/' + BaseNFT_token
    Persona_url = 'https://api-devnet.magiceden.dev/v2/tokens/' + Persona_token

    BaseNFT_holder = json.loads(requests.get(BaseNFT_url, headers = headers, data = Data).text)
    Persona_holder = json.loads(requests.get(Persona_url, headers = headers, data = Data).text)

    BaseNFT_CurrentAddress = BaseNFT_holder['owner']
    Persona_CurrentAddress = Persona_holder['owner']
    valid = False
    print(Persona_CurrentAddress)
    print(BaseNFT_CurrentAddress)
    '''while True:
        if Persona_CurrentAddress == BaseNFT_CurrentAddress:
            if valid == False:
                #set Proper uri
                valid = True
        if Persona_CurrentAddress != BaseNFT_CurrentAddress:
            #Set uri to invald
            valid = False'''


# Create Deriv NFT Meta Data
def NewPersona(BaseTokenAddress):
    BaseNFT_token = BaseTokenAddress
    BaseNFT_url = 'https://api-devnet.magiceden.dev/v2/tokens/' + BaseNFT_token
    Data= json.loads(requests.get(BaseNFT_url, headers = headers, data = Data).text)
    #Convert Data to metaplex format
        #insert changeable image uri
        #add base image uri as attribute
        #add status attribute

def NewSquad(BaseTokenAddress):
    BaseNFT_token = BaseTokenAddress
    BaseNFT_url = 'https://api-devnet.magiceden.dev/v2/tokens/' + BaseNFT_token
    Data= json.loads(requests.get(BaseNFT_url, headers = headers, data = Data).text)
    #Convert Data to metaplex format
        #no set supply
        #add status attribute
        #add controll Eleements

#Create SOL NTTs




#Test Magic Eden Api
Watcher('2Fm51XoSJv6hnw9EdhtHtbcKfoipeC2agh1BWdhAc6w4', '4uvpqEL73361hRXCrHqBZQWeqfbKPQw55yKSFZvLQYTq')

# Create strorage METHOD
