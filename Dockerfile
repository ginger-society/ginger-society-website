# Stage 1: Build the project
FROM gingersociety/vite-react-builder:latest AS builder

COPY . .

# Set environment variables using build arguments
ARG GINGER_TOKEN
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_DEFAULT_REGION
ARG DISTRIBUTION_ID

ENV GINGER_TOKEN=$GINGER_TOKEN
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
ENV AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION
ENV DISTRIBUTION_ID=$DISTRIBUTION_ID

RUN ginger-auth token-login ${GINGER_TOKEN}

RUN pnpm i --force

RUN pnpm build

# Pull additional content from S3 into dist
RUN aws s3 cp s3://ginger-book-tech-docs/ dist/products/ginger-book/tech-docs --recursive
RUN aws s3 cp s3://ginger-ui-stories/ dist/products/ginger-ui/stories --recursive
RUN aws s3 cp s3://ginger-dj-tech-docs/ dist/products/ginger-dj/docs --recursive

# Upload to S3 and invalidate CloudFront
RUN aws s3 cp dist/ s3://gingersociety-homepage/ --recursive
RUN aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

# Stage 2: Serve with Nginx for k8s deployment
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]