# AwsServerlessExpress-SAM

- set project
    - sudo npm install -g npm
    - npm run i
    - set config file
        - config/env/.env.json
            - {
  "dev": true,
  "cookieSecret": "asds@#7575dsadsd",
  "local": {
    "port": 3000
  }
}

- test
    - npm run test
- run express
    - npm run dev
- deploy
    - set template.yaml
        - set parameters
    - create s3 bucket
    - set script of package.json
        - ${BUCKET_NAME}
        - ${STACK_NAME}
    - npm run deploy