export const forceDownloadCV = (e) => {
    if (e) e.preventDefault();
    
    // Path to your CV inside the public directory
    const fileUrl = '/Chaitanya_CV.pdf'; // Adjust name based on actual copied PDF if different
    const fileName = 'Chaitanya_CV.pdf';

    fetch(fileUrl)
        .then(response => {
            if (!response.ok) throw new Error('File not found');
            return response.blob();
        })
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = fileName;
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);
        })
        .catch(error => {
            console.error('Error downloading the CV:', error);
            // Fallback
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
};
