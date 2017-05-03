#!/usr/bin/env bash

export FFMPEG_ARCHIVE="ffmpeg-git-64bit-static.tar.xz"
export FFMPEG_ARCHIVE_DIR="./bin/ffmpeg/ffmpeg-git-20170417-64bit-static"
export FFMPEG=$FFMPEG_ARCHIVE_DIR/ffmpeg
export FFPROBE=$FFMPEG_ARCHIVE_DIR/ffprobe
export FFMPEG_OUTDIR="./bin/ffmpeg"
mkdir -p $FFMPEG_OUTDIR
wget https://johnvansickle.com/ffmpeg/builds/$FFMPEG_ARCHIVE && tar -xvf $FFMPEG_ARCHIVE -C $FFMPEG_OUTDIR

mv $FFMPEG $FFMPEG_OUTDIR
mv $FFPROBE $FFMPEG_OUTDIR
rm -rf $FFMPEG_ARCHIVE_DIR