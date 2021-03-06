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
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .post('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=APPEND&api-version=2015-10-01-preview')
  .reply(307, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9026.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/emptyfile.txt?op=APPEND&api-version=2015-10-01-preview&append=true',
  'x-ms-request-id': '51a4cb79-173a-47c9-9f1a-8e292d89eb60',
  contentlength: '0',
  'server-perf': '[51a4cb79173a47c99f1a8e292d89eb60][ AuthTime::845.125239776487::PostAuthTime::190.32425693347 ][APPEND :: 00:00:000 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:05 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .post('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=APPEND&api-version=2015-10-01-preview')
  .reply(307, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9026.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/emptyfile.txt?op=APPEND&api-version=2015-10-01-preview&append=true',
  'x-ms-request-id': '51a4cb79-173a-47c9-9f1a-8e292d89eb60',
  contentlength: '0',
  'server-perf': '[51a4cb79173a47c99f1a8e292d89eb60][ AuthTime::845.125239776487::PostAuthTime::190.32425693347 ][APPEND :: 00:00:000 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:05 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlsclifolder01/emptyfile.txt?op=APPEND&api-version=2015-10-01-preview&append=true', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '822276b5-ca96-43b0-a1fb-741b67c3422e',
  'set-cookie': [ 'UserPrincipalSession=342c8ad5-f72e-4e17-b32d-9b3f92795728; path=/; secure; HttpOnly' ],
  'server-perf': '[822276b5ca9643b0a1fb741b67c3422e][ AuthTime::1860.04617396757::PostAuthTime::1269943.63833414 ][GetCacheEntry :: 00:00:000 ms]%0a[OpenNewHandle :: 00:00:158 ms]%0a[CreateCacheEntry :: 00:00:000 ms]%0a[GetOrCreateHandle :: 00:00:159 ms]%0a[Open :: 00:00:159 ms]%0a[GetLength :: 00:00:014 ms]%0a[Write :: 00:00:135 ms]%0a[FlushWrite :: 00:00:078 ms]%0a[APPEND :: 00:00:389 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:06 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlsclifolder01/emptyfile.txt?op=APPEND&api-version=2015-10-01-preview&append=true', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '822276b5-ca96-43b0-a1fb-741b67c3422e',
  'set-cookie': [ 'UserPrincipalSession=342c8ad5-f72e-4e17-b32d-9b3f92795728; path=/; secure; HttpOnly' ],
  'server-perf': '[822276b5ca9643b0a1fb741b67c3422e][ AuthTime::1860.04617396757::PostAuthTime::1269943.63833414 ][GetCacheEntry :: 00:00:000 ms]%0a[OpenNewHandle :: 00:00:158 ms]%0a[CreateCacheEntry :: 00:00:000 ms]%0a[GetOrCreateHandle :: 00:00:159 ms]%0a[Open :: 00:00:159 ms]%0a[GetLength :: 00:00:014 ms]%0a[Write :: 00:00:135 ms]%0a[FlushWrite :: 00:00:078 ms]%0a[APPEND :: 00:00:389 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:06 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097440907,\"modificationTime\":1447097467497,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8823266d-735c-45bb-aa7d-e454de58fc21',
  'set-cookie': [ 'UserPrincipalSession=2a4edb8a-ce1e-46cd-baa0-897647188192; path=/; secure; HttpOnly' ],
  'server-perf': '[8823266d735c45bbaa7de454de58fc21][ AuthTime::1889.13025161744::PostAuthTime::1465394.52969125 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:078 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:08 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097440907,\"modificationTime\":1447097467497,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8823266d-735c-45bb-aa7d-e454de58fc21',
  'set-cookie': [ 'UserPrincipalSession=2a4edb8a-ce1e-46cd-baa0-897647188192; path=/; secure; HttpOnly' ],
  'server-perf': '[8823266d735c45bbaa7de454de58fc21][ AuthTime::1889.13025161744::PostAuthTime::1465394.52969125 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:078 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:08 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; }]];