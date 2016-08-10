// A function that keeps trying, "toTry" until it returns expected value or has
// tried "max" number of times. First retry has a delay of "delay".
// "callback" is called upon success.
function exponentialBackoff(toTry, params, max, delay, cb) {
	var result = toTry(params);
    // console.log('max',max,'next delay',delay);
  if (result.response && result.response.length) {
  	if (!params.response) {
    	params.response = [];
    }
    var t = result.response.concat(params.response);
    params.response = t;
    result.response = t;
  }
      
    if (result && Number(result.unprocessedKeys) === 0) {
    	console.log('result', result);
      cb(result);
    } else {
        if (max > 0) {
          params.requestedItems = Number(result.unprocessedKeys);
          setTimeout(function() {
            exponentialBackoff(toTry, params, --max, delay * 2, cb);
          }, delay);
        } else {
					console.log('we give up');   
        	return null;
        }
    }
}


/*
 * This function represent a sample DynamoDB API.
 * Return random result either completed result or partial result.
 * If partial result returned, try to call exponentially query until completed result return
 * or max attemp time hit.
 *
 * params => query param that's sent to DynamoDB 
 * More info about params and return values is here http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchGetItem-property
 */
function num(params) {
		var res = {};
    var response = [];
	  for (var i = params.requestedItems; i > 0 ; i--) {
      var randomboolen = Math.random() > 0.4;
      if (randomboolen) {
        response.push(i);
      }
    }
    res.response = response;
  	res.unprocessedKeys = params.requestedItems - response.length;
  	return res;
}


var params = {
	requestedItems: 20,
//  result: [],
//  unprocessedKeys: 0
}
exponentialBackoff(num, params, 4, 100, function(re) {
  console.log(re);
})

