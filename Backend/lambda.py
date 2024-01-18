import json
from decimal import Decimal

import boto3

dynamodb = boto3.resource('dynamodb')
table_name = 'tanbol.click'  
table = dynamodb.Table(table_name)

class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, Decimal):
            return str(o)
        return super(DecimalEncoder, self).default(o)

def lambda_handler(event, context):
    # Get current visit count from DynamoDB
    response = table.get_item(Key={'counter_id': 'website_visits'})
    current_count = response.get('Item', {'count': Decimal('0')})['count']

    # Increment the visit count
    new_count = current_count + 1

    # Update the DynamoDB table
    table.put_item(Item={'counter_id': 'website_visits', 'count': new_count})

    # Return a valid JSON response
    return {
        'statusCode': 200,
        'body': json.dumps({'message': f'Successfully incremented visit count to {new_count}', 'new_count': new_count}, cls=DecimalEncoder),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://tanbol.click'  
        }
    }
