#!/bin/bash
set -euo pipefail
IMG="/Users/bobbyfxoter/Projects/pdscomm/public/images"
OUT="/Users/bobbyfxoter/Projects/pdscomm/public/videos"
mkdir -p "$OUT"

encode() {
  local src="$1"
  local dest="$2"
  local zp="$3"
  echo "encoding $(basename "$dest")"
  ffmpeg -y -hide_banner -loglevel error -loop 1 -i "$src" \
    -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,${zp},format=yuv420p" \
    -t 8 -r 25 -c:v libx264 -preset veryfast -crf 22 -pix_fmt yuv420p -an -movflags +faststart \
    "$dest"
}

# Unique camera path per page — never the same motion twice.
encode "$IMG/home-hero.png" "$OUT/home-hero.mp4" \
  "zoompan=z='min(zoom+0.0007,1.14)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=200:s=1920x1080:fps=25"

encode "$IMG/buyers-header.png" "$OUT/buyers-hero.mp4" \
  "zoompan=z=1.18:x='(iw-iw/zoom)*on/200':y='ih/2-(ih/zoom/2)':d=200:s=1920x1080:fps=25"

encode "$IMG/partners-header.png" "$OUT/partners-hero.mp4" \
  "zoompan=z=1.18:x='(iw-iw/zoom)*(1-on/200)':y='ih/2-(ih/zoom/2)':d=200:s=1920x1080:fps=25"

encode "$IMG/solutions-header.png" "$OUT/solutions-hero.mp4" \
  "zoompan=z=1.16:x='iw/2-(iw/zoom/2)':y='(ih-ih/zoom)*on/200':d=200:s=1920x1080:fps=25"

encode "$IMG/engagements-header.png" "$OUT/engagements-hero.mp4" \
  "zoompan=z='min(zoom+0.0009,1.2)':x='iw/2-(iw/zoom/2)':y='(ih-ih/zoom)*(1-on/200)':d=200:s=1920x1080:fps=25"

encode "$IMG/trust-header.png" "$OUT/trust-hero.mp4" \
  "zoompan=z=1.22:x='(iw-iw/zoom)*on/400':y='(ih-ih/zoom)*on/200':d=200:s=1920x1080:fps=25"

encode "$IMG/about-header.png" "$OUT/about-hero.mp4" \
  "zoompan=z='min(zoom+0.0005,1.12)':x='(iw-iw/zoom)*(1-on/200)':y='(ih-ih/zoom)*on/200':d=200:s=1920x1080:fps=25"

encode "$IMG/insights-header.png" "$OUT/insights-hero.mp4" \
  "zoompan=z=1.15:x='iw/2-(iw/zoom/2)':y='(ih-ih/zoom)*(1-on/200)':d=200:s=1920x1080:fps=25"

encode "$IMG/contact-header.png" "$OUT/contact-hero.mp4" \
  "zoompan=z='min(zoom+0.0011,1.18)':x='(iw-iw/zoom)*on/200':y='ih/2-(ih/zoom/2)':d=200:s=1920x1080:fps=25"

ls -lh "$OUT"
