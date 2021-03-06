// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5893435f-6990-4bb3-bebb-b12f3535f990',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'EduardK - IaaS Tools',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/ApplicationGateways/CliTestAppGate?api-version=2015-04-01')
  .reply(200, "<ApplicationGateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Description i:nil=\"true\"/><DnsName i:nil=\"true\"/><GatewaySize>Medium</GatewaySize><InstanceCount>3</InstanceCount><Name>CliTestAppGate</Name><State>Stopped</State><Subnets><Subnet>CliTestSubnett</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>CliTestVnett</VnetName></ApplicationGateway>", { 'cache-control': 'no-cache',
  'content-length': '416',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c04ba54633fa029792aeb8c9a8e4ab6a',
  date: 'Wed, 26 Aug 2015 10:16:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/ApplicationGateways/CliTestAppGate?api-version=2015-04-01')
  .reply(200, "<ApplicationGateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Description i:nil=\"true\"/><DnsName i:nil=\"true\"/><GatewaySize>Medium</GatewaySize><InstanceCount>3</InstanceCount><Name>CliTestAppGate</Name><State>Stopped</State><Subnets><Subnet>CliTestSubnett</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>CliTestVnett</VnetName></ApplicationGateway>", { 'cache-control': 'no-cache',
  'content-length': '416',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c04ba54633fa029792aeb8c9a8e4ab6a',
  date: 'Wed, 26 Aug 2015 10:16:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/ApplicationGateways/CliTestAppGate?api-version=2015-04-01', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>6d9085d0-d396-4166-9080-ed45e224517f</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7bc7a807d49d0371a829bb506504c25e',
  date: 'Wed, 26 Aug 2015 10:16:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/ApplicationGateways/CliTestAppGate?api-version=2015-04-01', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>6d9085d0-d396-4166-9080-ed45e224517f</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7bc7a807d49d0371a829bb506504c25e',
  date: 'Wed, 26 Aug 2015 10:16:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/operation/6d9085d0-d396-4166-9080-ed45e224517f')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HttpStatusCode>OK</HttpStatusCode><ID>6d9085d0-d396-4166-9080-ed45e224517f</ID><OperationCompletedTime>2015-08-26T10:16:44.1649042</OperationCompletedTime><OperationStartedTime>2015-08-26T10:16:41.8246787</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '401',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '35adae611f5c06f89b2a972600163277',
  date: 'Wed, 26 Aug 2015 10:17:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5893435f-6990-4bb3-bebb-b12f3535f990/services/networking/operation/6d9085d0-d396-4166-9080-ed45e224517f')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HttpStatusCode>OK</HttpStatusCode><ID>6d9085d0-d396-4166-9080-ed45e224517f</ID><OperationCompletedTime>2015-08-26T10:16:44.1649042</OperationCompletedTime><OperationStartedTime>2015-08-26T10:16:41.8246787</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '401',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.257 (rd_rdfe_stable.150819-0641) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '35adae611f5c06f89b2a972600163277',
  date: 'Wed, 26 Aug 2015 10:17:13 GMT',
  connection: 'close' });
 return result; }]];