import * as cdk from 'aws-cdk-lib';
import { Stack, App, aws_s3 as s3 } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment'
import { aws_cloudfront as cloudfront } from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

export declare const hostedZone: route53.HostedZone;
export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    
    // const myCertificate = new acm.Certificate(this, 'mySiteCert', {
    //   domainName: 'www.3teve.com',
    //   validation: acm.CertificateValidation.fromDns(hostedZone),
    // });

    const travelBuddy = new s3.Bucket(this, "TravelBuddy", 
    {
      publicReadAccess: true,
      websiteIndexDocument: "index.html"
    });
    new s3deploy.BucketDeployment(this, 'DeployCardWebsite', {
      sources: [s3deploy.Source.asset('../build')],
      destinationBucket: travelBuddy,
      // destinationKeyPrefix: 'web/static', // optional prefix in destination bucket
    });

    // Creates a distribution from an S3 bucket.
   
  new cloudfront.Distribution(this, 'cardDistribution', {
    defaultBehavior: { origin: new origins.S3Origin(travelBuddy) },
  });

  }
}
