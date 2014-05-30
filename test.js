"use strict";

var proxyquire = require('proxyquire');
var should = require('should');

describe('git-name-rev', function() {
  it('should create the git command', function() {
    var path = '/home/node.git';
    var rev = '33db5f4d9027a10e477ccf054b2c1ab94f74c85a';

    var gitNameRev = proxyquire('./', {
      'git-execute': function(repoPath, args) {
        repoPath.should.eql(path);
        args.should.eql(["name-rev", "--tags", "--name-only", rev]);
      }
    });

    gitNameRev(path, rev, function() { });
  });
});
