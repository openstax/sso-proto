# -*- coding: utf-8 -*-

import boto3
import json
import requests
import os

import logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

session = requests.Session()

# from requests_aws4auth import AWS4Auth

# region = 'us-east-2' # For example, us-west-1
# service = 'es'
# credentials = boto3.Session().get_credentials()
# awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service, session_token=credentials.token)

host = os.environ['DOMAIN_URL']
index = 'books'
url = 'https://' + host + '/' + '_search'

# Lambda execution starts here
def handler(event, context):
    logger.info('started')
    # Put the user query into the query DSL for more accurate search results.
    # Note that certain fields are boosted (^).
    query = {
        "size": 25,
        "query": {
            "multi_match": {
                "query": event['queryStringParameters']['q'] #,
                # "fields": ["fields.title^4", "fields.plot^2", "fields.actors", "fields.directors"]
            }
        }
    }

    # ES 6.x requires an explicit Content-Type header
    headers = { "Content-Type": "application/json" }

    logger.info('about to request')
    # Make the HTTP request
    r = session.get(url, headers=headers, data=json.dumps(query))
    logger.info('back from request')

    # Create the response and add some extra content to support CORS
    response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": '*'
        },
        "isBase64Encoded": False
    }

    # Add the search results to the response
    response['body'] = r.text
    logger.info('returning')
    return response
