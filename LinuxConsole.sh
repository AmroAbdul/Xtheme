#!/bin/sh
if [ "$TERM" = "linux" ]; then
  /bin/echo -e "
  \e]P00c0c42
  \e]P1ff0700
  \e]P200f51e
  \e]P3ffdd00
  \e]P40731f1
  \e]P5d301f0
  \e]P6f3002b
  \e]P700f0a7
  \e]P82f6663
  \e]P9ff0700
  \e]PA00f51e
  \e]PBffdd00
  \e]PC0731f1
  \e]PDd301f0
  \e]PEf3002b
  \e]PF00f0a7
  "
  # get rid of artifacts
  clear
fi
