#!/bin/bash

# Load environment variables from deploy.vars file
if [ -f deploy.vars ]; then
  export $(cat deploy.vars | xargs)
else
  echo "deploy.vars file not found!"
  exit 1
fi

# Variables loaded from deploy.vars file
ORIGIN_S3_URL=$ORIGIN_S3_URL
LAMBDA_BUCKET_URL=$LAMBDA_BUCKET_URL
LAMBDA_FUNCTION_NAME=$LAMBDA_FUNCTION_NAME
PROFILE=$PROFILE
LAMBDA_BUILD_DIRECTORY=$LAMBDA_BUILD_DIRECTORY

# Sync build/client with the S3 bucket
aws --profile "$PROFILE" s3 sync build/client $ORIGIN_S3_URL

# Zip the build/lambda/index.cjs file
zip -j lambda.zip build/lambda/index.cjs

# Check if the Lambda function exists
if aws --profile "$PROFILE" lambda get-function --function-name "$LAMBDA_FUNCTION_NAME" > /dev/null 2>&1; then
    # Update the Lambda function with the new zip file
    aws --profile "$PROFILE" lambda update-function-code --function-name "$LAMBDA_FUNCTION_NAME" --zip-file fileb://lambda.zip > /dev/null
    echo "Lambda function updated successfully."
else
    # Copy the zip file to the S3 bucket
    aws --profile "$PROFILE" s3 cp lambda.zip $LAMBDA_BUCKET_URL
    echo "Lambda function does not exist. Zip file copied to S3 bucket."
fi

# Echo the lambda.zip file size
echo "lambda.zip file size: $(echo "scale=1; $(stat -f%z lambda.zip) / 1024 / 1024" | bc) MB"
echo "Deployment completed successfully."
