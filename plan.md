## Plan
- [x] asdf set up
- [x] Dotenv set up
- [x] Backend completely in CF
- [x] Deploy a single stage
- [x] Query via TablePlus
- [x] VPC Bastion host
  - [x] Conditionally launch Bastion host -- EC2_KEY_NAME included
  - [x] Clean up bastion rules
- [x] GraphQL returning a value in client
- [x] GraphQL querying Serverless Aurora
- [x] Database migration script
- [x] Database Seed (Does can this be done with DataAPI?)
- [x] Data Faker
- [x] CI / CD Pipeline (Multi account)
- [x] CI / CD Pipeline (Deploy new instance on CI, validates CF)
- [x] CI / Trigger migration
- [x] Trigger API call on deploy
- [x] GraphQL triggered by test
- [x] Ec2 Wait or Creation policy
- [x] Tests should fail when in error handler (rollback)
- [x] EC2 key to log into bastion host in cloudformation
- [x] Manual  snapshots get added -- turn these off https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html
- [x] Deploys always Run Up / Script
- [x] Custom VPC (Project does not have off default VPC)
- [x] Bastion defined as separate cloudformation stack
- [x] Cfn-lint
- [x] Buildkite Event Bridge investigation
- [x] Json support postgres
- [x] Secrets storage -- chamber?
- [x] Show all the services
- [x] Showing what is currently being deployed to vs what is not (service activity)

## Statistics features (Should be value)
- [x] Showing what is currently being deployed to vs what is not (service activity)
- [ ] Types of commits being used
  - [ ] GitHub commits into repo
- [ ] Frontend View
  - [ ] Authentication (cognito?)
  - [ ] Buildkite commits into repo (Event Bridge)
  - [ ] API Authentication when an API exists

## Testing Improvements
- [ ] API Performance monitoring (jest?)
- [ ] If errors happen in sub scripts (outside of ci-test.yml), it errors in the error block (messing message, code, etc)

## Before Production
- [ ] All `Security:` Tags
- [ ] Limit Execution role in serverless.yml as it is *
- [ ] Remove * CIDR from BastionSecurityGroup
- [ ] DeletionPolicy: Delete, change this if production
- [ ] Organisation Slub is a variable

## Nice to have
- [ ] Jira stories into repo
- [ ] Logging framework
  - [ ] Database logs
- [ ] Cloudwatch Metrics
- [ ] TypeScript / DI support
- [ ] Support for XRay
- [ ] Load testing
- [ ] Insomnia api in repo
- [ ] Custom Git commit messaging
- [ ] Jest Support
- [ ] Apollo Engine support
- [ ] Support named stages (not just dev)
- [ ] Web sockets
- [ ] HTTP Api rather than RestAPI
- [ ] DNS on database
- [ ] DNS on API
- [ ] IAM Auth on database
- [ ] aws-vault
- [ ] Proper logger support

## Insights
- By team, individual, etc
- Trendlines (how do I even do these?)
- 

## Awkward Code, and improvements
- [ ] Move compose into backend -- Buildkite CD (does not support microservices nicely)
- [ ] Uploads extracted AWS SDK to lambda function (docker image with AWS CLI)
- [ ] process.env.SECRET_ARN || process.env.SECRET_ARN_REF in code
- [ ] Two sets of dot files (core, then chamber) -- Where should profile exist? Cannot be used on CI

## Optional
- [ ] Serverless CI/CD
- [ ] Serverless Platform
  
## Unknowns: 
- [ ] Should key names in outputs, resources, contain 'engstats' prefix for better naming? Creates more semantic names
- [ ] Consider putting any names under `custom:` so that they consistently contain stack name
- [ ] Do any resources in stack contain the stack name? -- Might be duplicated

## Aurora Serverless
Limitations:
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations

## Notes
3 Ways lambda can connect to RDS
- Lambda in VPC
- RDS Data API
- RDS Proxy

## Challenges of DataApi
- 