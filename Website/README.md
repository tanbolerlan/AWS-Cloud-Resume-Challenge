# Cloud Resume Challenge - AWS Static Website with Visitor Counter - Front-end CI/CD pipeline

## Project Overview

This project is a part of the AWS Cloud Resume Challenge, where I have created a static website hosted on AWS with a visitor counter feature. The website is served through Amazon CloudFront, secured with AWS WAF (Web Application Firewall), and the DNS is managed using Amazon Route 53 with the domain name [tanbol.click](https://tanbol.click). The visitor counter is implemented using JavaScript, DynamoDB as the database, and AWS Lambda functions written in Python and exposed through an HTTP API.

## Technologies Used

- **AWS Services:**

  - Amazon S3: Hosting the static website files.
  - Amazon CloudFront: CDN (Content Delivery Network) for fast and secure content delivery.
  - AWS WAF: Web Application Firewall for protection against common web exploits.
  - Amazon Route 53: DNS service for domain registration and management.
  - AWS Lambda: Serverless functions for handling the visitor counter logic (Python).
  - Amazon DynamoDB: NoSQL database used to store and retrieve visitor count data.
  - API Gateway: To create and manage the HTTP API for Lambda functions.

- **Programming Languages:**
  - JavaScript: Used for implementing the visitor counter on the client side.
  - Python: Used for writing Lambda functions.

## Project Structure

The project consists of the following components:

1. **Static Website Files:**

   - The HTML, CSS, and JavaScript files for the static website are stored in an Amazon S3 bucket.

2. **Visitor Counter Logic:**

   - The visitor counter functionality is implemented using JavaScript on the client side. This script sends requests to the backend API (Python Lambda functions) to update and retrieve the visitor count.

3. **Backend Lambda Functions (Python):**

   - AWS Lambda functions written in Python are used to handle HTTP requests from the static website. These functions interact with DynamoDB to update and retrieve the visitor count.

4. **DynamoDB Database:**

   - A DynamoDB table is used to store the visitor count data. Each visitor is tracked with a unique identifier.

5. **Website Pages:**
   - The static website includes pages such as About the Website, Resume, and a Blog where I share my experience learning and practicing cloud infrastructure.

## Setup Instructions

1. **AWS Account Setup:**

   - Make sure you have an AWS account with the necessary permissions to create and manage resources like S3, CloudFront, Lambda, DynamoDB, WAF, and Route 53.

2. **Configure AWS CLI:**

   - Set up the AWS CLI on your local machine with the necessary credentials.

3. **Deploying the Infrastructure:**

   - Use the provided CloudFormation templates (if any) to deploy the required AWS resources.

4. **Static Website Deployment:**

   - Upload the static website files to the S3 bucket.

5. **Lambda Function Deployment:**

   - Deploy the Lambda functions (written in Python) and set up the API Gateway to expose the HTTP API.

6. **DynamoDB Setup:**

   - Create a DynamoDB table to store the visitor count data.

7. **Testing:**
   - Access your website through the CloudFront URL (https://tanbol.click), and ensure that the visitor counter updates correctly.

## Additional Notes

- **Security:**

  - Ensure that appropriate security measures are in place, especially with regards to AWS WAF configurations and Lambda function permissions.

- **Monitoring:**

  - Set up CloudWatch Alarms and Logging to monitor the health and performance of your AWS resources.

- **Scalability:**
  - Consider optimizing the solution for scalability, especially if expecting a high volume of traffic.

## Credits and Acknowledgments

- Mention any third-party libraries, resources, or tutorials used during the project.

## License

This project is licensed under the [MIT License](LICENSE).

---
