cd ..
node tools/build.js qlikview-script qlikview-expression sql vbscript javascript
copy build\highlight.pack.js ..\mediawiki\QlikView\resources
copy build\highlight.pack.js ..\qvhighlight\qvhighlight
copy build\highlight.pack.js ..\wordpress\qlikview-highlight\js