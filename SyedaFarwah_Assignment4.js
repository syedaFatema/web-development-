document.addEventListener('DOMContentLoaded', (event) => {
    const draggable = document.getElementById('draggableImage');
    const dropzones = document.querySelectorAll('.dropzone');

    draggable.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', this.id);
        e.dataTransfer.effectAllowed = 'move';
        this.classList.add('dragged');
    });

    draggable.addEventListener('dragend', function(e) {
        this.classList.remove('dragged');
    });

    dropzones.forEach(function(dropzone) {
        dropzone.addEventListener('dragover', function(e) {
            e.preventDefault();
            dropzone.classList.add('active');
        });

        dropzone.addEventListener('drop', function(e) {
            e.preventDefault();
            dropzone.classList.remove('active');
            dropzone.classList.add('filled');

            // Ensure the draggable element is removed from its old container
            if (draggable.parentElement !== dropzone) {
                draggable.parentElement.removeChild(draggable);
                dropzone.appendChild(draggable);

                // Reset position to default
                draggable.style.position = 'relative';
                draggable.style.left = '';
                draggable.style.top = '';
            }
        });

        dropzone.addEventListener('dragenter', function(e) {
            this.classList.add('active');
        });

        dropzone.addEventListener('dragleave', function(e) {
            this.classList.remove('active');
        });
    });
});
