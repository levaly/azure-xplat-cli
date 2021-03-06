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
  .delete('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=DELETE&recursive=false&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":false}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b2849dd2-dd8e-4a0a-8224-fdfbe86ba08f',
  'set-cookie': [ 'UserPrincipalSession=182b347f-06a1-4647-bd81-4d763a7c39df; path=/; secure; HttpOnly' ],
  'server-perf': '[b2849dd2dd8e4a0a8224fdfbe86ba08f][ AuthTime::1882.31530342444::PostAuthTime::1684133.72008975 ][CleanCacheDelete :: 00:00:003 ms]%0a[Delete :: 00:00:076 ms]%0a[DELETE :: 00:00:076 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:23 GMT',
  connection: 'close',
  'content-length': '17' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=DELETE&recursive=false&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":false}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b2849dd2-dd8e-4a0a-8224-fdfbe86ba08f',
  'set-cookie': [ 'UserPrincipalSession=182b347f-06a1-4647-bd81-4d763a7c39df; path=/; secure; HttpOnly' ],
  'server-perf': '[b2849dd2dd8e4a0a8224fdfbe86ba08f][ AuthTime::1882.31530342444::PostAuthTime::1684133.72008975 ][CleanCacheDelete :: 00:00:003 ms]%0a[Delete :: 00:00:076 ms]%0a[DELETE :: 00:00:076 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:23 GMT',
  connection: 'close',
  'content-length': '17' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder01/movefile.txt [3849fa9ce2f74c429d721ad9198c5640]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3849fa9c-e2f7-4c42-9d72-1ad9198c5640',
  'set-cookie': [ 'UserPrincipalSession=dbfb178a-99f3-496e-91f4-835e8bbe84f5; path=/; secure; HttpOnly' ],
  'server-perf': '[3849fa9ce2f74c429d721ad9198c5640][ AuthTime::1854.0552700933::PostAuthTime::1672033.66126089 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:181 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:26 GMT',
  connection: 'close',
  'content-length': '210' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder01/movefile.txt [3849fa9ce2f74c429d721ad9198c5640]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3849fa9c-e2f7-4c42-9d72-1ad9198c5640',
  'set-cookie': [ 'UserPrincipalSession=dbfb178a-99f3-496e-91f4-835e8bbe84f5; path=/; secure; HttpOnly' ],
  'server-perf': '[3849fa9ce2f74c429d721ad9198c5640][ AuthTime::1854.0552700933::PostAuthTime::1672033.66126089 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:181 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:26 GMT',
  connection: 'close',
  'content-length': '210' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlsclifolder02?op=DELETE&recursive=true&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2a1b696f-5784-485a-90f5-f77705f6d5c7',
  'set-cookie': [ 'UserPrincipalSession=c390413a-2be4-4b40-81b3-3ba8b330ba30; path=/; secure; HttpOnly' ],
  'server-perf': '[2a1b696f5784485a90f5f77705f6d5c7][ AuthTime::1806.152723621::PostAuthTime::1144356.6388195 ][CleanCacheDelete :: 00:00:003 ms]%0a[Delete : Recursive :: 00:00:219 ms]%0a[DELETE :: 00:00:219 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:28 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlsclifolder02?op=DELETE&recursive=true&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2a1b696f-5784-485a-90f5-f77705f6d5c7',
  'set-cookie': [ 'UserPrincipalSession=c390413a-2be4-4b40-81b3-3ba8b330ba30; path=/; secure; HttpOnly' ],
  'server-perf': '[2a1b696f5784485a90f5f77705f6d5c7][ AuthTime::1806.152723621::PostAuthTime::1144356.6388195 ][CleanCacheDelete :: 00:00:003 ms]%0a[Delete : Recursive :: 00:00:219 ms]%0a[DELETE :: 00:00:219 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:28 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder02 [72916fef89c243469e1edcbf1a59a3fe]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '72916fef-89c2-4346-9e1e-dcbf1a59a3fe',
  'set-cookie': [ 'UserPrincipalSession=59a1f792-f9ec-4749-a543-ef3bf8ac8da7; path=/; secure; HttpOnly' ],
  'server-perf': '[72916fef89c243469e1edcbf1a59a3fe][ AuthTime::1834.38289631481::PostAuthTime::1229417.61657677 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:152 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:30 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder02 [72916fef89c243469e1edcbf1a59a3fe]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '72916fef-89c2-4346-9e1e-dcbf1a59a3fe',
  'set-cookie': [ 'UserPrincipalSession=59a1f792-f9ec-4749-a543-ef3bf8ac8da7; path=/; secure; HttpOnly' ],
  'server-perf': '[72916fef89c243469e1edcbf1a59a3fe][ AuthTime::1834.38289631481::PostAuthTime::1229417.61657677 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:152 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:30 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; }]];