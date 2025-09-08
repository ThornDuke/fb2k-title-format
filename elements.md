```json
{
  "Function: $add(a,b,...)": {
    "prefix": "$add",
    "body": ["\\$add(${1:num a},${2:num b}${3:[,...]})"],
    "description": "FB2K: adds a and b"
  },
  "Function: $div(a,b,...)": {
    "prefix": "$div",
    "body": ["\\$div(${1:num a},${2:num b}${3:[,...]})"],
    "description": "FB2K: Divides a by b and rounds down to an integer. If b evaluates to zero, it returns a. Can be used with an arbitrary number of arguments."
  },
  "Function: $sub(a,b,..)": {
    "prefix": "$sub",
    "body": ["\\$sub(${1:num a},${2:num b}${3:[,...]})"],
    "description": "FB2K: Subtracts b from a. Can be used with an arbitrary number of arguments."
  },
  "Function: $mul(a,b,..)": {
    "prefix": "$mul",
    "body": ["\\$mul(${1:num a},${2:num b}${3:[,...]})"],
    "description": "FB2K: Multiplies a and b. Can be used with an arbitrary number of arguments."
  },
  "Function: $muldiv(a,b,c)": {
    "prefix": "$muldiv",
    "body": ["\\$muldiv(${1:num a},${2:num b},${3:num c})"],
    "description": "FB2K: Multiplies a and b, then divides by c. The result is rounded to the nearest integer."
  },
  "Function: $greater(a,b)": {
    "prefix": "$greater",
    "body": ["\\$greater(${1:num a},${2:num b}"],
    "description": "FB2K: Returns true, if a is greater than b, otherwise false."
  },
  "Function: $max(a,b,...)": {
    "prefix": "$max",
    "body": ["\\$max(${1:num a},${2:num b}${3:[,...]})"],
    "description": "FB2K: Returns the maximum of a and b. Can be used with an arbitrary number of arguments."
  },
  "Function: $min(a,b,...)": {
    "prefix": "$min",
    "body": ["\\$min(${1:num a},${2:num b}${3:[,...]})"],
    "description": "FB2K: Returns the minimum of a and b. Can be used with an arbitrary number of arguments."
  },
  "Function: $mod(a,b,...)": {
    "prefix": "$mod",
    "body": ["\\$mod(${1:num a},${2:num b}${3:[,...]})"],
    "description": "FB2K: Computes the remainder of dividing a through b. The result has the same sign as a. If b evaluates to zero, the result is a. Can be used with an arbitrary number of arguments."
  },
  "Function: $rand()": {
    "prefix": "$rand",
    "body": ["\\$rand()"],
    "description": "FB2K: Generates a random number in the range from 0 to 2^32-1."
  },
  "Function: $and(expr,...)": {
    "prefix": "$and",
    "body": ["\\$and(${1:expr}${2:[,...]})"],
    "description": "FB2K: Logical And of an arbitrary number of arguments. Returns true, if and only if all expr arguments evaluate to true."
  },
  "Function: $or(expr,...)": {
    "prefix": "$or",
    "body": ["\\$or(${1:expr}${2:[,...]})"],
    "description": "FB2K: Logical Or of an arbitrary number of arguments. Returns true, if at least one expression evaluates to true."
  },
  "Function: $not(expr)": {
    "prefix": "$not",
    "body": ["\\$not(${1:expr})"],
    "description": "FB2K: Logical Not. Returns the logical opposite of EXPR: false, if expr is true and true if expr is false."
  },
  "Function: $xor(expr,...)": {
    "prefix": "$xor",
    "body": ["\\$xor(${1:expr}${2:[,...]})"],
    "description": "FB2K: Logical Exclusive-or of an arbitrary number of arguments. Returns true, if an odd number of arguments evaluate to true."
  },
  "Function: $if(X,Y)": {
    "prefix": "$if",
    "body": ["\\$if(${1:X},${2:Y})"],
    "description": "FB2K: If cond contains at least one present field, executes/displays Y."
  },
  "Function: $if(X,Y,Z)": {
    "prefix": "$if",
    "body": ["\\$if(${1:X},${2:Y},${3:Z})"],
    "description": "FB2K: If X contains at least one present field, executes/displays Y, otherwise executes/displays Z."
  },
  "Function: $if2(X,Y)": {
    "prefix": "$if2",
    "body": ["\\$if2(${1:X},${2:Y})"],
    "description": "FB2K: If X contains at least one present field, executes/displays X, otherwise executes/displays Y. Same as $if(X,X,Y)."
  },
  "Function: $if3(X,Y,Z,..)": {
    "prefix": "$if3",
    "body": ["\\$if3(${1:X},${2:Y},${3:Z}${4:[,...]})"],
    "description": "FB2K: Returns the first of parameters that contains at least one present field."
  },
  "Function: $ifgreater(A,B,C,D)": {
    "prefix": "$ifgreater",
    "body": ["\\$ifgreater(${1:num A},${2:num B},${3:C},${4:D})"],
    "description": "FB2K: If the number A is greater than the number B, executes/returns C, otherwise executes/returns D."
  },
  "Function: $iflonger(A,B,C,D)": {
    "prefix": "$iflonger",
    "body": ["\\$iflonger(${1:string A},${2:num B},${3:C},${4:D})"],
    "description": "FB2K: If the string A is longer than B characters, executes/returns C, otherwise executes/returns D."
  },
  "Function: $ifequal(A,B,C,D)": {
    "prefix": "$ifequal",
    "body": ["\\$ifequal(${1:num A},${2:num B},${3:C},${4:D})"],
    "description": "FB2K: If the number A is equal to the number B, executes/returns C, otherwise executes/returns D."
  },
  "Function: $longest(A,B,C,….)": {
    "prefix": "$longest",
    "body": ["\\$longest(${1:string A},${2:string B}${3:[,...]})"],
    "description": "FB2K: Compares lengths of of A,B,C… and returns the longest one."
  },
  "Function: $select(N,A,B,C,….)": {
    "prefix": "$select",
    "body": ["\\$select(${1:num N},${2:A},${3:B}${4:[,...]})"],
    "description": "FB2K: Returns N-th of A,B,C… parameters."
  },
  "Function: $abbr(str)": {
    "prefix": "$abbr",
    "body": ["\\$abbr(${1:str})"],
    "description": "FB2K: Returns abbreviation of string str. Words which begin with an alphanumeric character are shortened to the first character. Spaces and parentheses are stripped."
  },
  "Function: $ansi(str)": {
    "prefix": "$ansi",
    "body": ["\\$ansi(${1:str})"],
    "description": "FB2K: Converts string str to system codepage and back. Any characters that are not present in the system codepage will be removed / replaced."
  },
  "Function: $ascii(str)": {
    "prefix": "$ascii",
    "body": ["\\$ascii(${1:str})"],
    "description": "FB2K: Converts string str to ASCII. Any characters that are not present in ASCII will be removed / replaced."
  },
  "Function: $caps(str)": {
    "prefix": "$caps",
    "body": ["\\$caps(${1:str})"],
    "description": "FB2K: Converts first letter in every word of string str to uppercase, and all other letters to lowercase."
  },
  "Function: $caps2(str)": {
    "prefix": "$caps2",
    "body": ["\\$caps2(${1:str})"],
    "description": "FB2K: Converts first letter in every word of string str to uppercase, and leaves all other letters as they are."
  }
}
```

