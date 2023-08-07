function handleFileUpload() {
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");
    
    // Check if the browser supports the File API
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        const files = fileInput.files;
        for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const fileType = file.type;
        const fileSize = file.size;
    
        // Display file information in the fileList div
        const fileInfo = document.createElement("p");
        fileInfo.textContent = `${fileName} (${fileType}) - ${formatFileSize(fileSize)}`;
        fileList.appendChild(fileInfo);
        }
    } else {
        alert("File API not supported. Please use a modern browser.");
    }
    } 
    
    function formatFileSize(size) {
    if (size < 1024) {
        return size + " bytes";
    } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + " KB";
    } else {
      return (size / (1024 * 1024)).toFixed(2) + " MB";
    }
}