import * as AWS from "aws-sdk";
import { ConfigurationOptions } from "aws-sdk";

const configuration: ConfigurationOptions = {
  region: process.env.AWS_REGION, // YOUR AWS REGION 
  secretAccessKey: process.env.AWS_USER_SECRET_ACCESS_KEY, // YOUR AWS SECRET ACCESS KEY
  accessKeyId: process.env.AWS_USER_ACCESS_KEY_ID, // YOUR AWS ACCESS KEY ID
};

AWS.config.update(configuration);

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = async (tableName: string) => {
    var params = {
        TableName: tableName
    }
    console.log('Scanning table. Please wait...');

    await docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}

export default AWS;