[![Build Status](https://travis-ci.org/hammus/MKV2ATV.svg?branch=master)](https://travis-ci.org/hammus/MKV2ATV)
#### Notice (2017/4/23): MKV2ATV is new and under active development, so if you've landed on this page early, there probably won't be a tagged release for a few weeks.

# MKV to AppleTV
MKV to AppleTV (MKV2ATV) is a simple cross platform GUI application that can speed up converting video for Apple iTunes and AppleTV.

### What does MKV2ATV do?
It should really be called **MKV to MP4** as all it really does is change the container of a video file that is already encoded using the `x264` or `h264` codec from `.mkv` to `.mp4` and ensuring the audio is in an iTunes supported codec. 

### How does it work? (and why did you bother creating it?)
Well I created it for 2 primary reasons:

1. I was sick of using the command line to change the container of a video file just so iTunes would acknowledge it's existence; and
2. I wanted to tinker with [Typescript](https://typescriptlang.org) (try it! you won't regret it)


#### But a better explanation is:
Let's say you have a video file `homevideo.x264.mkv` and you want to add it to your nicely formatted iTunes video collection. Great, I'll just drag it into iTunes! But of course:

iTunes doesn't support the Matroska `.mkv` container, so you open up your trusty video converter tool like [Handbrake :pineapple: ](https://handbrake.fr)  and convert it to `MP4`.

This works great but... it takes a long time and wastes alot of CPU computation in the process because it **re-encodes** a `h264` video in `h264`.

So you look for a free alternative to [Handbrake :pineapple: ](https://handbrake.fr) and find, as I did, that the obvious solution is [FFmpeg](https://ffmpeg.org) and that means command line.

By using FFMPEG to preserve (copy) `x264` / `h264` encoded video streams stored in MKV containers and converting them to MP4 containers, we can save a heap of CPU cycles and time!


### MKV2ATV is basically just a wrapper/plugin for the following amazing open source projects
* [FFmpeg](https://ffmpeg.org) binaries for conversion and video file analysis
* [Electron](https://electron.atom.io/) for a quick and easy cross-platform GUI application
* [electron-prebuilt-compile](https://github.com/electron-userland/electron-prebuilt-compile) which allows me to use T