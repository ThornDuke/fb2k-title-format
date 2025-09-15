# FB"k Tokens

Link a HF: <https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference>

```json
[]
```

```html
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
