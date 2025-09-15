# FB"k Tokens

Link a HF: <https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference>

```json
[]
```

```html
<h4>
  <span id=".24info.28name.29"></span
  ><span class="mw-headline" id="$info(name)">$info(name)</span>
</h4>
<p>Returns value of technical information field called `e`.</p>
<p>For convenience, the <b>%__name%</b> alias is also available.</p>
<p>Example: `)` → 2</p>

<h4>
  <span id=".24channels.28.29"></span
  ><span class="mw-headline" id="$channels()">$channels()</span>
</h4>
<p>The number of channels in text format.</p>
<p>Example: `)` → "stereo"</p>
<h4>
  <span id=".25replaygain_album_gain.25"></span
  ><span class="mw-headline" id="%replaygain_album_gain%"
    >%replaygain_album_gain%</span
  >
</h4>
<p>The ReplayGain album gain value.</p>
<h4>
  <span id=".25replaygain_album_peak.25"></span
  ><span class="mw-headline" id="%replaygain_album_peak%"
    >%replaygain_album_peak%</span
  >
</h4>
<p>The ReplayGain album peak value.</p>
<h4>
  <span id=".25replaygain_album_peak_db.25"></span
  ><span class="mw-headline" id="%replaygain_album_peak_db%"
    >%replaygain_album_peak_db%</span
  >
</h4>
<p>The ReplayGain album peak value in decibels.</p>
<h4>
  <span id=".25replaygain_track_gain.25"></span
  ><span class="mw-headline" id="%replaygain_track_gain%"
    >%replaygain_track_gain%</span
  >
</h4>
<p>The ReplayGain track gain value.</p>
<h4>
  <span id=".25replaygain_track_peak.25"></span
  ><span class="mw-headline" id="%replaygain_track_peak%"
    >%replaygain_track_peak%</span
  >
</h4>
<p>The ReplayGain track peak value.</p>
<h4>
  <span id=".25replaygain_track_peak_db.25"></span
  ><span class="mw-headline" id="%replaygain_track_peak_db%"
    >%replaygain_track_peak_db%</span
  >
</h4>
<p>The ReplayGain track peak value in decibels.</p>
<h4>
  <span id=".25filename.25"></span
  ><span class="mw-headline" id="%filename%">%filename%</span>
</h4>
<p>The filename without directory and extension.</p>
<h4>
  <span id=".25filename_ext.25"></span
  ><span class="mw-headline" id="%filename_ext%">%filename_ext%</span>
</h4>
<p>The filename with extension, but without the directory.</p>
<h4>
  <span id=".25directoryname.25"></span
  ><span class="mw-headline" id="%directoryname%">%directoryname%</span>
</h4>
<p>The name of the parent directory only, not the complete path.</p>
<h4>
  <span id=".25last_modified.25"></span
  ><span class="mw-headline" id="%last_modified%">%last_modified%</span>
</h4>
<p>The date and time the file was last modified. Eg: `0`</p>
<h4>
  <span id=".25path.25"></span
  ><span class="mw-headline" id="%path%">%path%</span>
</h4>
<p>The complete path, including the filename and extension.</p>
<h4>
  <span id=".25_path_raw.25"></span
  ><span class="mw-headline" id="%_path_raw%">%_path_raw%</span>
</h4>
<p>The path as URL including the protocol scheme.</p>
<h4>
  <span id=".25subsong.25"></span
  ><span class="mw-headline" id="%subsong%">%subsong%</span>
</h4>
<p>
  The subsong index. The subsong index is used to distuingish multiple tracks in
  a single file, for example for cue sheets, tracker modules and various
  container formats.
</p>
<h4>
  <span id=".25_foobar2000_version.25"></span
  ><span class="mw-headline" id="%_foobar2000_version%"
    >%_foobar2000_version%</span
  >
</h4>
<p>A string representing the version of foobar2000.</p>
<h3>
  <span id=".24year.28time.29"></span
  ><span class="mw-headline" id="$year(time)">$year(time)</span>
</h3>
<p>
  Retrieves the year part (formatted as four digits) from a time/date string.
</p>
<h3>
  <span id=".24month.28time.29"></span
  ><span class="mw-headline" id="$month(time)">$month(time)</span>
</h3>
<p>
  Retrieves the month part (formatted as two digits) from a time/date string.
</p>
<h3>
  <span id=".24day_of_month.28time.29"></span
  ><span class="mw-headline" id="$day_of_month(time)">$day_of_month(time)</span>
</h3>
<p>
  Retrieves the day of month part (formatted as two digits) from a time/date
  string.
</p>
<h3>
  <span id=".24date.28time.29"></span
  ><span class="mw-headline" id="$date(time)">$date(time)</span>
</h3>
<p>
  Retrieves the date part (formatted as YYYY-MM-DD) from a time/date string.
</p>
<h3>
  <span id=".24time.28time.29"></span
  ><span class="mw-headline" id="$time(time)">$time(time)</span>
</h3>
<p>
  Retrieves the time part (formatted as HH:MM:SS or HH:MM) from a date/time
  string.
</p>
<h3>
  <span id=".24get.28name.29"></span
  ><span class="mw-headline" id="$get(name)">$get(name)</span>
</h3>
<p>
  Returns the value that was last stored in the variable `e`, if the variable
  was not defined (yet), it returns nothing. The truth value returned by `t`
  indicates if the variable `e` was defined and is a non-empty string.
</p>
<h3>
  <span id=".24put.28name.2Cvalue.29"></span
  ><span class="mw-headline" id="$put(name,value)">$put(name,value)</span>
</h3>
<p>Stores `e` in the variable `e` and returns `e` unaltered.</p>
<h3>
  <span id=".24puts.28name.2Cvalue.29"></span
  ><span class="mw-headline" id="$puts(name,value)">$puts(name,value)</span>
</h3>
<p>Stores `e` in the variable `e` and returns nothing.</p>
<h3>
  <span class="mw-headline" id="Now_playing_info">Now playing info</span>
</h3>
<p>
  The following fields related to the currently playing item are only usable in
  certain locations outside of the playlist, e.g. in the status bar, the main
  window title and the copy command script.
</p>
<h4>
  <span id=".25playback_time.25"></span
  ><span class="mw-headline" id="%playback_time%">%playback_time%</span>
</h4>
<p>The elapsed time formatted as [HH:]MM:SS.</p>
<h4>
  <span id=".25playback_time_seconds.25"></span
  ><span class="mw-headline" id="%playback_time_seconds%"
    >%playback_time_seconds%</span
  >
</h4>
<p>
  The elapsed time in seconds. Old version:
  <code>%_time_elapsed%</code>
</p>
<h4>
  <span id=".25playback_time_remaining.25"></span
  ><span class="mw-headline" id="%playback_time_remaining%"
    >%playback_time_remaining%</span
  >
</h4>
<p>
  The time remaining until the track ends, formatted as [HH:]MM:SS. Old version:
  <code>%_time_remaining%</code>
</p>
<h4>
  <span id=".25playback_time_remaining_seconds.25"></span
  ><span class="mw-headline" id="%playback_time_remaining_seconds%"
    >%playback_time_remaining_seconds%</span
  >
</h4>
<p>
  The time remaining until the track ends, in seconds. Old version:
  <code>%_time_remaining_seconds%</code>
</p>
<h4>
  <span id=".25isplaying.25"></span
  ><span class="mw-headline" id="%isplaying%">%isplaying%</span>
</h4>
<p>"1" if file is currently playing, empty string otherwise.</p>
<h4>
  <span id=".25ispaused.25"></span
  ><span class="mw-headline" id="%ispaused%">%ispaused%</span>
</h4>
<p>"1" if playback is paused, empty string otherwise.</p>
<h4>
  <span id=".25list_index.25"></span
  ><span class="mw-headline" id="%list_index%">%list_index%</span>
</h4>
<p>
  A zero-padded playlist index of specified item. The first item is at index 1.
</p>
<h4>
  <span id=".25list_total.25"></span
  ><span class="mw-headline" id="%list_total%">%list_total%</span>
</h4>
<p>The number of items in the playlist.</p>
<h4>
  <span id=".25queue_index.25"></span
  ><span class="mw-headline" id="%queue_index%">%queue_index%</span>
</h4>
<p>
  Index of the specified item in the playback queue. If the item has been queued
  multiple times, %queue_index% evaluates to the first index.
</p>
<h4>
  <span id=".25queue_indexes.25"></span
  ><span class="mw-headline" id="%queue_indexes%">%queue_indexes%</span>
</h4>
<p>
  List of indexes of the specified item in the playback queue. Same as
  %queue_index% unless the item has been queued more than once.
</p>
<h4>
  <span id=".25queue_total.25"></span
  ><span class="mw-headline" id="%queue_total%">%queue_total%</span>
</h4>
<p>
  Total amount of tracks in playback queue. Available only for queued tracks,
  for technical reasons.
</p>
<h5>
  <span id=".24blend.28color1.2Ccolor2.2Cpart.2Ctotal.29"></span
  ><span class="mw-headline" id="$blend(color1,color2,part,total)"
    >$blend(color1,color2,part,total)</span
  >
</h5>
<p>
  Returns a color that is a blend between `1` and `2`. If `t` is smaller than or
  equal to zero, `1` is returned. If `t` is greater than or equal to `l`, `2` is
  returned. Otherwise a blended color is returned that is `t` parts `1` and
  `l`-`t` parts `2`. The blending is performed in the RGB color space.
</p>
<h5>
  <span id=".24hsl.28.29"></span
  ><span class="mw-headline" id="$hsl()">$hsl()</span>
</h5>
<p>Resets the text color to the default color.</p>
<h5>
  <span id=".24hsl.28h.2Cs.2Cl.29"></span
  ><span class="mw-headline" id="$hsl(h,s,l)">$hsl(h,s,l)</span>
</h5>
<p>
  Sets the color for text in the HSL color space. `h`, `s` and `l` are the hue,
  saturation, and lightness of the color for unselected text. The color for
  selected text is set to the inverse color. The ranges of `h`, `s`, and `l` are
  from 0 to 240; the function is designed to interpret those values in the same
  way as the standard Windows color dialog.
</p>
<h5>
  <span id=".24hsl.28h1.2Cs1.2Cl1.2Ch2.2Cs2.2Cl2.29"></span
  ><span class="mw-headline" id="$hsl(h1,s1,l1,h2,s2,l2)"
    >$hsl(h1,s1,l1,h2,s2,l2)</span
  >
</h5>
<p>
  Sets the color for text in the HSL color space. `1`, `1` and `1` are the hue,
  saturation, and lightness of the color for unselected text. `2`, `2` and `2`
  are the hue, saturation, and lightness of the color for selected text.
</p>
<h5>
  <span id=".24rgb.28.29"></span
  ><span class="mw-headline" id="$rgb()">$rgb()</span>
</h5>
<p>Resets the text color to the default color.</p>
<h5>
  <span id=".24rgb.28r.2Cg.2Cb.29"></span
  ><span class="mw-headline" id="$rgb(r,g,b)">$rgb(r,g,b)</span>
</h5>
<p>
  Sets the color for text. `r`, `g` and `b` are the red, green and blue
  component of the color for unselected text. The color for selected text is set
  to the inverse color.
</p>
<h5>
  <span id=".24rgb.28r1.2Cg1.2Cb1.2Cr2.2Cg2.2Cb2.29"></span
  ><span class="mw-headline" id="$rgb(r1,g1,b1,r2,g2,b2)"
    >$rgb(r1,g1,b1,r2,g2,b2)</span
  >
</h5>
<p>
  Sets the color for text. `1`, `1` and `1` are the red, green and blue
  component of the color for unselected text. `2`, `2` and `2` are the red,
  green and blue component of the color for selected text.
</p>
<h5>
  <span id=".24transition.28string.2Ccolor1.2Ccolor2.29"></span
  ><span class="mw-headline" id="$transition(string,color1,color2)"
    >$transition(string,color1,color2)</span
  >
</h5>
<p>
  Inserts color codes into `g`, so that the first character has `1`, the last
  character has `2`, and intermediate characters have blended colors. The
  blending is performed in the RGB color space. Note that color codes are
  additional characters that will also be counted by string manipulation
  functions. For example, if you need to truncate a string, you should do this
  before applying `n`.
</p>
```