$char(nbr)
Returns Unicode character of nbr. You can search for characters and find the matching decimal number on this site.

$crc32(str)
Computes the CRC32 of the string str as a number. Intended for use in coloring scripts.

Example: $rgb($mod($crc32(%album%),256),128,128)

$crlf()
Inserts end-of-line marker (carriage return, line feed). Can be used to generate multiple lines in the output, for example for the tooltip of the system notification area ("systray") icon.

$cut(str,len)
Returns first len characters from the left of the string str. This function is the same as $left(a,len). Negative numbers produce the entire string. Examples:

$cut('abc123',3) → abc
$cut('abc123',0) → (nothing)
$cut('abc123',-1) → abc123
$directory(path)
Extracts only the directory name (not full path, ie given path as 'D:\music\jazz\filename.mp3', this will output 'jazz') from the file path.

$directory(path,n)
Extracts directory name from the file path; goes up by n levels.

$directory_path(path)
Extracts directory path from the file path. ie. given path as 'D:\music\jazz\filename.mp3', this will output 'D:\music\jazz'

$ext(path)
Extracts file extension from string path; a file name or full path.

$filename(path)
Extracts file name from full path.

$fix_eol(str)
If str contains an end-of-line marker (CR-LF), the end-of-line marker and all text to the right of it is replaced by " (...)". Otherwise str is returned unaltered.

