export function getPublicKey() {
  return new Promise((resolve, reject) => {
    resolve(
      "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAic4+NgKmwlM1RiKzLdwR/WsnZAWaD13FeEZAtomfFCiC7+iRVsQ3LrPcYo7Ulvzvcxo+bhvlSmADUqtEQXoU+q/HPVYHzL0Qv1JgwgcUr5xuY5ABoUSrdSfpZkUwiqBnk9kJLcznYKYr1At6KIeNyLTjA364GDlIwuqAlAU97Kp4r80LywRxxtXRiVBZ9YYoioLuJtSvLlRDME1gF652/eO863pQHkPyGQ+O215sWMUgiUheCOAmC7amDU9y+ilYeESxNN5+OaSEzf1QNIBJSEkzVirZoWvOrSX37Wq0R8xRSnyINKN+gj2UgxWOrS1626VZuRl/yPgbrXgJJZHcKQIDAQAB"
    );
  });
}
