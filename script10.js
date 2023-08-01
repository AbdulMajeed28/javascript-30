function bandNamesSort(bandNames) {
    const articlesRegex = /^(The|A|An)\s/i;
  
    function customSort(a, b) {
      const aName = a.replace(articlesRegex, '');
      const bName = b.replace(articlesRegex, '');
      return aName.localeCompare(bName);
    }
  
    bandNames.sort(customSort);
  
    return bandNames;
  }
  
  console.log(bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"]));
  console.log(bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"]));
  console.log(bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"]));
  
  
  
  
  