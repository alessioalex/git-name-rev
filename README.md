# git-name-rev

Find symbolic names for given revs by shelling out to Git (namely [git-name-rev(1)](https://www.kernel.org/pub/software/scm/git/docs/git-name-rev.html)).

## Usage

```js
var gitNameRev = require('git-name-rev');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var rev = process.env.REV;

if (!rev) { throw new Error('rev missing'); }

gitNameRev(repoPath, rev, function(err, name) {
  if (err) { throw err; }

  console.log('name is %s.', name);
});
```

## Tests

```
npm test
```

## License

MIT
