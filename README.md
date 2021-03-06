# tonal [![npm](https://img.shields.io/npm/v/tonal.svg)](https://www.npmjs.com/package/tonal) [![Build Status](https://travis-ci.org/danigb/tonal.svg?branch=master)](https://travis-ci.org/danigb/tonal) [![Code Climate](https://codeclimate.com/github/danigb/tonal/badges/gpa.svg)](https://codeclimate.com/github/danigb/tonal) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) [![license](https://img.shields.io/npm/l/tonal.svg)](https://www.npmjs.com/package/tonal)

`tonal` is a modular, functional music theory library. Built from a collection of modules, it's able to create and manipulate tonal elements of music (pitches, chords, scales, keys). It deals with abstractions (not actual music) and while is designed for algorithmic composition and music generation, can be used to develop any kind of midi or audio software.

Although this library is under active development, the modules more than 1.0.0 are considered __more or less__ stable.

## Features

Although `tonal` is a work in progress, currently is implemented (but not all released):

- Note, intervals, transposition, distances, enharmonics
- Midi and frequency conversion
- Scales, chords, dictionaries
- Work with collection of notes: gamut, harmonizer
- Pitch sets and binary representations
- Keys, keys signatures, key scales and chords, key detection

## Philosophy

This library is evolving with this ideas in mind:

