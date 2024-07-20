(function() {
  const isWorkspace = !vscode.context.configuration().workspace.uri;
  const watermark = document.querySelector(".editor-group-watermark>.letterpress");
  if(!isWorkspace && watermark){
    document.body.classList.add("custom-isWorkspace");
  }
})();
