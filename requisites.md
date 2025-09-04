# FB2k Plugin

## requisites

- syntax highlight
  - comments
  - simple text
  - tags
  - functions
  - constants
  - conditional blocks
- snippets
  - tags
  - functions

## track

1. Scrivi un plugin per VSCode.

2. Il plugin si chiama "Foobar2000 Title Formatting Syntax" e deve fornire l'evidenziazione della sintassi e le snippets per il "title formatting" di Foobar2000. Gestisce file con estensione '.f2k'

3. L'evidenziazione della sintassi deve distinguere tra:
   - commenti: i commenti sono formati dai carrateri '//' a inizio linea e proseguono fino alla fine della linea. Ad esempio:

   ```
   // Questa è una linea di commento
   // Questa è un'altra linea di commento
   ```

   - testo: il testo è formato da stringhe racchiuse tra apici. Per inserire un apice nel testo si usano due apici consecutivi. Ad esempio:

   ```
   'Un testo semplice'
   'Un altro testo'
   'Un testo contenente ''apici'' al suo interno'
   ```

   - tags: sono stringhe che iniziano e finiscono con il carattere '%'. Ad esempio:

   ```
   %title%
   %album artist%
   %track number%
   ```

   - funzioni: le funzioni iniziano con il carattere '$', segue il nome della funzione e infine le parentesi tonde contenenti 0 o più parametri separati da una virgola. Ad esempio:

   ```
   $crlf()
   $len(%label%)
   $if(%artist%,bislacco,boslucco)
   ```

   - costanti: le costanti sono il primo parametro delle funzioni $put, $puts, $get. Negli esempi che seguono la costante è 'constant':

   ```
   $put(constant,%title%)
   $puts(constant,$len(%album%))
   $get(constant)
   ```

   - blocchi condizionali: sono racchiusi tra parentesi quadre e contengono almeno un tag o una funzione. Ad esempio:

   ```
   [- %label%/]
   [blocco X $if(a,b,c)]
   ```

4. I tags sono i seguenti:
   - %title%
   - %artist%
   - %album artist%
   - %track artist%
   - %album%
   - %date%
   - %genre%
   - %tracknumber%
   - %totaltracks%
   - %discnumber%
   - %totaldiscs%
   - %codec%
   - %codec_profile%
   - %codec_long%
   - %filename%
   - %filename_ext%
   - %directoryname%
   - %path%
   - %subsong%
   - %path_sort%
   - %length%
   - %length_seconds%
   - %bitrate%
   - %channels%
   - %samplerate%
   - %replaygain_track_gain%
   - %replaygain_album_gain%
   - %replaygain_track_peak%
   - %replaygain_album_peak%
   - %replaygain_track_peak_db%
   - %replaygain_album_peak_db%
   - %filesize%
   - %filesize_natural%
   - %last_modified%
   - %list_index%
   - %list_total%
   - %isplaying%
   - %ispaused%
   - %playback_time%
   - %playback_time_seconds%
   - %playback_time_remaining%
   - %playback_time_remaining_seconds%
   - %queue_index%
   - %queue_indexes%
   - %queue_total%

5. Le funzioni sono le seguenti
   - $abbr(X)
   - $abbr(X,Y)
   - $ansi(X)
   - $ascii(X)
   - $lower(X)
   - $upper(X)
   - $num(X,Y)
   - $caps(X)
   - $caps2(X)
   - $if(X,Y,Z)
   - $if2(X,Y)
   - $if3(X,Y,Z,..)
   - $ifgreater(A,B,C,D)
   - $iflonger(A,B,C,D)
   - $ifequal(A,B,C,D)
   - $longest(A,B,C,….)
   - $len(X)
   - $pad(X,Y)
   - $pad_right(X,Y)
   - $pad(X,Y,Z)
   - $pad_right(X,Y,Z)
   - $cut(X,Y)
   - $padcut(X,Y)
   - $padcut_right(X,Y)
   - $insert(A,B,N)
   - $add(X,Y)
   - $sub(X,Y)
   - $mul(X,Y)
   - $div(X,Y)
   - $mod(X,Y)
   - $min(X,Y)
   - $max(X,Y)
   - $left(X,Y)
   - $right(X,Y)
   - $and(X,Y)
   - $or(X,Y)
   - $xor(X,Y)
   - $not(X)
   - $fix_eol(x)
   - $fix_eol(x,y)
   - $meta(X)
   - $meta_sep(X,Y)
   - $meta_sep(X,Y,Z)
   - $meta_num(X)
   - $info(X)
   - $char(X)
   - $strcmp(X,Y)
   - $stricmp(X,Y)
   - $directory(X)
   - $directory(X,N)
   - $directory_path(X)
   - $greater(X,Y)
   - $longer(X,Y)
   - $strchr(X,Y)
   - $strrchr(X,Y)
   - $strstr(X,Y)
   - $select(N,A,B,C,….)
   - $repeat(X,N)
   - $replace(A,B,C)
   - $ext(X)
   - $substr(A,B,C)
   - $trim(A)
   - $tab()
   - $stripprefix(X)
   - $stripprefix(X,prefix1,prefix2,…)
   - $swapprefix(X)
   - $swapprefix(X,prefix1,prefix2,…)
   - $peak_to_db(X)
   - $year(time)
   - $month(time)
   - $day_of_month(time)
   - $date(time)
   - $time(time)
   - $put(name,text)
   - $puts(name,text)
   - $get(name)

6. Scrivi le snippets per alcuni tag e per alcune funzioni.

7. Aggiungi
   - un file 'LICENSE.md' (licenza MIT)
   - un file 'README.md'
   - la configurazione per prettier
   - il file '.gitignore'
   - il file '.npmignore'
