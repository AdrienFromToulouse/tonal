# interval-density [![npm version](https://img.shields.io/npm/v/interval-density.svg)](https://www.npmjs.com/package/interval-density)

[![tonal](https://img.shields.io/badge/tonal-interval--density-yellow.svg)](https://www.npmjs.com/browse/keyword/tonal)

Returns the interval density of a collection of notes:

```js
var density = require('interval-density')
density('C3 D5 F#2 G4') // => [ 2, 1, 0, 1, 1, 1 ]
```


## API: `interval.density(notes)`

Get the intervals analysis of a collection of notes

Returns an array with the format `[p, m, n, s, d, t]` where:

- p: the number of perfect fourths or fifths
- m: the number of major thirds or minor sixths
- n: the number of major sixths or minor thirds
- s: the number of major seconds or minor sevenths
- d: the number of major sevents or minor seconds
- t: the number of tritones

This is, mostly, an academic puzzle to show the expresiveness of tonal.
Implements the ideas found in "The Analysis of Intervals" chapter from
[Harmonic Materials of Modern Music]():

> The letters _pmn_, therefore, represent intervals commonly considered
consonant, whereas the letters _sdt_ represent the intervals commonly
considered dissonant. (...) A sonority represented, for example, by the
symbol `sd^2`, indicating a triad composed of one major second and two minor
seconds, would be recognized as a highly dissonant sound, while the symbol
`pmn` would indicate a consonant sound.

### Parameters

* `notes` **`Array or String`** the notes to analyze



Returns `Array` the _pmnsdt_ array

## License

MIT License
