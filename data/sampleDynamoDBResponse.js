/*
 * This is DynamoDB sample response from batchGetItems API
 *
 */
{
  "Responses": {
    "KSR3_iPhone_2015_01": [ // table name
      {
        "created_date": { // query cridential
          "S": "2015-01-01"
        },
        "keyword": { // query cridential
          "S": "jerry li__FR"
        },
        "results": { // actial result
          "L": [ // L means array of result
            {
              "S": "474718490"
            },
            {
              "S": "395876018"
            },
            {
              "S": "395876018"
            }
          ]
        }
      }
    ]
  },
  /* BatchGetItem will return a partial result if the response size limit is
   * exceeded, the table's provisioned throughput is exceeded, or an internal
   * processing failure occurs. If a partial result is returned, the operation
   * returns a value for UnprocessedKeys. You can use this value to retry the
   * operation starting with the next item to get.
   */
  "UnprocessedKeys": {

  }
}
