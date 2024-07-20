setTimeout(() => {
  console.log("custom-js Loaded!");
  const isWorkspace = !vscode.context.configuration()?.workspace?.uri;
  console.log("custom-js isWorkspace:",isWorkspace);
  if(!isWorkspace){
    document.body.classList.add("custom-isWorkspace");
  }
}, 1000);