- Notes and intervals are represented with strings, instead of objects. Easy and concise code.
- Functional: no classes, no side effects, no mutations. Just functions, data-in data-out. Most of the functions has the data to operate on as last argument and lot of functions are currified.
- [Small](https://rawgit.com/danigb/tonal/master/dist/disc.html) and fast
- Modular: [lot of modules](https://www.npmjs.com/browse/keyword/tonal) (all integrated in tonal). You can require exactly the functions you need, or get the [whole thing](https://www.npmjs.com/package/tonal).
- Different notations: scientific notation by default. Helmholtz coming. Change it easily.
- Documented: all public functions are documented inside the code. Aside the generated documentation (in API.md file) a 'usage' guides are provided for each module.
- Learneable: since all the modules share the same philosophy is easy to work with them.
- Tested: carefully tested with coverage support.
- Advanced features: chord and scale detection, binary sets, chord progressions, key signatures...

## Why

First of all, because I want to learn:

> Reinventing the wheel is bad for business, but it’s great for learning
[*](http://philipwalton.com/articles/how-to-become-a-great-front-end-engineer)

Also, I want a complete library, where I can model all what I learn, with some (for me) esoteric features like interval classes, binary scales and other weird stuff.

## What

`tonal` is a collection of modules. They all live in this
multi package repository ([monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)). Take a look inside [`packages`](https://github.com/danigb/tonal/tree/master/packages):

#### Notation
- [music-notation](https://github.com/danigb/tonal/tree/master/packages/music-notation):
Parse notes, intervals, scale names, alterations...
[![npm](https://img.shields.io/npm/v/music-notation.svg)](https://www.npmjs.com/package/music-notation)

#### Notes and intervals
- [note-midi](https://github.com/danigb/tonal/tree/master/packages/note-midi):
Note name to midi
[![npm](https://img.shields.io/npm/v/note-midi.svg)](https://www.npmjs.com/package/note-midi)
- [midi-note](https://github.com/danigb/tonal/tree/master/packages/midi-note):
Midi to note name
[![npm](https://img.shields.io/npm/v/midi-note.svg)](https://www.npmjs.com/package/midi-note)
- [midi-freq](https://github.com/danigb/tonal/tree/master/packages/midi-freq):
Given a midi note, get it's frequency
[![npm](https://img.shields.io/npm/v/midi-freq.svg)](https://www.npmjs.com/package/midi-freq)
- [enharmonics](https://github.com/danigb/tonal/tree/master/packages/enharmonics):
Get note enharmonics
[![npm](https://img.shields.io/npm/v/enharmonics.svg)](https://www.npmjs.com/package/enharmonics)
- [semitones](https://github.com/danigb/tonal/tree/master/packages/semitones):
Get the size in semitones of an interval
[![npm](https://img.shields.io/npm/v/semitones.svg)](https://www.npmjs.com/package/semitones)
- [interval-class](https://github.com/danigb/tonal/tree/master/packages/interval-class):
Get the interval-class of an interval
[![npm](https://img.shields.io/npm/v/interval-class.svg)](https://www.npmjs.com/package/interval-class)


#### Transposition and distances
- [note-transposer](https://github.com/danigb/tonal/tree/master/packages/note-transposer):
Transpose notes
[![npm](https://img.shields.io/npm/v/note-transposer.svg)](https://www.npmjs.com/package/note-transposer)
- [note-harmonizer](https://github.com/danigb/tonal/tree/master/packages/note-harmonizer):
Harmonize notes or create harmonizer functions
[![npm](https://img.shields.io/npm/v/note-harmonizer.svg)](https://www.npmjs.com/package/note-harmonizer)
- [note-interval](https://github.com/danigb/tonal/tree/master/packages/note-interval):
Find the interval between two notes
[![npm](https://img.shields.io/npm/v/note-interval.svg)](https://www.npmjs.com/package/note-interval)

#### Collection of notes
- [pitch-set](https://github.com/danigb/tonal/tree/master/packages/pitch-set):
Create pitch sets
[![npm](https://img.shields.io/npm/v/pitch-set.svg)](https://www.npmjs.com/package/pitch-set)
- [music-scale](https://github.com/danigb/tonal/tree/master/packages/music-scale):
Create music scales
[![npm](https://img.shields.io/npm/v/music-scale.svg)](https://www.npmjs.com/package/music-scale)
- [music-chord](https://github.com/danigb/tonal/tree/master/packages/music-chord):
Create music chords
[![npm](https://img.shields.io/npm/v/music-chord.svg)](https://www.npmjs.com/package/music-chord)
- [scale-dictionary](https://github.com/danigb/tonal/tree/master/packages/scale-dictionary):
A music scales dictionary
[![npm](https://img.shields.io/npm/v/scale-dictionary.svg)](https://www.npmjs.com/package/scale-dictionary)
- [chord-dictionary](https://github.com/danigb/tonal/tree/master/packages/chord-dictionary):
A music chords dictionary
[![npm](https://img.shields.io/npm/v/chord-dictionary.svg)](https://www.npmjs.com/package/chord-dictionary)
- [note-range](https://github.com/danigb/tonal/tree/master/packages/note-range):
Create ranges of notes
[![npm](https://img.shields.io/npm/v/note-range.svg)](https://www.npmjs.com/package/note-range)
- [music-gamut](https://github.com/danigb/tonal/tree/master/packages/music-gamut):
Work with collection of notes
[![npm](https://img.shields.io/npm/v/music-gamut.svg)](https://www.npmjs.com/package/music-gamut)
- [music-dictionary](https://github.com/danigb/tonal/tree/master/packages/music-dictionary):
Create dictionaries of notes
[![npm](https://img.shields.io/npm/v/music-dictionary.svg)](https://www.npmjs.com/package/mmusic-dictionary)
- [interval-density](https://github.com/danigb/tonal/tree/master/packages/interval-density):
Analyze the intervals of a collection of notes
[![npm](https://img.shields.io/npm/v/interval-density.svg)](https://www.npmjs.com/package/interval-density)

#### Keys
- [music-key](https://github.com/danigb/tonal/tree/master/packages/music-key):
Get key accidentals, relative major and minor, key notes and key alterations
[![npm](https://img.shields.io/npm/v/music-key.svg)](https://www.npmjs.com/package/music-key)

#### Work in progress...

- [scale-triads](https://github.com/danigb/tonal/tree/master/packages/scale-triads):
Create triads from scales
[![npm](https://img.shields.io/npm/v/scale-triads.svg)](https://www.npmjs.com/package/scale-triads)
- [note-filter](https://github.com/danigb/tonal/tree/master/packages/note-filter):
Filter notes
[![npm](https://img.shields.io/npm/v/note-filter.svg)](https://www.npmjs.com/package/note-filter)
- [binary-set](https://github.com/danigb/tonal/tree/master/packages/binary-set):
Binary pitch set manipulation
[![npm](https://img.shields.io/npm/v/binary-set.svg)](https://www.npmjs.com/package/binary-set)
- [chord-type](https://github.com/danigb/tonal/tree/master/packages/chord-type):
Get the type of a chord
[![npm](https://img.shields.io/npm/v/chord-type.svg)](https://www.npmjs.com/package/chord-type)
- [chord-progression](https://github.com/danigb/tonal/tree/master/packages/chord-progression):
Create chord progressions
[![npm](https://img.shields.io/npm/v/chord-progression.svg)](https://www.npmjs.com/package/chord-progression)

## Examples

```js
var tonal = require('tonal')

// notes and intervals
tonal.note.fromMidi(60) // => 'C4'
tonal.note.midi('A4') // => 69
tonal.note.fromFreq(220) // => 'A3'
tonal.note.freq('C') // => ...

// transposition and distances
tonal.tranpose('D4', '2M') // => 'E#4'
tonal.distance('C', 'G') // => '5P'
['c', 'd', 'e'].map(tonal.transpose('3M')) // => ['E4', 'F#4', 'G#4']

// scales and chords
tonal.scale('A major') // => ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
tonal.chord('Cmaj7') // => ['C', 'E', 'G', 'B']

// harmonizers
var major = tonal.harmonizer('1 3 5')
major('C#') // => ['C#', 'E#', 'G#']
major('E5') /// => ['E5', 'G#5', 'B5']
var V7 = tonal.harmonizer('1 3 5 7m')
var V7ofV = function(tonic) { V7(tonal.transpose(tonic, '5P')) }
var V7ofV('D') // => ['A4', 'C#5', 'E5', 'G7']

// keys
key('###') // => 'A major'
key.signature('A major') // => '###'
key.altNotes('A major') // => ['F#', 'C#']
key.relative('minor', 'A major') // => 'F minor'
```

## Install

Install via npm: `npm i --save tonal`

Then you can load the whole library:

```js
var tonal = require('tonal')
tonal.transpose(tonal.note.fromMidi(60), '2M') // => 'D4'
```

... or install and require individual modules:

```js
var midiNote = require('midi-note')
var transpose = require('note-transposer')
transpose(midiNote(60), '2M') // => 'D4'
```

## Documentation and tests

The functions are extensively documented inside the code. The generated documentation can be read [here]()

To run the tests, clone this repository and run:

```bash
make
```

## Resources and inspiration

This library takes inspiration from lot of places:

- Teoria: https://github.com/saebekassebil/teoria
- Impro-Visor: https://www.cs.hmc.edu/~keller/jazz/improvisor/
- MusicKit: https://github.com/benzguo/MusicKit
- Music21: http://web.mit.edu/music21/doc/index.html

While developing, I read/study part of this resources:

The binary representation of the scales are based on the awesome book [Arpeggio & Scale Resources](https://archive.org/details/ScaleAndArpeggioResourcesAGuitarEncyclopedia) by [Rich Cochrane](http://cochranemusic.com/). Additional scale stuff (like scale spaces) are inspired by the works of [Walter Zettel](http://www.muzuu.org/new_life/pics/simpleblog/scales/scalesadvice.html) and [William Zeitler](http://www.allthescales.org/)

Trying to get the correct name of the things:
http://music.stackexchange.com/questions/17780/naming-pitch-and-interval-collections

Interval analysis stuff are based on the book [Harmonic Materials of Modern Music](https://archive.org/details/harmonicmaterial00hans) of Howard Hanson.

Other things this library can be related to:

- A Corpus Study of Rock Music:  http://theory.esm.rochester.edu/rock_corpus/index.html
- Musical futures: https://www.musicalfutures.org/
- Music JSON proposal: https://github.com/soundio/music-json
- Staff notation: http://opusmodus.com/omn.html

## License

MIT License
