## `chord.type`

Get the type of the chord (can be 'M', 'm', '7' or 'o' to represent major,
minot, dominant and dimished respectively)

It assumes that the chord is not inversed (first note is always the tonic)

It detects major, minor, augmented, diminished and dominant chords. All
chord notes beyond the 5th (except 7th for dominant chords) are ignored

### Parameters

* `chord` **`Array`** the chord notes


### Examples

```js
var chord = require('music.chord')
chord.type('C E G') // => 'M'
chord.type('C Eb G') // => 'm'
chord.type('C Eb Gb') // => 'dim'
chord.type('C E G#') // => 'aug'
chord.type('C E G B') // => 'M'
chord.type('C E G B7') // => '7'
```

Returns `String` the chord type ('M', 'm', '7', 'dim', 'aug' or null)