$fix_eol(str,indicator)
If str contains an end-of-line marker (CR-LF), the end-of-line marker and all text to the right of it is replaced by indicator. Otherwise str is returned unaltered.

$hex(int,len)
Formats the integer number int in hexadecimal notation with len digits. Pads with zeros from the left if necessary.

$insert(str,insert,n)
Inserts insert into str after n characters.

$left(str,len)
Returns first len characters from the left of the string str. This function is the same as $cut(str,len). Negative numbers produce the entire string. Examples:

$left('abc123',3) → abc
$left('abc123',0) → (nothing)
$left('abc123',-1) → abc123
$len(str)
Returns length of string str in characters.

$len2(str)
Returns length of string str in characters, respecting double-width character rules (double-width characters will be counted as two).

$longer(str1,str2)
Returns true, if string str1 is longer than string str2, false otherwise.

$lower(str)
Converts string str to lowercase.

$longest(arg,...)
Returns the longest of its arguments. Can be used with an arbitrary number of strings.

$num(nbr,len)
Formats the integer number nbr in decimal notation with len characters. Pads with zeros from the left if necessary. len includes the dash when the number is negative. If nbr is not numeric, it is treated as zero. Examples:

$num(123,5) → 00123
$num(-123,5) → -0123
$num(4.8,5) → 00004
$num(A1,5) → 00000
$pad(str,len)
Creates a left-aligned version of the string str. If str is shorter than len characters, the function adds spaces to the right of str to make the result len characters long. Otherwise the function returns str unchanged.

$pad_right(str,len)
Creates a right-aligned version of the string str. If str is shorter than len characters, the function adds spaces to the left of str to make the result len characters long. Otherwise the function returns str unchanged.

$pad(str,len,char)
Creates a left-aligned version of the string str. If str is shorter than len characters, the function adds char to the right of str to make the result len characters long. Otherwise the function returns str unchanged.

$pad_right(str,len,char)
Creates a right-aligned version of the string str. If str is shorter than len characters, the function adds char to the left of str to make the result len characters long. Otherwise the function returns str unchanged.

$padcut(str,len)
Returns first len characters from the left of str, if str is longer than len characters. Otherwise adds spaces to the right of str to make the result len characters long.

$padcut(str,len,char)
Returns first len characters from the left of str, if str is longer than len characters. Otherwise adds char to the right of str to make the result len characters long.

$padcut_right(str,len)
Returns first len characters from the left of str, if str is longer than len characters. Otherwise adds spaces to the left of str to make the result len characters long.

$padcut_right(str,len,char)
Returns first len characters from the left of str, if str is longer than len characters. Otherwise adds char to the left of str to make the result len characters long.

$progress(pos,range,len,char1,char2)
Creates a progress bar: pos contains position, range contains range, len progress bar length in characters, char1 and char2 are characters to build progress bar with.

