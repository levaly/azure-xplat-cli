// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '3ca49042-782a-4cc9-89b5-ee1b487fe115',
    name: 'AzSdkCore1',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1449d5b7-8a83-47db-ae4c-9b03e888bad0',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb', 'microsoft.web'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_ARM_TEST_RESOURCE_LOCATION'] = 'East US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7e628cae558b76f2a3efae33eefa581f',
  date: 'Thu, 12 Mar 2015 18:28:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceTag7395?api-version=2014-04-01-preview')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceTag7395/\",\"tagName\":\"xplatResourceTag7395\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1180',
  'x-ms-request-id': '672cd861-6ee6-4220-9223-3c119a31a357',
  'x-ms-correlation-request-id': '672cd861-6ee6-4220-9223-3c119a31a357',
  'x-ms-routing-request-id': 'WESTUS:20150312T182802Z:672cd861-6ee6-4220-9223-3c119a31a357',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:28:02 GMT',
  'content-length': '171' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '08e26addeeec763399a0aa06b15b7cea',
  date: 'Thu, 12 Mar 2015 18:28:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceTag4974/\",\"tagName\":\"xplatResourceTag4974\",\"count\":{\"type\":\"Total\",\"value\":1},\"values\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceTag4974/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":1}}]},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceTag7395/\",\"tagName\":\"xplatResourceTag7395\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31976',
  'x-ms-request-id': '981ee6b6-07d5-4e04-b7ca-5e03cb6d1399',
  'x-ms-correlation-request-id': '981ee6b6-07d5-4e04-b7ca-5e03cb6d1399',
  'x-ms-routing-request-id': 'WESTUS:20150312T182803Z:981ee6b6-07d5-4e04-b7ca-5e03cb6d1399',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:28:03 GMT',
  'content-length': '521' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '42926e1a3e017319a6f393798acdfcac',
  date: 'Thu, 12 Mar 2015 18:28:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceTagGrp6422?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatResourceTagGrp6422' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31976',
  'x-ms-request-id': '54380818-1ad7-459f-9a80-fa4ccb4df8d4',
  'x-ms-correlation-request-id': '54380818-1ad7-459f-9a80-fa4ccb4df8d4',
  'x-ms-routing-request-id': 'WESTUS:20150312T182804Z:54380818-1ad7-459f-9a80-fa4ccb4df8d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:28:04 GMT',
  'content-length': '115' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '91086a41279979e884d22488399ef2f1',
  date: 'Thu, 12 Mar 2015 18:28:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceTagGrp6422?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceTagGrp6422\",\"name\":\"xplatResourceTagGrp6422\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '217',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1179',
  'x-ms-request-id': 'db787d85-e02a-4cf1-9d8a-01748f835d47',
  'x-ms-correlation-request-id': 'db787d85-e02a-4cf1-9d8a-01748f835d47',
  'x-ms-routing-request-id': 'WESTUS:20150312T182805Z:db787d85-e02a-4cf1-9d8a-01748f835d47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:28:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2ff85c3436cd7e1fa31062b3d2784914',
  date: 'Thu, 12 Mar 2015 18:28:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceTagGrp6422/providers/Microsoft.Web//sites/xplatResourceTagRes9620?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1aa234eb-0fc0-4d4b-a72f-c5b4e9fd0009',
  'x-ms-correlation-request-id': '1aa234eb-0fc0-4d4b-a72f-c5b4e9fd0009',
  'x-ms-routing-request-id': 'WESTUS:20150312T182806Z:1aa234eb-0fc0-4d4b-a72f-c5b4e9fd0009',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:28:06 GMT',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ca6d61a7768d7af3bd4df823037feb61',
  date: 'Thu, 12 Mar 2015 18:28:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceTagGrp6422/providers/Microsoft.Web//sites/xplatResourceTagRes9620?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceTagGrp6422/providers/Microsoft.Web/sites/xplatResourceTagRes9620\",\"name\":\"xplatResourceTagRes9620\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"East US\",\"tags\":{},\"properties\":{\"name\":\"xplatResourceTagRes9620\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres9620.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp6422-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-023.api.azurewebsites.windows.net:454/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/webspaces/xplatResourceTagGrp6422-EastUSwebspace/sites/xplatResourceTagRes9620\",\"repositorySiteName\":\"xplatResourceTagRes9620\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres9620.azurewebsites.net\",\"xplatresourcetagres9620.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres9620.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xplatresourcetagres9620.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2015-03-12T18:28:10.04\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes9620\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"kind\":null,\"cloningInfo\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1939',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7fdf7af7-c844-46cb-9278-5b9807d6f66a',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': 'f927348c-34e3-472d-b407-16c9dcdf9cbf',
  'x-ms-routing-request-id': 'WESTUS:20150312T182812Z:f927348c-34e3-472d-b407-16c9dcdf9cbf',
  date: 'Thu, 12 Mar 2015 18:28:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7c70e109b074740d9583b62574b04139',
  date: 'Thu, 12 Mar 2015 18:28:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceTagGrp6422/providers/Microsoft.Web//sites/xplatResourceTagRes9620?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceTagGrp6422/providers/Microsoft.Web/sites/xplatResourceTagRes9620\",\"name\":\"xplatResourceTagRes9620\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"East US\",\"tags\":{},\"properties\":{\"name\":\"xplatResourceTagRes9620\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres9620.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp6422-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-023.api.azurewebsites.windows.net:454/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/webspaces/xplatResourceTagGrp6422-EastUSwebspace/sites/xplatResourceTagRes9620\",\"repositorySiteName\":\"xplatResourceTagRes9620\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres9620.azurewebsites.net\",\"xplatresourcetagres9620.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres9620.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xplatresourcetagres9620.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2015-03-12T18:28:10.1\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes9620\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"kind\":null,\"cloningInfo\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1938',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D05CF24AD41B40"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '53c8b3ba-2872-486f-ada6-5053c796bab8',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '31981',
  'x-ms-correlation-request-id': '32999bee-339a-4d2c-995d-e5538a5b13c9',
  'x-ms-routing-request-id': 'WESTUS:20150312T182813Z:32999bee-339a-4d2c-995d-e5538a5b13c9',
  date: 'Thu, 12 Mar 2015 18:28:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3e095afec95272ba929eaadc83b15e29',
  date: 'Thu, 12 Mar 2015 18:28:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceTagGrp6422/providers/Microsoft.Web//sites/xplatResourceTagRes9620?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceTagGrp6422/providers/Microsoft.Web/sites/xplatResourceTagRes9620\",\"name\":\"xplatResourceTagRes9620\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"East US\",\"tags\":{\"xplatResourceTag7395\":\"\"},\"properties\":{\"name\":\"xplatResourceTagRes9620\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres9620.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp6422-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-023.api.azurewebsites.windows.net:454/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/webspaces/xplatResourceTagGrp6422-EastUSwebspace/sites/xplatResourceTagRes9620\",\"repositorySiteName\":\"xplatResourceTagRes9620\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres9620.azurewebsites.net\",\"xplatresourcetagres9620.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres9620.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xplatresourcetagres9620.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2015-03-12T18:28:10.1\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes9620\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"kind\":null,\"cloningInfo\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1963',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D05CF24AD41B40"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b495800e-46c0-4509-b22e-6e7f5c502324',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1178',
  'x-ms-correlation-request-id': '8420905c-3852-4bf3-aae8-61c77e9c5214',
  'x-ms-routing-request-id': 'WESTUS:20150312T182817Z:8420905c-3852-4bf3-aae8-61c77e9c5214',
  date: 'Thu, 12 Mar 2015 18:28:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'd51024d6594d7f29aa87bd8f5f7c7dee',
  date: 'Thu, 12 Mar 2015 18:28:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceTagGrp6422/resources?$filter=tagname%20eq%20%27xplatResourceTag7395%27&api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceTagGrp6422/providers/Microsoft.Web/sites/xplatResourceTagRes9620\",\"name\":\"xplatResourceTagRes9620\",\"type\":\"Microsoft.Web/sites\",\"location\":\"eastus\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31975',
  'x-ms-request-id': '9692fc7c-943b-4b4a-8ab1-a8a27fdfdb99',
  'x-ms-correlation-request-id': '9692fc7c-943b-4b4a-8ab1-a8a27fdfdb99',
  'x-ms-routing-request-id': 'WESTUS:20150312T182818Z:9692fc7c-943b-4b4a-8ab1-a8a27fdfdb99',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:28:18 GMT',
  'content-length': '247' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'dec971f5b0247b91b0ccdd2b4319e3c8',
  date: 'Thu, 12 Mar 2015 18:28:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceTagGrp6422/providers/Microsoft.Web//sites/xplatResourceTagRes9620?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceTagGrp6422/providers/Microsoft.Web/sites/xplatResourceTagRes9620\",\"name\":\"xplatResourceTagRes9620\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"East US\",\"tags\":{\"xplatResourceTag7395\":\"\"},\"properties\":{\"name\":\"xplatResourceTagRes9620\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres9620.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp6422-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-023.api.azurewebsites.windows.net:454/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/webspaces/xplatResourceTagGrp6422-EastUSwebspace/sites/xplatResourceTagRes9620\",\"repositorySiteName\":\"xplatResourceTagRes9620\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres9620.azurewebsites.net\",\"xplatresourcetagres9620.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres9620.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xplatresourcetagres9620.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2015-03-12T18:28:10.1\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes9620\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"kind\":null,\"cloningInfo\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1963',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D05CF24AD41B40"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'cff2c3d9-24e9-47f3-9eef-24ecf79a115c',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '31980',
  'x-ms-correlation-request-id': '96aaf5ad-6642-4376-bc80-19f801e220d4',
  'x-ms-routing-request-id': 'WESTUS:20150312T182819Z:96aaf5ad-6642-4376-bc80-19f801e220d4',
  date: 'Thu, 12 Mar 2015 18:28:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '5863079c9ecb7eed97198abc88a57ec1',
  date: 'Thu, 12 Mar 2015 18:28:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceTagGrp6422/providers/Microsoft.Web//sites/xplatResourceTagRes9620?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceTagGrp6422/providers/Microsoft.Web/sites/xplatResourceTagRes9620\",\"name\":\"xplatResourceTagRes9620\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"East US\",\"tags\":{},\"properties\":{\"name\":\"xplatResourceTagRes9620\",\"state\":\"Running\",\"hostNames\":[\"xplatresourcetagres9620.azurewebsites.net\"],\"webSpace\":\"xplatResourceTagGrp6422-EastUSwebspace\",\"selfLink\":\"https://waws-prod-blu-023.api.azurewebsites.windows.net:454/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/webspaces/xplatResourceTagGrp6422-EastUSwebspace/sites/xplatResourceTagRes9620\",\"repositorySiteName\":\"xplatResourceTagRes9620\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xplatresourcetagres9620.azurewebsites.net\",\"xplatresourcetagres9620.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xplatresourcetagres9620.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xplatresourcetagres9620.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2015-03-12T18:28:10.1\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xplatResourceTagRes9620\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"kind\":null,\"cloningInfo\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1938',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D05CF24AD41B40"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6895c42f-4312-4f6d-bb81-398bfabd4370',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1177',
  'x-ms-correlation-request-id': '8bc0ec36-4bf2-4689-80b8-a5c905d839c6',
  'x-ms-routing-request-id': 'WESTUS:20150312T182821Z:8bc0ec36-4bf2-4689-80b8-a5c905d839c6',
  date: 'Thu, 12 Mar 2015 18:28:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '48f642e501077bbb96ec69111ba93082',
  date: 'Thu, 12 Mar 2015 18:28:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceTagGrp6422/resources?$filter=tagname%20eq%20%27xplatResourceTag7395%27&api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31974',
  'x-ms-request-id': 'c3953fdf-9dca-4e85-b12f-10c7bc6fd32d',
  'x-ms-correlation-request-id': 'c3953fdf-9dca-4e85-b12f-10c7bc6fd32d',
  'x-ms-routing-request-id': 'WESTUS:20150312T182822Z:c3953fdf-9dca-4e85-b12f-10c7bc6fd32d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:28:21 GMT',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'fd9d00f05dc672919df08c923836ce2f',
  date: 'Thu, 12 Mar 2015 18:28:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceTagGrp6422?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQNjQyMi1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1178',
  'x-ms-request-id': '5040e47e-c37b-4a6f-9747-d5b5201ca6f8',
  'x-ms-correlation-request-id': '5040e47e-c37b-4a6f-9747-d5b5201ca6f8',
  'x-ms-routing-request-id': 'WESTUS:20150312T182823Z:5040e47e-c37b-4a6f-9747-d5b5201ca6f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:28:23 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '775b87e65ff7734e9b989870cb80423c',
  date: 'Thu, 12 Mar 2015 18:28:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQNjQyMi1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFVEFHR1JQNjQyMi1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '31974',
  'x-ms-request-id': '29046ba2-1405-48c2-8f7e-cc20f7044489',
  'x-ms-correlation-request-id': '29046ba2-1405-48c2-8f7e-cc20f7044489',
  'x-ms-routing-request-id': 'WESTUS:20150312T182839Z:29046ba2-1405-48c2-8f7e-cc20f7044489',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:28:38 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatResourceTagGrp6422','xplatResourceTagRes9620','xplatResourceTag7395'];};