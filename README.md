This is demo algorithm that can use to handle DynamoDB responses

Basic idea: 
If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, we strongly recommend that you use an exponential backoff algorithm. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.

More about DynamoDB response: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchGetItem-property

- How to run:

Run exponentialBackOff.js again and again  in browser console to see the the result.
You can also add more console.log to see 