Example:$progress(%\_time_elapsed_seconds%, %\_time_total_seconds%, 20,'#','=') produces "====#===============", the # character is moving with playback position.

$progress2(pos,range,len,char1,char2)
Creates a progress bar: pos contains position, range contains range, len progress bar length in characters, char1 and char2 are characters to build progress bar with. Produces different appearance than $progress.

$repeat(expr,count)
Returns count copies of expr. Note that expr is evaluated once before its value is used, so $repeat cannot be used for loops.

$replace(str,search,replace)
Replaces all occurrences of string search in string str with string replace.

Can also be used with an arbitrary number of arguments. Note that $replace(str,search1,replace1,search2,replace2) is generally not the same as $replace($replace(str,search1,replace1),search2,replace2).

Example: $replace(ab,a,b,b,c) → "bc", $replace($replace(ab,a,b),b,c) → "cc"

$right(str,len)
Returns the first len characters from the right of string str.

$roman(int)
Formats the integer number int in roman notation.

$rot13(str)
Performs ROT13 transformation to given string.

Example: $rot13('foobar2000') → "sbbone2000".

$shortest(str,...strN)
Returns the first shortest element of its arguments. Can be used with an arbitrary number of strings.

$strchr(str,char)
Returns position of first occurrence of character char in string str.

Example: $strchr(abca,a) → 1

$strrchr(str,char)
Returns positions of last occurrence of character char in string str.

Example: $strrchr(abca,a) → 4

$strstr(str1,str2)
Returns position of first occurrence of string str2 in string str1. Function is case-sensitive.

$strcmp(str1,str2)
Performs a case-sensitive comparison of the strings str1 and str2.

$stricmp(str1,str2)
Performs a case-insensitive comparison of the strings str1 and str2.

$stripprefix(str)
Removes A and The prefixes from string str.

$stripprefix(str,prefix1,prefix2,...)
Removes the specified prefixes from string str.

$substr(str,from,to)
Returns substring of string str, starting from FROM-th character and ending at TO-th character.

$swapprefix(str)
Moves A and The prefixes to the end of string str.

$swapprefix(str,prefix1,prefix2,...)
Moves the specified prefixes to the end of string str.

$trim(str)
Removes leading and trailing spaces from string str.

$tab()
Inserts one tabulator character.

$tab(count)
Inserts count tabulator characters.

$upper(str)
Converts string str to uppercase.

Track info fields and functions
The functions and fields in this section can be used to access information about tracks.

Metadata fields and functions
Generally, metadata from the files (whether in tags or a cue sheet) is mapped directly to a field which can be referenced case-insensitively. For example, the first tag named URL can be referenced as %url%, and the first standard comment tag can be referenced as %comment%.

The following functions are also available for accessing metadata:

$meta(name)
Returns value of tag called name. If multiple values of that tag exist, they are concatenated with ", " as separator.

Example: $meta(artist) → "He, She, They"

$meta(name,n)
Returns value of n-th (0,1,2 and so on) tag called name.

Example: $meta(artist,1) → "She"

$meta_sep(name,sep)
Returns value of tag called name. If multiple values of that tag exist, they are concatenated with sep as separator.

Example: $meta_sep(artist,' + ') → "He + She + They"

$meta_sep(name,sep,lastsep)
Returns value of tag called name. If multiple values of that tag exist, they are concatenated with sep as separator between all but the last two values which are concatenated with lastsep.

Example: $meta_sep(artist,', ',', and ') → "He, She, and They"

$meta_test(...)
Returns 1, if all given tags exist, undefined otherwise.

Example: $meta_test(artist,title) → true

$meta_num(name)
Returns the number of values for the tag called name.

Example: $meta_num(artist) → 3

Remapped metadata fields
The following fields have special remapped values to make writing title format scripts more convenient:

