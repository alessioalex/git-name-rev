"use strict";

var debug = require('debug')('git-name-rev');
var gitExecute = require('git-execute');

function parseTag(data) {
  if (data) {
    data = data.trim().split('^')[0];
    return data;
  }

  return null;
}

function getTagForCommit(repoPath, rev, callback) {
  gitExecute(repoPath, ["name-rev", "--tags", "--name-only", rev || 'HEAD'], function(err, stdout, stderr) {
    if (err) { return callback(err); }

    debug('res', stdout);

    callback(null, parseTag(stdout));
  });
}

module.exports = getTagForCommit;
