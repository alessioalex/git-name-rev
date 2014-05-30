"use strict";

var gitNameRev = require('./');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var rev = process.env.REV;

if (!rev) { throw new Error('rev missing'); }

// rev = '7e234d64993f5029dfa707be84b2a4e52ae4e331';

gitNameRev(repoPath, rev, function(err, name) {
  if (err) { throw err; }

  console.log('name is %s.', name);
});