%album artist%
Name of the artist of the album specified track belongs to. Checks following metadata fields, in this order: "album artist", "artist", "composer", "performer". The difference between this and %artist% is that %album artist% is intended for use where consistent value across entire album is needed even when per-track artists values vary.

%album%
Name of the album specified track belongs to. Checks following metadata fields, in this order: "album", "venue".

%artist%
Name of the artist of the track. Checks following metadata fields, in this order: "artist", "album artist", "composer", "performer". For a SHOUTcast stream which contains metadata, it is the StreamTitle up to the first "-" character.

%discnumber%
Index of disc specified track belongs to, within the album. Available only when "discnumber"/"disc" field is present in track’s metadata.

%totaldiscs%
Index of total discs specified tracks belong to, within the album. Available only when "discnumber"/"disc" field is present in track’s metadata.

%track artist%
Name of the artist of the track; present only if %album artist% is different than %artist% for specific track. Intended for use together with %album artist%, to indicate track-specific artist info, e.g. "%album artist% - %title%[ '//' %track artist%]". In this case, the last part will be displayed only when track-specific artist info is present.

%title%
Title of the track. If "title" metadata field is missing, file name is used instead. For a SHOUTcast stream which contains metadata, it is the StreamTitle after the first "-" character.

%tracknumber%
Two-digit index of specified track within the album. Available only when "tracknumber" field is present in track’s metadata. An extra '0' is placed in front of single digit track numbers (5 becomes 05) – otherwise the tracknumber field is returned unchanged (e.g. the following values remain as they are: 006, 05, 104, A3, two, -1, -).

%track number%
Similar to %tracknumber%, however single digit track numbers are not reformatted to have an extra 0.

%totaltracks%
Index of total tracks specified tracks belong to, within the album. Available only when "totaltracks" field is present in track’s metadata.

Technical information fields
%bitrate%
Bitrate of the track in kilobits per second. VBR files will show a dynamic display for currently played track (outside of the playlist).

%channels%
Number of channels in the track, as text; either "mono", "stereo" for 1 or 2 channels, respectively, otherwise a number followed by "ch", e.g. "6ch".

%channel_mask%
Description of the used audio channels in the track, e.g. "FL FR FC LFE SL SR". Introduced in foobar2000 preview 2024-06-30.

%codec%
Name of codec used to encode the track, e.g. "PCM", "FLAC", "MP3", or "AAC". If exact codec name is not available, file extension is used.

%codec_profile%
Additional information about encoding settings used, e.g. "CBR". Not always available.

%codec_long%
Long name of the codec, including profile, e.g. "HE-AACv2". Some codecs, such as HE-AAC, supply this. If long name isn't supplied by the codec, %codec_long% falls back to %codec% / %codec_profile%. The Default UI's standard Codec column displays the same info.

%filesize%
The exact file size in bytes. Old version: %\_filesize%

%filesize_natural%
The approximate file size, automatically formatted in appropriate units such as megabytes or kilobytes, e.g. "8.49 MB"

%length%
The length of the track formatted as hours, minutes, and seconds, rounded to the nearest second. Old version: %\_time_total%

%length_ex%
The length of the track formatted as hours, minutes, seconds, and milliseconds, rounded to the nearest millisecond.

%length_seconds%
The length of the track in seconds, rounded to the nearest second. Old version: %\_time_total_seconds%

%length_seconds_fp%
The length of the track in seconds as a floating point number.

%length_samples%
The length of the track in samples.

%samplerate%
Sample rate of the track, in Hz.

Technical information functions
$info(name)
Returns value of technical information field called name.

For convenience, the %\_\_name% alias is also available.

Example: $info(channels) → 2

Here is an informative list of recognized fields. Some of these depend on the media file type being queried.

