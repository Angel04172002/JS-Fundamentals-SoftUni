function file(path) {

  let file = '';
  let extension = '';
  path = path.split('\\');
  let fileAndExtension = path[path.length - 1];
  fileAndExtension = fileAndExtension.split('.');

  if (fileAndExtension.length >= 3) {

    extension = fileAndExtension.pop();
    file = fileAndExtension.join('.');

  }


  else {

    extension = fileAndExtension[1];
    file = fileAndExtension[0];

  }

  console.log(`File name: ${file}`);
  console.log(`File extension: ${extension}`);

}

file('Data-Structures\\template.bak.pptx');