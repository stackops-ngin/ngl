#!/bin/bash

# Load environment variables from deploy.vars file
if [ -f deploy.vars ]; then
  export $(cat deploy.vars | xargs)
else
  echo "deploy.vars file not found!"
  exit 1
fi

ORIGIN_S3_URL=$ORIGIN_S3_URL
DISTRIBUTION_ID=$DISTRIBUTION_ID
REGION=$REGION
PROFILE=$PROFILE
UI_BUILD_DIRECTORY=$UI_BUILD_DIRECTORY


# Sync build/client with the S3 bucket
aws --profile "$PROFILE" s3 sync "$UI_BUILD_DIRECTORY" "$ORIGIN_S3_URL" --region "$REGION"

# Invalidate CloudFront cache for index.html and favicon
aws --profile "$PROFILE" cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/index.html" "/favicon.ico" --region "$REGION"