field name Description
General
codec Codec (e.g. MP3)
codec_profile Codec Profile (e.g. CBR)
samplerate Sample Rate, in hertz (e.g. 44100)
bitrate Bitrate, in kilobits per second (e.g. 320)
tool Tool used to produce the file, possibly guessed (e.g. LAME3.97)
encoding Encoding lossiness (e.g. lossy)
channels Channels count (e.g. 2 [for stereo])
bitspersample Bits Per Sample (e.g. 16)
decoded_bitspersample Bits Per Sample after decoding (e.g. 24)
bitspersample_extra Format of 32-bit audio data (floating-point or fixed-point)
tagtype Tag Type, comma-separated list of tag formats (e.g. id3v2|apev2)
cue_embedded Embedded Cuesheet presence (e.g. no [may be empty!])
md5 Audio MD5 hash, if container defines it (e.g. 1E24A910D91EF09A8CF403C9B6963961)
WAVEFORMATEXTENSIBLE_CHANNEL_MASK Channel mask, channel layout of the track coded as hex (e.g. 0x0003 for regular stereo)
Other
ENC_DELAY LAME proprietary MP3 enc_delay value for gapless playback (e.g. 576)
ENC_PADDING LAME proprietary MP3 enc_padding value for gapless playback (e.g. 1536)
MP3_ACCURATE_LENGTH MP3 duration (%length% etc.) takes into account LAME or iTunes gapless playback info (e.g. yes)\*
MP3_STEREO_MODE Stereo mode used in MP3 file (e.g. mono, stereo, joint stereo, etc.)
VERSION Version of tool (e.g. 3.99)
FLAGS Flags of tool (e.g. 22)
channel_mode Channel Mode, description of channels (note: this field was only used by obsolete foo_ac3. e.g. 3 front, 2 rear surround channels + LFE)

- MP3_ACCURATE_LENGTH won't exist if gapless playback info isn't present or the file is not an MP3. The info can be in a LAME tag in the VBR header, or in an iTunSMPB ID3v2 comment tag. Gapless playback info is taken into account in .m4a files, but there's no special field to say so.
  $channels()
  The number of channels in text format.

Example: $channels() → "stereo"

%replaygain_album_gain%
The ReplayGain album gain value.

%replaygain_album_peak%
The ReplayGain album peak value.

%replaygain_album_peak_db%
The ReplayGain album peak value in decibels.

%replaygain_track_gain%
The ReplayGain track gain value.

%replaygain_track_peak%
The ReplayGain track peak value.

%replaygain_track_peak_db%
The ReplayGain track peak value in decibels.

Special fields
%filename%
The filename without directory and extension.

%filename_ext%
The filename with extension, but without the directory.

%directoryname%
The name of the parent directory only, not the complete path.

%last_modified%
The date and time the file was last modified. Eg: 2005-12-22 00:04:10

%path%
The complete path, including the filename and extension.

%\_path_raw%
The path as URL including the protocol scheme.

%subsong%
The subsong index. The subsong index is used to distuingish multiple tracks in a single file, for example for cue sheets, tracker modules and various container formats.

%\_foobar2000_version%
A string representing the version of foobar2000.

Time and date functions
These functions are used to manipulate time/date strings, notably (but not limited to), those gathered by the Playback Statistics component.

$year(time)
Retrieves the year part (formatted as four digits) from a time/date string.

$month(time)
Retrieves the month part (formatted as two digits) from a time/date string.

$day_of_month(time)
Retrieves the day of month part (formatted as two digits) from a time/date string.

$date(time)
Retrieves the date part (formatted as YYYY-MM-DD) from a time/date string.

$time(time)
Retrieves the time part (formatted as HH:MM:SS or HH:MM) from a date/time string.

Variable operations
Variables can be used to store strings and numbers. They cannot store truth values. They are best used to store intermediate results that you need multiple times. Variable names are not case-sensitive.

For example:

code output
$put(foo,bar)$char(10)
$get(foo)$char(10)
$get(Foo)$char(10)
$puts(foo,2000)$char(10)
$get(foo)$char(10)
bar
bar
bar

