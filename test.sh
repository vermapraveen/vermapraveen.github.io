for i in ./*.md; 
  do 
    pandoc -f markdown -t html -s "$i" > ./dist/"${i%.*}".html; 
done;