#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import requests
import json



def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'storefront.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)

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
    while True:
        if Persona_CurrentAddress == BaseNFT_CurrentAddress:
            if valid == False:
                #set Proper uri
                valid = True
        if Persona_CurrentAddress != BaseNFT_CurrentAddress:
            #Set uri to invald
            valid = False


if __name__ == '__main__':
    main()