2000
$get(name)
Returns the value that was last stored in the variable name, if the variable was not defined (yet), it returns nothing. The truth value returned by $get indicates if the variable name was defined and is a non-empty string.

$put(name,value)
Stores value in the variable name and returns value unaltered.

$puts(name,value)
Stores value in the variable name and returns nothing.

Component-specific fields and functions
This section lists fields and functions which are specific to certain components. Unless otherwise stated, the fields and functions are only usable in the context of those components.

Now playing info
The following fields related to the currently playing item are only usable in certain locations outside of the playlist, e.g. in the status bar, the main window title and the copy command script.

%playback_time%
The elapsed time formatted as [HH:]MM:SS.

%playback_time_seconds%
The elapsed time in seconds. Old version: %\_time_elapsed%

%playback_time_remaining%
The time remaining until the track ends, formatted as [HH:]MM:SS. Old version: %\_time_remaining%

%playback_time_remaining_seconds%
The time remaining until the track ends, in seconds. Old version: %\_time_remaining_seconds%

Playlist-only fields
The following fields are only usable in playlist display formatting (i.e., the column title formatting patterns).

%isplaying%
"1" if file is currently playing, empty string otherwise.

%ispaused%
"1" if playback is paused, empty string otherwise.

%list_index%
A zero-padded playlist index of specified item. The first item is at index 1.

%list_total%
The number of items in the playlist.

%queue_index%
Index of the specified item in the playback queue. If the item has been queued multiple times, %queue_index% evaluates to the first index.

%queue_indexes%
List of indexes of the specified item in the playback queue. Same as %queue_index% unless the item has been queued more than once.

%queue_total%
Total amount of tracks in playback queue. Available only for queued tracks, for technical reasons.

Playlist text color
Dimmed and highlighted text
In the Default UI playlist, text color can be adjusted by enclosing it in angle-brackets. The only options are to make the text dimmer (mixing the default color with the background color) or brighter (mixing the default color with the highlight color):

<text> – dim text
<<text>> – dimmer text
<<<text>>> – dimmest text

> text< – bright text
>
> > text<< – brighter text
> >
> > > text<<< – brightest text
> > > Historical and Columns UI color functions
> > > Prior to version 1.0, the default UI playlist supported the following color functions, which are still available in the Columns UI playlist:

$blend(color1,color2,part,total)
Returns a color that is a blend between color1 and color2. If part is smaller than or equal to zero, color1 is returned. If part is greater than or equal to total, color2 is returned. Otherwise a blended color is returned that is part parts color1 and total-part parts color2. The blending is performed in the RGB color space.

$hsl()
Resets the text color to the default color.

$hsl(h,s,l)
Sets the color for text in the HSL color space. h, s and l are the hue, saturation, and lightness of the color for unselected text. The color for selected text is set to the inverse color. The ranges of h, s, and l are from 0 to 240; the function is designed to interpret those values in the same way as the standard Windows color dialog.

$hsl(h1,s1,l1,h2,s2,l2)
Sets the color for text in the HSL color space. h1, s1 and l1 are the hue, saturation, and lightness of the color for unselected text. h2, s2 and l2 are the hue, saturation, and lightness of the color for selected text.

$rgb()
Resets the text color to the default color.

$rgb(r,g,b)
Sets the color for text. r, g and b are the red, green and blue component of the color for unselected text. The color for selected text is set to the inverse color.

$rgb(r1,g1,b1,r2,g2,b2)
Sets the color for text. r1, g1 and b1 are the red, green and blue component of the color for unselected text. r2, g2 and b2 are the red, green and blue component of the color for selected text.

$transition(string,color1,color2)
Inserts color codes into string, so that the first character has color1, the last character has color2, and intermediate characters have blended colors. The blending is performed in the RGB color space. Note that color codes are additional characters that will also be counted by string manipulation functions. For example, if you need to truncate a string, you should do this before applying $transition.

Album List
