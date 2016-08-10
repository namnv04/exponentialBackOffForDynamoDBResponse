# Exponential back off algorithm
This is demo exponential back off algorithm that can be used to handle DynamoDB responses
# The idea: 
If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, we strongly recommend that you use an exponential backoff algorithm. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.

More about DynamoDB response: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchGetItem-property

# How to run:
Run exponentialBackOff.js again and again  in browser console to see the the result.
You can also add more console.log to see how it works

# Question
Open for question
