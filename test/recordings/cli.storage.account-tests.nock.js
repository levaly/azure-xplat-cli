// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'db1ab6f0-4769-4b27-930e-01e2ef9c123c',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure SDK sandbox',
    username: 'user@domain.example',
    registeredProviders: ['website', 'sqlserver'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West Europe';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/storage/xcli1',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'e8bd97da9fba95bab13fc90d9baf4864',
  date: 'Wed, 07 May 2014 22:16:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/operations/e8bd97da9fba95bab13fc90d9baf4864')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>e8bd97da-9fba-95ba-b13f-c90d9baf4864</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '0055b6e83bf199ad9ef77742c91f9884',
  date: 'Wed, 07 May 2014 22:17:48 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroups', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroup/xcli1',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c49f474a1b0b926797d0c15d15ebd41e',
  date: 'Wed, 07 May 2014 22:17:50 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/storage/xcli2',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '659eca8f22469756aff6f55d96947062',
  date: 'Wed, 07 May 2014 22:17:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/operations/659eca8f22469756aff6f55d96947062')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>659eca8f-2246-9756-aff6-f55d96947062</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'fe9bc9f535099595be629001a7289ea3',
  date: 'Wed, 07 May 2014 22:18:27 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices')
  .reply(200, "<StorageServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/aztstluuuiwomiw</Url><ServiceName>aztstluuuiwomiw</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXp0c3RzdG9yYWdlTGFiZWwx</Label><Status>Created</Status><Endpoints><Endpoint>http://aztstluuuiwomiw.blob.core.windows.net/</Endpoint><Endpoint>http://aztstluuuiwomiw.queue.core.windows.net/</Endpoint><Endpoint>http://aztstluuuiwomiw.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion/><CreationTime>2014-04-15T21:24:44Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azurejavasdk</Url><ServiceName>azurejavasdk</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXp1cmVqYXZhc2Rr</Label><Status>Created</Status><Endpoints><Endpoint>http://azurejavasdk.blob.core.windows.net/</Endpoint><Endpoint>http://azurejavasdk.queue.core.windows.net/</Endpoint><Endpoint>http://azurejavasdk.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2012-09-10T23:35:55Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azurejavatestqudncmytwk</Url><ServiceName>azurejavatestqudncmytwk</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>R3JlYXQgU3QgYWNjb3VudA==</Label><Status>Created</Status><Endpoints><Endpoint>http://azurejavatestqudncmytwk.blob.core.windows.net/</Endpoint><Endpoint>http://azurejavatestqudncmytwk.queue.core.windows.net/</Endpoint><Endpoint>http://azurejavatestqudncmytwk.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion/><CreationTime>2014-05-06T22:30:04Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azurejavatestylzsgtfupa</Url><ServiceName>azurejavatestylzsgtfupa</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>R3JlYXQgU3QgYWNjb3VudA==</Label><Status>Created</Status><Endpoints><Endpoint>http://azurejavatestylzsgtfupa.blob.core.windows.net/</Endpoint><Endpoint>http://azurejavatestylzsgtfupa.queue.core.windows.net/</Endpoint><Endpoint>http://azurejavatestylzsgtfupa.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion/><CreationTime>2014-05-06T22:29:32Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azuresdkci</Url><ServiceName>azuresdkci</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>North Central US</Location><Label>YXp1cmVzZGtjaQ==</Label><Status>Created</Status><Endpoints><Endpoint>http://azuresdkci.blob.core.windows.net/</Endpoint><Endpoint>http://azuresdkci.queue.core.windows.net/</Endpoint><Endpoint>http://azuresdkci.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>North Central US</GeoPrimaryRegion><GeoSecondaryRegion>South Central US</GeoSecondaryRegion><CreationTime>2013-05-08T18:30:00Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azurestoragemediaservice</Url><ServiceName>azurestoragemediaservice</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXp1cmVzdG9yYWdlbWVkaWFzZXJ2aWNl</Label><Status>Created</Status><Endpoints><Endpoint>http://azurestoragemediaservice.blob.core.windows.net/</Endpoint><Endpoint>http://azurestoragemediaservice.queue.core.windows.net/</Endpoint><Endpoint>http://azurestoragemediaservice.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2013-02-27T20:18:04Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azuretestforweb</Url><ServiceName>azuretestforweb</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXp1cmV0ZXN0Zm9yd2Vi</Label><Status>Created</Status><Endpoints><Endpoint>http://azuretestforweb.blob.core.windows.net/</Endpoint><Endpoint>http://azuretestforweb.queue.core.windows.net/</Endpoint><Endpoint>http://azuretestforweb.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2014-05-05T19:01:23Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/destanko</Url><ServiceName>destanko</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>ZGVzdGFua28=</Label><Status>Created</Status><Endpoints><Endpoint>http://destanko.blob.core.windows.net/</Endpoint><Endpoint>http://destanko.queue.core.windows.net/</Endpoint><Endpoint>http://destanko.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion/><CreationTime>2014-03-05T21:19:35Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/devtestvhds0e5c3ff9f9ec</Url><ServiceName>devtestvhds0e5c3ff9f9ec</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>AF2</AffinityGroup><Label>ZGV2dGVzdHZoZHMwZTVjM2ZmOWY5ZWM=</Label><Status>Created</Status><Endpoints><Endpoint>http://devtestvhds0e5c3ff9f9ec.blob.core.windows.net/</Endpoint><Endpoint>http://devtestvhds0e5c3ff9f9ec.queue.core.windows.net/</Endpoint><Endpoint>http://devtestvhds0e5c3ff9f9ec.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2014-03-31T05:03:47Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/devtestvhdsb5a2174ca7c6</Url><ServiceName>devtestvhdsb5a2174ca7c6</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>AF3</AffinityGroup><Label>ZGV2dGVzdHZoZHNiNWEyMTc0Y2E3YzY=</Label><Status>Created</Status><Endpoints><Endpoint>http://devtestvhdsb5a2174ca7c6.blob.core.windows.net/</Endpoint><Endpoint>http://devtestvhdsb5a2174ca7c6.queue.core.windows.net/</Endpoint><Endpoint>http://devtestvhdsb5a2174ca7c6.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2014-03-25T08:31:16Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/javasdkci</Url><ServiceName>javasdkci</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>javasdkciag</AffinityGroup><Label>amF2YXNka2Np</Label><Status>Created</Status><Endpoints><Endpoint>http://javasdkci.blob.core.windows.net/</Endpoint><Endpoint>http://javasdkci.queue.core.windows.net/</Endpoint><Endpoint>http://javasdkci.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion/><CreationTime>2013-03-12T00:25:38Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/mediasvcazurejavasdkci</Url><ServiceName>mediasvcazurejavasdkci</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>bWVkaWFzdmNhenVyZWphdmFzZGtjaQ==</Label><Status>Created</Status><Endpoints><Endpoint>http://mediasvcazurejavasdkci.blob.core.windows.net/</Endpoint><Endpoint>http://mediasvcazurejavasdkci.queue.core.windows.net/</Endpoint><Endpoint>http://mediasvcazurejavasdkci.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2012-10-02T19:16:57Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/noden765</Url><ServiceName>noden765</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>East Asia</Location><Label>bm9kZW43NjU=</Label><Status>Created</Status><Endpoints><Endpoint>http://noden765.blob.core.windows.net/</Endpoint><Endpoint>http://noden765.queue.core.windows.net/</Endpoint><Endpoint>http://noden765.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>East Asia</GeoPrimaryRegion><GeoSecondaryRegion/><CreationTime>2014-04-30T20:54:54Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/portalvhds2wdcfvkv5phc9</Url><ServiceName>portalvhds2wdcfvkv5phc9</ServiceName><StorageServiceProperties><Description>Implicitly created storage service</Description><Location>West US</Location><Label>cG9ydGFsdmhkczJ3ZGNmdmt2NXBoYzk=</Label><Status>Created</Status><Endpoints><Endpoint>http://portalvhds2wdcfvkv5phc9.blob.core.windows.net/</Endpoint><Endpoint>http://portalvhds2wdcfvkv5phc9.queue.core.windows.net/</Endpoint><Endpoint>http://portalvhds2wdcfvkv5phc9.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2012-06-25T17:50:15Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/portalvhds3285b8sydlcm1</Url><ServiceName>portalvhds3285b8sydlcm1</ServiceName><StorageServiceProperties><Description>Implicitly created storage service</Description><Location>East US</Location><Label>cG9ydGFsdmhkczMyODViOHN5ZGxjbTE=</Label><Status>Created</Status><Endpoints><Endpoint>http://portalvhds3285b8sydlcm1.blob.core.windows.net/</Endpoint><Endpoint>http://portalvhds3285b8sydlcm1.queue.core.windows.net/</Endpoint><Endpoint>http://portalvhds3285b8sydlcm1.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>East US</GeoPrimaryRegion><GeoSecondaryRegion>West US</GeoSecondaryRegion><CreationTime>2012-10-15T12:23:53Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/sdkautomatione2e</Url><ServiceName>sdkautomatione2e</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>SDK-Automation</AffinityGroup><Label>c2RrYXV0b21hdGlvbmUyZQ==</Label><Status>Created</Status><Endpoints><Endpoint>http://sdkautomatione2e.blob.core.windows.net/</Endpoint><Endpoint>http://sdkautomatione2e.queue.core.windows.net/</Endpoint><Endpoint>http://sdkautomatione2e.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2013-12-05T23:52:43Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli1</Url><ServiceName>xcli1</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>eGNsaTE=</Label><Status>Created</Status><Endpoints><Endpoint>http://xcli1.blob.core.windows.net/</Endpoint><Endpoint>http://xcli1.queue.core.windows.net/</Endpoint><Endpoint>http://xcli1.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion/><CreationTime>2014-05-07T22:16:55Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2</Url><ServiceName>xcli2</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>xcli1</AffinityGroup><Label>eGNsaTI=</Label><Status>Created</Status><Endpoints><Endpoint>http://xcli2.blob.core.windows.net/</Endpoint><Endpoint>http://xcli2.queue.core.windows.net/</Endpoint><Endpoint>http://xcli2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West Europe</GeoPrimaryRegion><GeoSecondaryRegion/><CreationTime>2014-05-07T22:17:58Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService></StorageServices>", { 'cache-control': 'no-cache',
  'content-length': '14636',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'baa4984ba11e95a3a02de7c68f593818',
  date: 'Wed, 07 May 2014 22:18:30 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'febc31fe467197a4a49646c83cc3fbeb',
  date: 'Wed, 07 May 2014 22:18:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2</Url><ServiceName>xcli2</ServiceName><StorageServiceProperties><Description/><AffinityGroup>xcli1</AffinityGroup><Label>dGVzdA==</Label><Status>Created</Status><Endpoints><Endpoint>http://xcli2.blob.core.windows.net/</Endpoint><Endpoint>http://xcli2.queue.core.windows.net/</Endpoint><Endpoint>http://xcli2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West Europe</GeoPrimaryRegion><GeoSecondaryRegion/><CreationTime>2014-05-07T22:17:58Z</CreationTime></StorageServiceProperties><ExtendedProperties/><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '885',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'bacf8431220f9714bf2fe7c672e608b1',
  date: 'Wed, 07 May 2014 22:18:32 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2/keys')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2</Url><StorageServiceKeys><Primary>RYQ4XbDtZBiD4QABy/raSpKQz8tTqDFk+NclVUW6DW8QaD+oBTJ8OT1w2Xg0Vtzu3W9DT+Argl25Ay1iUkcMFQ==</Primary><Secondary>iCJ+e8XVDCdPvb9MxuqEnY7VDP8h1opRYs/aVXKnyRxVFLl3Y2kLC38ezocox5Y33T7PkG6flXOxTda4iG9CsA==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '508',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ebbb6a6dd5869384ab438f5a419f5942',
  date: 'Wed, 07 May 2014 22:18:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2/keys?action=regenerate', '*')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2</Url><StorageServiceKeys><Primary>SYGj2uZKMr5Wb1lKZH39efI1ZmoBUeOxdwsIQuFxYqxgFLuJsWQD3c0xLh93WINCBTDzer/yL9jysubwfONz3g==</Primary><Secondary>iCJ+e8XVDCdPvb9MxuqEnY7VDP8h1opRYs/aVXKnyRxVFLl3Y2kLC38ezocox5Y33T7PkG6flXOxTda4iG9CsA==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '508',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'd189ae5bce0591b58e77112d7bdeaa5a',
  date: 'Wed, 07 May 2014 22:18:35 GMT' });
 return result; }],
 [function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2/keys')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2</Url><StorageServiceKeys><Primary>RYQ4XbDtZBiD4QABy/raSpKQz8tTqDFk+NclVUW6DW8QaD+oBTJ8OT1w2Xg0Vtzu3W9DT+Argl25Ay1iUkcMFQ==</Primary><Secondary>iCJ+e8XVDCdPvb9MxuqEnY7VDP8h1opRYs/aVXKnyRxVFLl3Y2kLC38ezocox5Y33T7PkG6flXOxTda4iG9CsA==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '508',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ebbb6a6dd5869384ab438f5a419f5942',
  date: 'Wed, 07 May 2014 22:18:34 GMT' });
 return result; }],
 [function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2/keys')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2</Url><StorageServiceKeys><Primary>RYQ4XbDtZBiD4QABy/raSpKQz8tTqDFk+NclVUW6DW8QaD+oBTJ8OT1w2Xg0Vtzu3W9DT+Argl25Ay1iUkcMFQ==</Primary><Secondary>iCJ+e8XVDCdPvb9MxuqEnY7VDP8h1opRYs/aVXKnyRxVFLl3Y2kLC38ezocox5Y33T7PkG6flXOxTda4iG9CsA==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '508',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.71 (rd_rdfe_stable.140430-1456) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ebbb6a6dd5869384ab438f5a419f5942',
  date: 'Wed, 07 May 2014 22:18:34 GMT' });
 return result; }]];