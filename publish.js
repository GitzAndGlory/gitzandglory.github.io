import ghpages from "gh-pages"

console.log("publishing site...")
ghpages.publish('build', function(err) {});