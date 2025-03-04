function downloadReel() {
    let url = document.getElementById('reelUrl').value;
    if (!url) {
        document.getElementById('status').innerHTML = 'Please enter a valid URL!';
        return;
    }

    document.getElementById('status').innerHTML = 'Processing...';

    fetch(`/api/download.php?url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = data.download_link;
            } else {
                document.getElementById('status').innerHTML = 'Failed to fetch the Reel!';
            }
        })
        .catch(error => {
            document.getElementById('status').innerHTML = 'Server error!';
            console.error(error);
        });
}

