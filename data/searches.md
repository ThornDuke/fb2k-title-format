```json
[
  {
    "token": "add",
    "realm": "FB2K",
    "role": "function",
    "sign": "$add(a,b,_...)",
    "snippet-body": [""],
    "description": [
      "Adds `a` and `b`.",
      "Can be used with an arbitrary number of arguments. `$add(a,b,...)` is the same as `$add($add(a,b),...)`."
    ],
    "example": [""],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference#$add(a,b,_...)"
  }
]
```

```html
<h3>
  <span id=".24abbr.28str.29"></span
  ><span class="mw-headline" id="$abbr(str)">$abbr(str)</span>
</h3>
<p>
  Returns abbreviation of string `r`. Words which begin with an alphanumeric
  character are shortened to the first character. Spaces and parentheses are
  stripped. Example:
</p>
<ul>
  <li>
    $abbr('This is a Long Title (12-inch version) [needs tags]') →
    TiaLT1v[needst
  </li>
</ul>
<h3>
  <span id=".24abbr.28str.2Clen.29"></span
  ><span class="mw-headline" id="$abbr(str,len)">$abbr(str,len)</span>
</h3>
<p>
  Returns abbreviation of `r`, if `r` is longer than `n` characters, otherwise
  returns `r`.
</p>
<h3>
  <span id=".24ansi.28str.29"></span
  ><span class="mw-headline" id="$ansi(str)">$ansi(str)</span>
</h3>
<p>
  Converts string `r` to system codepage and back. Any characters that are not
  present in the system codepage will be removed / replaced. Useful for
  mass-renaming files to ensure compatibility with non-unicode-capable software.
</p>
<h3>
  <span id=".24ascii.28str.29"></span
  ><span class="mw-headline" id="$ascii(str)">$ascii(str)</span>
</h3>
<p>
  Converts string `r` to ASCII. Any characters that are not present in ASCII
  will be removed / replaced.
</p>
<h3>
  <span id=".24caps.28str.29"></span
  ><span class="mw-headline" id="$caps(str)">$caps(str)</span>
</h3>
<p>
  Converts first letter in every word of string `r` to uppercase, and all other
  letters to lowercase.
</p>
<h3>
  <span id=".24caps2.28str.29"></span
  ><span class="mw-headline" id="$caps2(str)">$caps2(str)</span>
</h3>
<p>
  Converts first letter in every word of string `r` to uppercase, and leaves all
  other letters as they are.
</p>
<h3>
  <span id=".24char.28nbr.29"></span
  ><span class="mw-headline" id="$char(nbr)">$char(nbr)</span>
</h3>
<p>
  Returns Unicode character of `r`. You can search for characters and find the
  matching decimal number on this
  <a
    rel="nofollow"
    class="external text"
    href="http://www.fileformat.info/info/unicode/char/search.htm"
    >site</a
  >.
</p>
<h3>
  <span id=".24crc32.28str.29"></span
  ><span class="mw-headline" id="$crc32(str)">$crc32(str)</span>
</h3>
<p>
  Computes the CRC32 of the string `r` as a number. Intended for use in coloring
  scripts.
</p>
<p>Example: $rgb($mod($crc32(%album%),256),128,128)</p>
<h3>
  <span id=".24crlf.28.29"></span
  ><span class="mw-headline" id="$crlf()">$crlf()</span>
</h3>
<p>
  Inserts end-of-line marker (carriage return, line feed). Can be used to
  generate multiple lines in the output, for example for the tooltip of the
  system notification area ("systray") icon.
</p>
<h3>
  <span id=".24cut.28str.2Clen.29"></span
  ><span class="mw-headline" id="$cut(str,len)">$cut(str,len)</span>
</h3>
<p>
  Returns first `n` characters from the left of the string `r`. This function is
  the same as $left(a,len). Negative numbers produce the entire string.
  Examples:
</p>
<ul>
  <li>`)` → abc</li>
  <li>`)` → (nothing)</li>
  <li>`)` → abc123</li>
</ul>
<h3>
  <span id=".24directory.28path.29"></span
  ><span class="mw-headline" id="$directory(path)">$directory(path)</span>
</h3>
<p>
  Extracts only the directory name (not full path, ie given path as
  'D:\music\jazz\filename.mp3', this will output 'jazz') from the file `h`.
</p>
<h3>
  <span id=".24directory.28path.2Cn.29"></span
  ><span class="mw-headline" id="$directory(path,n)">$directory(path,n)</span>
</h3>
<p>Extracts directory name from the file `h`; goes up by `n` levels.</p>
<h3>
  <span id=".24directory_path.28path.29"></span
  ><span class="mw-headline" id="$directory_path(path)"
    >$directory_path(path)</span
  >
</h3>
<p>
  Extracts directory path from the file `h`. ie. given path as
  'D:\music\jazz\filename.mp3', this will output 'D:\music\jazz'
</p>
<h3>
  <span id=".24ext.28path.29"></span
  ><span class="mw-headline" id="$ext(path)">$ext(path)</span>
</h3>
<p>Extracts file extension from string `h`; a file name or full path.</p>
<h3>
  <span id=".24filename.28path.29"></span
  ><span class="mw-headline" id="$filename(path)">$filename(path)</span>
</h3>
<p>Extracts file name from full `h`.</p>
<h3>
  <span id=".24fix_eol.28str.29"></span
  ><span class="mw-headline" id="$fix_eol(str)">$fix_eol(str)</span>
</h3>
<p>
  If `r` contains an end-of-line marker (CR-LF), the end-of-line marker and all
  text to the right of it is replaced by " (...)". Otherwise `r` is returned
  unaltered.
</p>
<h3>
  <span id=".24fix_eol.28str.2Cindicator.29"></span
  ><span class="mw-headline" id="$fix_eol(str,indicator)"
    >$fix_eol(str,indicator)</span
  >
</h3>
<p>
  If `r` contains an end-of-line marker (CR-LF), the end-of-line marker and all
  text to the right of it is replaced by `r`. Otherwise `r` is returned
  unaltered.
</p>
<h3>
  <span id=".24hex.28int.2Clen.29"></span
  ><span class="mw-headline" id="$hex(int,len)">$hex(int,len)</span>
</h3>
<p>
  Formats the integer number `t` in hexadecimal notation with `n` digits. Pads
  with zeros from the left if necessary.
</p>
<h3>
  <span id=".24insert.28str.2Cinsert.2Cn.29"></span
  ><span class="mw-headline" id="$insert(str,insert,n)"
    >$insert(str,insert,n)</span
  >
</h3>
<p>Inserts `t` into `r` after `n` characters.</p>
<h3>
  <span id=".24left.28str.2Clen.29"></span
  ><span class="mw-headline" id="$left(str,len)">$left(str,len)</span>
</h3>
<p>
  Returns first `n` characters from the left of the string `r`. This function is
  the same as $cut(str,len). Negative numbers produce the entire string.
  Examples:
</p>
<ul>
  <li>`)` → abc</li>
  <li>`)` → (nothing)</li>
  <li>`)` → abc123</li>
</ul>
<h3>
  <span id=".24len.28str.29"></span
  ><span class="mw-headline" id="$len(str)">$len(str)</span>
</h3>
<p>Returns length of string `r` in characters.</p>
<h3>
  <span id=".24len2.28str.29"></span
  ><span class="mw-headline" id="$len2(str)">$len2(str)</span>
</h3>
<p>
  Returns length of string `r` in characters, respecting double-width character
  rules (double-width characters will be counted as two).
</p>
<h3>
  <span id=".24longer.28str1.2Cstr2.29"></span
  ><span class="mw-headline" id="$longer(str1,str2)">$longer(str1,str2)</span>
</h3>
<p>Returns `e`, if string `1` is longer than string `2`, false otherwise.</p>
<h3>
  <span id=".24lower.28str.29"></span
  ><span class="mw-headline" id="$lower(str)">$lower(str)</span>
</h3>
<p>Converts string `r` to lowercase.</p>
<h3>
  <span id=".24longest.28arg.2C....29"></span
  ><span class="mw-headline" id="$longest(arg,...)">$longest(arg,...)</span>
</h3>
<p>
  Returns the longest of its arguments. Can be used with an arbitrary number of
  strings.
</p>
<h3>
  <span id=".24num.28nbr.2Clen.29"></span
  ><span class="mw-headline" id="$num(nbr,len)">$num(nbr,len)</span>
</h3>
<p>
  Formats the integer number `r` in decimal notation with `n` characters. Pads
  with zeros from the left if necessary. `n` includes the dash when the number
  is negative. If `r` is not numeric, it is treated as zero. Examples:
</p>
<ul>
  <li>`)` → 00123</li>
  <li>`)` → -0123</li>
  <li>`)` → 00004</li>
  <li>`)` → 00000</li>
</ul>
<h3>
  <span id=".24pad.28str.2Clen.29"></span
  ><span class="mw-headline" id="$pad(str,len)">$pad(str,len)</span>
</h3>
<p>
  Creates a left-aligned version of the string `r`. If `r` is shorter than `n`
  characters, the function adds spaces to the right of `r` to make the result
  `n` characters long. Otherwise the function returns `r` unchanged.
</p>
<h3>
  <span id=".24pad_right.28str.2Clen.29"></span
  ><span class="mw-headline" id="$pad_right(str,len)">$pad_right(str,len)</span>
</h3>
<p>
  Creates a right-aligned version of the string `r`. If `r` is shorter than `n`
  characters, the function adds spaces to the left of `r` to make the result `n`
  characters long. Otherwise the function returns `r` unchanged.
</p>
<h3>
  <span id=".24pad.28str.2Clen.2Cchar.29"></span
  ><span class="mw-headline" id="$pad(str,len,char)">$pad(str,len,char)</span>
</h3>
<p>
  Creates a left-aligned version of the string `r`. If `r` is shorter than `n`
  characters, the function adds `r` to the right of `r` to make the result `n`
  characters long. Otherwise the function returns `r` unchanged.
</p>
<h3>
  <span id=".24pad_right.28str.2Clen.2Cchar.29"></span
  ><span class="mw-headline" id="$pad_right(str,len,char)"
    >$pad_right(str,len,char)</span
  >
</h3>
<p>
  Creates a right-aligned version of the string `r`. If `r` is shorter than `n`
  characters, the function adds `r` to the left of `r` to make the result `n`
  characters long. Otherwise the function returns `r` unchanged.
</p>
<h3>
  <span id=".24padcut.28str.2Clen.29"></span
  ><span class="mw-headline" id="$padcut(str,len)">$padcut(str,len)</span>
</h3>
<p>
  Returns first `n` characters from the left of `r`, if `r` is longer than `n`
  characters. Otherwise adds spaces to the right of `r` to make the result `n`
  characters long.
</p>
<h3>
  <span id=".24padcut.28str.2Clen.2Cchar.29"></span
  ><span class="mw-headline" id="$padcut(str,len,char)"
    >$padcut(str,len,char)</span
  >
</h3>
<p>
  Returns first `n` characters from the left of `r`, if `r` is longer than `n`
  characters. Otherwise adds `r` to the right of `r` to make the result `n`
  characters long.
</p>
<h3>
  <span id=".24padcut_right.28str.2Clen.29"></span
  ><span class="mw-headline" id="$padcut_right(str,len)"
    >$padcut_right(str,len)</span
  >
</h3>
<p>
  Returns first `n` characters from the left of `r`, if `r` is longer than `n`
  characters. Otherwise adds spaces to the left of `r` to make the result `n`
  characters long.
</p>
<h3>
  <span id=".24padcut_right.28str.2Clen.2Cchar.29"></span
  ><span class="mw-headline" id="$padcut_right(str,len,char)"
    >$padcut_right(str,len,char)</span
  >
</h3>
<p>
  Returns first `n` characters from the left of `r`, if `r` is longer than `n`
  characters. Otherwise adds `r` to the left of `r` to make the result `n`
  characters long.
</p>
<h3>
  <span id=".24progress.28pos.2Crange.2Clen.2Cchar1.2Cchar2.29"></span
  ><span class="mw-headline" id="$progress(pos,range,len,char1,char2)"
    >$progress(pos,range,len,char1,char2)</span
  >
</h3>
<p>
  Creates a progress bar: `s` contains position, `e` contains range, `n`
  progress bar length in characters, `1` and `2` are characters to build
  progress bar with.
</p>
<p>
  Example:<i
    >$progress(%_time_elapsed_seconds%, %_time_total_seconds%, 20,'#','=')</i
  >
  produces "====#===============", the # character is moving with playback
  position.
</p>
<h3>
  <span id=".24progress2.28pos.2Crange.2Clen.2Cchar1.2Cchar2.29"></span
  ><span class="mw-headline" id="$progress2(pos,range,len,char1,char2)"
    >$progress2(pos,range,len,char1,char2)</span
  >
</h3>
<p>
  Creates a progress bar: `s` contains position, `e` contains range, `n`
  progress bar length in characters, `1` and `2` are characters to build
  progress bar with. Produces different appearance than `s`.
</p>
<h3>
  <span id=".24repeat.28expr.2Ccount.29"></span
  ><span class="mw-headline" id="$repeat(expr,count)">$repeat(expr,count)</span>
</h3>
<p>
  Returns `t` copies of `r`. Note that `r` is evaluated once before its value is
  used, so `t` cannot be used for loops.
</p>
<h3>
  <span id=".24replace.28str.2Csearch.2Creplace.29"></span
  ><span class="mw-headline" id="$replace(str,search,replace)"
    >$replace(str,search,replace)</span
  >
</h3>
<p>Replaces all occurrences of string `h` in string `r` with string `e`.</p>
<p>
  Can also be used with an arbitrary number of arguments. Note that `)` is
  generally not the same as `)`.
</p>
<p>Example: `)` → "bc", `)` → "cc"</p>
<h3>
  <span id=".24right.28str.2Clen.29"></span
  ><span class="mw-headline" id="$right(str,len)">$right(str,len)</span>
</h3>
<p>Returns the first `n` characters from the right of string `r`.</p>
<h3>
  <span id=".24roman.28int.29"></span
  ><span class="mw-headline" id="$roman(int)">$roman(int)</span>
</h3>
<p>Formats the integer number `t` in roman notation.</p>
<h3>
  <span id=".24rot13.28str.29"></span
  ><span class="mw-headline" id="$rot13(str)">$rot13(str)</span>
</h3>
<p>
  Performs
  <a
    rel="nofollow"
    class="external text"
    href="http://en.wikipedia.org/wiki/ROT13"
    >ROT13</a
  >
  transformation to given string.
</p>
<p>Example: `)` → "sbbone2000".</p>
<h3>
  <span id=".24shortest.28str.2C...strN.29"></span
  ><span class="mw-headline" id="$shortest(str,...strN)"
    >$shortest(str,...strN)</span
  >
</h3>
<p>
  Returns the first shortest element of its arguments. Can be used with an
  arbitrary number of strings.
</p>
<h3>
  <span id=".24strchr.28str.2Cchar.29"></span
  ><span class="mw-headline" id="$strchr(str,char)">$strchr(str,char)</span>
</h3>
<p>Returns position of first occurrence of character `r` in string `r`.</p>
<p>Example: `)` → 1</p>
<h3>
  <span id=".24strrchr.28str.2Cchar.29"></span
  ><span class="mw-headline" id="$strrchr(str,char)">$strrchr(str,char)</span>
</h3>
<p>Returns positions of last occurrence of character `r` in string `r`.</p>
<p>Example: `)` → 4</p>
<h3>
  <span id=".24strstr.28str1.2Cstr2.29"></span
  ><span class="mw-headline" id="$strstr(str1,str2)">$strstr(str1,str2)</span>
</h3>
<p>
  Returns position of first occurrence of string `2` in string `1`. Function is
  case-sensitive.
</p>
<h3>
  <span id=".24strcmp.28str1.2Cstr2.29"></span
  ><span class="mw-headline" id="$strcmp(str1,str2)">$strcmp(str1,str2)</span>
</h3>
<p>Performs a case-sensitive comparison of the strings `1` and `2`.</p>
<h3>
  <span id=".24stricmp.28str1.2Cstr2.29"></span
  ><span class="mw-headline" id="$stricmp(str1,str2)">$stricmp(str1,str2)</span>
</h3>
<p>Performs a case-insensitive comparison of the strings `1` and `2`.</p>
<h3>
  <span id=".24stripprefix.28str.29"></span
  ><span class="mw-headline" id="$stripprefix(str)">$stripprefix(str)</span>
</h3>
<p>Removes `A` and `e` prefixes from string `r`.</p>
<h3>
  <span id=".24stripprefix.28str.2Cprefix1.2Cprefix2.2C....29"></span
  ><span class="mw-headline" id="$stripprefix(str,prefix1,prefix2,...)"
    >$stripprefix(str,prefix1,prefix2,...)</span
  >
</h3>
<p>Removes the specified prefixes from string `r`.</p>
<h3>
  <span id=".24substr.28str.2Cfrom.2Cto.29"></span
  ><span class="mw-headline" id="$substr(str,from,to)"
    >$substr(str,from,to)</span
  >
</h3>
<p>
  Returns substring of string `r`, starting from `M`-th character and ending at
  `O`-th character.
</p>
<h3>
  <span id=".24swapprefix.28str.29"></span
  ><span class="mw-headline" id="$swapprefix(str)">$swapprefix(str)</span>
</h3>
<p>Moves `A` and `e` prefixes to the end of string `r`.</p>
<h3>
  <span id=".24swapprefix.28str.2Cprefix1.2Cprefix2.2C....29"></span
  ><span class="mw-headline" id="$swapprefix(str,prefix1,prefix2,...)"
    >$swapprefix(str,prefix1,prefix2,...)</span
  >
</h3>
<p>Moves the specified prefixes to the end of string `r`.</p>
<h3>
  <span id=".24trim.28str.29"></span
  ><span class="mw-headline" id="$trim(str)">$trim(str)</span>
</h3>
<p>Removes leading and trailing spaces from string `r`.</p>
<h3>
  <span id=".24tab.28.29"></span
  ><span class="mw-headline" id="$tab()">$tab()</span>
</h3>
<p>Inserts one tabulator character.</p>
<h3>
  <span id=".24tab.28count.29"></span
  ><span class="mw-headline" id="$tab(count)">$tab(count)</span>
</h3>
<p>Inserts `t` tabulator characters.</p>
<h3>
  <span id=".24upper.28str.29"></span
  ><span class="mw-headline" id="$upper(str)">$upper(str)</span>
</h3>
<p>Converts string `r` to uppercase.</p>
<h2>
  <span class="mw-headline" id="Track_info_fields_and_functions"
    >Track info fields and functions</span
  >
</h2>
<p>
  The functions and fields in this section can be used to access information
  about tracks.
</p>
<h3>
  <span class="mw-headline" id="Metadata_fields_and_functions"
    >Metadata fields and functions</span
  >
</h3>
<p>
  Generally, metadata from the files (whether in tags or a cue sheet) is mapped
  directly to a field which can be referenced case-insensitively. For example,
  the first tag named `L` can be referenced as `%`, and the first standard
  comment tag can be referenced as `%`.
</p>
<p>The following functions are also available for accessing metadata:</p>
<h4>
  <span id=".24meta.28name.29"></span
  ><span class="mw-headline" id="$meta(name)">$meta(name)</span>
</h4>
<p>
  Returns value of tag called `e`. If multiple values of that tag exist, they
  are concatenated with ", " as separator.
</p>
<p>Example: `)` → "He, She, They"</p>
<h4>
  <span id=".24meta.28name.2Cn.29"></span
  ><span class="mw-headline" id="$meta(name,n)">$meta(name,n)</span>
</h4>
<p>Returns value of `n`-th (0,1,2 and so on) tag called `e`.</p>
<p>Example: `)` → "She"</p>
<h4>
  <span id=".24meta_sep.28name.2Csep.29"></span
  ><span class="mw-headline" id="$meta_sep(name,sep)">$meta_sep(name,sep)</span>
</h4>
<p>
  Returns value of tag called `e`. If multiple values of that tag exist, they
  are concatenated with `p` as separator.
</p>
<p>Example: `)` → "He + She + They"</p>
<h4>
  <span id=".24meta_sep.28name.2Csep.2Clastsep.29"></span
  ><span class="mw-headline" id="$meta_sep(name,sep,lastsep)"
    >$meta_sep(name,sep,lastsep)</span
  >
</h4>
<p>
  Returns value of tag called `e`. If multiple values of that tag exist, they
  are concatenated with `p` as separator between all but the last two values
  which are concatenated with `p`.
</p>
<p>Example: `)` → "He, She, and They"</p>
<h4>
  <span id=".24meta_test.28....29"></span
  ><span class="mw-headline" id="$meta_test(...)">$meta_test(...)</span>
</h4>
<p>Returns `1`, if all given tags exist, `d` otherwise.</p>
<p>Example: `)` → true</p>
<h4>
  <span id=".24meta_num.28name.29"></span
  ><span class="mw-headline" id="$meta_num(name)">$meta_num(name)</span>
</h4>
<p>Returns the number of values for the tag called `e`.</p>
<p>Example: `)` → 3</p>
<h4>
  <span id=".25album_artist.25"></span
  ><span class="mw-headline" id="%album_artist%">%album artist%</span>
</h4>
<p>
  Name of the artist of the album specified track belongs to. Checks following
  metadata fields, in this order: "album artist", "artist", "composer",
  "performer". The difference between this and `%` is that `%` is intended for
  use where consistent value across entire album is needed even when per-track
  artists values vary.
</p>
<h4>
  <span id=".25album.25"></span
  ><span class="mw-headline" id="%album%">%album%</span>
</h4>
<p>
  Name of the album specified track belongs to. Checks following metadata
  fields, in this order: "album", "venue".
</p>
<h4>
  <span id=".25artist.25"></span
  ><span class="mw-headline" id="%artist%">%artist%</span>
</h4>
<p>
  Name of the artist of the track. Checks following metadata fields, in this
  order: "artist", "album artist", "composer", "performer". For a SHOUTcast
  stream which contains metadata, it is the StreamTitle up to the first "-"
  character.
</p>
<h4>
  <span id=".25discnumber.25"></span
  ><span class="mw-headline" id="%discnumber%">%discnumber%</span>
</h4>
<p>
  Index of disc specified track belongs to, within the album. Available only
  when "discnumber"/"disc" field is present in track’s metadata.
</p>
<h4>
  <span id=".25totaldiscs.25"></span
  ><span class="mw-headline" id="%totaldiscs%">%totaldiscs%</span>
</h4>
<p>
  Index of total discs specified tracks belong to, within the album. Available
  only when "discnumber"/"disc" field is present in track’s metadata.
</p>
<h4>
  <span id=".25track_artist.25"></span
  ><span class="mw-headline" id="%track_artist%">%track artist%</span>
</h4>
<p>
  Name of the artist of the track; present only if `%` is different than `%` for
  specific track. Intended for use together with `%`, to indicate track-specific
  artist info, e.g. "%album artist% - %title%[ '//' %track artist%]". In this
  case, the last part will be displayed only when track-specific artist info is
  present.
</p>
<h4>
  <span id=".25title.25"></span
  ><span class="mw-headline" id="%title%">%title%</span>
</h4>
<p>
  Title of the track. If "title" metadata field is missing, file name is used
  instead. For a SHOUTcast stream which contains metadata, it is the StreamTitle
  after the first "-" character.
</p>
<h4>
  <span id=".25tracknumber.25"></span
  ><span class="mw-headline" id="%tracknumber%">%tracknumber%</span>
</h4>
<p>
  Two-digit index of specified track within the album. Available only when
  "tracknumber" field is present in track’s metadata. An extra '0' is placed in
  front of single digit track numbers (5 becomes 05) &#8211; otherwise the
  tracknumber field is returned unchanged (e.g. the following values remain as
  they are: 006, 05, 104, A3, two, -1, -).
</p>
<h4>
  <span id=".25track_number.25"></span
  ><span class="mw-headline" id="%track_number%">%track number%</span>
</h4>
<p>
  Similar to %tracknumber%, however single digit track numbers are not
  reformatted to have an extra 0.
</p>
<h4>
  <span id=".25totaltracks.25"></span
  ><span class="mw-headline" id="%totaltracks%">%totaltracks%</span>
</h4>
<p>
  Index of total tracks specified tracks belong to, within the album. Available
  only when "totaltracks" field is present in track’s metadata.
</p>
<h4>
  <span id=".25bitrate.25"></span
  ><span class="mw-headline" id="%bitrate%">%bitrate%</span>
</h4>
<p>
  Bitrate of the track in kilobits per second. VBR files will show a dynamic
  display for currently played track (outside of the playlist).
</p>
<h4>
  <span id=".25channels.25"></span
  ><span class="mw-headline" id="%channels%">%channels%</span>
</h4>
<p>
  Number of channels in the track, as text; either "mono", "stereo" for 1 or 2
  channels, respectively, otherwise a number followed by "ch", e.g. "6ch".
</p>
<h4>
  <span id=".25channel_mask.25"></span
  ><span class="mw-headline" id="%channel_mask%">%channel_mask%</span>
</h4>
<p>
  Description of the used audio channels in the track, e.g. "FL FR FC LFE SL
  SR". Introduced in foobar2000 preview 2024-06-30.
</p>
<h4>
  <span id=".25codec.25"></span
  ><span class="mw-headline" id="%codec%">%codec%</span>
</h4>
<p>
  Name of codec used to encode the track, e.g. "PCM", "FLAC", "MP3", or "AAC".
  If exact codec name is not available, file extension is used.
</p>
<h4>
  <span id=".25codec_profile.25"></span
  ><span class="mw-headline" id="%codec_profile%">%codec_profile%</span>
</h4>
<p>
  Additional information about encoding settings used, e.g. "CBR". Not always
  available.
</p>
<h4>
  <span id=".25codec_long.25"></span
  ><span class="mw-headline" id="%codec_long%">%codec_long%</span>
</h4>
<p>
  Long name of the codec, including profile, e.g. "HE-AACv2". Some codecs, such
  as HE-AAC, supply this. If long name isn't supplied by the codec, %codec_long%
  falls back to %codec% / %codec_profile%. The Default UI's standard Codec
  column displays the same info.
</p>
<h4>
  <span id=".25filesize.25"></span
  ><span class="mw-headline" id="%filesize%">%filesize%</span>
</h4>
<p>
  The exact file size in bytes. Old version:
  <code>%_filesize%</code>
</p>
<h4>
  <span id=".25filesize_natural.25"></span
  ><span class="mw-headline" id="%filesize_natural%">%filesize_natural%</span>
</h4>
<p>
  The approximate file size, automatically formatted in appropriate units such
  as megabytes or kilobytes, e.g. "8.49 MB"
</p>
<h4>
  <span id=".25length.25"></span
  ><span class="mw-headline" id="%length%">%length%</span>
</h4>
<p>
  The length of the track formatted as hours, minutes, and seconds, rounded to
  the nearest second. Old version:
  <code>%_time_total%</code>
</p>
<h4>
  <span id=".25length_ex.25"></span
  ><span class="mw-headline" id="%length_ex%">%length_ex%</span>
</h4>
<p>
  The length of the track formatted as hours, minutes, seconds, and
  milliseconds, rounded to the nearest millisecond.
</p>
<h4>
  <span id=".25length_seconds.25"></span
  ><span class="mw-headline" id="%length_seconds%">%length_seconds%</span>
</h4>
<p>
  The length of the track in seconds, rounded to the nearest second. Old
  version: <code>%_time_total_seconds%</code>
</p>
<h4>
  <span id=".25length_seconds_fp.25"></span
  ><span class="mw-headline" id="%length_seconds_fp%">%length_seconds_fp%</span>
</h4>
<p>The length of the track in seconds as a floating point number.</p>
<h4>
  <span id=".25length_samples.25"></span
  ><span class="mw-headline" id="%length_samples%">%length_samples%</span>
</h4>
<p>The length of the track in samples.</p>
<h4>
  <span id=".25samplerate.25"></span
  ><span class="mw-headline" id="%samplerate%">%samplerate%</span>
</h4>
<p>Sample rate of the track, in Hz.</p>
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
