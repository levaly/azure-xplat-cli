// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46153750-fa3b-4140-bf57-8beb7d5c971a',
    name: 'KonaMDI3_697842',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:01:49.8040822Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9454971c-e4c2-4b4f-886f-95a5d6276f9b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14928',
  'x-ms-correlation-request-id': 'd27cc1d2-1c32-4f79-b3c9-1725c27ab3d5',
  'x-ms-routing-request-id': 'WESTUS:20151107T010224Z:d27cc1d2-1c32-4f79-b3c9-1725c27ab3d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:01:49.8040822Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9454971c-e4c2-4b4f-886f-95a5d6276f9b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14928',
  'x-ms-correlation-request-id': 'd27cc1d2-1c32-4f79-b3c9-1725c27ab3d5',
  'x-ms-routing-request-id': 'WESTUS:20151107T010224Z:d27cc1d2-1c32-4f79-b3c9-1725c27ab3d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:01:49.8040822Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bc9a8852-2a09-4688-9cb7-a3d25bd80ea9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': '33d4061e-4f6d-44d6-a7b2-df2915d4ecdf',
  'x-ms-routing-request-id': 'WESTUS:20151107T010225Z:33d4061e-4f6d-44d6-a7b2-df2915d4ecdf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:01:49.8040822Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bc9a8852-2a09-4688-9cb7-a3d25bd80ea9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': '33d4061e-4f6d-44d6-a7b2-df2915d4ecdf',
  'x-ms-routing-request-id': 'WESTUS:20151107T010225Z:33d4061e-4f6d-44d6-a7b2-df2915d4ecdf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:02:25.8617988Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '768',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '52b8f094-9654-4e74-902a-5776db0b0339',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e50eafc7-2691-4609-9501-c5eee75acf0b',
  'x-ms-routing-request-id': 'WESTUS:20151107T010226Z:e50eafc7-2691-4609-9501-c5eee75acf0b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:02:25.8617988Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '768',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '52b8f094-9654-4e74-902a-5776db0b0339',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e50eafc7-2691-4609-9501-c5eee75acf0b',
  'x-ms-routing-request-id': 'WESTUS:20151107T010226Z:e50eafc7-2691-4609-9501-c5eee75acf0b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:02:25.8617988Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '768',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd30dfee1-ee2c-4b3f-a83d-13570442b47a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': 'e5f10fb7-3f5c-4afa-80f3-a97a9aa1107d',
  'x-ms-routing-request-id': 'WESTUS:20151107T010227Z:e5f10fb7-3f5c-4afa-80f3-a97a9aa1107d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls594\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls594\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2460.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-07T01:01:49.8040822Z\",\"lastModifiedTime\":\"2015-11-07T01:02:25.8617988Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg01/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2460\",\"name\":\"xplattestadla2460\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '768',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd30dfee1-ee2c-4b3f-a83d-13570442b47a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14924',
  'x-ms-correlation-request-id': 'e5f10fb7-3f5c-4afa-80f3-a97a9aa1107d',
  'x-ms-routing-request-id': 'WESTUS:20151107T010227Z:e5f10fb7-3f5c-4afa-80f3-a97a9aa1107d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 07 Nov 2015 01:02:26 GMT',
  connection: 'close' });
 return result; }]];