#!/bin/bash 

for file in loremipsum-*.txt
do
    echo "$file tiene  $(wc -l < $file) lineas."
done

#wc cuenta lineas/palabras/bytes dependiendo flag que se le agregue,-l para contar cada 'new line',for para examinar cada archivo,wildcard * que representa los archivos que comienzan con loremipsum-,y tengan extension .txt.

#echo muestra por consola el resultado.